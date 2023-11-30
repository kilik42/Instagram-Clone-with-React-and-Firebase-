import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const styles = {
  global: (props) => ({
    body: {
      bg:mode('gray.50', 'gray.800')(props),
    },
  }),
}

// 2. Add your color mode config



const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme ={theme}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)