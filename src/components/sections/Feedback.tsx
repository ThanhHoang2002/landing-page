import Image from "next/image";

const Feedback = () => {
  const feedbackImages = [
    "/bg/feedback1.svg",
    "/bg/feedback2.svg",
    "/bg/feedback3.svg",
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg/feedback.svg')",
      }}
    >
      <div className="px-4">
        {/* Tiêu đề */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="relative w-full max-w-[424px] h-[80px] md:h-[108px]">
            <div
              className="absolute inset-0 bg-[#FFCD40] rounded-full"
              style={{
                boxShadow:
                  "0px 0px 0px 8px rgba(244, 160, 37, 1), 0px 0px 40px 0px rgba(255, 238, 204, 1), inset 12px 12px 2px 0px rgba(255, 218, 143, 1), inset -8px -8px 2px 0px rgba(239, 187, 58, 1)",
              }}
            />
            <h2
              className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-xl md:text-2xl lg:text-4xl font-bold px-4 text-center"
              style={{ fontFamily: "UTM Cooper Black, serif" }}
            >
              Phản Hồi Khách Hàng
            </h2>
          </div>
        </div>

        {/* Grid feedback images */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8">
          {feedbackImages.map((image, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[25vw]"
            >
              <Image
                src={image}
                alt={`Phản hồi khách hàng ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;