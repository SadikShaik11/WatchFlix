import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-5 mt-5">
      <div className="max-w-2xl py-4 mx-auto animate-text bg-gradient-to-r from-black via-red-500 to-white bg-clip-text text-transparent xs:text-xl  md:text-5xl font-black">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our app</h3>
          <p>Stream movies anywhere for free.</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:justify-center flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
          <p className="order-2 md:order-1 mt-8 md:mt-0">Sadik Shaik, 2024.</p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
          <span className="pb-2 text-xs"> sadikshaik139@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
