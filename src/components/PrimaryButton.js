import React from 'react'
import styles from './PrimaryButton.module.scss'

const PrimaryButton = (props) => {
    return (
        <button onClick={props.clicked} className={styles.PrimaryButton}>
            {props.children}
        </button>
        
    )
}

export default PrimaryButton
