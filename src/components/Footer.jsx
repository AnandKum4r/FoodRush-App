export default function Footer() {
  return (
    <footer className="mt-8 bg-[#1c1c1e] text-gray-300 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-red-500">🍽️ FoodRush</h2>
          <p className="text-sm mt-2">Tasty food delivered to your door.</p>
        </div>

        <div className="flex gap-6">
          <a href="/" className="hover:text-red-400">
            Home
          </a>
          <a href="/menu" className="hover:text-red-400">
            Menu
          </a>
          <a
            href="https://github.com/AnandKum4r"
            target="_blank"
            className="hover:text-red-400"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/anandkum4r/"
            target="_blank"
            className="hover:text-red-400"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Anand Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
