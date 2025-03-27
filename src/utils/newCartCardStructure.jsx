import React from "react";

const newCartCardStructure = (WrappedComponent) => {
  return function EnchancedCartCard(props) {
    const enhancedProps = {
      ...props,
      showControls: props.showControls !== false,
      showDelete: props.showDelete !== false,
      showBadge: props.showBadge || false,
      showPrice: props.showPrice !== false,
      smallName: props.smallName || false,
    };
    return <WrappedComponent {...enhancedProps} />;
  };
};

export default newCartCardStructure;
