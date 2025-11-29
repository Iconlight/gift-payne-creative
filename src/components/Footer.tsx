import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-tagline">
                        <p>Experience creative excellence</p>
                    </div>

                    <div className="footer-links-row">
                        <div className="footer-column footer-column-centered">
                            <h4>Contact</h4>
                            <a href="mailto:giftpaynekenya@gmail.com">giftpaynekenya@gmail.com</a>
                            <a href="tel:+254775303909">+254 775 303 909</a>
                            <a href="#">Nairobi, Kenya</a>
                        </div>
                    </div>
                </div>

                <div className="footer-brand-large">
                    <h1>Gift Payne</h1>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gift Payne Creative Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
