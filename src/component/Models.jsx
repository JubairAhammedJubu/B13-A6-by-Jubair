import {use, useState} from "react";
import ModelCard from "./ModelCard";
import Cart from "./Cart";

const Models = ({modelPromise, carts, setCarts}) => {
  const models = use(modelPromise);
  const [activeTab, setActiveTab] = useState("model");

  return (
    <div className="py-10 md:py-30 max-w-[1200px] mx-auto">
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-extrabold">Premium Digital Tools</p>
        <br />
        <p className="text-xs md:text-base md:font-medium">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center gap-1 py-5 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 border-2 ${
            activeTab === "model"
              ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold border-transparent"
              : "border-gray-200 text-gray-500"
          }`}
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          checked={activeTab === "model"}
          readOnly
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 border-2 ${
            activeTab === "cart"
              ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold border-transparent"
              : "border-gray-200 text-gray-500 "
          }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
          checked={activeTab === "cart"}
          readOnly
        />
      </div>

      {activeTab === "model" && (
        <div className="grid px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
    </div>
  );
};

export default Models;
