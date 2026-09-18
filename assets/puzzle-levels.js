export const riverLevels=[
 {name:'1 · Làm quen',start:{person:0,wolf:1,goat:0,cabbage:1},limit:3,hints:true,description:'Chỉ còn một hành khách cần sang sông. Hoàn thành trong 3 lượt.'},
 {name:'2 · Đón cả nhóm',start:{person:0,wolf:0,goat:0,cabbage:0},limit:null,hints:true,description:'Đưa cả ba sang sông. Không giới hạn lượt, có nhắc khi chọn nguy hiểm.'},
 {name:'3 · Có kế hoạch',start:{person:0,wolf:0,goat:0,cabbage:0},limit:9,hints:false,description:'Hoàn thành trong tối đa 9 lượt. Tự kiểm tra những ai bị bỏ lại nhé.'},
 {name:'4 · Chuyên gia',start:{person:0,wolf:0,goat:0,cabbage:0},limit:7,hints:false,description:'Chỉ có 7 lượt — mỗi chuyến đi đều quan trọng.'}
];
export const waterLevels=[
 {name:'1 · Làm quen',target:2,mode:'total',limit:null,description:'Giữ lại tổng cộng 2 lít trong hai can. Không giới hạn lượt.'},
 {name:'2 · Đong 7 lít',target:7,mode:'total',limit:null,description:'Dùng hai can 5 lít và 3 lít để có tổng cộng đúng 7 lít.'},
 {name:'3 · Từng giọt',target:1,mode:'single',limit:6,description:'Có đúng 1 lít trong một can, trong tối đa 6 lượt.'},
 {name:'4 · Chính xác',target:4,mode:'single',limit:6,description:'Có đúng 4 lít trong một can, trong tối đa 6 lượt.'},
 {name:'5 · Chuyên gia 7 lít',target:7,mode:'total',limit:5,description:'Giữ tổng cộng đúng 7 lít trong hai can, chỉ với 5 lượt.'}
];
export function waterMove(state,action,index){
 const next=[...state],caps=[5,3];
 if(action==='fill')next[index]=caps[index];
 else if(action==='empty')next[index]=0;
 else if(action==='pour'){const other=1-index,amount=Math.min(next[index],caps[other]-next[other]);next[index]-=amount;next[other]+=amount;}
 return {state:next,changed:next.some((n,i)=>n!==state[i])};
}
export const waterWon=(state,level)=>level.mode==='total'?state[0]+state[1]===level.target:state.includes(level.target);
