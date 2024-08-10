import { Main, Section, Container } from "@/components/craft";
import CTA from "@/components/landing-page/cta";
import FAQ from "@/components/landing-page/faq";
import FirstFeature from "@/components/landing-page/firstfeature";
import Footer from "@/components/landing-page/footer";
import SecondFeature from "@/components/landing-page/secondfeature";
import Hero from "@/components/landing-page/hero";
import Image from "next/image";

export default function Home() {
  return (
    // <>
    //   <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
     
    //       <h1 className="text-9xl font-bold text-center md:text-[300px]">
    //         Pluto
    //       </h1>
    //   </section>
    // </>
    <Main>
      <Section>
        <Container>
          <Hero />
          <FirstFeature />
          <SecondFeature />
          <CTA />
          <FAQ />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
