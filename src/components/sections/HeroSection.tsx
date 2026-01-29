const NAV_ITEMS = [
  {
    label: "TRANG CHỦ",
    href: "/",
  },
  {
    label: "BÁN CHẠY NHẤT",
    href: "#bestsellers",
  },
  {
    label: "RƯỢU CAO CẤP ",
    href: "#products",
  },
  {
    label: "LIÊN HỆ",
    href: "#contact",
  },
];
export default function HeroSection() {
  return (
    <section className="relative" >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm container mx-auto" style={{ backgroundImage: "url('/bg/header.png')" }}>
        <div className="px-4 py-4 flex justify-center items-center">
          <div className="flex items-center space-x-8 justify-center">
            <h1 className="absolute top-0 left-0 text-2xl font-bold text-amber-900">CÁI LÒ NƯỚNG</h1>
            <nav className="hidden md:flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-[#cdbc87] transition">{item.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
}

