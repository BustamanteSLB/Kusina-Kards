// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Navbar Section */}
      <div className="bg-[#EF4444] flex flex-row items-center w-full p-4">
        <Image
          src="/kusina_kards_icon.svg"
          alt="Kusina Kards"
          width={50}
          height={50}
          className="brightness-0 invert"
        />
        <p className="font-bold text-xl ml-2 mr-auto text-white">
          Kusina Kards
        </p>
        <Link href="/recipes">
          <button className="bg-white px-6 md:px-8 py-4 rounded-3xl font-bold text-red-600 text-xs md:text-sm">
            Browse Recipes
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 sm:h-96">
        <Image
          src="/kusina_background.png"
          alt="Kusina Kards"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-[#B91C1C] font-bold text-2xl sm:text-5xl md:text-6xl">
            Lutong bahay, laging kasama!
          </h1>
          <p className="mt-2 font-bold text-[#4B5563] text-xs sm:text-xl">
            (Home-cooked food, always by your side.)
          </p>
          <Link href="/recipes">
            <button className="mt-6 bg-[#EF4444] px-6 py-2 md:px-10 md:py-4 rounded-full font-semibold text-white text-sm md:text-base">
              Get Cooking!
            </button>
          </Link>
        </div>
      </div>

      {/* Why Section */}
      <div className="flex flex-col items-center p-8 bg-white w-full">
        <h2 className="text-3xl font-bold text-[#B91C1C]">Why Kusina Kards?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gray-200 p-4 rounded-full">
              <span className="text-red-600 text-3xl">📝</span>
            </div>
            <h3 className="mt-4 font-bold text-lg md:text-xl text-gray-600">
              Simple & Clean
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-500">
              No complex layouts. Follow the steps for everyone.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gray-200 p-4 rounded-full">
              <span className="text-red-600 text-3xl">🖨️</span>
            </div>
            <h3 className="mt-4 font-bold text-lg md:text-xl text-gray-600">
              Printable & Digital
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-500">
              Download as an image or save to your gallery. Keep your recipes
              offline!
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gray-200 p-4 rounded-full">
              <span className="text-red-600 text-3xl">🇵🇭</span>
            </div>
            <h3 className="mt-4 font-bold text-lg md:text-xl text-gray-600">
              Authentic Flavors
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-500">
              Explore classic Filipino dishes - Adobo, Sinigang, Pinakbet.
            </p>
          </div>
        </div>
      </div>

      {/* What Our Users Say Section */}
      <div className="flex flex-col items-center p-8 bg-[#FEF3F1] w-full">
        <h2 className="text-3xl font-bold text-[#B91C1C]">
          What Our Users Say
        </h2>
        <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
          {/* Testimonial Card 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col justify-center lg:w-1/3">
            <p className="text-gray-700 italic">
              &quot;As a student, these cards are a lifesaver. The recipes are so
              easy to follow and they remind me of home. I can finally cook a
              decent meal in my dorm!&quot;
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-red-400 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mr-4">
                M
              </div>
              <div>
                <p className="font-bold text-gray-600">Maria A.</p>
                <p className="text-sm text-gray-500">College Student</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col justify-center lg:w-1/3">
            <p className="text-gray-700 italic">
              &quot;Kusina Kards has made meal prep so much easier for my family. The
              printable cards are great for my kids! On the weekends, my kids
              love picking what we're going to make.&quot;
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mr-4">
                J
              </div>
              <div>
                <p className="font-bold text-gray-600">Joseph S.</p>
                <p className="text-sm text-gray-500">Busy Parent</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col justify-center lg:w-1/3">
            <p className="text-gray-700 italic">
              &quot;I've always wanted to try cooking Filipino food. Your site made
              it so easy and approachable. The adobo recipe was a huge hit at my
              last dinner party!&quot;
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-green-400 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mr-4">
                L
              </div>
              <div>
                <p className="font-bold text-gray-600">Lisa W.</p>
                <p className="text-sm text-gray-500">Home Cook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Cook Section */}
      <div className="flex flex-col items-center p-8 bg-[#FEF3F1] w-full text-center">
        <h2 className="text-3xl font-bold text-[#B91C1C]">Ready to Cook?</h2>
        <p className="mt-2 text-gray-700">
          Start your culinary journey with authentic Filipino flavors.
        </p>
        <Link href="/recipes">
          <button className="mt-6 bg-[#EF4444] text-white px-8 py-4 rounded-full font-semibold">
            View All Recipes
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#F3F4F6] w-full text-center py-4 text-sm text-gray-500">
        © 2025 Kusina Kards. All rights reserved.
      </footer>
    </div>
  );
}
