import React from 'react'
import LoadingGif from '../images/gif/1494.gif'
import styles from '../style/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loading}>
           <h4>Books data loading...</h4> 
           <div>
             <img src={LoadingGif} alt=''/>
           </div>   
        </div>
    )
}

export default Loading
