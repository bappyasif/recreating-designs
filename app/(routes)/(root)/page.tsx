import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { ShippingAlert } from "../_components/shipping-alert";
import { EscapeGallery } from "./_components/escape-gallery";
import { FeaturedCollections } from "./_components/featured-collections";
import { FeaturedVideo } from "./_components/featured-video";
import { HeroContent } from "./_components/hero-content";
import { Subscribe } from "./_components/subscribe";

export default function Home() {
  return (
    <main>
      <ShippingAlert />
      <Header />
      <HeroContent />
      <FeaturedCollections />
      <FeaturedVideo />
      <EscapeGallery />
      <Subscribe />
      <Footer />
    </main>
  );
}
