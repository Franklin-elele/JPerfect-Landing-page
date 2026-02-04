import React from "react";
import Image from "next/image";
import Img from "@/public/img/AboutUs.png";


export default function AboutUs() {
    return (
        <section id="about" className="scroll-mt-24 bg-[#FFFFFF]">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 sm:py-16 lg:py-24">
                <div className="w-full">
                    {/* About Content */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
                        {/* Left - Illustration/Image */}
                        <div className="relative hidden lg:block order-2 lg:order-1">
                            <div className="relative bg-[#FFF8F9] backdrop-blur-sm rounded-full aspect-square flex items-center justify-center p-8 lg:p-12">
                                <Image
                                    src={Img}
                                    alt="Happy customers with beautiful hair"
                                    className="w-full h-full object-contain">
                                </Image>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                                    We're here to help you express your beauty
                                </h2>
                                <p className="text-[#6B7280] text-sm sm:text-base lg:text-lg leading-relaxed">
                                    Why settle for ordinary when you can shine extraordinary? We're a Lagos-based hair accessories haven that brings you premium quality pieces to complement your unique style. From traditional gele to modern hair clips, we celebrate every woman's crown with authentic, affordable accessories.
                                </p>
                            </div>

                            <div className="lg:hidden order-2 lg:order-1">
                                <div className="relative bg-[#FFF8F9] backdrop-blur-sm rounded-full aspect-square flex items-center justify-center p-8 lg:p-12">
                                    <Image
                                        src={Img}
                                        alt="Happy customers with beautiful hair"
                                        className="w-full h-full object-contain">
                                    </Image>
                                </div>
                            </div>

                            {/* Feature Grid - Desktop (hidden on mobile, visible on lg+) */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6">
                                {/* Feature 1 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">QUALITY</h3>
                                    <p className="text-sm text-gray-600">Premium materials that last and protect your natural hair</p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">AUTHENTIC</h3>
                                    <p className="text-sm text-gray-600">Genuine Nigerian-inspired designs for every occasion</p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">AFFORDABLE</h3>
                                    <p className="text-sm text-gray-600">Beautiful accessories that don't break the bank</p>
                                </div>
                            </div>

                            {/* Feature Cards - Mobile (visible on mobile, hidden on lg+) */}
                            <div className="w-full flex justify-center lg:hidden">
                                <div className="flex flex-col sm:flex-row gap-4 items-stretch max-w-5xl w-full">
                                    {/* Feature 1 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex-1 min-w-0">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-center">QUALITY</h3>
                                        <p className="text-sm text-gray-600 text-center">Premium materials that last and protect your natural hair</p>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex-1 min-w-0">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-center">AUTHENTIC</h3>
                                        <p className="text-sm text-gray-600 text-center">Genuine Nigerian-inspired designs for every occasion</p>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex-1 min-w-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-center">AFFORDABLE</h3>
                                        <p className="text-sm text-gray-600 text-center">Beautiful accessories that don't break the bank</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}