'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import { LucideUser } from 'lucide-react';
import Loading from '@/app/loading';

export default function Navbar() {
  const { data: session, status } = useSession();

  const links = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/products'}>All products</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact us</Link>
      </li>
      <li>
        <Link href={'/about'}>About us</Link>
      </li>
    </>
  );
  if (status === 'loading') return <Loading />;
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className=" navbar w-full  lg:max-w-10/12 mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-10 shadow space-y-5"
            >
              {/* menus */}
              {links}
            </ul>
          </div>
          <Link
            href={'/'}
            className="text-xl lg:text-2xl font-semibold text-secondary dark:text-secondary"
          >
            Next Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-8 px-2">
            {/* Menus */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <details className="dropdown">
              <summary className="avatar border-3 border-secondary rounded-2xl shadow-lg">
                <div className="mask mask-hexagon-2 w-9 lg:w-12 ">
                  {session?.user?.image ? (
                    <img
                      src={session?.user?.image}
                      alt=""
                      className="overflow-hidden"
                    />
                  ) : (
                    <LucideUser className="w-full h-full" />
                  )}
                </div>
              </summary>

              <ul className=" dropdown-content bg-base-100 rounded-box z-100 p-2 shadow-sm w-45 space-y-3 text-center right-0">
                <li className="mt-6">
                  <p className="font-semibold text-secondary text-lg">
                    {session?.user?.name.slice(0, 12)}
                  </p>
                </li>
                <hr className="text-secondary/30 " />
                <div className="my-5">
                  <li className="mb-2">
                    <Link href={'/add-product'}>Add product</Link>
                  </li>
                  <li>
                    <Link href={'/manage-product'}>Manage products</Link>
                  </li>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="btn btn-primary w-full "
                >
                  Logout
                </button>
              </ul>
            </details>
          ) : (
            <Link href={'/login'} className="btn btn-secondary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
