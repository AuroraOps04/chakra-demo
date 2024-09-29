import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from '@/App.tsx'
import { Provider } from 'react-redux'
import { store } from '@/store'
import theme from '@/theme'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraProvider>
  </Provider>
)
