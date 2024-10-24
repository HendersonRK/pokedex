import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/DefaultTheme.ts'
import { GlobalStyle } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router.tsx'


export function App() {  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />      
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
