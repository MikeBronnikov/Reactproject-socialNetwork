import React, { useState } from 'react'
import styles from './PagesLine.module.css'

const PagesLine =(props)=>{
    const [portion, setportion] = useState(1)
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let portionCount = pagesCount / portionSize
    let pages = [];
    let onPageClick = (page) =>{ props.getUsers(page, props.pageSize )}
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<a className={i==props.currentPage? styles.active: styles.pageItem} onClick={()=>{onPageClick(i)}}>{i+' '}</a>);
        }
    let forShowArray = pages.slice((portion-1)*portionSize, portion*portionSize);

return (<div className={styles.wrapper}>
    <button onClick={()=>{setportion(portion-1)}} disabled={portion==1? styles.disapear: ''}>Предыдущие</button>
    <div className={styles.pages}>
    {forShowArray}
    </div>
    <button onClick={()=>{setportion(portion+1)}} className={portion==portionCount? styles.disapear: ''}>Следующие</button>
</div>)
}
export default PagesLine