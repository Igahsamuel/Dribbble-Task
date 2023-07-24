import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import StarRating from "../components/StarRating";
import { RiSubtractFill } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";
import Spinner from "../components/Spinner";
function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  // const product = products.find((item) => {
  //   return item.id === parseInt(id);
  // });
  // console.log(product);
  const [color, setColor] = useState(null);
  const [colorBackground, setColorBackground] = useState(null);
  const [countItem, setCountItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = products.find((item) => {
        return item.id === parseInt(id);
      });
      setProduct(product);
      setLoading(false);
    };
    fetchProduct();
  }, [id, products]);
  const changeBorder = (index) => {
    setColor(index);
  };
  const countIncrement = () => {
    setCountItem(countItem + 1);
  };
  const countDecrement = () => {
    if (countItem > 0) {
      setCountItem(countItem - 1);
    }
  };
  const changeBackground = (index) => {
    setColorBackground(index);
  };
  if (loading) {
    return <Spinner />;
  }
  if (!product) {
    return <div>No product found.</div>;
  }
  const { title, image, description, price, rating, count } = product;
  return (
    <main>
      <div className="flex items-center justify-center lg:flex-row flex-col">
        <div className="p-5">
          <div className="border-2 py-12 px-3">
            <img src={image} alt="" className="lg:max-w-[380px]  h-auto" />
          </div>
          <div className="flex my-4 justify-evenly flex-wrap">
            <img
              src={image}
              alt=""
              className="max-w-[100px] border-2 rounded-lg"
            />
            <img
              src={image}
              alt=""
              className="max-w-[100px] border-2 rounded-lg"
            />
            <img
              src={image}
              alt=""
              className="max-w-[100px] border-2 rounded-lg"
            />
            <img
              src={image}
              alt=""
              className="max-w-[100px] border-2 rounded-lg"
            />
          </div>
        </div>
        <div className="ml-6 md:px-14 xl:px-32 px-none">
          <h2 className="font-bold text-[20px] md:text-[30px] text-center md:text-none ">
            {title}
          </h2>
          <p>{description}</p>
          <div className="flex my-2">
            <StarRating rating={rating.rate} />(<p>{rating.count}</p>)
          </div>
          <hr />
          <div className="my-4">
            <p>
              ${price} or {price / 6}/month
            </p>
            <p>Suggest payments with 6 months special financing</p>
          </div>
          <hr />
          <div className="my-4">
            <p>Choose a Color</p>
            <div className="flex items-center">
              <button
                className={`border-2 rounded-full max-w-[300px] w-8 h-8 ${
                  color === 1 ? "border-green-900" : ""
                }`}
                onClick={() => changeBorder(1)}
              ></button>
              <button
                className={`border-2 rounded-full max-w-[300px] w-8 h-8 ml-4 bg-blue-400 ${
                  color === 2 ? "border-green-900" : ""
                }`}
                onClick={() => changeBorder(2)}
              ></button>
              <button
                className={`border-2 rounded-full max-w-[300px] w-8 h-8 ml-4 bg-red-600 ${
                  color === 3 ? "border-green-900" : ""
                }`}
                onClick={() => changeBorder(3)}
              ></button>
              <button
                className={`border-2 rounded-full max-w-[300px] w-8 h-8 ml-4 bg-orange-600 ${
                  color === 4 ? "border-green-900" : ""
                }`}
                onClick={() => changeBorder(4)}
              ></button>
              <button
                className={`border-2 rounded-full max-w-[300px] w-8 h-8 ml-4 bg-black ${
                  color === 5 ? "border-green-900" : ""
                }`}
                onClick={() => changeBorder(5)}
              ></button>
            </div>
          </div>
          <hr />
          <div className="flex my-4">
            <div className="flex items-center border-2 rounded-3xl py-3 px-5 bg-gray-100 text-green-900">
              <RiSubtractFill className="mr-5 " onClick={countDecrement} />
              {countItem}
              <BsPlus className="ml-5" onClick={countIncrement} />
            </div>
            <p className="ml-5">
              Only <span className="text-orange-500">12 items</span> Left!{" "}
              <br /> Dont miss it
            </p>
          </div>
          <div className="flex">
            <button
              className={`border rounded-3xl px-8 py-3 mr-9 ${
                colorBackground === 1
                  ? "bg-green-900 text-white"
                  : "text-green-900 border-green-900"
              }`}
              onClick={() => changeBackground(1)}
            >
              Buy Now
            </button>
            <button
              className={`border rounded-3xl px-8 py-3  ${
                colorBackground === 2
                  ? "bg-green-900 text-white"
                  : "text-green-900 border-green-900"
              }`}
              onClick={() => changeBackground(2)}
            >
              Add to Cart
            </button>
          </div>
          <div className="border-2 rounded-lg p-3 my-5">
            <div className="flex mb-2">
              <CiDeliveryTruck className="mt-1 text-orange-600" />
              <div>
                <h2 className="font-bold">Free Delivery</h2>
                <p>
                  <u>Enter your portal code for Delivery Availability</u>
                </p>
              </div>
            </div>
            <hr />
            <div className="flex py-2">
              <PiNotepadLight className="mt-1 text-orange-600" />
              <div>
                <h2 className="font-bold">Return Delivery</h2>
                <p>
                  Free 30days Delivery Returns. <u>Details</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
