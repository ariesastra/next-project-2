import React from 'react'

// DEPENDENCIES
import {useGetUser} from '@/actions/user'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const blogs = () => {
    const {data, loading} = useGetUser()
    return (
        <BaseLayout
            user={data}
            loading={loading}
        >
            <BasePage>
                <h1>Blog Pages</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default blogs