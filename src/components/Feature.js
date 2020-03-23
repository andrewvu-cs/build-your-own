import React from 'react'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'
import styles from './Feature.module.scss'

const Feature = () => {
    return (
        <div className={styles.wrapper}>
            <FeatureImage/>
            <FeatureText/>
        </div>
    )
}

export default Feature
