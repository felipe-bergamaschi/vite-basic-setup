import { Fragment } from 'react'
import { useGetAxiosAxios } from '../query'

import '../styles/App.css'

export default function App() {
  const { data, isLoading } = useGetAxiosAxios()

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <Fragment>
      <h1> Repo: {data?.data.name}</h1>

      <p className="read-the-docs">
        {data?.data.description}
      </p>

      <strong>👀 {data?.data.subscribers_count}</strong>{' '}
      <strong>✨ {data?.data.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.data.forks_count}</strong>
    </Fragment>
  )
}
