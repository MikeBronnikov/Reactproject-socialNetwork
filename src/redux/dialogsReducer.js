let initialState = {
    dialogs: [{ id: 1, name: 'Anna', avatarSrc: 'https://fsd.multiurok.ru/viewImage.php?image=http://s.zefirka.net/images/2017-05-01/kak-chelovek-priruchal-i-odomashnival-zhivotnyx/kak-chelovek-priruchal-i-odomashnival-zhivotnyx-6.png' },
            { id: 2, name: 'Lola', avatarSrc: 'https://yt3.ggpht.com/a/AATXAJxJkwo0-2wjdP6A3BWczaSxZcfEaed-Z7UPk1USGQ=s900-c-k-c0xffffffff-no-rj-mo' },
            { id: 3, name: 'Adrian', avatarSrc: 'https://montessoriself.ru/wp-content/uploads/2016/05/m17.jpg' }],
    messages: ['hello'
            ],
    messageTexting: ''
}
const dialogsReducer = (state= initialState, action) =>{
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT':{
            let copyState = {...state};
            copyState.messageTexting = action.text;
            return copyState}
    case 'SEND-MESSAGE': {
    let messageObject = {
        text: state.messageTexting,
        sender: 'user' }
    let copyState={...state};
    copyState.messages=[...state.messages]//!
    copyState.messages.push(messageObject) 
    return copyState;}
        default:
            return state
    }
}
export const updateMessageTextActionCreator = (text) => 
    ({ type: 'UPDATE-MESSAGE-TEXT',
        text: text
    })

export default dialogsReducer