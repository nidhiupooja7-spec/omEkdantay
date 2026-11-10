import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* About, Services, Projects, Products, Contact routes – pages banne ke baad add karenge */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
