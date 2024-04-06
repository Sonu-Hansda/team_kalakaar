import Orders from "./Component/Orders/Orders"
import Header from "./Component/Header/Header"
import Users from "./Component/Users/Users"
import './App.css'
import Nav from "./Component/Nav/Nav"
function App() {

  return (
    <>
      <div className="toplevel">
        <div className="left"><Nav/></div>
        <div className="center">
          <div className="top"><Header/></div>
          <div className="main">
            <Users />
            <Orders />
          </div>
        </div>
        <div className="right">thi is right</div>
      </div>
    </>
  )
}

export default App
