"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img from "@/public/img/comb1.jpg";
import img from "@/public/img/color.jpg";
import image from "@/public/img/combs.jpg";
import Imgs from "@/public/img/combs1.jpg";
import Images from "@/public/img/marc-bossow-XQVCKGoekYg-unsplash.jpg";
import images from "@/public/img/scrunchies1.jpg";
import prod from "@/public/img/combs2.jpg";
import Imae from "@/public/img/scrunchies2.jpg";

const products = [
    { src: img, alt: "Colorful scrunchies", title: "Satin Scrunchies" },
    { src: image, alt: "Elegant combs", title: "Decorative Combs" },
    { src: Img, alt: "Hair accessories", title: "Premium Combs" },
    { src: Imae, alt: "Hair accessories", title: "Silk Scrunchies" },
    { src: Imgs, alt: "Hair accessories", title: "Designer Combs" },
    { src: Images, alt: "Hair accessories", title: "Hair Accessories" },
    { src: images, alt: "Hair accessories", title: "Velvet Scrunchies" },
    { src: prod, alt: "Hair accessories", title: "Luxury Combs" },
];

export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(4);

    // Handle responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 768) {
                setItemsPerView(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(3);
            } else {
                setItemsPerView(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, products.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section id="products" className="scroll-mt-24 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 sm:py-16 lg:py-24">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Our Beautiful Collection
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                        Premium scrunchies, combs, and accessories to elevate your everyday style
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative mb-12">
                    {/* Navigation Buttons */}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Previous products"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {currentIndex < maxIndex && (
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Next products"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Products Slider */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out gap-3 sm:gap-4 lg:gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            }}
                        >
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer hover:shadow-xl transition-shadow flex-shrink-0"
                                    style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)` }}
                                >
                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="font-semibold text-sm sm:text-base">{product.title}</p>
                                            <p className="text-xs sm:text-sm">View on Instagram</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentIndex ? "bg-pink-600 w-8" : "bg-gray-300"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center space-y-4">
                    {/* Primary - WhatsApp */}
                    <a
                        href="https://wa.me/2348012345678?text=Hi!%20I%20saw%20your%20products%20and%20I'm%20interested"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-base sm:text-lg transition-colors shadow-lg"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Order on WhatsApp
                    </a>

                    {/* Secondary - Social Links */}
                    <p className="text-gray-600 text-sm sm:text-base">
                        Or follow us on
                        <a href="https://instagram.com/yourhandle" className="text-pink-600 hover:text-pink-700 font-medium mx-1">
                            Instagram
                        </a>
                        and
                        <a href="https://facebook.com/yourpage" className="text-blue-600 hover:text-blue-700 font-medium mx-1">
                            Facebook
                        </a>
                        for daily updates
                    </p>
                </div>
            </div>
        </section>
    );
}