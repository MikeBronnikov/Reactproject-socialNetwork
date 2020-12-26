import { connect } from 'react-redux';
import React from 'react'
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const DialogsContainer = props =>  <Dialogs {...props}/> 

export default compose(
    withAuthRedirect,
    connect(mapStateToProps))(DialogsContainer) 