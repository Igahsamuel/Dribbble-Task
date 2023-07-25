import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineGift, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <hr />
        <div className="flex flex-col md:flex-row my-7 px-4 md:space-x-4">
          <div className="flex flex-col mr-4 md:w-1/4 ">
            <Link to="/" className="flex items-center font-bold text-green-950">
              <TiShoppingCart className="text-[26px] " />
              <h1 to="/" className="text-[24px] ml-2">
                Shopcart
              </h1>
            </Link>
            <p className="my-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="flex-1 px-4 md:w-1/4">
            <ul>
              <h2 className="font-bold mt-3">Department</h2>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Fashion
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Education Product
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Frozen Food
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Beverages
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Organic Grocery
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Office Supplies
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Beauty Products
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Books
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Electronics & Gadget
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Travel Accessories
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Fitness
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Sneakers
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Toys
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Furniture
              </li>
            </ul>
          </div>
          <div className="flex-1 px-4 md:w-1/4">
            <ul>
              <h2 className="font-bold mt-3 ">About Us</h2>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                About Shopcart
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Careers
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                News & Blog
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Help
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Press Center
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Shop By Location
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Shopcart Brands
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Affiliate & Partners
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Ideas & Guides
              </li>
            </ul>
          </div>
          <div className="flex-1 px-4 md:w-1/4">
            <ul>
              <h2 className="font-bold mt-3">Services</h2>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Gift Card
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Mobile App
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Shipping & Delivery
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Order Pickup
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Account Signup
              </li>
            </ul>
          </div>
          <div className="flex-1 px-4 md:w-1/4">
            <ul>
              <h2 className="font-bold mt-3">Help</h2>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Shopcart Help
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Returns
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Track Orders
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Contact Us
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Feedback
              </li>
              <li className="hover:text-pink-400 transition-transform ease-in-out duration-1000 transform hover:translate-x-10">
                Security & Fraud
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-col  md:flex-row justify-between mt-9 px-4">
          <div className="flex flex-wrap justify-between md:w-1/2 flex-col lg:flex-row">
            <div className="flex items-center mx-3 mb-2">
              <BiBriefcase className="text-pink-400 text-[25px] mr-3" />
              <p>Become Seller</p>
            </div>
            <div className="flex items-center mx-3 mb-2">
              <AiOutlineGift className="text-pink-400 text-[25px] mr-3" />
              <p>Gift Cards</p>
            </div>
            <div className="flex items-center mx-3 mb-2">
              <AiOutlineQuestionCircle className="text-pink-400 text-[25px] mr-3" />
              <p>Help Canter</p>
            </div>
          </div>
          <div className="md:w-1/2 text-sm md:text-base lg:flex lg:justify-between lg:ml-4">
            <p>Terms of service</p>
            <p>Privacy & Policy</p>
            <p>All Right reserved by Musemind | 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
