import clientPromise from '@/lib/mongodb';

// GET
export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  const products = await db.collection('products').find().limit(4).toArray();

  return Response.json(products);
}
