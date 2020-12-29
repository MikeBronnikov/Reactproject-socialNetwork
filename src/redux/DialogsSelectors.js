import { createSelector } from "reselect"

export const getDialogs = state => state.dialogsPage.dialogs
export const getMessages = state => state.dialogsPage.messages
export const getMessagesReselector = createSelector(getMessages, (messages)=>{return messages.filter(u=>true)})
