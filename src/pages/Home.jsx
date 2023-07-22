import React, { useContext } from "react";
import HeroImg from "../components/HeroImg";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";


function Home() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <>
      {/* // Hero Image section */}
      <HeroImg />
      {/* // */}
      <div className="py-16">
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((product, id) => {
                return <Product product={product} key={id} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
