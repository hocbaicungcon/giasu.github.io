export function examMetadata(meta,file){
 const fail=message=>{throw Error(`${file}: ${message}`);};
 const group=meta.exam_group??'việt nam';
 if(!['việt nam','quốc tế'].includes(group))fail('exam_group phải là việt nam hoặc quốc tế');
 const language=meta.language??'vi';
 if(!['vi','en','vi-en'].includes(language))fail('language phải là vi, en hoặc vi-en');
 const mode=meta.exam?.mode??'auto';
 if(!['auto','self-review'].includes(mode))fail('exam.mode phải là auto hoặc self-review');
 for(const key of ['competition','level'])if(meta[key]!==undefined&&(typeof meta[key]!=='string'||!meta[key].trim()))fail(`${key} phải là chuỗi không rỗng`);
 if(group==='quốc tế'&&!meta.competition)fail('Đề quốc tế cần competition (tên kỳ thi)');
 if(meta.year!==undefined&&(!Number.isInteger(meta.year)||meta.year<1900||meta.year>2100))fail('year phải là năm từ 1900 đến 2100');
 return {exam_group:group,competition:meta.competition?.trim()||'',level:meta.level?.trim()||'',year:meta.year??null,language,mode,tags:meta.tags??[]};
}
