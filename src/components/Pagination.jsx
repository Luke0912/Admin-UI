import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";

const Pagination = ({ dataPerPage, totalData, handlePaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.pageSwitch}>
        {pageNumbers.map((number) => (
          <button key={number} className={styles.button}>
            <Link onClick={() => handlePaginate(number)} to={`/${number}`}>
              {number}
            </Link>
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
