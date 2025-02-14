import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";

const Modal = ({ modal, setModal, counter, productName }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    counter: counter,
    productName: productName,
  });
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(flag);

  useEffect(() => {
    setFormData({ ...formData, counter });
  }, [counter]);

  useEffect(() => {
    flag && navigate("/shop");
    flag && alert("Order Placed Successfully !");
  }, [flag]);

  const sendMail = async () => {
    if (!formData.name || !formData.email || !formData.contact)
      return alert("Please Enter all fields in the form !");

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        formData,
        import.meta.env.VITE_PUBLIC
      );

      setFlag(true);
    } catch (error) {
      setFlag(false);
      console.log(error.message);
      alert("Something went wrong try again!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormData((prev) => {
      if (name === "name")
        return {
          ...prev,
          name: value,
        };
      if (name === "email")
        return {
          ...prev,
          email: value,
        };
      if (name === "contact")
        return {
          ...prev,
          contact: value,
        };
      if (name === "message")
        return {
          ...prev,
          message: value,
        };
    });
  };

  return (
    <div
      className={`fixed p-4 px-6 rounded-md shadow-lg top-1/3 left-1/3  z-10 w-1/4 h-fit bg-white flex flex-col items-end ${
        !modal && "hidden"
      } max-sm:w-3/4 max-sm:left-12`}
    >
      <div className="flex justify-between w-full">
        <p className="font-semibold text-lg text-[#0c96d4] font-['Manrope']">
          Place Order !
        </p>
        <p
          className="bg-red-500 text-white  text-lg w-fit h-fit font-semibold p-2 px-4 rounded-md hover:cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          X
        </p>
      </div>

      <form
        action=""
        className="flex w-full flex-col gap-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-slate-100 p-2"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          placeholder="Your Email Id"
          className="border border-slate-100 p-2"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="number"
          placeholder="Your Contact No."
          className="border border-slate-100 p-2"
          name="contact"
          onChange={handleChange}
          value={formData.contact}
        />
        <textarea
          name="message"
          id=""
          rows={4}
          className="border border-slate-100"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button
          type="submit"
          className="bg-[#0c96d4] text-white font-semibold p-3 rounded-lg"
          onClick={() => {
            setTimeout(() => {
              sendMail();
              !flag && setLoading(false);
            }, [3000]);
            setLoading(true);
          }}
        >
          {loading ? (
            <>
              <i className="fa-solid fa-spinner fa-spin-pulse mr-2"></i>Placing
              Inquiry{" "}
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
};

export default Modal;
