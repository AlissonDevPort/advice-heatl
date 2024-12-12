import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './patterns/header/HeaderPattern'
import SideBarComponent from './patterns/sidebar/SideBarPattern'
import DoctorsAndCalendarGroup from './components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderComponent />
    <SideBarComponent isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
      <DoctorsAndCalendarGroup />
    </>
  )
}

export default App
