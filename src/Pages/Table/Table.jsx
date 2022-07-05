import "./Tabledesign.css";

import { useEffect, useState } from "react";

import Row from "../../components/RowHandler/Row";

const Table = ({
  currentData,
  setEditedDataToPagination,
  handleSelectToPagination,
}) => {
  const [user, setUser] = useState([]);
  console.log("user:",user)

  useEffect(() => {
    setUser(currentData);
  }, [currentData]);

  //passing the payload from row to paginated data
  const saveEditedData = (payload) => {
    setEditedDataToPagination(payload);
  };

  // passing select function from row to pagination

  const handleSelectToTable = (name, checked) => {
    handleSelectToPagination(name, checked);
  };

  //initiating a function when select all is clicked and passing the handleSelectToPagination function as callback
  const checkAll = (e) => {
    const { name, checked } = e.target;
    handleSelectToPagination(name, checked);
  };

  //deleting the single row with with delete function and passing to new data to pagination

  // const DeleteTr = (delData) => {
  //   console.log(delData);
  //   for (var i = 0; i < user.length; i++) {
  //     console.log(user[i]);
  //     if (JSON.stringify(user[i]) === JSON.stringify(delData)) {
  //       console.log(true);
  //       const updatedRows = [...user];
  //       updatedRows.splice(i, 1);
  //       setUser(updatedRows);
  //     }
  //   }
  // };

  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search User" />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="allSelect"
                onChange={checkAll}
                checked={
                  user.filter((user) => user?.isChecked !== true).length < 1
                }
              />
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Email</h3>
            </th>
            <th>
              <h3>Role</h3>
            </th>
            <th>
              <h3>Action</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((e) => (
            <>
              <tr className={!e.isChecked ? "nc" : "bc"}>
                <Row
                  data={e}
                  saveEditedData={saveEditedData}
                  handleSelectToTable={handleSelectToTable}
                />
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
