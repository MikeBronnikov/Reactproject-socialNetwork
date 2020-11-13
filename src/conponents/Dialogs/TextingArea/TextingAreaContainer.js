import { connect } from 'react-redux';
import TextingArea from './TextingArea';
import {updateMessageTextActionCreator} from '../../../redux/dialogsReducer'
let mapStateToProps = (state) =>{
    return{
    messageTexting: state.messageTexting

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
    addMessage: ()=>{
        dispatch({type:'SEND-MESSAGE'})
     },
     updatemessagetext: (text)=>{
         dispatch(updateMessageTextActionCreator(text))
    },
}
}

const TextingAreaContainer = connect(mapStateToProps, mapDispatchToProps)(TextingArea)

export default TextingAreaContainer;