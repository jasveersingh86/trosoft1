import React from "react";

const reviews = [
  {
    name: "Amit Sharma",
    role: "Founder, StartupX",
    image: `${import.meta.env.BASE_URL}reviews/review1.avif`,
    review:
      "Trosoft transformed our online presence completely. Their team is proactive, transparent, and focused on real results.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Marketing Head, Growthify",
    image: `${import.meta.env.BASE_URL}reviews/neha.avif`,
    review:
      "Working with Trosoft was smooth and professional. We saw measurable growth within weeks.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CEO, TechNova",
    image: `${import.meta.env.BASE_URL}reviews/review3.webp`,
    review:
      "Trosoft doesn’t just deliver services — they deliver outcomes. Highly recommended!",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-green-600 font-semibold mb-2">
            REVIEWS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What our clients say about <span className="text-blue-600">Trosoft</span>
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{item.review}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t pt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
