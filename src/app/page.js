// sections
import HeroSection from "@/sections/heroSection";
import FeatureSection from "@/sections/featureSection";
import WeddingTestimonials from "@/sections/weddingTestimonials";
import WeddingPackages from "@/sections/weddingPackages";
import ElopementFeatures from "@/sections/elopementFeatures";
import ElopementTestimonials from "@/sections/elopementTestimonials";
import MapFeature from "@/sections/mapFeature";
import ElopementPackages from "@/sections/elopementPackages";

export default function Home() {
  return (
    <div className="h-full">
      <HeroSection />
      <FeatureSection />
      <WeddingTestimonials />
      <WeddingPackages />
      <ElopementFeatures />
      <ElopementTestimonials />
      <MapFeature />
      <ElopementPackages />
    </div>
  );
}
