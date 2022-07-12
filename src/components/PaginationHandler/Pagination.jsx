import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";

import { IoArrowBackCircleSharp } from "@react-icons/all-files/io5/IoArrowBackCircleSharp";
import { IoArrowForwardCircleSharp } from "@react-icons/all-files/io5/IoArrowForwardCircleSharp";
import Table from "../../Pages/Table/Table";
import styles from "./Pagination.module.css";
import { useState } from "react";

const Pagination = ({ data, setEditedDataToApp, handleSelectToApp,queryToApp }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [dataLimit] = useState(10);

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataLimit); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

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
    setCurrentPage(getPageNumbers().length);
  };

  const setEditedDataToPagination = (payload) => {
    setEditedDataToApp(payload);
  };

  const handleSelectToPagination = (name, checked) => {
    handleSelectToApp(name, checked);
  };

  // const newRow = (delData) => {
  //   console.log(delData);
  //   for (var i = 0; i < newData.length; i++) {
  //     console.log(newData[i]);
  //     if (JSON.stringify(newData[i]) === JSON.stringify(delData)) {
  //       console.log(true);
  //       const updatedRows = [...newData];
  //       updatedRows.splice(i, 1);
  //       setNewData(updatedRows);
  //     }
  //   }
  // };

  const queryToPagination = (query) => {
    queryToApp(query);
  };

  return (
    <>
      <Table
        queryToPagination={queryToPagination}
        user={getPaginatedData()}
        setEditedDataToPagination={setEditedDataToPagination}
        handleSelectToPagination={handleSelectToPagination}
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

        {getPageNumbers().map((number) => (
          <button key={number} className={styles.button} onClick={changePage}>
            {number}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === getPageNumbers().length}
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
