import {useGetUser} from '@/actions/user'
import Redirect from '@/components/shared/Redirect'
import {isAuthorized} from '@/utils/auth0'

const withAuth = Component => role => {

  return props => {
    const {loading, data} = useGetUser()

    if (loading) {
      return <p>loading...</p>
    }

    if (!data) {
      // Todo: improve return
      return <Redirect to='/api/v1/login'/>
    } else { 
      if (role && !isAuthorized(data, role)) {
        return <Redirect to='/api/v1/login'/>
      }
      return <Component {...props} user={data} loading={loading} title="Heloow from HOC withAuth" />
    }
  }
}

export default withAuth