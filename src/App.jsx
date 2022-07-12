import { useEffect, useState } from "react";

import Pagination from "./components/PaginationHandler/Pagination";
import axios from "axios";
import configuration from "./configs";

function App() {
  const [data, setData] = useState([]);
  const [query, setNewQuery] = useState("");

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

 const keys = ["name", "role", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  const queryToApp = (payload) => {
    setNewQuery(payload);
  };

  return (
    <>
      <div className="App">
        <Pagination
          queryToApp={queryToApp}
          data={search(data)}
          setEditedDataToApp={setEditedDataToApp}
          handleSelectToApp={handleSelectToApp}
        />
      </div>
    </>
  );
}

export default App;
