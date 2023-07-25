import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidHeart } from "react-icons/bi";
import StarRating from "./StarRating";
function Product({ product }) {
  //   destructuring product
  const { category, id, image, price, rating, title } = product;
  const [isLiked, setIsliked] = useState(false);
  const colorClicked = () => {
    setIsliked(!isLiked);
  };
  return (
    <div className="px-8 md:px-0">
      <div className="border border-gray-200 h-[300px] mb-4 relative overflow-hidden group  transition">
        <div className="w-full h-full flex items-center justify-center">
          {/* image */}
          <div className="w-[200px] flex justify-center items-center mx-auto">
            <img
              src={image}
              alt=""
              className="max-h-[180px] group-hover:scale-110 transition duration-300"
            />
          </div>
          {/* loveButton */}
          <div className="absolute top-0 right-0 p-2">
            <button>
              <div className="flex justify-center items-center w-12 h-12 rounded-3xl hover:bg-pink-200">
                <BiSolidHeart
                  className="text-3xl"
                  fill={isLiked ? "red" : "none"}
                  stroke={isLiked ? "none" : "black"}
                  strokeWidth={isLiked ? "0" : "2"}
                  onClick={colorClicked}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Link to={`/product/${id}`} className="flex justify-between">
            <h2 className="text-[13px] font-bold mr-5">{title}</h2>
            <p className="text-[13px] font-bold">${price}</p>
          </Link>
        </div>
        <div className="flex">
          <StarRating rating={rating.rate} />
          <p>({rating.count})</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
