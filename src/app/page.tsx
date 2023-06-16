import { BannerTop } from "./home/sections/BannerTop";
import { ServicesAndTechologies } from "./home/sections/ServicesAndTechologies";
import { WhatAndWhy } from "./home/sections/WhatAndWhy";
import { WhyChose } from "./home/sections/WhyChose";
import { BannerTechnologies } from "./home/sections/BannerTechnologies";
import { OurProcess } from "./home/sections/OurProcess";
import { LetsStart } from "./home/sections/LetsStart";

export default function Home() {
  
  return(
    <main>
      <BannerTop />
      <WhatAndWhy />
      <WhyChose />
      <ServicesAndTechologies />
      <BannerTechnologies />
      <OurProcess />
      <LetsStart />
    </main>
  )
}