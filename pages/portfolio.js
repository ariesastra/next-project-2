import React, { Component } from 'react'
import axios from 'axios'

// COMPONENT
import BaseLayout from '../components/layout/BaseLayout'

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
    return { data: post }
}

  render() {
    const { data } = this.props

    return (
      <BaseLayout>
        <h1>Im Portfolio Page</h1>
        <h2>{data.title}</h2>
        <p>
          {data.body}
        </p>
      </BaseLayout>
    )
  }
}

export default Portfolio