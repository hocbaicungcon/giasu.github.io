const removed=['Tin học','Khoa học','Lịch sử và Địa lí','Đạo đức','Âm nhạc','Mĩ thuật','Mỹ thuật','Giáo dục thể chất','Tiếng Việt','Tự nhiên và Xã hội'];
export function normalizeCategory(value){const v=value.trim().normalize('NFC'),key=v.toLocaleLowerCase('vi');if(key==='tiếng anh')return 'Ngoại ngữ';return removed.some(s=>s.toLocaleLowerCase('vi')===key)?'Các môn khác':v;}
export const subjectGroups=[
 {label:'Toán',subjects:['Toán học']},{label:'Văn',subjects:['Ngữ văn']},
 {label:'Anh',subjects:['Ngoại ngữ']},{label:'Lí',subjects:['Vật lí']},
 {label:'Hoá',subjects:['Hóa học']},{label:'Sinh',subjects:['Sinh học']},
 {label:'Tin',subjects:['CNTT']},{label:'Sử',subjects:['Lịch sử']},
 {label:'Địa',subjects:['Địa lí']},{label:'Các môn khác',subjects:['Các môn khác']}
];
export function matchesSubject(category,selection){const group=subjectGroups.find(g=>g.label===selection);return !selection||(group?group.subjects.includes(category):category===normalizeCategory(selection));}
