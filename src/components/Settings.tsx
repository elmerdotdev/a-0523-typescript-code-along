import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import { ColorBrightnessType } from '../types/Types'

const Settings = () => {
  const {state, dispatch} = useContext(ThemeContext)

  const myColor: ColorBrightnessType = {
    color: 'light-50%'
  }

  return (
    <div style={{ backgroundColor: `rgba(${state.theme}, ${state.brightness})` }}>
      <h2 style={{ color: `rgba(${state.theme === '255,255,255' ? '0,0,0' : '255,255,255'})` }}>Current Brightness: {state.brightness} {myColor.color}</h2>
      <button onClick={() => dispatch({ type: 'COLOR_CHANGE', payload: 0.7 })}>Toggle Theme</button>
    </div>
  )
}

export default Settings