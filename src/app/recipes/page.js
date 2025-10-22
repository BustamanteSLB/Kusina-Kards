"use client";

import Image from "next/image";
import Link from "next/link";

const recipes = [
  {
    name: "Chicken Adobo",
    image: "/adobo_image.png",
    description:
      "A popular Filipino dish cooked with chicken, soy sauce, vinegar, garlic, and spices. It is often considered the national dish of the Philippines and is enjoyed by people of all ages.",
    isFree: true,
  },
  {
    name: "Kare-kare",
    image: "/karekare_image.png",
    description:
      "A Filipino stew made with a rich, thick, peanut-based sauce. It often contains oxtail, beef tripe, and vegetables such as eggplant, banana blossom, and string beans.",
    isFree: true,
  },
  {
    name: "Pork Lechon",
    image: "/lechon_image.png",
    description:
      "A whole roasted pig cooked over charcoal. It is often seasoned with a mix of spices and herbs before being roasted.",
    isFree: true,
  },
  {
    name: "Pancit",
    image: "/pancit_image.png",
    description:
      "A noodle dish stir-fried with vegetables, meat, and/or seafood. It is commonly served during special occasions such as birthdays and fiestas.",
    isFree: false,
    price: 150,
  },
  {
    name: "Sinigang",
    image: "/sinigang_image.png",
    description:
      "A sour soup typically cooked with pork, shrimp, or fish and various vegetables such as kangkong (water spinach), radish, tomatoes, and green chili peppers.",
    isFree: false,
    price: 200,
  },
  {
    name: "Chicken Ginger Soup",
    image: "/chicken_ginger_soup_image.png",
    description: `Also known as "Tinolang Manok". It is a simple yet flavorful Filipino chicken soup made with ginger, garlic, onions, fish sauce, and chili leaves or malunggay leaves.`,
    isFree: false,
    price: 100,
  },
];

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
    <div className="p-6 flex flex-col flex-grow">
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
        <Image
          src={recipe.image}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center">
        <h3 className="font-bold text-xl text-[#EF4444]">{recipe.name}</h3>
        {recipe.isFree ? (
          <span className="ml-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            FREE
          </span>
        ) : (
          <Image
            src="/premium.svg"
            alt="Premium"
            width={24}
            height={24}
            className="ml-2"
          />
        )}
      </div>
      <p className="mt-2 text-gray-600 text-sm flex-grow">
        {recipe.description}
      </p>
      <div className="mt-4">
        {recipe.isFree ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => console.log(`View Recipe for ${recipe.name}`)}
              className="flex-1 bg-[#EF4444] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center"
            >
              <Image
                src="/show_eye.svg"
                alt="view-recipe"
                width={24}
                height={24}
                className="brightness-0 invert mr-2"
              />
              View Recipe
            </button>
            <button
              onClick={() => {
                console.log(`Downloading recipe: ${recipe.name}!`);
                window.alert(`Downloading recipe: ${recipe.name}!`);
              }}
              className="bg-green-500 text-white p-2 rounded-lg"
            >
              <Image
                src="/download.svg"
                alt="download"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </button>
            <button
              onClick={() => {
                console.log(`Printing recipe: ${recipe.name}!`);
                window.alert(`Printing recipe: ${recipe.name}!`);
              }}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              <Image
                src="/print.svg"
                alt="print"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              console.log(`Purchased ${recipe.name} for ₱${recipe.price}!`);
              window.alert(
                `You purchased our ${recipe.name} recipe for ₱${recipe.price}! Thank you for your support!`
              );
            }}
            className="w-full bg-[#EF4444] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center"
          >
            <Image
              src="/cart.svg"
              alt="Purchase"
              width={24}
              height={24}
              className="brightness-0 invert mr-1"
            />
            Purchase (₱{recipe.price})
          </button>
        )}
      </div>
    </div>
  </div>
);

export default function RecipesPage() {
  return (
    <div className="flex flex-col items-center bg-[#FEF3F1] min-h-screen">
      {/* Navbar Section */}
      <div className="bg-[#EF4444] flex flex-row items-center w-full p-4 shadow-md">
        <Link href="/" className="flex items-center">
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
        </Link>
        <div className="flex items-center ml-auto space-x-6">
          <Link
            href="#"
            className="font-semibold text-white hover:text-gray-200"
          >
            Pricing
          </Link>
          <button aria-label="Account">
            <Image
              src="/account.svg"
              alt="Account"
              width={40}
              height={40}
              className="brightness-0 invert"
            />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#B91C1C]">
          Filipino Food Recipes
        </h1>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              id="recipe-search"
              name="recipe-search"
              type="text"
              placeholder="Search for recipes..."
              className="w-full px-6 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-[#6B7280]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button className="p-2 rounded-full hover:bg-red-100">
                <Image
                  src="/search.svg"
                  alt="Search"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#F3F4F6] w-full text-center py-4 text-sm text-gray-500 mt-12">
        © 2025 Kusina Kards. All rights reserved.
      </footer>
    </div>
  );
}
