import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/Login.jsx'
import { UserList } from './components/user/UserList.jsx'
import { TaskList } from './components/task/TaskList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserList />
  </StrictMode>,
)
