import { useReducer } from 'react'

const initialMenuState = {
  isOpen: false,
}

const menuReducer = (state, action) => {
  if (action.type === 'TOGGLE_MENU') {
    return { ...state, isOpen: !state.isOpen }
  }
  if (action.type === 'CLOSE_MENU') {
    return { ...state, isOpen: false }
  }
  return state
}

export const useMenu = () => {
  const [state, dispatch] = useReducer(menuReducer, initialMenuState)

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }

  const closeMenu = () => {
    dispatch({ type: 'CLOSE_MENU' })
  }

  return { isOpen: state.isOpen, toggleMenu, closeMenu }
}