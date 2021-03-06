import React from 'react'

// DEPENDECIES
import {useGetUser} from '@/actions/user'

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'

// STYLE
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed'


const Index = () => {
  const ROLES = [
                  'Developer',
                  'Tech Lover',
                  'Team Player',
                  'Creator',
                  'React.js',
                  'Angular',
  ]

  const {data, loading} = useGetUser()

    return(
      <BaseLayout 
        className="cover"
        user={data}
        loading={loading}
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Filip Jerga.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                strings={ROLES}
                typeSpeed={70}
                backSpeed={70}
                backDelay={1000}
                loop
                showCursor
                className="self-typed"
                cursorChar="|"
                >
                </Typed>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
}

export default Index