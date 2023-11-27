import { useState, useEffect } from 'react'
import Welcome from "./components/Welcome"
import Parent from './components/Parent'
import HobbyItem from './components/HobbyItem'
import Form from './components/Form'
import Posts from './components/Posts'
import UserForm from './components/UserForm'
import { ThemeProvider } from './context/Theme'
import Settings from './components/Settings'

type HobbyType = {
  id: number
  name: string
}

const App: React.FC = () => {
  const [firstname, setFirstname] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [hobbies, setHobbies] = useState<HobbyType[]>([])

  useEffect(() => {
    setFirstname('John')
    setAge(30)
    setHobbies([
      {
        id: 1,
        name: 'drawing'
      },
      {
        id: 2,
        name: 'swimming'
      }
    ])
  }, [])
  

  return (
    <ThemeProvider>
      <div>
        <Welcome firstname={firstname} age={age} />
        <Parent>
          <h2>These are the children</h2>
        </Parent>
        <UserForm />
        <Settings />
        {hobbies.map((hobby) => (
          <HobbyItem key={hobby.id} id={hobby.id} hobby={hobby.name} />
        ))}
        <Form />
        <Posts />
      </div>
    </ThemeProvider>
  )
}

export default App