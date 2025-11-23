import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request, { params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ error: 'Invalid product id' }), {
      status: 400,
    });
  }

  const client = await clientPromise;
  const db = client.db();

  const product = await db
    .collection('products')
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return new Response(JSON.stringify({ error: 'Product not found' }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), { status: 200 });
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ error: 'Invalid product id' }), {
      status: 400,
    });
  }

  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection('products').deleteOne({
    _id: new ObjectId(id),
    userEmail: session.user.email,
  });

  if (result.deletedCount === 0) {
    return new Response(
      JSON.stringify({ error: 'Product not found or not authorized' }),
      { status: 404 }
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
