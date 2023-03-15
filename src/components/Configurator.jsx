import React from "react";
import { useCustomization } from "../context/CustomContext";

export default function Configurator() {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();
  return (
    <div className="configurator">
      {/* Material Section */}
      <div className="config-section">
        <div className="config-title">Chair material</div>
        <div className="config-value">
          <div
            className={`type ${material === "Leather" ? "item-active" : ""}`}
            onClick={() => setMaterial("Leather")}
          >
            <div className="type-label"> Leather</div>
          </div>

          <div
            className={`type ${material === "Fabric" ? "item-active" : ""}`}
            onClick={() => setMaterial("Fabric")}
          >
            <div className="type-label"> Fabric</div>
          </div>
        </div>
      </div>

      {/* Chair Color section */}

      <div className="config-section">
        <div className="config-title">Chair Color</div>
        <div className="config-value">
          {chairColors.map((item, index) => {
            return (
              <div
                key={index}
                className={`type ${
                  item.color === chairColor.color ? "item-active" : ""
                }`}
                onClick={() => setChairColor(item)}
              >
                <div
                  className="color-dot"
                  style={{ backgroundColor: item.color }}
                />

                <div className="color-label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cushion Color section */}
      <div className="config-section">
        <div className="config-title">Cushion Color</div>
        <div className="config-value">
          {cushionColors.map((item, index) => {
            return (
              <div
                key={index}
                className={`type ${
                  item.color === cushionColor.color ? "item-active" : ""
                }`}
                onClick={() => setCushionColor(item)}
              >
                <div
                  className="color-dot"
                  style={{ backgroundColor: item.color }}
                />

                <div className="color-label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legs Section */}
      <div className="config-section">
        <div className="config-title">Legs</div>
        <div className="config-value">
          <div
            className={`type ${legs === 1 ? "item-active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="type-label"> Modern</div>
          </div>

          <div
            className={`type ${legs === 2 ? "item-active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="type-label"> Classic</div>
          </div>
        </div>
      </div>
    </div>
  );
}
