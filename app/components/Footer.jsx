import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>LET'S TUNE INTO YOUR NEXT BIG PROJECT.</h6>
            <h2>
              Need further details or <br />
              wish to connect?
            </h2>
            <Link href="/contact" className="link">
              Get in touch
            </Link>
            {/* <ul>
              <li>
                <a
                  data-noredirect="true"
                  target="_blank"
                  href="https://instagram.com/whitecity.studios"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  data-noredirect="true"
                  target="_blank"
                  href="mailto:studioswhitecity@gmail.com"
                >
                  @
                </a>
              </li>
              <li>
                <a
                  data-noredirect="true"
                  target="_blank"
                  href="https://www.linkedin.com/company/whitecitystudios"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  data-noredirect="true"
                  target="_blank"
                  href="https://facebook.com/studioswhitecity"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-12">
            <div className="footer-bar">
              <span className="copyright">
                © 2023 WhiteCity Studios<sup>TM</sup>. All Rights Reserved.
              </span>
              <a
                href="https://instagram.com/ciber.ai"
                className="creation"
                target="_blank"
                data-noredirect="true"
              >
                <span>
                  Made with{" "}
                  <i className="fas fa-heart" style={{ color: "#f00" }}></i> by
                  Ciber.ai
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
