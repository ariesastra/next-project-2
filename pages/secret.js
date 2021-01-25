import React, { Component } from 'react'

// DEPENDENCIES

// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
 
const Secret = ({user, loading}) => {
  return (
      <BaseLayout
          user={user}
          loading={loading}
      >
          <BasePage>
              <h1>Hellow {user.name}</h1>
          </BasePage>
      </BaseLayout>
  )
}

// HIGH ORDER COMPONENT - HOC
/*
Simple function that takes a component and returns new
component with some extended functionality
*/
// const withAuth = (Component) => props => <Component title="Hellow" {...props} />

export default withAuth(Secret)()