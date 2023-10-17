import "./globals.css";
import "@/public/css/fontawesome.min.css";
import "@/public/css/fancybox.min.css";
import "@/public/css/hamburger.min.css";
import "@/public/css/odometer.min.css";
import "@/public/css/swiper.min.css";
import "@/public/css/bootstrap.min.css";
import "@/public/css/style.css";
import PageBase from "./components/PageBase";

export const metadata = {
  metadataBase: new URL(process.env.APP_URL),
  title: {
    default:
      "WhiteCity Studios - Udaipur's Exclusive JamPad & Recording Studio!",
    template: `%s`,
  },
  description: process.env.APP_DESCRIPTION,
  url: process.env.APP_URL,
  siteName: process.env.APP_NAME,
  keywords:
    "whitecity studios, udaipur recording studio, music production, sound engineering, mixing and mastering, arpan jain, recording services udaipur, music mixing, audio mastering, post-production services, music arranging, music composing, professional recording studio, music production house, top recording studio in udaipur",
  openGraph: {
    siteName: process.env.APP_NAME,
    title: process.env.APP_NAME,
    url: process.env.APP_URL,
    description: process.env.APP_DESCRIPTION,
    images: ["/images/slides/3.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    images: ["/images/slides/3.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: "no",
    viewportFit: "cover",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <PageBase>
      <html lang="en">
        <body>
          {children}
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
    </PageBase>
  );
}
