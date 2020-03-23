import React from 'react'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'
import styles from './Feature.module.scss'
import PrimaryButtonList from './PrimaryButtonList'

const Feature = () => {
    return (
        <div className={styles.wrapper}>
            <FeatureImage/>
            <FeatureText/>
            <PrimaryButtonList/>
        </div>
    )
}

export default Feature
