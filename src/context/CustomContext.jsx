import React, { createContext, useState } from "react";
import { useContext } from "react";

const CustomContext = createContext({});
const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },

  {
    color: "#896599",
    name: "mauve",
  },

  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
];
export function CustomProvider(props) {
  const [material, setMaterial] = useState("Leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        cushionColors,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
}

export const useCustomization = () => {
  const context = useContext(CustomContext);
  return context;
};
