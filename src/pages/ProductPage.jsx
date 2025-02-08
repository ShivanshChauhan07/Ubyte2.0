import React, { useState } from "react";
import ProductCarousel from "../components/productPage/ProductCarousel";
import { useParams } from "react-router";
import productData from "../utils/productData";

const ProductPage = () => {
  const { id } = useParams();
  const product = productData.filter((item) => item.id === parseInt(id))[0];
  const [counter, setCounter] = useState(0);
  const [selection, setSelection] = useState(0);
  const [selectProduct, setSelectProduct] = useState(product.img);

  return (
    <>
      <section className="flex px-28 mt-4 gap-x-4 font-['Manrope']">
        <div className="basis-1/2">
          <img src={selectProduct} alt="" className="w-full h-3/4" />
          <ProductCarousel
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
          />
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-3xl font-semibold text-[#343f52]">
              Larger Minimal Wooden Chair
            </h3>
            <p className="text-[#0c96d4] font-semibold text-xl">
              ${product.price}
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-[#60697b]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti quibusdam doloribus placeat voluptat
            </p>
            <div className="my-3">
              <span
                className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-l-full select-none hover:cursor-pointer"
                onClick={() => {
                  counter && setCounter(counter - 1);
                }}
              >
                -
              </span>
              <input className="w-10 text-center" type="text" value={counter} />
              <span
                className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-r-full select-none hover:cursor-pointer"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </span>
            </div>
            <button className="bg-[#0c96d4] text-white font-medium w-3/4 p-3 rounded-sm my-4 hover:bg-[#327493] hover:text-white">
              Send Your Demand
            </button>
            <div>
              <h3 className="text-[#666666] my-2 ">
                <span className="font-semibold">Barcode :</span> 565461
              </h3>
              <h3 className="text-[#666666] my-2 ">
                <span className="font-semibold">Sky:</span> 4420
              </h3>
              <h3 className="text-[#666666] my-2 ">
                <span className="font-semibold">Vendor:</span> Belo
              </h3>
              <h3 className="text-[#666666] my-2">
                <span className="font-semibold">Type:</span> Sofa
              </h3>
            </div>
            <h4>Also CheckOut On </h4>
            <div className="flex gap-x-8">
              <figure className="hover:cursor-pointer">
                {" "}
                <img
                  className="w-20 h-10 rounded-md border-2 border-slate-100 "
                  src="/productPage/amazon.jpg"
                  alt=""
                />
              </figure>
              <figure className="hover:cursor-pointer">
                {" "}
                <img
                  className="w-20 h-10 rounded-md"
                  src="/productPage/Electronic.webp"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f8fc] px-28">
        <div className="flex justify-around p-4">
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 0 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(0)}
          >
            Description
          </h2>
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 1 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer  hover:text-[#0c96d4] hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(1)}
          >
            Product Reviews
          </h2>
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 2 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer hover:text-[#0c96d4] hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(2)}
          >
            Additional Info
          </h2>
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 3 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer hover:text-[#0c96d4] hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(3)}
          >
            Custom Content
          </h2>
        </div>
        <div>
          <div className={selection === 0 ? "p-4" : "hidden"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti quibusdam doloribus placeat voluptat1 Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Temporibus tempora placeat
              nobis atque suscipit qui sunt? Beatae quod repellendus eius
              nesciunt, pariatur libero veniam voluptatum quas minima laudantium
              porro dolores. Esse laudantium corrupti incidunt provident
              consequatur nesciunt nam reprehenderit, nostrum odio alias
              distinctio sit quasi nemo totam eius tempora tenetur. Laudantium
              quo accusantium unde quos debitis quaerat earum alias mollitia!
              Aliquid ducimus nesciunt natus facilis quam, asperiores rem
              doloribus dolorum non perspiciatis ipsam ut harum impedit ullam a
              libero vero deleniti eligendi. In nisi quos iste possimus deserunt
              dolores odio. Nulla magnam, officiis sed quia totam sit quidem
              unde placeat deserunt! Molestiae animi culpa obcaecati voluptate
              voluptatibus, delectus rem ad, aut impedit, commodi sapiente
              deleniti? Facere, fuga dolorum. Officiis, amet! Temporibus dolor
              rem quae exercitationem aliquam praesentium odio deserunt sapiente
              animi ex facere non delectus quis aperiam dolore aliquid facilis
              eaque laboriosam, eligendi eius tenetur quam consequuntur sequi!
              Esse, non. Error, accusantium libero sapiente recusandae incidunt,
              obcaecati harum quidem modi quaerat cum similique amet, est totam?
              Nemo vel iusto porro vitae nam, non molestiae quae inventore
              placeat, nisi ea quaerat.
            </p>
          </div>
          <div
            className={selection === 1 ? "border-2 border-[#8597e0]" : "hidden"}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti quibusdam doloribus placeat voluptat2
            </p>
          </div>
          <div
            className={selection === 2 ? "border-2 border-[#8597e0]" : "hidden"}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti quibusdam doloribus placeat voluptat3
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
