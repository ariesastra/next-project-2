import React, { Component } from 'react'
import {withRouter} from 'next/router'
import axios from 'axios'

// COMPONENT
import BaseLayout from '../../components/layout/BaseLayout'

class Portfolio extends Component {
  static async getInitialProps({query}){
    let post = {}
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
    } catch (e) {
        console.log(e);
    }
    // SLICE  IS AN ANOTHER WAY TO FILTER DATA FROM ARRAY
    return { portfolio: post }
}

  render() {
    const { portfolio } = this.props

    return (
      <BaseLayout>
        <h1>Im Portfolio Page</h1>
        <h2>{portfolio.title}</h2>
        <p>
          {portfolio.body}
        </p>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio)