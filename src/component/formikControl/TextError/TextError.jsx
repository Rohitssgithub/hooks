import React from 'react'
import styles from '../Input.module.scss';

const TextError = (props) => {
    return (
        <div className={styles.errorMsg}>
            {props.children}
        </div>
    )
}

export default TextError
