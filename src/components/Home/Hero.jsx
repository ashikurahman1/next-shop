import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-linear-to-l from-primary/40 via-blue-500/40 to-primary/5 rounded-2xl shadow-md py-15 lg:py-30 px-5">
      <div className="text-center ">
        <h2 className="text-secondary font-semibold text-4xl md:text-5xl lg:text-7xl lg:max-w-3xl lg:mx-auto mb-5">
          Buy Your Favorite Products
        </h2>
        <p className="lg:max-w-xl lg:mx-auto mb-10 text-sm md:text-lg">
          Next Shop is the best online shopping platform in Bangladesh. Discover
          amazing deals and fast delivery right to your door.
        </p>
        <Link
          href={'/products'}
          className="btn btn-secondary hover:scale-105 transition"
        >
          View Products
        </Link>
      </div>
    </section>
  );
}
