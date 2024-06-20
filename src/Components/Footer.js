import fb from "../images/fb.png";
import yt from "../images/yt.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
    return (
        <footer>
                 <div>
                     <h2 className="space">Shiridi Sai Dham</h2>
                     <a href="/sai-baba" className="space btn">Who is Sai Baba?</a>
                     <p></p>
                     <a href="/guruji" className="space btn">Who is Guruji?</a>
                     <p></p>
                     <a href="/about-us" className="space btn">About Us</a>
                     <p></p>
                     <a href="/archive" className="space btn">Archive</a>
                     <p></p>
                     <a href="/contact-us" className="space btn">Contact Us</a>
                     <p></p>
                     <a href="https://www.facebook.com/ShirdiSaiDhamBellevue"><img src={fb} alt="" className="external space" /></a>
                     <a href="https://www.youtube.com/@shirdisaidham2902"><img src={yt} alt="" className="external" /></a>
                     <a href="https://chat.whatsapp.com/GY0E24mpiiCLtDNf7cLWze"><img src={whatsapp} alt="" className="external2" /></a>
                 </div>
             </footer>
    )
}
export default Footer;