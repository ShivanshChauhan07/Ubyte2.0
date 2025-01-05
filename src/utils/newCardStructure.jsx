import React from "react";
import Card from "../components/bodyItem/card/Card";
import { div } from "motion/react-client";

const newCardStructure = (WrappedComponent) => {
  return (props) => {
    const additionalProps = {
      img: (
        <div className="rounded-full">
          <img src={props.img} />
        </div>
      ),
      name: props.name,
      role: props.role,
      desc: props.desc,
      sticker: props.social,
    };

    return (
      <div className="hoc-card">
        <WrappedComponent {...additionalProps} />
      </div>
    );
  };
};

const EnhancedCard = newCardStructure(Card);

export default EnhancedCard;
