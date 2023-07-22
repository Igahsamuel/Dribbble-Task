import { BsTelephone, BsCartPlus } from "react-icons/bs";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";
function Header() {
  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        // console.log(res.data);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchSearch();
  }, []);
  const handleSearch = (e) => {
    // console.log("handleSearch");
    setSearchQuery(e.target.value);
  };
  const filteredProducts = product.filter((product) => {
    // console.log("filtering products");
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  // console.log({ filteredProducts });
  const clearSearch = () => {
    setSearchQuery("");
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container-2xl mx-auto  ">
        <div className="flex items-center md:justify-between bg-green-950 text-white mx-auto p-3 flex-wrap justify-center">
          <p className="flex items-center ml-5 text-[12px]">
            {" "}
            <BsTelephone className="mr-3" /> +001234567890
          </p>
          <div className="hidden md:block">
            <p className="text-[12px]">
              <span className="mr-3">Get 50% off on Selected items</span> |{" "}
              <span className="ml-4">Shop Now</span>
            </p>
          </div>
          <div className="flex justify-between md:mr-[50px] ml-[50px]">
            <p className="mr-[10px] flex items-center">
              <span className="text-[12px] mr-4">Eng</span>{" "}
              <IoIosArrowDown className="mt-1" />
            </p>
            <p className="flex items-center">
              <span className="text-[12px] mr-4">Location</span>{" "}
              <IoIosArrowDown className="mt-1" />
            </p>
          </div>
        </div>
        <nav className="flex justify-between p-4 mx-auto relative z-1">
          <Link
            to="/"
            className="flex text-[26px] items-center font-bold text-green-950"
            onClick={clearSearch}
          >
            <TiShoppingCart />
            <h1 to="/" className="text-[24px]">
              Shopcart
            </h1>
          </Link>
          <ul className="hidden md:flex items-center justify-evenly text-green-950">
            <li className="flex items-center">
              <span>Category</span> <IoIosArrowDown className="ml-2" />
            </li>
            <li className="px-4">Deals</li>
            <li className="px-4">What's New</li>
            <li className="px-4">Delivery</li>
          </ul>
          <div className="hidden lg:block relative menu-container">
            <input
              type="text"
              className=" border-2 w-[350px] p-2 rounded-3xl"
              placeholder="Search Product"
              value={searchQuery}
              onChange={handleSearch}
            />
            {/* {filteredProducts.length} */}
            {searchQuery && (
              <ul className="absolute top-full left-0 z-20 bg-white border border-gray-300 rounded py-1 px-2 mt-2 menu-item">
                {filteredProducts.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`}>
                    <li
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="cursor-pointer"
                    >
                      {p.title}
                    </li>
                  </Link>
                ))}
                {filteredProducts.length === 0 && <p>No Product found</p>}
              </ul>
            )}
            <IoIosSearch
              className="absolute top-[15px] right-[20px] w-[full]"
              onClick={clearSearch}
            />
          </div>
          <div className=" hidden md:flex">
            <div className="flex items-center text-green-950 mr-5">
              <GoPerson className="text-[20px] mr-2" />
              <p>Account</p>
            </div>
            <div className="flex items-center text-green-950 pr-5">
              <BsCartPlus className="text-[20px] mr-2" />
              <p>Cart</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
