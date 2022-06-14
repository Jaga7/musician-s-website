import { Outlet } from "react-router-dom"
const SharedLayout = () => {
  return (
    <>
      <h2>shared layout</h2>
      <div className='dashboard-page'>
        <Outlet />
      </div>
    </>
  )
}
export default SharedLayout
