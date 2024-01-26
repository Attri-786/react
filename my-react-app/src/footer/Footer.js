

import './foot.css';

function Footer(){
    return(

        <footer>
        <div class="footer-column">
            <h4>Name</h4>
            <p>Your Name</p>
        </div>
        <div class="footer-column">
            <h4>Text Logo</h4>
            <p>Logo Here</p>
        </div>
        <div class="footer-column">
            <h4>Google Maps</h4>
           
        </div>
        <div class="footer-column">
            <h4>Newsletter</h4>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </footer>

    );
}

export default Footer;