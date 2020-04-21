import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './rootReducer'
import { incrementClick } from './features/Click/clickSlice'

interface AppProps {

}

const App: FC<AppProps> = () => {
  const dispatch = useDispatch()
  const { clicks } = useSelector(
    (state: RootState) => state.clickDisplay
  )
  return (
    <Router>
      <button onClick={() => { setIncrementClick(7) }}>Click me</button>
      <span>{clicks}</span>
    </Router> 
  )

  function setIncrementClick(click: number){
    dispatch(incrementClick({ click }))
  }

}

export default App;
