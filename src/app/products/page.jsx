import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: 'AllProducts | Next Shop',
};
export default async function AllProducts() {
 
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
  cache: 'no-store',
});

if (!res.ok) {
  console.error('Failed to fetch products:', await res.text());
  return <p>Failed to load products.</p>;
}

const products = await res.json();
  
  return (
    <section className="py-20 w-full lg:w-10/12 mx-auto px-4 ">
      {products.length > 0 ? (
        <>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-secondary">
            All Products ({products.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 ">
            {products.map(product => (
              <div
                key={product._id}
                className="p-5 shadow-md rounded-xl hover:shadow-xl transition"
              >
                <div className="h-46 bg-base-200 rounded-xl mb-5 overflow-hidden object-cover">
                  <img
                    src={product?.productImage}
                    alt="fdd"
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
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-secondary">
            No product found..
          </h2>
          <Link href={'/add-product'} className="btn btn-secondary text-center">
            Add product
          </Link>
        </div>
      )}
    </section>
  );
}
