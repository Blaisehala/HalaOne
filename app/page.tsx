import { Hero } from "@/components/Hero";
import { LifecycleFlow } from "@/components/LifecycleFlow";
import {
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
      <section
        className="lifecycle-section"
        id="visibility"
        aria-label="How it works"
      >
        <div className="wrap">
          <LifecycleFlow />
        </div>
      </section>
      <Problem />
      <Services />
      <BuildingTechnology />
      <Approach />
      <Audience />
      <Why />
      <Future />
      <Cta />
    </>
  );
}
