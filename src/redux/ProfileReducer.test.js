import profileReducer, { addPost, deletePost } from "./ProfileReducer"

let state = {
    posts: [
        {
            id: 1,
            isAuthor: false,
            text: 'Lorem lor sit amet consece error obcaecati!',
            likesCount: 12,
            avatarSrc: 'https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg'
        },
        {
            id: 2,
            isAuthor: false,
            text: 'Привет DГубка Бобчанский!',
            likesCount: 21,
            avatarSrc: 'https://pbs.twimg.com/media/CWN6WdbWEAAJw8h.jpg:large',
        }
    ]
}

it('new post should be added', () => {
    let action = addPost('hi-hi');
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)

})

it('decrement after deleting', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)

})

