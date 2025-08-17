import { DollarSign, History, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Real-time Exchange Rates",
      desc: "Always updated with the latest market rates.",
    },
    {
      icon: <History className="w-8 h-8 text-blue-600" />,
      title: "Conversion History",
      desc: "Track your last 5 conversions easily.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Multi-Currency Support",
      desc: "Convert between USD, INR, EUR, GBP, JPY, and more.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Use Our Converter?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center"
            >
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
