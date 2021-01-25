import useSWR from 'swr'

// dependecies
import {fetcher} from '@/actions/index'

export const useGetUser = () => {
  const {data, error, ...rest} = useSWR('/api/v1/me', fetcher)
  return {data, error, loading: !error && !data, ...rest}
}