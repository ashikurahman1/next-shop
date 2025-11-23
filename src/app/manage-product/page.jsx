import ManageProductClient from './ManageProductClient';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import clientPromise from '@/lib/mongodb';

export default async function ManageProduct() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="text-center py-10">You are not authorized.</div>;
  }

  const client = await clientPromise;
  const db = client.db();

  const products = await db
    .collection('products')
    .find({ userEmail: session.user.email })
    .toArray();

  // Convert MongoDB objects to plain JS objects
  const safeProducts = products.map(p => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt ? new Date(p.createdAt).toISOString() : null,
  }));
  return <ManageProductClient products={safeProducts} />;
}
