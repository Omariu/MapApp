import { Map } from "@esri/react-arcgis";
import Locations from "./Locations";
import AddLocation from "./AddLocation";

import Widgets from "./widgets";

function App() {
  return (
    <div>
      <Map
        style={{ width: "100%", height: "100vh" }}
        mapProperties={{ basemap: "dark-gray" }}
        viewProperties={{
          zoom: 3,
          // center: [35, 35],
        }}
      >
        <Locations />
        <AddLocation />
        <Widgets />
      </Map>
    </div>
  );
}

export default App;
