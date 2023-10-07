import { Link, useLocation } from "@remix-run/react";

export function SiteNavigation() {
  let location = useLocation();

  return (
    <nav className="site-navigation">
      <div className="layer"></div>
      <div className="inner">
        <ul data-splitting={true}>
          {[
            { to: "/", label: "HOME", desc: "Home page" },
            { to: "/about", label: "WHO WE ARE", desc: "All About Us" },
            {
              to: "/showcase",
              label: "WHAT WE DO",
              desc: "All About our Work",
            },
            { to: "/jampad", label: "JAMPAD", desc: "Let's Jam Together" },
            { to: "/contact", label: "CONTACT", desc: "Say Hello" },
          ].map(({ to, label, desc }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
              {location.pathname === to && (
                <i className="fas fa-crosshairs"></i>
              )}
              <small>{desc}</small>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
