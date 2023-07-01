import React from "react";
import Header from "../components/Header";
import CarouselArea from "../components/CarouselArea";
import Pillars from "../components/Pillars";
import SportCarousel from "../components/SportCarousel";
import Timeline from "../components/Timeline";
import ImpactNumber from "../components/ImpactNumber";
import OurPartner from "../components/OurPartner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselArea />
      <Pillars />
      <SportCarousel />

      <Heading title="Our Journey" />
      <Timeline />

      <Heading title="Our Impact" />
      <ImpactNumber />

      <Heading title="Our Partners" />
      <OurPartner />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
