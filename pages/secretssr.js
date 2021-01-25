// COMPONENTS
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import {authorizeUser, withAuth} from '@/utils/auth0'
 
const SecretSSR = ({user, title}) => {

  return (
      <BaseLayout
          user={user}
          loading={false}
      >
          <BasePage>
              <h1>Hellow {user ? user.name : 'Anonimous'}</h1>
              <h2>{title}</h2>
          </BasePage>
      </BaseLayout>
  )
}

// SERVER SIDE PROCESSING
// export const getServerSideProps = async ({req, res}) => {
//   const user = await authorizeUser(req, res)

//   return {
//     props: {user}
//   }
// }

// ex. for pushing callback into ssr
const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({title: 'My new title from callback'})
    }, 500)
  })
}	

export const getServerSideProps = withAuth(async ({req, res}, user) => {
  const title = await getTitle();
  return title;
});

export default SecretSSR