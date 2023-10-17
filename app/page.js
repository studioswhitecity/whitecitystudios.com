"use client";

import Explore from "@/app/components/Explore";
import ClientsContentBlock from "@/app/components/ClientsContentBlock";
import Footer from "@/app/components/Footer";
import GlimpsesBlock from "@/app/components/GlimpsesBlock";
import Header from "@/app/components/Header";
import HeaderTitleSubtitle from "@/app/components/HeaderTitleSubtitle";
import IconContentBlock from "@/app/components/IconContentBlock";
import IntroImage from "@/app/components/IntroImage";
import IntroSection from "@/app/components/IntroSection";
import PageTransition from "@/app/components/PageTransition";
import Preloader from "@/app/components/Preloader";
import Sidebar from "@/app/components/Sidebar";
import SiteNavigation from "@/app/components/SiteNavigation";
import SocialMedia from "@/app/components/SocialMedia";

export default function App() {
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
