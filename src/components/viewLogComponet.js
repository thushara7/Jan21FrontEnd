import React from "react";

const ViewLogComponet = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 && (
        <div>
          <h3>The List of Vehicles in the Paking Lot</h3>
          <h4>Maximum Capacity : 20</h4>
          <h4>Current Occupants : {data.length}</h4>
          {data.map(el => (
            <div
              style={{
                backgroundColor: "#d7dcf3",
                margin: "0.5rem 4rem",
                borderRadius: "8px",
                padding: "1rem"
              }}
            >
              <p>Slot ID : {el.slotId}</p>
              <p>Registration ID : {el.registrationNo}</p>
              <p>Color: {el.color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewLogComponet;
