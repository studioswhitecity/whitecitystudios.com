export default function SocialMedia() {
  return (
    <div className="social-media">
      <div className="layer"></div>
      <div className="inner">
        <h5>Like. Follow. Share. Repeat!</h5>
        <ul>
          <li>
            <a
              data-noredirect="true"
              target="_blank"
              href="https://facebook.com/studioswhitecity"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
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
              href="https://www.linkedin.com/company/whitecitystudios"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              data-noredirect="true"
              target="_blank"
              href="mailto:studioswhitecity@gmail.com"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
