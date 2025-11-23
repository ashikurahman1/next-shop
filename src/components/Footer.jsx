import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-secondary text-base-100 p-10">
      <footer className="footer sm:footer-horizontal  lg:w-10/12 mx-auto px-4">
        <aside>
          <Link
            href={'/'}
            className="text-xl lg:text-2xl font-semibold text-base-100"
          >
            Next Shop
          </Link>
          <p>Best online shopping platform in Bangladesh.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
