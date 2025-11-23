'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }), // send plain password
    });

    if (res.ok) {
      Swal.fire({
        title: 'Registration Success',
        icon: 'success',
        draggable: true,
      });
      router.push('/login');
    } else {
      const data = await res.json();
      alert(data.error || 'Failed to register');
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 lg:p-10 rounded-xl shadow-xl">
      <h2 className="text-3xl font-semibold text-center text-secondary mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          placeholder="Name"
          className="w-full p-2 border"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          required
          placeholder="Email"
          className="w-full p-2 border"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          required
          placeholder="Password"
          type="password"
          className="w-full p-2 border"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full btn btn-secondary">
          Register
        </button>
      </form>

      <div className="divider">or</div>
      <button
        onClick={async () => {
          const res = await signIn('google', {
            redirect: false,
            callbackUrl: '/',
          });
          Swal.fire({
            title: 'Welcome',
            icon: 'success',
            draggable: true,
          });
          if (!res?.error) router.push('/');
        }}
        className="w-full mt-3 btn btn-google"
      >
        Login with Google
      </button>

      <div className="mt-3 text-center">
        <p>
          Have an account?{' '}
          <Link href="/login" className="text-secondary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
