import React from 'react'
import {useRouter} from 'next/router'

// Dependencies
import {useGetPostsById} from '@/actions'
import {useGetUser} from '@/actions/user'

// COMPONENT
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

const portfolio = () => {
  const router = useRouter()
  const {data: portfolio, error, loading} = useGetPostsById(router.query.id)
  const {data: dataUser, loading: loadingUser} =useGetUser()

  return (
    <BaseLayout
      user={dataUser}
      loading={loadingUser}
    >
      <BasePage>
        {
          loading && <p>loading...</p>
        }
        {
          error && <div className='alert alert-danger'>{error.message}</div>
        }
        {
          portfolio 
          && 
            <>
              <h1>Im Portfolio Page</h1>
              <h2>{portfolio.title}</h2>
              <p>
                {portfolio.body}
              </p>
            </>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default portfolio