import { connect } from 'react-redux';
import React from 'react'
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogs, getMessagesReselector } from '../../redux/DialogsSelectors';
let mapStateToProps = (state) =>{
    return{
        dialogs: getDialogs(state),
        messages: getMessagesReselector(state)
    }
}
const DialogsContainer = props =>  <Dialogs {...props}/> 

export default compose(
    withAuthRedirect,
    connect(mapStateToProps))(DialogsContainer) 