import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    text: 'Lorem lor sit amet consece error obcaecati!',
                    likesCount: 12,
                    avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
                },
                {
                    id: 2,
                    text: 'Привет DГубка Бобчанский!',
                    likesCount: 21,
                    avatarSrc: 'https://pbs.twimg.com/media/CWN6WdbWEAAJw8h.jpg:large',
                },
            ],
            posttext: '',
        },
        dialogsPage: {
            dialogs: [{ id: 1, name: 'Anna', avatarSrc: 'https://fsd.multiurok.ru/viewImage.php?image=http://s.zefirka.net/images/2017-05-01/kak-chelovek-priruchal-i-odomashnival-zhivotnyx/kak-chelovek-priruchal-i-odomashnival-zhivotnyx-6.png' },
            { id: 2, name: 'Lola', avatarSrc: 'https://yt3.ggpht.com/a/AATXAJxJkwo0-2wjdP6A3BWczaSxZcfEaed-Z7UPk1USGQ=s900-c-k-c0xffffffff-no-rj-mo' },
            { id: 3, name: 'Adrian', avatarSrc: 'https://montessoriself.ru/wp-content/uploads/2016/05/m17.jpg' }],
            messages: [
            ],
            messageTexting: ''
        },
        sideBarPage: { 
            friends: [{
            name: 'Skwidvard',
            avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg',
            isOnline: true,
            index: 0,
        },
        {
            name: 'Patrik',
            avatarSrc: 'https://i.pinimg.com/736x/9e/d9/88/9ed98867ada260f6113e3a62c90b7159.jpg',
            isOnline: false,
            index : 1
        },
        ]
    }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;