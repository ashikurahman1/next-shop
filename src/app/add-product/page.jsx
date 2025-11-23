'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function AddProduct() {
  const { data: session, status } = useSession();
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleAddProduct = async data => {
    try {
      setIsSubmitting(true);
      const imageFile = data.productImage?.[0];

      if (!imageFile) {
        Swal.fire('Please select an image');

        setIsSubmitting(false);
        return;
      }
      const formData = new FormData();
      formData.append('image', imageFile);

      const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`;

      const imgbbRes = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const imgbbData = await imgbbRes.json();
      if (!imgbbData.success) {
        Swal.fire('Image upload failed');
        setIsSubmitting(false);
        return;
      }

      const imageUrl = imgbbData.data.url;

      const newProduct = {
        productName: data.productName,
        shortDescription: data.shortDescription,
        fullDescription: data.fullDescription,
        productPrice: data.productPrice,
        productImage: imageUrl,
        addedBy: session.user.name,
        userEmail: session.user.email,
        userPhoto: session?.user?.image,
        createdAt: new Date(),
      };

      const productRes = await fetch('api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (productRes.ok && productRes.status === 200) {
        Swal.fire({
          title: 'Product added successfully',
          icon: 'success',
          draggable: true,
        });
        router.push('/manage-product');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to save product',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="py-15 px-4">
      <h1 className="text-center text-3xl lg:text-4xl font-semibold text-secondary mb-8">
        Add product
      </h1>
      <div className="max-w-3xl mx-auto shadow-md rounded-md border border-secondary p-5 lg:p-10">
        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
          <div>
            <label>Product Name</label>
            <input
              required
              type="text"
              placeholder="Product name"
              {...register('productName')}
              className="input w-full mt-2"
            />
          </div>
          <div>
            <label>Short description</label>
            <input
              required
              type="text"
              placeholder="Short Description"
              {...register('shortDescription')}
              className="input w-full mt-2"
            />
          </div>
          <div>
            <label>Full description</label>
            <textarea
              rows={5}
              required
              placeholder="Full Description"
              {...register('fullDescription')}
              className="textarea w-full mt-2"
            ></textarea>
          </div>
          <div>
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              {...register('productPrice')}
              className="input w-full mt-2"
            />
          </div>
          <div className="border border-black/20 rounded-md p-2 flex items-center">
            <label className="text-sm">Product Photo</label>
            <input
              type="file"
              {...register('productImage')}
              className="file-input file-input-secondary ml-5"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-secondary"
          >
            {isSubmitting ? 'Adding...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
