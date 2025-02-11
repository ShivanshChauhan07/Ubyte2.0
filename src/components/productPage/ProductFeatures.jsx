import React from "react";

const ProductFeatures = ({ feature }) => {
  return (
    <div>
      {feature.map((item, mIndx) => {
        return (
          <div key={mIndx} className="font-['Manrope']">
            <h5 className="text-2xl font-semibold"> {item.title}</h5>
            <ul className="my-4">
              {item.desc.map((item2, indx) => {
                if (typeof item2 === "string")
                  return (
                    <ul className="my-4" key={indx}>
                      <span className="mx-4">{"->"}</span>
                      {item2}
                    </ul>
                  );
                else if (typeof item2 === "object" && item2 != null)
                  return Object.entries(item2).map(([key, value], subIndex) => {
                    return (
                      <li className="my-4" key={subIndex}>
                        <strong>{key}</strong>
                        <ul>
                          {Array.isArray(value) ? (
                            value.map((subItem, subSubIndx) => (
                              <li key={subSubIndx}> {subItem}</li>
                            ))
                          ) : (
                            <li>{value}</li>
                          )}
                        </ul>
                      </li>
                    );
                  });

                return null;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFeatures;
