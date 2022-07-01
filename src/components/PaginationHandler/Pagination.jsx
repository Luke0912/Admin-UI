import { useEffect, useState } from "react";

import { IoArrowBackCircleSharp } from "@react-icons/all-files/io5/IoArrowBackCircleSharp";
import { IoArrowForwardCircleSharp } from "@react-icons/all-files/io5/IoArrowForwardCircleSharp";
import Table from "../../Pages/Table/Table";
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import styles from "./Pagination.module.css";

const Pagination = ({ data, toTopLevel }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [dataPerPage] = useState(10);

  const [newData, setNewData] = useState([]);
  console.log("newData:", newData);

  useEffect(() => {
    //get number of data per page
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);
    let tempMark = currentData.map((e) => {
      return { ...e, isChecked: false };
    });
    setNewData(tempMark);
  }, [currentPage, data, dataPerPage]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };
  const toFirst = () => {
    setCurrentPage(1);
  };

  const toLast = () => {
    setCurrentPage(pageNumbers.length);
  };

  // passing the updated data to top level
  const setUpdated = (payload) => {
    toTopLevel(payload);
  };

  //capturing  the value of check box and mapping it to newData Array
  const passedCheck = (name, checked) => {
    if (name === "allSelect") {
      let tempData = newData.map((e) => {
        return { ...e, isChecked: checked };
      });
      setNewData(tempData);
    } else {
      let tempData = newData.map((e) =>
        e.name === name ? { ...e, isChecked: !checked } : e
      );
      setNewData(tempData);
      console.log("tempData:", tempData);
    }
  };
  const newRow = (delData) => {
    console.log(delData);
    for (var i = 0; i < newData.length; i++) {
      console.log(newData[i]);
      if (JSON.stringify(newData[i]) === JSON.stringify(delData)) {
        console.log(true);
        const updatedRows = [...newData];
        updatedRows.splice(i, 1);
        setNewData(updatedRows);
      }
    }
  };

  return (
    <>
      <Table
        data={newData}
        setUpdated={setUpdated}
        passedCheck={passedCheck}
        newRow={newRow}
      />
      <div className={styles.editLayer}>
        <button className={styles.deleteButton}>Delete Selected</button>
        <button onClick={toFirst} className={styles.prev}>
          <TbArrowBarToLeft fontSize="30px" />
        </button>

        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={styles.prev}
        >
          <IoArrowBackCircleSharp fontSize="30px" />
        </button>

        {pageNumbers.map((number) => (
          <button key={number} className={styles.button} onClick={changePage}>
            {number}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === pageNumbers.length}
          className={styles.next}
        >
          <IoArrowForwardCircleSharp fontSize="30px" />
        </button>
        <button onClick={toLast} className={styles.prev}>
          <TbArrowBarToRight fontSize="30px" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
