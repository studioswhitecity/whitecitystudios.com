import { Explore } from "../components/Explore";
import { ClientsContentBlock } from "../components/ClientsContentBlock";
import { Footer } from "../components/Footer";
import GlimpsesBlock from "../components/GlimpsesBlock";
import { Header } from "../components/Header";
import { HeaderTitleSubtitle } from "../components/HeaderTitleSubtitle";
import { IconContentBlock } from "../components/IconContentBlock";
import { IntroImage } from "../components/IntroImage";
import { IntroSection } from "../components/IntroSection";
import { PageTransition } from "../components/PageTransition";
import { Preloader } from "../components/Preloader";
import { Sidebar } from "../components/Sidebar";
import { SiteNavigation } from "../components/SiteNavigation";
import { SocialMedia } from "../components/SocialMedia";

export default function About() {
  return (
    <div>
      <Preloader />
      <PageTransition />
      <SiteNavigation />
      <SocialMedia />
      <main>
        <Sidebar />
        <Explore />
        <Header />
        <IntroSection />
        <GlimpsesBlock />
        <IconContentBlock />
        <ClientsContentBlock />
      </main>
      <Footer />
    </div>
  );
}
