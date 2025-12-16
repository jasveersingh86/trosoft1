

  import React from "react";

export default function Services() {
  const services = [
    {
      title: "SEO",
      logo: "seo.png",
      desc:
        "Outperform your biggest rivals with India's leading SEO Company. Generate incredible leads through the power of SEO.",
      items: ["Local SEO", "International SEO", "Ecommerce SEO", "Enterprise SEO"],
    },
    {
      title: "Google Ads",
      logo: "ads.png",
      desc:
        "Let our experts take charge of your PPC campaigns. Achieve BIG with performance marketing strategies.",
      items: ["Google Ads", "PMax Campaigns", "Shopping Campaigns", "Planning & Strategies"],
    },
    {
      title: "Meta Ads",
      logo: "meta.png",
      desc:
        "From generating leads to better ROAS — we know exactly how Meta's ecosystem works.",
      items: ["Ads Creation & Brainstorming", "Facebook Ads", "Instagram Ads"],
    },
    {
      title: "Development",
      logo: "development.png",
      desc:
        "We build SEO-friendly, high-converting websites and landing pages.",
      items: ["High Converting Landing Page", "SEO Friendly Websites", "Custom Coded Websites"],
    },
  ];

  return (
    <section className="relative w-full bg-white py-24">
      {/* Blue Background */}
      <div className="absolute inset-0 mt-105 h-[260px] bg-[#0b74c9] w-full" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#000000]">
            Our ROI driven Services for both Ecommerce as well as
          </h2>
          <h3 className="text-3xl font-bold text-blue-600 mt-1">
            Lead Generation Businesses!
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Honesty, 100% transparency and Data-Driven Approach is how we operate
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 flex flex-col w-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 sm:hover:shadow-2xl sm:hover:border-green-500"
            >
              <img
                src={`${import.meta.env.BASE_URL}services/${s.logo}`}
                alt={s.title}
                className="mx-auto h-30 mb-4"
              />

              <h3 className="text-2xl font-bold text-[#0b74c9] mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">{s.desc}</p>

              <p className="font-bold text-xl mb-2">Start with...</p>
              <ul className="text-left text-gray-700 space-y-1 mb-6">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-[#0b74c9] text-lg">•</span> {item}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center mt-auto">
                <button className="px-5 py-2 rounded-full font-semibold cursor-pointer hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 transition-all duration-300">
                  Learn More..
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
