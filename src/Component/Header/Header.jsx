import { useState } from "react";
import "./header.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
function Header() {
    const [isDark,setIsDark] = useState(false);
  return (
    <div className="header__container">
        <div className="header__left">
            <h1 className="poppins-bold statistics">Statistics</h1>
        </div>
        <div onClick={()=>setIsDark((prev)=>!prev)} className="header__icons">
         <MdLightMode className={isDark?`unselected__icon`:`selected__icon`} />
            <MdDarkMode className={!isDark?`unselected__icon`:`selected__icon`}/>
        </div>
       
    </div>
  )
}

export default Header