import React from 'react'

// COMPONENTS
import Header from '../shared/Header'

const BaseLayout = (props) => {
    return (
        <>
            <Header />
            <h2>Base Layout Components</h2>   
            {props.children}
        </>
    )
}

export default BaseLayout
