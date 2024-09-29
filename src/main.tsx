import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from '@/App.tsx'
import { Provider } from 'react-redux'
import { store } from '@/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraProvider>
  </Provider>
)
