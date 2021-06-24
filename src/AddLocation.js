import React, { useEffect } from "react";

const AddLocation = ({ view }) => {
  useEffect(() => {
    view.ui.add(document.querySelector("#add-location"), "top-right");
  }, []);

  return (
    <div id="add-location" className="esri-widget" style={{ padding: 10 }}>
      <input
        type="text"
        placeholder="enter x"
        className="esri-input"
        style={{ margin: 5 }}
      />
      <br />
      <input
        type="text"
        placeholder="enter y"
        className="esri-input"
        style={{ margin: 5 }}
      />
      <br />
      <input
        type="button"
        value="Add Location "
        className="esri-button"
        style={{ margin: 5 }}
      />
    </div>
  );
};

export default AddLocation;
