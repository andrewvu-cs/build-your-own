import React from 'react'
import styles from './PrimaryButtonList.module.scss';
import PrimaryButton from './PrimaryButton'

const PrimaryButtonList = ({clicked, prev}) => {
    return (
        <div className={styles.PrimaryButtonList}>
            <PrimaryButton onClick={prev}>Prev</PrimaryButton>
            <PrimaryButton clicked={clicked}>Next</PrimaryButton>
        </div>
    )
}

export default PrimaryButtonList
