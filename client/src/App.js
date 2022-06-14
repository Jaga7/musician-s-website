import { Landing, Photos, Videos, About, Error, Contact } from "./pages"
import SharedLayout from "./pages/dashboard/SharedLayout.js"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='photos' element={<Photos />}></Route>
          <Route path='videos' element={<Videos />}></Route>
          <Route path='' element={<Landing />}></Route>
        </Route>
        {/* <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/photos' element={<Photos />}></Route>
        <Route path='/videos' element={<Videos />}></Route> */}
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
