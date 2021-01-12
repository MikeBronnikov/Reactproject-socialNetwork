import React from 'react'
import styled from 'styled-components'
import PagesLine from '../../common/pagesLine/PagesLine'
import Preloader from '../../common/Preloader'
import Sub from './Sub/Sub'
// const Wrapper = styled.div`
//     display: flex;
//     justify-content: space-around;
//     max-width: 100%;
//     flex-wrap: wrap;
// `;
const Note = styled.div`
margin:50px 0 0 170px;
font-size: 17px;
text-align: justify;
max-width: 55%;
`
const Link=styled.a`
color: #FF69B4;
margin-left: 20px;
cursor: pointer;
text-decoration: underline;
`

const Subscriptions = (props)=>{
    if (props.isFetching) { return (
        <div><Preloader /></div>)}
    if (props.users === 0) { return (
        <Note> <p> У Вас еще нет подписок, найдите интересных Вам людей на странице  
        <Link href="/users">пользователей</Link></p></Note>)}
    
        return (
    <div>
        {props.users.map((user)=><Sub key={user.id} setFollow={props.setFollow} setUnFollow={props.setUnFollow}
        followingInProgress={props.followingInProgress} {...user}/>)}
        <PagesLine getUsers={props.getUsers} totalItemsCount={props.totalUsersCount} 
        currentPage={props.currentPage} pageSize={10} isfriend={true}/>
    </div>
)
}
export default Subscriptions