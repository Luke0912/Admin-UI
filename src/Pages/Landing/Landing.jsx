import "./Landing.css";

import { useEffect, useState } from "react";

import Table from "../../components/EditTableHandler/EditTableHandler";

const Landing = ({ data, setUpdated,passedCheck }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, [data]);

  //passing the payload from landing to paginated data
  const saveEditedData = (payload) => {
    setUpdated(payload);
  };

  // passing select function from child to landing

  const changeValue = () => {
    passedCheck();
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
              <input type="checkbox" />
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
              <tr key={e.id}>
                <Table
                  data={e}
                  saveEditedData={saveEditedData}
                  changeValue={changeValue}
                />
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Landing;
