import React from 'react'
import styles from './PrimaryButtonList.module.scss';
import PrimaryButton from './PrimaryButton'

const PrimaryButtonList = () => {
    return (
        <div className={styles.PrimaryButtonList}>
            <PrimaryButton>Prev</PrimaryButton>
            <PrimaryButton>Next</PrimaryButton>
        </div>
    )
}

export default PrimaryButtonList
