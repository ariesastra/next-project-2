import React, { Component } from 'react'

// DEPENDENCIES
import {useGetUser} from '@/actions/user'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const about = () => {
    const {loading, data} = useGetUser()
    return (
        <BaseLayout
            user={data}
            loading={loading}
        >
            <BasePage>
                <h1>About Page</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default about