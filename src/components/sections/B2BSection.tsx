import ProductShowcase from "./ProductShowcase";

export default function B2BSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            8 mẫu hộp B2B
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-20"></div>
            <p className="text-xl text-amber-700 font-semibold">8 phiên bản</p>
            <div className="h-px bg-amber-300 w-20"></div>
          </div>
        </div>
        <ProductShowcase />
      </div>
    </section>
  );
}

