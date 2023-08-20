import { Fragment } from 'react'
import { useGetAxiosAxios, useGetTanStackQuery } from '../query'

import '../styles/App.css'

export default function App() {
  const { data, isLoading } = useGetAxiosAxios()

  if (isLoading || !data) {
    return <h1>loading...</h1>
  }

  return (
    <Fragment>
      <h1> Repo: {data.name}</h1>

      <p className="read-the-docs">
        {data.description}
      </p>

      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </Fragment>
  )
}
