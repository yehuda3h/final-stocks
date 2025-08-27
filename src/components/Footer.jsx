import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white py-8 mt-8 px-4 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold mb-2">Home</h3>
          <ul>
            <li className="hover:underline">Shower Curtain</li>
            <li className="hover:underline">Desk Lamp</li>
            <li className="hover:underline">Double Bedding</li>
            <li className="hover:underline">And more...</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Clothing</h3>
          <ul>
            <li className="hover:underline">Polo Shirt</li>
            <li className="hover:underline">Basic T-Shirts</li>
            <li className="hover:underline">Men's Jeans</li>
            <li className="hover:underline">And more...</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Electronics</h3>
          <ul>
            <li className="hover:underline">10-inch Tablet</li>
            <li className="hover:underline">Smartphone Pro Max</li>
            <li className="hover:underline">Bluetooth Headphones</li>
            <li className="hover:underline">And more...</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Footwear</h3>
          <ul>
            <li className="hover:underline">House Slippers</li>
            <li className="hover:underline">Men's Sneakers</li>
            <li className="hover:underline">Women's Sandals</li>
            <li className="hover:underline">And more...</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Accessories</h3>
          <ul>
            <li className="hover:underline">Leather Wallet</li>
            <li className="hover:underline">Sunglasses</li>
            <li className="hover:underline">Backpack</li>
            <li className="hover:underline">And more...</li>
          </ul>
        </div>
      </div>

      {/* חלק תחתון עם אייקונים וזכויות יוצרים */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between container mx-auto">
        <p className="text-gray-400 text-sm">&copy; 2025 YourCompany. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-transform transform hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
