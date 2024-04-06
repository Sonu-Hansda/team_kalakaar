import Orders from "./Component/Orders/Orders"
import Users from "./Component/Users/Users"
import './App.css'
function App() {

  return (
    <>
      <div className="toplevel">
        {window.innerWidth > 400 && <div className="left">thi is top</div>}
        <div className="center">
          <div className="top">thisi si top</div>
          <div className="main">
            <Users />
            <Orders />
          </div>
        </div>
        {window.innerWidth > 400 && <div className="right">thi is right</div>}
      </div>
    </>
  )
}

export default App
