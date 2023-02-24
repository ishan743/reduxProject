const initialstate=[];
const AddRemove=(state=initialstate,action)=>{
    switch(action.type){
        case "Add":
            // console.log("ADD reducers called");
            return [...state,action.payload];
            // return state+action.payload;
        case "Remove":
            // console.log("REMove reducer callsed");
            return state.filter((ele)=>ele.title!=action.payload.title);
            // return state-action.payload;
        default:
            // console.log("DEfault caleld");
            return state;
    }
}
export default AddRemove;