// Select links from published metadata once, without parsing article bodies again.
const normalize = value => String(value || '').normalize('NFC').toLocaleLowerCase('vi').replace(/\s+/g, ' ').trim();
const generic = new Set(['bài học', 'bài tập', 'đề thi', 'đề kiểm tra', 'đề luyện tập', 'đề bồi dưỡng', 'học sinh giỏi', 'ôn tập', 'ôn thi', 'thi vào 10', 'thpt', 'thcs', 'tiểu học', 'kiến thức', 'giáo dục', 'tài liệu', 'phương pháp giải']);
const isTopic = (tag, category) => tag !== category && !generic.has(tag) && !/^(?:lớp|toán|toán học|vật lí|vật lý|lý|lí|hóa|hóa học|sinh|sinh học|tin|tin học|ngữ văn|văn|tiếng anh|tiếng việt|toán thcs|toán thpt)(?:\s+\d+)?$/.test(tag) && !/^(?:ts\.|ths\.|pgs\.|gs\.)/.test(tag);

export function createPostLinker(posts) {
 const groups = new Map(), frequency = new Map();
 for (const post of posts) {
  const category = normalize(post.category);
  const topics = new Set((post.tags || []).map(normalize).filter(tag => isTopic(tag, category)));
  const entry = {post, topics, title: ' ' + normalize(post.title).replace(/[^\p{L}\p{N}\s]/gu, ' ') + ' '};
  if (!groups.has(category)) groups.set(category, []);
  groups.get(category).push(entry);
  for (const tag of topics) frequency.set(category + ':' + tag, (frequency.get(category + ':' + tag) || 0) + 1);
 }
 // A tag must describe a topic appearing in at least one article title.
 // This excludes publisher/collection labels from semantic matching.
 for (const group of groups.values()) {
  const titles = group.map(item => item.title).join('\n');
  for (const entry of group) for (const tag of entry.topics) {
   if (!titles.includes(' ' + tag + ' ')) entry.topics.delete(tag);
  }
 }
 return (post, limit = 6) => {
  const category = normalize(post.category), group = groups.get(category) || [];
  const source = group.find(item => item.post.slug === post.slug);
  if (!source) return {reading: [], related: []};
  const seen = new Set([post.slug]);
  const ranked = [];
  for (const target of group) {
   const candidate = target.post;
   if (seen.has(candidate.slug)) continue;
   seen.add(candidate.slug);
   let topicScore = 0;
   for (const tag of new Set([...source.topics, ...target.topics])) {
    const shared = source.topics.has(tag) && target.topics.has(tag);
    const inTitle = tag.length >= 4 && ((source.topics.has(tag) && target.title.includes(' ' + tag + ' ')) || (target.topics.has(tag) && source.title.includes(' ' + tag + ' ')));
    if (shared || inTitle) topicScore += 4 + Math.log(1 + group.length / frequency.get(category + ':' + tag));
   }
   const sameGrade = post.grade !== undefined && candidate.grade === post.grade;
   const sameType = candidate.type === post.type;
   // A shared grade/type alone must never connect different subjects.
   // Without topic evidence, only use the same grade (or ungraded subtype).
   if (!topicScore && !sameGrade && !(post.grade === undefined && candidate.grade === undefined && sameType)) continue;
   const distance = post.grade !== undefined && candidate.grade !== undefined ? Math.abs(post.grade - candidate.grade) : 0;
   ranked.push({post: candidate, topicScore, score: topicScore + (sameGrade ? 8 : 0) + (sameType ? 1 : 2) - Math.min(distance, 6)});
  }
  ranked.sort((a, b) => b.score - a.score || String(b.post.date || '').localeCompare(String(a.post.date || '')) || a.post.slug.localeCompare(b.post.slug));
  const topical = ranked.filter(item => item.topicScore > 0);
  const reading = topical.slice(0, 3).map(item => item.post);
  const used = new Set(reading.map(item => item.slug));
  return {reading, related: (topical.length ? topical : ranked).filter(item => !used.has(item.post.slug)).slice(0, limit).map(item => item.post)};
 };
}
