import React from "react";

const ServiceTemplate = () => {

  const services = [
    { id: 0, serviceIcon: "X", serviceHead: "Free Shipping", serviceParagraph: "A free trackable two days delivery service on all orders over $90." },
    { id: 1, serviceIcon: "A", serviceHead: "Money Back Guarantee", serviceParagraph: "We offer customers 100% money back guarantee on everything we sell." },
    { id: 2, serviceIcon: "Y", serviceHead: "Flexible Payment", serviceParagraph: "All orders placed before Sunday to Friday are dispatched same day." },
    { id: 3, serviceIcon: "Z", serviceHead: "Exchanges & Returns", serviceParagraph: "You have 30 days from the shipping date to return your purchase." },
  ]

  return (
    <>
      {services.map(({ id, serviceIcon, serviceHead, serviceParagraph }) => {
        return (
          <div key={id} className="serviceDiv">
            <i className="serviceIcon">{serviceIcon}</i>
            <h1 className="serviceHead">{serviceHead}</h1>
            <p className="serviceParagraph">{serviceParagraph}</p>
          </div>
        );
      })}
    </>
  );
}

export default ServiceTemplate;