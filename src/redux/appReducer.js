import { getUserAuth } from "./authReducer";

const INITIALIZED_SUCCEED='INITIALIZED_SUCCEED'

let initialState = {
  isInitialized: false
};



const appReducer = (state = initialState, action) => {
    switch (action.type) {
    case INITIALIZED_SUCCEED :{
        return {...state, isInitialized: true}
    }
    default:
        return state
     
    }
};
const initializedSucceed=()=> 
({type: INITIALIZED_SUCCEED})

export const initializeApp=()=>(dispatch)=>{
let promise = dispatch(getUserAuth())
promise.then(()=>{dispatch(initializedSucceed())})
}

export default appReducer;