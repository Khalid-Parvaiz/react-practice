import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Counter from './components/Counter/index.tsx'
import TodoApp from './components/to-do-list/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename=''>
    <Routes>
      <Route path="/react-practice" element={<App />} />
      <Route path="/react-practice/counter" element={<Counter />} />
      <Route path="/react-practice/todo-list" element={<TodoApp />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
