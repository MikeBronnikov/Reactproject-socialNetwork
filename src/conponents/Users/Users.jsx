import React from 'react';
import styles from "./Users.module.css";
import PagesLine from '../../common/pagesLine/PagesLine';
import SizeSelector from './sizeSelector/SizeSelector';
import ErrorWindow from '../../common/errorWindow/ErrorWindow'

import User from './User/User';
import { withErrorBoundary } from '../../hoc/wuthErrorBoundary';

let Users = (props) => {

    return <div className={styles.usersWrapper}>
        <PagesLine getUsers={props.getUsers} totalItemsCount={props.totalUsersCount} 
        currentPage={props.currentPage} pageSize={props.pageSize}/>
        <div>
        </div>
        {
            props.users.map(u => <User {...props} {...u}/>)
        }
        <SizeSelector setPageSize={props.setPageSize} pageSize={props.pageSize}/>
        {props.error && <ErrorWindow />}
    </div>
}

export default withErrorBoundary(Users);

