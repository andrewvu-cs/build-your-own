import React from 'react'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'
import styles from './Feature.module.scss'

const Feature = ({imgUrl, copy, clickedNext, clickedPrev}) => {
    return (
        <div className={styles.wrapper}>
            <FeatureImage imgUrl/>
            <FeatureText copy={copy}/>
        
        </div>
    )
}

export default Feature
