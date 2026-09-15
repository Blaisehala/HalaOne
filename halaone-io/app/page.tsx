import { Hero } from "@/components/Hero";
import { VisibilitySection } from "@/components/VisibilitySection";
import {
  About,
  Approach,
  Audience,
  BuildingTechnology,
  Cta,
  Future,
  Problem,
  Services,
  Why,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisibilitySection />
      <Problem />
      <Services />
      <BuildingTechnology />
      <Approach />
      <Audience />
      <Why />
      <About />
      <Future />
      <Cta />
    </>
  );
}
