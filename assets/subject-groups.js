export const subjectGroups=[
 {label:'Toán',subjects:['Toán học']},
 {label:'Văn',subjects:['Ngữ văn','Tiếng Việt']},
 {label:'Anh',subjects:['Tiếng Anh']},
 {label:'Lí',subjects:['Vật lí']},
 {label:'Hoá',subjects:['Hóa học']},
 {label:'Sinh',subjects:['Sinh học']},
 {label:'Tin',subjects:['Tin học','CNTT']},
 {label:'Sử',subjects:['Lịch sử','Lịch sử và Địa lí']},
 {label:'Địa',subjects:['Địa lí','Lịch sử và Địa lí']},
 {label:'Các môn khác',subjects:[]}
];
export function matchesSubject(category,selection){
 const group=subjectGroups.find(g=>g.label===selection);
 if(!group)return !selection||category===selection;
 if(group.subjects.length)return group.subjects.includes(category);
 return category!=='Giải trí'&&!subjectGroups.some(g=>g.subjects.includes(category));
}
