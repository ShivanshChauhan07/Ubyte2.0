import React, { useEffect, useState } from "react";
//import ProductCarousel from "../components/productPage/ProductCarousel";
import { useParams } from "react-router";
import productData from "../utils/productData";
import ProductFeatures from "../components/productPage/ProductFeatures";
import PdfViewer from "../components/productPage/PdfViewer";
import Modal from "../components/productPage/Modal";
import Loading from "./Loading";

const ProductCarousel = React.lazy(() =>
  import("../components/productPage/ProductCarousel")
);
const ProductPage = () => {
  const { id } = useParams();
  const product = productData.filter((item) => item.id === parseInt(id))[0];
  const [counter, setCounter] = useState(0);
  const [selection, setSelection] = useState(0);
  const [modal, setModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState(product.img);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [500]);
  }, []);

  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className={`flex px-28 mt-8 gap-x-4 font-['Manrope']`}>
        <div>
          <Modal
            modal={modal}
            setModal={setModal}
            counter={counter}
            productName={product.name}
          />
        </div>
        <div className="basis-1/2">
          <img src={selectProduct} alt="" className="w-full h-[472px]" />
          <ProductCarousel
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
            imageAdd={product.images}
          />
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-3xl font-semibold text-[#343f52]">
              {product?.name}
            </h3>
            <p className="text-[#0c96d4] font-semibold text-xl">
              ${product?.price}
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-[#60697b]">{product.shortDesc}</p>
            <div className="my-3">
              <span
                className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-l-full select-none hover:cursor-pointer"
                onClick={() => {
                  counter && setCounter(counter - 1);
                }}
              >
                -
              </span>
              <input
                className="w-10 text-center"
                type="text"
                value={counter}
                readOnly={true}
              />
              <span
                className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-r-full select-none hover:cursor-pointer"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </span>
            </div>
            <button
              className="bg-[#0c96d4] text-white font-medium w-3/4 p-3 rounded-sm my-4 select-none hover:bg-[#327493] hover:text-white"
              onClick={() => {
                if (counter > 0) setModal(!modal);
                else alert("Please Select Your Quantity First !");
              }}
            >
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
                <span className="font-semibold">Vendor:</span> Ubyte
              </h3>
              <h3 className="text-[#666666] my-2">
                <span className="font-semibold">Type:</span> PCB
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
      <section className="bg-[#f7f8fc] px-28 my-10">
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
            Additional Info
          </h2>
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 2 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer hover:text-[#0c96d4] hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(2)}
          >
            Video Tutorial
          </h2>
          <h2
            className={`decoration-[#2d83ab] font-semibold text-lg ${
              selection == 3 && "text-[#0c96d4] underline underline-offset-4"
            } hover:cursor-pointer hover:text-[#0c96d4] hover:underline hover:underline-offset-4 `}
            onClick={() => setSelection(3)}
          >
            Product Reviews
          </h2>
        </div>
        <div>
          <div className={selection === 0 ? "p-4" : "hidden"}>
            <ProductFeatures feature={product?.desc?.features} />
            <p className="font-semibold text-2xl font-['Manrope'] text-[#0c96d4] text-center my-6">
              {product.endDesc}
            </p>
          </div>
          <div className={selection === 1 ? "p-4" : "hidden"}>
            <PdfViewer source={product.pdf} />
          </div>
          <div className={selection === 2 ? "p-4" : "hidden"}>
            <p className="font-semibold text-2xl font-['Manrope'] text-[#0c96d4] text-center my-6">
              Coming soon: Innovations that redefine awesome!
            </p>
          </div>
          <div className={selection === 3 ? "p-4" : "hidden"}>
            <p className="font-semibold text-2xl font-['Manrope'] text-[#0c96d4] text-center my-6">
              Ready for Some Positive Vibes 😍
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
