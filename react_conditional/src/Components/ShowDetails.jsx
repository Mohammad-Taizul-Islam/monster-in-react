import React from "react";

const ShowDetails = ({ onShowDetail }) => {
  return (
    <div>
      <button onClick={onShowDetail}>
        {onShowDetail ? "Hide" : "Show"} Details
      </button>
      {onShowDetail && <p>Detailed Information here!!</p>}
    </div>
  );
};

export default ShowDetails;
