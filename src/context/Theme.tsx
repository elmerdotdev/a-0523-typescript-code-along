import { createContext, useReducer } from 'react'

const COLORS = {
  light: '255,255,255',
  dark: '0,0,0'
}

const INITIAL = {
  theme: COLORS.light,
  brightness: 1
}

type ThemeType = {
  theme: string,
  brightness: number
}

type ActionType = {
  type: "COLOR_CHANGE",
  payload: number
}

export const ThemeContext = createContext<{
  state: ThemeType;
  dispatch: React.Dispatch<ActionType>
}>({
  state: INITIAL,
  dispatch: () => {}
})

const reducer = (state: ThemeType, action: ActionType) => {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return {
        ...state,
        theme: state.theme === COLORS.light ? COLORS.dark : COLORS.light,
        brightness: action.payload
      }
    default:
      return state
  }
}

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}