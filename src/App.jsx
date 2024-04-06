import Orders from "./Component/Orders/Orders"
import Users from "./Component/Users/Users"
import './App.css'
function App() {

  return (
    <>
      <div className="toplevel">
        <div className="top_bar">thi is ntop</div>
        <div className="nevbar">this is new</div>
        <div className="body">
          <Users />
          <Orders />
        </div>
      </div>
    </>
  )
}

export default App
