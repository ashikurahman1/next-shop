'use client';

import Link from 'next/link';

import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ManageProductClient({ products }) {
  const [items, setItems] = useState(products);

  async function handleDelete(id) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
        const data = await res.json();

        if (data.ok) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your product has been deleted.',
            icon: 'success',
          });

          setItems(prev => prev.filter(p => p._id !== id));
        } else {
          Swal.fire('Error', data.error || 'Failed to delete', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to delete', 'error');
      }
    }
  }

  return (
    <section className="py-15 mx-auto lg:w-10/12 px-4">
      <div>
        <h2 className="text-3xl lg:text-5xl font-semibold mb-10 text-secondary text-center">
          Manage Products
        </h2>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Product name</th>
                <th> Description</th>
                <th> Price</th>
                <th> Photo</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.shortDescription}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <img src={product.productImage} className="w-15" />
                  </td>
                  <td className="">
                    <div className="flex">
                      <Link
                        href={`/products/${product?._id}`}
                        className="btn btn-secondary btn-sm mr-3"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
