import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-blue-500 transition">MyShop</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-500 transition">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block w-60 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <img src="/cart-icon.png" alt="Cart" className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
