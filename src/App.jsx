import axios from "axios";
import { useEffect, useState } from "react";
import configuration from "./configs";
import Pagination from "./components/PaginationHandler/Pagination";

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

  const newData = (payload) => {
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
        <Pagination data={data} newData={newData} />
      </div>
    </>
  );
}

export default App;
