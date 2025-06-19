import { Global } from '@emotion/react'
import { RouterProvider } from './providers/RouterProvider'
import { globalStyles } from './styles/GlobalStyle'

function App() {
  return (
    <div className="app">
      <Global styles={globalStyles} />
      <RouterProvider />
    </div>
  )
}

export default App
