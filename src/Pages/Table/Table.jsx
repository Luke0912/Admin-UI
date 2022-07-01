import "./Tabledesign.css";

import { useEffect, useState } from "react";

import Row from "../../components/RowHandler/Row";

const Table = ({ data, setUpdated, passedCheck, newRow }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, [data]);

  //passing the payload from landing to paginated data
  const saveEditedData = (payload) => {
    setUpdated(payload);
  };

  // passing select function from child to landing

  const changeValue = (name, checked) => {
    passedCheck(name, checked);
  };

  //initiating a function when select all is clicked and passing the passedCheck function as callback
  const checkAll = (e) => {
    const { name, checked } = e.target;
    passedCheck(name, checked);
  };

  //deleting the single row with with delete function and passing to new data to pagination

  const DeleteTr = (delData) => {
    newRow(delData);
  };

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
                  changeValue={changeValue}
                  DeleteTr={DeleteTr}
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
