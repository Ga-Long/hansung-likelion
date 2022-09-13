//const input = prompt();
// if(!input){ //input이 문자열인데 있으면 true 없으면 false, input이 false이면
//     console.log("입력값이 없습니다.");
// }
// else{
//     console.log(input);
// }
//console.log(input || "입력값이 없습니다."); //input이 true면 input 출력, false면 뒤에꺼 실행


const me={
    name:"이가현",
    age:23,
    militaryState: false,
};
//비구조화 할당
// const {name, age} = me; //const name = me.name;
// console.log(name);

const{militaryState, ...another} = me; //militaryState 빼고 나머지 정보
console.log(another);

const number=[0,1,2,3,4,5,6];
const[zero, ...rest]=number; //zero에 해당되는거 빼고 나머지 정보
console.log(rest);