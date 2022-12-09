import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { User } from './types'
import UserDisplay from './components/UserDisplay'
import './index.css'
import { useQuery } from 'urql'
import { GetUSersDocument } from './graphql/generated'

function App() {
  const [results] = useQuery({
    query: GetUSersDocument,
  })

  return (
    <div className='bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll'>
      {results.data?.users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  )
}

export default App
