import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react'
type Props = {
  children: ReactNode
}
type StateValues = {
  isSidebarOpen: boolean
}
type StateModifiers = {
  openSidebar: () => void
  closeSidebar: () => void
}
const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
}
const initialState = { isSidebarOpen: false }

export type State = StateValues & StateModifiers

const apiContext = createContext<State>({
  ...initialState,
  ...stateModifiers,
})

type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' }

function reducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, isSidebarOpen: true }
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false }
    default:
      return state
  }
}

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })

  const value = useMemo(
    () => ({ ...state, openSidebar, closeSidebar }),
    [state.isSidebarOpen]
  )
  return <apiContext.Provider value={value}>{children}</apiContext.Provider>
}
export const useApiContext = () => useContext(apiContext)
export default ContextProvider
