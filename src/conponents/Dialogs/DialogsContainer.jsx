import { connect } from 'react-redux';
import Dialogs from './Dialogs';
//import {updateMessageTextActionCreator} from '../../../redux/dialogsReducer'
let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages

    }
    
debugger
}
let mapDispatchToProps = (dispatch) =>{
    return{
    
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;