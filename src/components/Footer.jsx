import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              Learn more about our company and our mission.
            </p>
            <Link href="/AbouttUs" className="text-blue-500 hover:text-blue-400 text-sm">
              Read More
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/Services" className="hover:text-blue-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-blue-500">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-blue-500">
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-blue-500">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Portfolio</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/Portfolio" className="hover:text-blue-500">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/Portfolio" className="hover:text-blue-500">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/Portfolio" className="hover:text-blue-500">
                  Client Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;