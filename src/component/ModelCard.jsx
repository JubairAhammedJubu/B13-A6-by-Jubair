import {useState} from "react";
import {toast} from "react-toastify";

const ModelCard = ({model, carts, setCarts}) => {
  const [isAdded, setAdded] = useState(false);

  const handleAdded = () => {
    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setAdded(true);
    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };


  const tagStyles = {
    bestseller: "bg-yellow-100 text-yellow-700",
    popular: "bg-purple-100 text-purple-700",
    new: "bg-green-100 text-green-700",
  };

  return (
    <div className="max-w-sm rounded-2xl border border-gray-200 p-6 relative bg-white">
      {/* Tag */}
      <div
        className={`absolute top-4 right-4 text-sm font-medium px-3 py-1.5 rounded-full ${tagStyles[model.tagType]}`}
      >
        {model.tag}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 border-gray-200">
        <img
          src={model.icon}
          alt={model.name}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-2">{model.name}</h3>

      {/* Description */}
      <p className="text-gray-500 mb-6">{model.description}</p>

      {/* Price */}
      <p className="text-3xl font-bold mb-6">
        ${model.price}
        <span className="text-base font-normal text-gray-500">
          /{model.period}
        </span>
      </p>

      {/* Features */}
      <ul className=" space-y-2 mb-6 text-gray-600">
        {model.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleAdded}
        className={`w-full rounded-full py-2 text-white transition ${
          isAdded
            ? "bg-green-500"
            : "bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-90 cursor-pointer"
        }`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;
