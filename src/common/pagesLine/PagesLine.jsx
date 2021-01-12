import React, { useState } from 'react'
import styles from './PagesLine.module.css'

const PagesLine =(props)=>{
    const [portion, setportion] = useState(1)
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let portionCount = pagesCount / portionSize
    let pages = [];
    let onPageClick = (page) =>{ props.getUsers(page, props.pageSize, props.isfriend)}
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<span key={i} className={i===props.currentPage? styles.active: styles.pageItem} 
        onClick={()=>{onPageClick(i)}}>{i+' '}</span>);
    }
    let forShowArray = pages.slice((portion-1)*portionSize, portion*portionSize);
console.log(portionCount);
return (<div className={styles.wrapper}>
    <button onClick={()=>{setportion(portion-1)}} disabled={portion === 1}>Предыдущие</button>
    <div className={styles.pages}>
    {forShowArray}
    </div>
    <button disabled= {portionCount <= 1} onClick={()=>{setportion(portion+1)}}>Следующие</button>
</div>)
}
export default PagesLine