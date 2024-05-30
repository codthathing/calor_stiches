import React from "react";
import visa from "./Visa-Card.webp";
import master_card from "./Master-Card.webp";
import american_express from "./American-Express.webp";
import dinner_club from "./Dinner-Club.webp";
import discover from "./Discover.webp";


const Payment = () => {
  const paymentIcons = [
    {id: 0, paymentIcon: visa, paymentAlt: "visa"},
    {id: 1, paymentIcon: master_card, paymentAlt: "master_card"},
    {id: 2, paymentIcon: american_express, paymentAlt: "american_express"},
    {id: 3, paymentIcon: dinner_club, paymentAlt: "dinner_club"},
    {id: 4, paymentIcon: discover, paymentAlt: "discover"},
  ]
  return (
    <>
      {paymentIcons.map(({id, paymentIcon, paymentAlt}) => {
        return <img key={id} src={paymentIcon} alt={paymentAlt} className="payImage" />
      })}
    </>
  );
}

export default Payment;