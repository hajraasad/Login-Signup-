const initial=10;//initial is set to 0

const changeNum=(state=initial,action)=>{
    switch(action.type){
        case"increment": return state+action.payload;
        case "decrement": return state-1;
        default: return state;
    }

}
export default changeNum;