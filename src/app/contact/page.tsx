import dynamic from "next/dynamic";
import { BannerTop } from "./sections/BannerTop";
import { ContactForm } from "./sections/ContactForm";
import { LetsStart } from "./sections/LetsStart";

export const metadata = {
  title: 'Toucan Contact',
  description: 'Toucan web is for testing purposes only',
}

export default function Contact() {
  const Map = dynamic(
    () => import('@/app/contact/sections/Map'),
    {
      loading: () => <p>map is loading</p>,
      ssr: false
    }
  )
  return (
    <main>
      <BannerTop />
      <Map />
      <ContactForm />
      <LetsStart />
    </main>
  )
}