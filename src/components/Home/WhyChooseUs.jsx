import { Truck, BadgePercent, ShieldCheck, Headset } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Delivery',
      desc: 'Delivered within 24–48 hours',
      icon: <Truck className="w-10 h-10 text-primary mx-auto mb-4" />,
    },
    {
      title: 'Best Prices',
      desc: 'Affordable & exclusive deals',
      icon: <BadgePercent className="w-10 h-10 text-primary mx-auto mb-4" />,
    },
    {
      title: 'Secure Payments',
      desc: '100% safe transactions',
      icon: <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />,
    },
    {
      title: '24/7 Support',
      desc: 'We are always here to help',
      icon: <Headset className="w-10 h-10 text-primary mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8 my-8 text-secondary text-center">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5  mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-base-100 shadow-md rounded-xl text-center hover:shadow-2xl shadow-primary/10 transition"
          >
            {f.icon}
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              {f.title}
            </h3>
            <p className="">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
