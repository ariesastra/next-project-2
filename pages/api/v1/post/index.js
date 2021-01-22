import {data} from '@/data'

export default function handlePosts(req, res) {
  res.status(200).json(data)
}