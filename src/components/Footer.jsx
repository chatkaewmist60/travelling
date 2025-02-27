
const Footer = () => {
  return (
    <div className="bg-[#fdf7f4] py-10">
      <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-900">
        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Contact</h2>
          <p className="text-sm">
            328 Queensberry Street, North Melbourne VIC3051, Australia.
          </p>
          <p className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline">
            hi@viatours.com
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Tourz Reviews</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
            <li className="cursor-pointer hover:underline">Travel Guides</li>
            <li className="cursor-pointer hover:underline">Data Policy</li>
            <li className="cursor-pointer hover:underline">Cookie Policy</li>
            <li className="cursor-pointer hover:underline">Legal</li>
            <li className="cursor-pointer hover:underline">Sitemap</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">Get in Touch</li>
            <li className="cursor-pointer hover:underline">Help Center</li>
            <li className="cursor-pointer hover:underline">Live Chat</li>
            <li className="cursor-pointer hover:underline">How it Works</li>
          </ul>
        </div>

        {/* Newsletter & Apps Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Newsletter</h2>
          <p className="text-sm mb-2">
            Subscribe to the free newsletter and stay up to date
          </p>
          <div className="relative mt-3">
            <input
              type="email"
              placeholder="Your email address"
              className="border rounded-full w-full py-2 px-4 pr-12 text-sm outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">
              Send
            </button>
          </div>
          <h2 className="font-bold text-lg mt-6 mb-3">Mobile Apps</h2>
          <ul className="text-sm space-y-1">
            <li className="cursor-pointer hover:underline">iOS App</li>
            <li className="cursor-pointer hover:underline">Android App</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
