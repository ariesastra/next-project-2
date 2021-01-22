import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

// Dependencies
import {useGetPosts} from '@/actions'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const portfolios = () => {
    const {data, error, loading} = useGetPosts()

    const renderPosts = (posts) => {
        return posts.map(post => 
            <li key={post.id}>
                <h3>
                    <Link as={`/portfolios/${post.id}`} href='/portfolios/[id]'>
                        <a>
                            {post.title}
                        </a>
                    </Link>
                </h3>
            </li>
        )
    }

    return (
        <BaseLayout>
        <BasePage>
            <h1>Portfolio Pages</h1>
            {
                loading
                && <p>loading...</p>
            }
            {/* get data from _app.js using props */}
            { 
                data 
                && (
                    <>
                        <ul> {renderPosts(data)}</ul>
                    </>
                )
            }
            {
                error &&  <div className='alert alert-danger'>{error.message}</div>
            }
        {/* Styling JSX */}
        <style jsx>
        {`
            ol > li > h3{
                font-size: 20px
            }
            ol > li > p {
                font-size: 14px
            }
        `}
        </style>
        </BasePage>
        </BaseLayout>
    ) 
}

export default portfolios