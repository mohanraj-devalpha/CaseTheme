import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="flex justify-center px-4 pb-24 pt-12">
      <div className="grid md:grid-cols-2 shadow-2xl w-full max-w-[1140px] md:px-14 px-6 pt-[65px] pb-[100px]">
        <div className="flex flex-col gap-3 text-sm px-4">
          <h2 className="font-bold text-3xl md:text-4xl text-[#092A48]">
            Request a Call back
          </h2>
          <p className="text-base text-[#6A6A6A]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequinesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>
        </div>
        <div className="mt-7 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="fullname">FULLNAME</label>
              <input
                type="text"
                id="fullname"
                {...register("fullname", { required: "Full name is required", maxLength: {
                  value: 10,
                  message: "Full name cannot exceed 10 characters"
                }})}
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
              {errors.fullname && (
                <span className="text-red-500 text-xs">
                  {errors.fullname.message}
                </span>
              )}
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="lastname">LASTNAME</label>
              <input
                type="text"
                id="lastname"
                {...register("lastname", { required: "Last name is required", maxLength:{
                  value: 5,
                  message:"Last name cannot exceed the 5 char"
                } })}
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
              {errors.lastname && (
                <span className="text-red-500 text-xs">
                  {errors.lastname.message}
                </span>
              )}
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="phone">PHONE NO.</label>
              <input
                type="text"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+91\s\d{10}$/ ,
                    message: "Phone must be 10 digits with Indian pincode",
                  },
                })}
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="business">BUSINESS TYPE</label>
              <select
                id="business"
                {...register("business", {
                  required: "Please select a business type",
                })}
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10 text-black appearance-none"
              >
                <option value="">Business Types</option>
                <option value="sole">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
              </select>
              {errors.business && (
                <span className="text-red-500 text-xs">
                  {errors.business.message}
                </span>
              )}
            </div>
            <input
              type="submit"
              className="border col-span-1 md:col-span-2 text-white py-2 px-10 mt-3 justify-center font-medium cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-l"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
