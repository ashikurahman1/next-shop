import Link from 'next/link';
import React from 'react';

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Product not found');
  }
  const product = await res.json();
  console.log(product);

  return (
    <div className="w-full mx-auto lg:w-10/12 px-4 py-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 shadow-xl rounded-xl p-5 lg:p-10 gap-6">
        <div className="relative">
          <Link href="/" className="btn btn-neutral btn-sm lg:btn-md">
            Back to Home
          </Link>
          <img
            src={product.productImage}
            alt={product.productName}
            className=""
          />
        </div>

        <div className="space-y-5 lg:p-5">
          <h1 className="text-2xl lg:text-3xl font-bold">
            {product.productName}
          </h1>

          <div className="p-5 shadow-md rounded-md">
            <p className="text-xl font-semibold text-primary">
              Price: ৳ {product.productPrice}
            </p>
          </div>
          <div className="p-5 shadow-md rounded-md">
            <p className="font-semibold text-xl mb-3">Short Description:</p>
            <p>{product.shortDescription}</p>
          </div>
          <div className="p-5 shadow-md rounded-md">
            <p className="font-semibold text-xl mb-3">Seller Info:</p>
            <hr />
            <img
              src={product?.userPhoto}
              alt={product.addedBy}
              className="w-12 h-12 object-cover border rounded-md mt-5"
            />
            <p className="font-semibold">{product.addedBy}</p>
            <p>{product.userEmail}</p>
            <p>
              Published on:{' '}
              {new Date(product.createdAt).toISOString().slice(0, 10)}
            </p>
          </div>
          <div className="">
            <button className="btn btn-secondary w-full mt-8">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="p-5 shadow-md rounded-md my-8">
        <p className="font-semibold text-2xl mb-3">Full Details</p>
        <hr className="my-5" />
        <p>{product.fullDescription}</p>
      </div>
    </div>
  );
}
