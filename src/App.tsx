import { Button } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import routes from './router/routes';

import './style/App.css'

function App() {


  return (
  <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Button type="primary">Button-antdesign</Button>

    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
    </BrowserRouter>
  )
}

export default App
