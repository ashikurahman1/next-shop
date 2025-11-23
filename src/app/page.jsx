import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Hero from '@/components/Home/Hero';
import PromoBanner from '@/components/Home/PromoBanner';
import Testimonials from '@/components/Home/Testimonials';
import WhyChooseUs from '@/components/Home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full lg:max-w-10/12 mx-auto px-4 ">
        {/* <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black"> */}
        <WhyChooseUs />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
        {/* </div> */}
      </div>
    </>
  );
}
