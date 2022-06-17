import { Landing, Videos, About, Error } from "./pages"
import SharedLayout from "./pages/dashboard/SharedLayout.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='about' element={<About />}></Route>

          <Route path='videos' element={<Videos />}></Route>
          <Route path='' element={<Landing />}></Route>
        </Route>

        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
