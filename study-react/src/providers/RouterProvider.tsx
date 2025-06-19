import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import FormPage from '../pages/Form'

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<div>Home</div>} />
        <Route path={ROUTES.FORM} element={<FormPage />} />
      </Routes>
    </Router>
  )
} 