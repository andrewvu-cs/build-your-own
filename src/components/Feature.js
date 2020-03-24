import React from 'react'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'
import styles from './Feature.module.scss'
import PrimaryButtonList from './PrimaryButtonList'

const Feature = ({imgUrl, copy}) => {
    return (
        <div className={styles.wrapper}>
            <FeatureImage imgUrl/>
            <FeatureText copy={copy}/>
            <PrimaryButtonList/>
        </div>
    )
}

export default Feature
