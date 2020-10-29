const dialogsReducer = (state, action) =>{
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT':
            state.messageTexting = action.text;
            return state
    case 'SEND-MESSAGE': 
    let messageObject = {
        text: state.messageTexting,
        sender: 'user'
    }
    state.messages.push(messageObject) 
    return state;
        default:
            return state
    }
}
export const updateMessageTextActionCreator = (text) => 
    ({ type: 'UPDATE-MESSAGE-TEXT',
        text: text
    })

export default dialogsReducer