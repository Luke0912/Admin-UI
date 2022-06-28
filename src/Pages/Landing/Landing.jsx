import "./Landing.css";
import { useState, useEffect } from "react";
import Table from "../../components/EditTableHandler/EditTableHandler";

const Landing = ({ data, setUpdated }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, [data]);


  const saveNewData = (cb) => {
    setUpdated(cb);
    console.log("hello cb");
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
                <Table data={e} saveNewData={saveNewData} />
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Landing;
