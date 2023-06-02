import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import { AppContextProvider } from '@infra/utils/Context/provider'
import Routers from './routers'
import GlobalStyle from '@infra/styles/GlobalStyle'
import { theme } from '@infra/styles/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Routers />
        <GlobalStyle />
      </ThemeProvider>
    </AppContextProvider>
  </StrictMode>
)