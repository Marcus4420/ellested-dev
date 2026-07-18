import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/layout/Layout'
import Home from './routes/Home'
import ProjectLibrary from './routes/ProjectLibrary'
import Resume from './routes/Resume'
import NotFound from './routes/NotFound'
import { printDevConsoleBanner } from './devConsole'
import { LocaleProvider } from './hooks/useLocale'

printDevConsoleBanner()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="resume" element={<Resume />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectLibrary />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  </StrictMode>,
)
