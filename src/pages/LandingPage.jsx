import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import "./LandingPage.css";
import { useEffect, useState } from "react";



const Landing = ({ data }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(data);
  }, [data]);
  return (
    <>
      <div className="search">
      <input type="text" placeholder="Search User"  />
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
            <tr key={e.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td><input type="text" value={e.name} /></td>
              <td><input type="text" value={e.role} /></td>
              <td><input type="text" value={e.email} /></td>
              <td>
                <FaEdit />
                <AiFillDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Landing;
