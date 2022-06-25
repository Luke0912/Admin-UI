import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import "./Landing.css";
import { useState, useEffect } from "react";
import Table from "../../components/EditTableHandler/EditTableHandler";

const Landing = ({ data }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(data);
  }, [data]);

  const [button, setButton] = useState(false);

  const handleEdit = () => {
    setButton(true);
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
        {user.map((e) => (
          <>
            <tbody>
              <tr key={e.id}>
                {!button && (
                  <>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <p>{e.name}</p>
                    </td>
                    <td>
                      <p>{e.email}</p>
                    </td>
                    <td>
                      <p>{e.email}</p>
                    </td>
                    <td>
                      <FaEdit
                        onClick={handleEdit}
                        style={{ marginRight: "20px" }}
                      />
                      <AiFillDelete />
                    </td>
                  </>
                )}
                {button && <Table data={e} />}
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default Landing;
