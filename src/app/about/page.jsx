import { Users, Package, Target, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Next Shop',
};
export default function AboutPage() {
  return (
    <div className="py-20 px-5 lg:max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-5">
          About Us
        </h1>
        <p className="text-base md:text-lg lg:max-w-2xl mx-auto">
          Welcome to{' '}
          <span className="text-primary font-semibold">Next Shop</span> — your
          trusted online shopping destination in Bangladesh. We aim to deliver
          quality products, fast service, and great customer experience.
        </p>
      </section>

      {/* Mission + Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-base-100 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <Target className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            Our Mission
          </h2>
          <p>
            To make online shopping easier, faster, and more reliable for
            everyone in Bangladesh by offering quality products at fair prices.
          </p>
        </div>

        <div className="bg-base-100 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <Award className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            Our Vision
          </h2>
          <p>
            To become Bangladesh’s most trusted eCommerce platform with the best
            customer experience and fastest delivery system.
          </p>
        </div>
      </div>

      {/* Why We Started */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-secondary text-center mb-10">
          Why We Started
        </h2>
        <p className="lg:max-w-3xl mx-auto text-center text-base md:text-lg">
          We saw that many customers face delays, high prices, and poor service
          while shopping online. That inspired us to build a platform that
          focuses on customer satisfaction, fast delivery, and transparent
          pricing.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-secondary text-center mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-1">Dedicated Members</h3>
            <p className="text-sm">
              We work together to bring you the best experience.
            </p>
          </div>

          <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-1">Quality Assurance</h3>
            <p className="text-sm">
              Every product is carefully checked before delivery.
            </p>
          </div>

          <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-1">Customer First</h3>
            <p className="text-sm">
              Your happiness is our top priority at all times.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/" className="btn btn-secondary px-8">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
