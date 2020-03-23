import React from 'react'
import styles from './RadioButton.module.scss'

const RadioButton = ({option}) => {
    return (
        <div>
               <input type="radio" id={option}
                name="size" value={option} className={styles.form_radio}/>
                <label>{option}</label>
        </div>
    )
}

export default RadioButton
