
import '../Style/LoginPage.css';
import { Link } from "react-router-dom";


function Footer({paratext,linkname,linkpath}) {
  return (
   <footer class="footer">
  <p className='para-text'>{paratext}<Link to={linkpath} className='sign-sinup-link'>{linkname}</Link></p>
  <div class="footer-line"></div> 
  <div class="footer-content">
    <span>@2024 Hospital Name</span>
   <span><Link to={'/privacypolicy'} >Privacy Policy</Link></span>
    <span><Link to ={'/termsofservices'}>Terms of Service</Link></span>
  </div>
</footer>
    
    
  );
}

export default Footer;