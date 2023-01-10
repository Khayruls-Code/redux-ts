import React, {useState} from 'react'

import { useAction } from '../hooks/useAction'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const {searchRepositories} = useAction()
  const searchRepo = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }
  return (
    <div>
      <form onSubmit={searchRepo}>
        <input value={term} onChange={(e)=> setTerm(e.target.value)} type="text" />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList