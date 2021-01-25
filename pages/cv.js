import React from 'react'

// DEPENDENCIES
import {useGetUser} from '@/actions/user'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const cv = () => {
    const {data, loading} = useGetUser()

        return (
            <BaseLayout
                user={data}
                loading={loading}
            >
                <BasePage>
                    <h1>CV Pages</h1>
                </BasePage>
            </BaseLayout>
        )
}

export default cv