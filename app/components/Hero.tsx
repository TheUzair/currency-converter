import CurrencyConverter from "./CurrencyConverter";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Convert Currencies Instantly 🌍
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Get real-time exchange rates, track your conversions, and simplify
          international transactions.
        </p>
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
          <CurrencyConverter />
        </div>
      </div>
    </section>
  );
}
