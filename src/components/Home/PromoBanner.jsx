import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="py-20 px-5">
      <div className="bg-secondary text-white rounded-xl p-10 text-center shadow-lg">
        <h2 className="text-4xl font-bold mb-3 my-8 ">Big Sale 50% Off!</h2>
        <p className="mb-8 text-lg">
          Grab your favorite items before the sale ends!
        </p>
        <Link href="/" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
