import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Ngenzi Fashion Logo" />
            <p className='w-full md:w-2/3 text-gray-600 mb-4'>
                Welcome to Ngenzi Fashion, your premier destination for contemporary style and quality fashion. We bring you the latest trends in men's, women's, and kids' fashion with the highest standards of quality and customer satisfaction.
            </p>
            <div className='flex gap-4'>
                <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors'>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors'>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors'>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors'>
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </div>

        <div className=''>
            <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li><Link to="/" className='hover:text-gray-800 transition-colors'>Home</Link></li>
                <li><Link to="/about" className='hover:text-gray-800 transition-colors'>About Us</Link></li>
                <li><Link to="/collection" className='hover:text-gray-800 transition-colors'>Collection</Link></li>
                <li><Link to="/contect" className='hover:text-gray-800 transition-colors'>Contact</Link></li>
                <li><Link to="/cart" className='hover:text-gray-800 transition-colors'>Cart</Link></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CUSTOMER SERVICE</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li><Link to="/order" className='hover:text-gray-800 transition-colors'>Track Order</Link></li>
                <li><Link to="/placeOrder" className='hover:text-gray-800 transition-colors'>Place Order</Link></li>
                <li><a href="#" className='hover:text-gray-800 transition-colors'>Shipping Info</a></li>
                <li><a href="#" className='hover:text-gray-800 transition-colors'>Returns & Exchanges</a></li>
                <li><a href="#" className='hover:text-gray-800 transition-colors'>Size Guide</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li className='flex items-center gap-2'>
                    <i className="fas fa-phone"></i>
                    <span>+1 (555) 123-4567</span>
                </li>
                <li className='flex items-center gap-2'>
                    <i className="fas fa-envelope"></i>
                    <span>info@ngenzifashion.com</span>
                </li>
                <li className='flex items-center gap-2'>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>123 Fashion Street, Style City, SC 12345</span>
                </li>
                <li className='flex items-center gap-2'>
                    <i className="fas fa-clock"></i>
                    <span>Mon-Fri: 9AM-6PM</span>
                </li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <div className='py-5 text-sm text-center text-gray-600'>
          <p>&copy; 2025 Ngenzi Fashion. All Rights Reserved.</p>
          <div className='flex justify-center gap-6 mt-2'>
            <a href="#" className='hover:text-gray-800 transition-colors'>Privacy Policy</a>
            <a href="#" className='hover:text-gray-800 transition-colors'>Terms of Service</a>
            <a href="#" className='hover:text-gray-800 transition-colors'>Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
