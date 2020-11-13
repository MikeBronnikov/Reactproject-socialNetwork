import {connect} from 'react-redux';
import MyFriends from './MyFriends'

let mapStateToProps =(state)=>{
    return{
        friends: state.friendsPage.friends
    }

}
let mapdispatchToProps=(dispatch)=>{
    return{

    }
}
const MyFriendscontainer = connect(mapStateToProps, mapdispatchToProps)(MyFriends)
export default MyFriendscontainer;