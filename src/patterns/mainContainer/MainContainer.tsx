import React from 'react'
import { Main } from './styles'

interface MainContainerProps{
    children: any
}

const MainContainer:React.FC<MainContainerProps> = ({children}) => {
  return (
    <Main>
        {children}
    </Main>
  )
}

export default MainContainer