import { useEffect, useState } from "react";

import Pagination from "./components/PaginationHandler/Pagination";
import axios from "axios";
import configuration from "./configs";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(configuration.BASE_URL).then((data) => {
      setData(data.data);
    });
  };

  // Function from the child to topLevel(Parent)
  const toTopLevel = (payload) => {
    const newData = data.map((e) => {
      if (payload.id === e.id) {
        return { ...e, ...payload };
      }
      return e;
    });
    setData(newData);
  };
  return (
    <>
      <div className="App">
        <Pagination data={data} toTopLevel={toTopLevel} />
      </div>
    </>
  );
}

export default App;
