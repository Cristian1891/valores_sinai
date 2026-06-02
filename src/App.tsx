import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <>
    // Ahora el Provider envuelve a toda la lógica de navegación
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
