import { useRef } from 'react'

const UserForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('FORM WORKS!', inputRef.current?.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default UserForm