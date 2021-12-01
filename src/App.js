import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Category, Type, Unit, Vendor, Medicine, Home } from './components'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add_vendor" element={<Vendor/>} />
        <Route path="/add_type" element={<Type/>} />
        <Route path="/add_category" element={<Category/>} />
        <Route path="/add_unit" element={<Unit/>} />
        <Route path="/add_medicine" element={<Medicine/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
