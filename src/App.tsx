import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppWrapper } from './modules/app/components/AppWrapper'
import { Layout } from './modules/app/components/Layout'
import { LoginForm } from './modules/auth/components/LoginForm'
import { ProfilePage } from './modules/auth/components/ProfilePage'
import { RegisterForm } from './modules/auth/components/RegisterForm'

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App
