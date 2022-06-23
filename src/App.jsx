import axios from "axios";
import { useEffect, useState } from "react";
import configuration from "./configs";
import styles from "../src/App.module.css";
import Landing from "./pages/LandingPage";
import Pagination from "./components/Pagination";
import { IoArrowBackCircleSharp } from "@react-icons/all-files/io5/IoArrowBackCircleSharp";
import { IoArrowForwardCircleSharp } from "@react-icons/all-files/io5/IoArrowForwardCircleSharp";
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";

function App() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [dataPerPage] = useState(10);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(configuration.BASE_URL).then((data) => {
      setData(data.data);
    });
  };

  //get number of data per
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  //handlePagination

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  //special buttons
  const toFirst = () => {
    console.log("toFirst");
  };

  const minusOne = () => {
    console.log("minusOne");
  };
  const plusOne = () => {
    console.log("plusOne");
  };

  const toLast = () => {
    console.log("toLast");
  };

  return (
    <>
      <div className="App">
        <Landing data={currentData} />
        <div className={styles.editLayer}>
          <button className={styles.deleteButton}>Delete Selected</button>
          <TbArrowBarToLeft size={"30px"} onClick={toFirst} />
          <IoArrowBackCircleSharp size={"30px"} onClick={minusOne} />
          <Pagination
            dataPerPage={dataPerPage}
            totalData={data.length}
            handlePaginate={handlePaginate}
          />
          <IoArrowForwardCircleSharp size={"30px"} onClick={plusOne} />
          <TbArrowBarToRight size={"30px"} onClick={toLast} />
        </div>
      </div>
    </>
  );
}

export default App;
