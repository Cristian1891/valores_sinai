import { StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/index.ts'   // ← importar el i18n antes que App
import './index.css'
import App from './App.tsx'
import { AppLoader } from './components/ui/AppLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<AppLoader />}>
        <App />
    </Suspense>
  </StrictMode>,
)
