import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/portfolios">
                <a>Portfolios</a>
            </Link>
            <Link href="/cv">
                <a>CV</a>
            </Link>
            <Link href="/blogs">
                <a>Blogs</a>
            </Link>
        </React.Fragment>
    )
}

export default Header
