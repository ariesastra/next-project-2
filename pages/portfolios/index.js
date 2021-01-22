import React, {useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const portfolios = ({posts, appProps}) => {
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/api/v1/post')
            const data = await res.json
            // debugger
        }

        getData()
    }, [])

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
            {/* get data from _app.js using props */}
            <ol>
                {renderPosts(posts)}
            </ol>
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

portfolios.getInitialProps = async () => {
    let posts = []
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts = res.data
    } catch (e) {
        console.log(e);
    }
    // SLICE  IS AN ANOTHER WAY TO FILTER DATA FROM ARRAY
    return {posts: posts.slice(0, 10)}
}

export default portfolios