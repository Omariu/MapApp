import Locations from "./Locations";

import { Map } from "@esri/react-arcgis";

function App() {
  return (
    <div>
      <Map
        style={{ width: "100%", height: "100vh" }}
        mapProperties={{ basemap: "dark-gray" }}
        viewProperties={{
          zoom: 3,
          center: [35, 35],
        }}
      >
        <Locations />
      </Map>
    </div>
  );
}

export default App;
