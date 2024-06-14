import "../styles.css"
import "../css/camera.css"
import "../css/autoscroll.css"

import logo from "../images/logo.png";

const SiteHeader = ({current}) => {
    return (
        <div>
            <img src={logo} className="baba" alt="" />

            <header> 
     <div className="container_12">
         <div className="grid_5">
             <div className="menu_block">
                 <nav className="">
                     <ul className="sf-menu">
                        {current === 'Home'?
                           <li><a href="/">Home</a></li>
                           :<li  className="current "><a href="/">Home</a></li>}
                        {current === "Archive"?
                            <li><a href="/archive">Archive</a></li>
                            :<li className="current "><a href="/archive">Archive</a></li>}
                        {current === "Account"?
                            <li><a href="/login">Account</a></li>
                            :<li className="current "><a href="/login">Account</a></li>}
                     </ul>
                 </nav>
                 <div className="clear"></div>
             </div>
         </div>
    </div>

</header>
    </div>)
}
export default SiteHeader;