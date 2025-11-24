import Link from 'next/link';

export default async function FeaturedProducts() {
 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/featured-products`, {
  cache: "no-store"
});

if (!res.ok) {
  console.error("API ERROR:", await res.text());
  return <div>Featured products not available</div>; // fallback UI
}

const featuredProduct = await res.json();


 
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-secondary text-center mb-12">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 ">
        {featuredProduct.map(product => (
          <div
            key={product._id}
            className="p-5 shadow-md rounded-xl hover:shadow-xl transition"
          >
            <div className="h-46 bg-base-200 rounded-xl mb-5 overflow-hidden object-cover">
              <img
                src={product.productImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{product.productName}</h3>
            <p className="text-sm mt-1 mb-3 line-clamp-3">
              {product.shortDescription}{' '}
            </p>
            <p className="text-xl font-semibold text-secondary mb-4">
              {product?.productPrice} ৳
            </p>
            <Link href={`/products/${product?._id}`}>
              <button className="btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
