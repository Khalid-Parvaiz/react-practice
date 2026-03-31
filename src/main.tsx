import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Counter from './components/Counter/index.tsx'
import TodoApp from './components/to-do-list/index.tsx'
import ProductStore from './components/store/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/react-practice" element={<App />} />
      <Route path="/react-practice/counter" element={<Counter />} />
      <Route path="/react-practice/todo-list" element={<TodoApp />} />
      <Route path="/react-practice/productStore" element={<ProductStore />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
