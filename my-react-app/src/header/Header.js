
import './head.css';

function Header(){

return(
    <header>
        <div class="logo">
            Developer's
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
);
}
export default Header;