import useSWR from 'swr'

export const fetcher = (url) => 
  fetch(url).then(async res => {
    const data = await res.json()

    if (res.status !== 200) {
      return Promise.reject(data)
    }
    else{
      return data
    }
  })

export const useGetPosts = () => {
  // destructure
  const {data, error, ...rest} =  useSWR('/api/v1/post', fetcher)
  return {data, error, loading: !data && !error, ...rest}
}

export const useGetPostsById = (id) => {
  // destructure
  const {data, error, ...rest} =  useSWR(id ? `/api/v1/post/${id}` : null, fetcher)
  return {data, error, loading: !data && !error, ...rest}
}