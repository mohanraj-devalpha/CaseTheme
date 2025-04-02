import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center px-4 pb-24">
      <div className="grid md:grid-cols-2 shadow-2xl w-full max-w-[1140px] md:px-14 px-6 pt-[65px] pb-[100px]">
        <div className="flex flex-col gap-3 text-sm px-4">
          <h2 className="font-bold text-3xl md:text-4xl text-[#092A48]">
            Request a Call back
          </h2>
          <p className="text-base text-[#6A6A6A]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequinesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>
        </div>
        <div className="mt-7 w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="fullname">FULLNAME</label>
              <input
                type="text"
                id="fullname"
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="lastname">LASTNAME</label>
              <input
                type="text"
                id="lastname"
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="phone">PHONE NO.</label>
              <input
                type="text"
                id="phone"
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10"
              />
            </div>
            <div className="flex flex-col font-normal space-y-2 text-sm">
              <label htmlFor="business">BUSINESS TYPE</label>
              <select
                id="business"
                className="border px-3 py-2 bg-[#EBEEF0] w-full h-10 text-black appearance-none"
              >
                <option value="">Business Types</option>
                <option value="sole">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
              </select>
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
