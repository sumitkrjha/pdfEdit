import React, { useState } from "react";

const Pricing = () => {
  const [planType, setPlanType] = useState("individual");

  const allFeatures = [
    "Basic editing",
    "Annotation tools",
    "Limited conversions",
    "Limited cloud storage",
    "Advanced editing",
    "Unlimited conversions",
    "More cloud storage",
    "OCR",
    "Team collaboration",
    "Advanced security features",
    "Priority customer support",
    "Custom branding",
    "Advanced analytics",
    "Dedicated account manager",
    "Bulk processing",
  ];

  const plans = {
    individual: {
      free: {
        name: "Free",
        price: "FREE",
        currency: "",
        billing_cycle: "always",
        description: "Ideal for occasional PDF users.",
        features: [
          "Basic editing",
          "Annotation tools",
          "Limited conversions",
          "Limited cloud storage",
        ],
        button: "Try for Free",
      },
      pro: {
        name: "Pro",
        price: 4.99,
        currency: "USD",
        billing_cycle: "monthly",
        description: "Ideal for regular PDF users who need more features.",
        features: [
          "Basic editing",
          "Annotation tools",
          "Limited conversions",
          "Limited cloud storage",
          "Advanced editing",
          "Unlimited conversions",
          "More cloud storage",
          "OCR",
        ],
        button: "Buy Now",
      },
    },
    business: {
      starter: {
        name: "Starter",
        price: 9.99,
        currency: "USD",
        billing_cycle: "yearly",
        description: "Ideal for small teams who need to collaborate on PDFs.",
        features: [
          "Basic editing",
          "Annotation tools",
          "Limited conversions",
          "Limited cloud storage",
          "Advanced editing",
          "Unlimited conversions",
          "More cloud storage",
          "OCR",
          "Team collaboration",
          "Advanced security features",
          "Priority customer support",
        ],
        button: "Buy Now",
      },
      pro: {
        name: "Pro",
        price: 14.99,
        currency: "USD",
        billing_cycle: "yearly",
        description: "Ideal for larger teams with advanced PDF needs.",
        features: [
          "Basic editing",
          "Annotation tools",
          "Limited conversions",
          "Limited cloud storage",
          "Advanced editing",
          "Unlimited conversions",
          "More cloud storage",
          "OCR",
          "Team collaboration",
          "Advanced security features",
          "Priority customer support",
          "Custom branding",
          "Advanced analytics",
          "Dedicated account manager",
          "Bulk processing",
        ],
        button: "Buy Now",
      },
    },
  };

  const renderFeatures = (planFeatures) => (
    <ul className="list-none mt-2">
      {allFeatures.map((feature, index) => (
        <li key={index} className="flex items-center">
          {planFeatures.includes(feature) ? (
            <span className="text-green-500 mr-2">✔</span>
          ) : (
            <span className="text-red-500 mr-2">✘</span>
          )}
          {feature}
        </li>
      ))}
    </ul>
  );

  const renderPlan = (plan) => (
    <div className="min-h-64 h-auto py-4 px-8 rounded-lg border-2 border-deepblue shadow-box m-4 hover:scale-105 ">
      <h1 className="text-4xl font-bold text-deepblue mb-2">{plan.name}</h1>
      <h3 className="text-xl font-semibold mb-5">{plan.description}</h3>
      {plan.price && (
        <p className="text-4xl font-bold mb-7">
          ${plan.price} {plan.currency}/{plan.billing_cycle}
        </p>
      )}
      {renderFeatures(plan.features)}
      {plan.name === "Free" ? (
        <a href="#featureTitle">
          <button className="mt-5 p-2 h-12 w-36 text-xl font-medium bg-deepblue text-white rounded-xl flex items-center justify-center hover:shadow-box hover:bg-white hover:text-deepblue hover:border-2 hover:border-deepblue hover:scale-105">
            {plan.button}
          </button>
        </a>
      ) : (
        <button className="mt-5 p-2 h-12 w-36 text-xl font-medium bg-deepblue text-white rounded-xl flex items-center justify-center hover:shadow-box hover:bg-white hover:text-deepblue hover:border-2 hover:border-deepblue hover:scale-105">
          {plan.button}
        </button>
      )}
    </div>
  );

  const buttonStyle =
    "px-4 py-2 font-bold text-2xl text-deepblue border-b-4 w-1/2";

  return (
    <div className="container my-14 mx-auto p-4 xl:px-32">
      <h1
        id="pricingTitle"
        className="text-4xl text-deepblue font-bold text-center mb-4"
      >
        Plans & Pricing
      </h1>
      <p className="mb-10 text-3xl text-deepblue text-center">
        We have a product for everyone. Unlock yours...
      </p>
      <div className="flex justify-center mb-8 ">
        <button
          className={`${buttonStyle}
            ${planType === "individual" ? "border-b-lightblue" : ""} `}
          onClick={() => setPlanType("individual")}
        >
          Individual Plans
        </button>
        <button
          className={`${buttonStyle} ${
            planType === "business" ? "border-b-lightblue" : ""
          } `}
          onClick={() => setPlanType("business")}
        >
          Business Plans
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(plans[planType]).map(([key, plan], index) => (
          <div key={index}>{renderPlan(plan)}</div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
