import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Next Shop',
};

export default function ContactPage() {
  return (
    <div className="py-20 px-5 lg:max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-5">
          Contact Us
        </h1>
        <p className="text-base md:text-lg lg:max-w-2xl mx-auto">
          Have any questions or need help? We're always here for you. Reach out
          anytime!
        </p>
      </section>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1 text-secondary">
            Email Us
          </h3>
          <p className="text-sm">nextshop@gmail.com</p>
        </div>

        <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
          <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1 text-secondary">Call Us</h3>
          <p className="text-sm">+880 1234 567 890</p>
        </div>

        <div className="p-6 bg-base-100 shadow-md rounded-xl text-center">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1 text-secondary">
            Visit Us
          </h3>
          <p className="text-sm">Chattogram, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <section className="bg-base-100 p-8 rounded-xl shadow-md mb-20">
        <h2 className="text-3xl font-semibold text-secondary mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject full width */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              placeholder="Message subject"
              required
            />
          </div>

          {/* Message full width */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32 w-full mt-2"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="md:col-span-2">
            <button className="btn btn-secondary w-full">Send Message</button>
          </div>
        </form>
      </section>

      {/* Map Placeholder */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">
          Our Location
        </h2>
        <div className="bg-base-200 h-60 rounded-xl shadow-md flex items-center justify-center text-secondary font-semibold">
          Google Map Placeholder
        </div>
      </section>
    </div>
  );
}
