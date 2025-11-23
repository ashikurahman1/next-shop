import clientPromise from '@/lib/mongodb';

// GET
export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  const products = await db.collection('products').find().toArray();

  return Response.json(products);
}

// POST
export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('products').insertOne(body);

    return Response.json({ success: true, id: result.insertedId });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}
