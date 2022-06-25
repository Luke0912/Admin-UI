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

  return (
    <>
      <div className="App">
        <Pagination data={data} />
      </div>
    </>
  );
}

export default App;
