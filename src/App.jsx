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
      let tempMark = data.data.map((e) => {
        return { ...e, isChecked: false };
      });
      setData(tempMark);
    });
  };

  // Function from the child to topLevel(Parent)
  const setEditedDataToApp = (payload) => {
    const newData = data.map((e) => {
      if (payload.id === e.id) {
        return { ...e, ...payload };
      }
      return e;
    });
    setData(newData);
  };
  const handleSelectToApp = (name, checked) => {
    if (name === "allSelect") {
      let tempData = data.map((e) => {
        return { ...e, isChecked: checked };
      });
      setData(tempData);
    } else {
      let tempData = data.map((e) =>
        e.name === name ? { ...e, isChecked: !checked } : e
      );
      setData(tempData);
    }
  };

  return (
    <>
      <div className="App">
        <Pagination
          data={data}
          setEditedDataToApp={setEditedDataToApp}
          handleSelectToApp={handleSelectToApp}
        />
      </div>
    </>
  );
}

export default App;
