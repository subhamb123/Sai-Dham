const SiteHeader = () => {
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
                         
                           <li  className="current "><a href="/">Home</a></li>
                            <li><a href="/sai-baba">Sai Baba</a></li>
                            <li><a href="/guruji">Guruji</a></li>
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/resources">Resources</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
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