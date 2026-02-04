'use client';

import { useState } from 'react';
import Link from "next/link";
import Button from "./Button";

export default function Header(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 mb-8 sm:mb-10 md:mb-0 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-13">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-2">
                            <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-b from-rose-600 to-rose-400 rounded-md sm:rounded-md border border-purple-200 flex items-center justify-center">
                                <span className="text-white font-bold text-lg sm:text-xl">JP</span>
                            </div>
                            <span className="text-md sm:text-xl font-semibold text-gray-900 outline-none">JPerfect Hair Accessories</span>
                        </Link>
        
                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                                Home
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                                About JP
                            </a>
                            <a href="#products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                                Products
                            </a>
                            <a href="#location" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                                Our Location
                            </a>
                            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                                Contact Us
                            </a>
                        </nav>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            <a href="tel:+2347040558255">
                                <Button 
                                    variant="Primary"
                                    className="px-[18px] h-[30px] !text-[12px] !font-normal text-white">
                                    Call Us Now
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-50 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-b from-rose-600 to-rose-400 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-sm">JP</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Menu</span>
                    </div>
                    <button 
                        onClick={closeMobileMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex flex-col p-4">
                    <a 
                        href="#hero" 
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </a>
                    
                    <a 
                        href="#about" 
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        About JP
                    </a>

                    <a 
                        href="#products" 
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Products
                    </a>

                    <a 
                        href="#location" 
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Our Location
                    </a>

                    <a 
                        href="#contact" 
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                    </a>
                </nav>

                {/* Sidebar Footer with CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
                    {/* <Button 
                        variant="Primary"
                        className="w-full h-12 text-sm font-medium text-white"
                        onClick={closeMobileMenu}
                    >
                        Contact Us Now
                    </Button> */}
                    
                    {/* Quick Contact Icons */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <a 
                            href="https://wa.me/2347040558255?text=Hi!%20I'm%20interested%20in%20your%20hair%20accessories" 
                            className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </a>
                        <a 
                            href="tel:+2347040558255" 
                            className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                            aria-label="Call"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}