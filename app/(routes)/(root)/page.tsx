import { Header } from "../_components/header";
import { ShippingAlert } from "../_components/shipping-alert";
import { DayLightSavingOffersList } from "./_components/d.l.s.o.-list";
import { HeroContent } from "./_components/hero-content";

export default function Home() {
  return (
    <main>
      <ShippingAlert />
      <Header />
      <HeroContent />
      <DayLightSavingOffersList />
    </main>
  );
}
