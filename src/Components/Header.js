const SiteHeader = ({current}) => {
    return (
        <div>
            <header> 
     <div className="container_12">
         <div className="grid_5">
             <div className="menu_block">
                 <nav className="">
                     <ul className="sf-menu">
                        {current === 'Home'?
                           <li><a href="/">Home</a></li>
                           :<li  className="current "><a href="/">Home</a></li>}
                        {current === "Events"?
                            <li><a href="/events">Events</a></li>
                            :<li className="current "><a href="/events">Events</a></li>}
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