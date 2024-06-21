import Container from 'components/BusinessContainer/Container';
import Login from 'pages/Login/Login';
import App from './App'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>      
      <Container>
        <Routes>
          <Route path="/" element={<Login />}></Route>   
          <Route path="/login" element={<Login />}></Route>         
          <Route path="/app" element={<App />}></Route>         

        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default AppRoutes
