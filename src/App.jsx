import { useEffect, useState } from "react";

import Pagination from "./components/PaginationHandler/Pagination";
import axios from "axios";
import configuration from "./configs";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(configuration.BASE_URL).then((data) => {
      setData(data.data);
      const tempMark = data.data.map((e) => {
        return { ...e, isChecked: false };
      });
      setData(tempMark);
    });
  };

  // Final function from the child to topLevel(Parent)
  const toTopLevel = (payload) => {
    const newData = data.map((e) => {
      if (payload.id === e.id) {
        return { ...e, ...payload };
      }
      return e;
    });
    setData(newData);
  };
  //update the value of checkbox

  const updateValue = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="App">
        <Pagination
          data={data}
          toTopLevel={toTopLevel}
          updateValue={updateValue}
        />
      </div>
    </>
  );
}

export default App;
