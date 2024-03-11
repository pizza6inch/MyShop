import "./Footer.css";
import Logo from "../../assets/pizza.png";
import Send from "../../assets/send.svg";
function Footer() {
  return (
    <div className="Footer">
      <div className="Content-Wrapper">
        <div className="Content">
          <div className="Column">
            <div className="Title-Wrapper">
              <img src={Logo} alt="Logo" />
              <div className="Img-Text">Pizza</div>
            </div>
            <div className="Text">Subscribe</div>
            <div className="Text">Get news from email!</div>
            <div className="Input-Wrapper">
              <input type="text" placeholder="Enter your email" />
              <img src={Send} alt="Send" />
            </div>
          </div>
          <div className="Column">
            <div className="Title">Support</div>
            <div className="Text">address</div>
            <div className="Text">pizza6inch@gmail.com</div>
            <div className="Text">+886 0958-616-659</div>
          </div>
          <div className="Column">
            <div className="Title">Account</div>
            <div className="Text">Profile</div>
            <div className="Text">Login/Register</div>
            <div className="Text">Cart</div>
            <div className="Text">Wishlist</div>
            <div className="Text">Shop</div>
          </div>
          <div className="Column">
            <div className="Title">Quick Link</div>
            <div className="Text">Privacy Policy</div>
            <div className="Text">Term of use</div>
            <div className="Text">FAQ</div>
            <div className="Text">Contact</div>
          </div>
          <div className="Column">
            <div className="Title">Creator</div>
            <div className="Text">Info</div>
          </div>
        </div>
      </div>
      <div className="CopyRight">
        © Copyright Pizza6inch 2024.All right reserved
      </div>
    </div>
  );
}

export default Footer;
