import { Landing, Photos, Videos, Error } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/photos' element={<Photos />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
