export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">We’d love to hear from you! Reach out via the options below:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email: <a href="mailto:contact@example.com" className="text-blue-600 underline">contact@example.com</a></li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Address: 123 Finance Street, Money City</li>
      </ul>
    </main>
  );
}
