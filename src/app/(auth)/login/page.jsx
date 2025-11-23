'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) alert(res.error);
    else {
      router.push('/');
      Swal.fire({
        title: 'Welcome',
        icon: 'success',
        draggable: true,
      });
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 lg:p-10 rounded-xl shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
        <input
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 border"
        />
        <button type="submit" className="w-full btn btn-secondary">
          Login
        </button>
      </form>
      <div className="divider">or</div>
      <button
        onClick={async () => {
          const res = await signIn('google', {
            redirect: false,
            callbackUrl: '/',
          });
          if (!res?.error) {
            router.push('/');

            Swal.fire({
              title: 'Welcome',
              icon: 'success',
              draggable: true,
            });
          }
        }}
        className="w-full mt-3 btn btn-google"
      >
        Login with Google
      </button>
      <div className="mt-3 text-center">
        <p>
          Do not have an account?
          <Link href="/register" className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
