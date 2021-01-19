import React, { Component } from 'react'
import axios from 'axios'
// import Link from 'next/link'
import {Link} from '../routes'

// COMPONENTS
import BaseLayout from '../components/layout/BaseLayout'

export default class portfolios extends Component {

    static async getInitialProps(){
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

    render() {
        const {posts} = this.props

        const {appProps} = this.props
        return (
            <BaseLayout>
                <h1>Portfolio Pages</h1>
                {/* get data from _app.js using props */}
                <h2>{appProps}</h2>
                <ol>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>
                                <Link route={`/portfolios/${post.id}`}>
                                    <a>
                                        {post.title}
                                    </a>
                                </Link>
                            </h3>
                        </li>
                    ))}
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
            </BaseLayout>
        )
    }
}
