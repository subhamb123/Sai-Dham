const SiteHeader = ({current}) => {
    return (
        <div>
            <header> 
     <div className="h_top">
         <div className="container_12">
             <div className="grid_12" >
                 <div className="header1">
                 </div>
             </div>
         </div>
     </div>

     <div className="container_12">
         <div className="grid_12">
             <div className="menu_block">
                 <nav className="">
                     <ul className="sf-menu">
                        {current === 'Home'?
                           <li><a href="/">Home</a></li>
                           :<li  className="current "><a href="/">Home</a></li>}
                        {current === "Sai Baba"?
                            <li><a href="/sai-baba">Sai Baba</a></li>
                            :<li className="current "><a href="/sai-baba">Sai Baba</a></li>}
                        {current === "Guruji"?
                            <li><a href="/guruji">Guruji</a></li>
                            :<li className="current "><a href="/guruji">Guruji</a></li>}
                        {current === "About us"?
                            <li><a href="/about-us">About us</a></li>
                            :<li className="current "><a href="/about-us">About us</a></li>}
                        {current === "Events"?
                            <li><a href="/events">Events</a></li>
                            :<li className="current "><a href="/events">Events</a></li>}
                        {current === "Resources"?
                            <li><a href="/resources">Resources</a></li>
                            :<li className="current "><a href="/resources">Resources</a></li>}
                        {current === "Contact us"?
                            <li><a href="/contact-us">Contact us</a></li>
                            :<li className="current "><a href="/contact-us">Contact us</a></li>}
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