import {
  Form,
  Links,
  LiveReload,
  Meta,
  Scripts,
  Outlet,
  ScrollRestoration,
  RemixBrowser,
} from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

import { Preloader } from "./components/Preloader";
import { PageTransition } from "./components/PageTransition";
import { SiteNavigation } from "./components/SiteNavigation";
import { SocialMedia } from "./components/SocialMedia";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { IntroImage } from "./components/IntroImage";
import { IconContentBlock } from "./components/IconContentBlock";
import { ClientsContentBlock } from "./components/ClientsContentBlock";
import { Footer } from "./components/Footer";

export function loader() {
  return {
    title: "WhiteCity Studios - Udaipur's Exclusive JamPad & Recording Studio!",
    description:
      "Embark on a unique musical journey at WhiteCity Studios, Udaipur, established in 2023 by the distinguished Arpan Jain. Not only are we a beacon of elite music production, mixing, mastering, and post-production, but we also proudly host the city's first and only JamPad! Catering to all artists, from soloists and bands to beginners and seasoned pros, we provide bespoke services using cutting-edge technology. Join us to craft your sound where innovation meets tradition, and let your musical visions soar.",
  };
}

export function meta({ data }) {
  return [
    {
      name: "viewport",
      content:
        "width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
    },
    { name: "format-detection", content: "telephone=no" },
    { name: "theme-color", content: "#000000" },
    { charset: "utf-8" },
    { name: "author", content: "WhiteCity Studios" },
    { name: "description", content: data.description },
    {
      name: "keywords",
      content:
        "whitecity studios, udaipur recording studio, music production, sound engineering, mixing and mastering, arpan jain, recording services udaipur, music mixing, audio mastering, post-production services, music arranging, music composing, professional recording studio, music production house, top recording studio in udaipur",
    },
    { property: "og:description", content: data.description },
    {
      property: "og:image",
      content: "https://whitecitystudios.com/images/logo.png",
    },
    { property: "og:site_name", content: "WhiteCity Studios" },
    {
      property: "og:title",
      content:
        "WhiteCity Studios | Udaipur's Exclusive JamPad & Recording Studio!",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://whitecitystudios.com" },
  ];
}

export function links() {
  return [
    { rel: "icon", href: "favicon.ico" },
    { rel: "shortcut icon", href: "images/logo.png" },
    { rel: "stylesheet", href: "css/fontawesome.min.css" },
    { rel: "stylesheet", href: "css/fancybox.min.css" },
    { rel: "stylesheet", href: "css/hamburger.min.css" },
    { rel: "stylesheet", href: "css/odometer.min.css" },
    { rel: "stylesheet", href: "css/swiper.min.css" },
    { rel: "stylesheet", href: "css/bootstrap.min.css" },
    { rel: "stylesheet", href: "css/style.css" },
  ];
}

export default function App({ children }) {
  return (
    <html>
      <head>
        <title>
          WhiteCity Studios - Udaipur's Exclusive JamPad & Recording Studio!
        </title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/swiper.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/splitting.min.js"></script>
        <script src="/js/odometer.min.js"></script>
        <script src="/js/fancybox.min.js"></script>
        <script src="/js/scripts.js"></script>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
      </body>
    </html>
  );
}
