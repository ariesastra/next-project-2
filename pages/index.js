import React from 'react'

// COMPONENTS
import BaseLayout from '../components/layout/BaseLayout'

// STYLE
import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  render(){
    return(
      <BaseLayout>
        <Container>
          <h1>This is Index</h1>
        </Container>
      </BaseLayout>
    )
  }
}

export default Index