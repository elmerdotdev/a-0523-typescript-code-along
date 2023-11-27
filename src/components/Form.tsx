import { useState } from 'react'

const Form = () => {
  const [username, setUsername] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setUsername('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('SUBMITTED!')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Log in</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}

export default Form