import {use} from "react";

function Pricing({pricingPromise}) {
  const pricing = use(pricingPromise);

  return (
    <div className="py-20 md:py-30 bg-base-100 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">{pricing.title}</h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            {pricing.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`card w-full flex-1 max-w-sm md:w-96 shadow-xl rounded-2xl relative ${
                plan.name === "Pro"
                  ? "text-white bg-linear-to-br from-indigo-600 to-purple-600"
                  : "bg-base-100"
              }`}
            >
              <div className="card-body flex flex-col h-full">
                <div className="grow">
                  {/* Badge */}
                  {plan.label && (
                    <span className="badge bg-yellow-100 p-3 rounded-full absolute left-2/5 -top-4 text-sm text-red-700">
                      {plan.label}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold">{plan.name}</h2>

                  <p
                    className={`text-sm ${
                      plan.name === "Pro" ? "opacity-80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-sm md:text-lg opacity-80">
                      /{plan.pricePeriod}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 flex flex-col gap-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`size-4 me-2 inline-block ${
                            plan.name === "Pro" ? "text-white" : "text-success"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    className={`btn w-full rounded-full ${
                      plan.name === "Pro"
                        ? "bg-white text-purple-600 border-none hover:bg-gray-100"
                        : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                    }`}
                  >
                    {plan.button.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
