import Container from 'components/Container'
import Header from 'components/Header'
import Authentication from 'pages/Authentication'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
        <Route path="/" element={<Authentication />}></Route>   
          <Route path="/login" element={<Authentication />}></Route>         
          <Route path="/register" element={<Authentication />}></Route>         
          <Route path="/esqueci-minha-senha" element={<Authentication />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default AppRoutes
