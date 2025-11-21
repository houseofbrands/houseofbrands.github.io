export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rajan Mehta. All Rights Reserved.
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

