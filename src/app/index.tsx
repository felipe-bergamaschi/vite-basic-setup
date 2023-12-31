import { Fragment } from 'react'
import { useGetAxiosAxios, useGetTanStackQuery } from '../query'

import '../styles/App.css'

export default function App() {
  const { data, isLoading, isError, refetch } = useGetAxiosAxios()

  if (isLoading || !data) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>error...</h1>
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

      <br />
      <br />

      <button onClick={() => refetch()}>Refetch data</button>
    </Fragment>
  )
}
