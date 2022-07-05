import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaUndo } from "@react-icons/all-files/fa/FaUndo";
import { useState } from "react";

const Row = ({ e, saveEditedData, handleSelectToTable }) => {
  const [editable, setEditable] = useState(false);

  const [editableValues, setEditableValues] = useState({
    id: e.id,
    name: e.name,
    role: e.role,
    email: e.email,
    isChecked: e.isChecked,
  });
  const handleEditing = (event) => {
    const value = { ...editableValues };
    const nValues = { ...value, [event.target.name]: event.target.value };
    setEditableValues(nValues);
  };

  const onConfirm = () => {
    const payLoad = {
      id: e.id,
      name: editableValues.name,
      role: editableValues.role,
      email: editableValues.email,
      isChecked: e.isChecked,
    };
    setEditableValues(payLoad);
    saveEditedData(payLoad);
    setEditable(false);
  };

  const handleUserEdit = () => {
    setEditable((curr) => !curr);
  };

  // select row
  const handleSelect = (e) => {
    const { name, checked } = e.target;
    handleSelectToTable(name, !checked);
  };

  // const Delete = () => {
  //   DeleteTr(data);
  // };

  return (
    <>
      <td>
        <input
          type="checkbox"
          onChange={handleSelect}
          name={e.name}
          checked={e.isChecked ? true : false}
        />
      </td>
      <td>
        <>
          {!editable && <p>{editableValues.name}</p>}
          {editable && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={editableValues.name}
                name="name"
                onChange={handleEditing}
              />
              <br />
            </>
          )}
        </>
      </td>
      <td>
        <>
          {!editable && <p>{editableValues.role}</p>}
          {editable && (
            <>
              <input
                type="text"
                placeholder="Role"
                value={editableValues.role}
                name="role"
                onChange={handleEditing}
              />
              <br />
            </>
          )}
        </>
      </td>
      <td>
        <>
          {!editable && <p>{editableValues.email}</p>}
          {editable && (
            <>
              <input
                type="text"
                placeholder="Email"
                value={editableValues.email}
                name="email"
                onChange={handleEditing}
              />
              <br />
            </>
          )}
        </>
      </td>
      <td>
        {!editable && (
          <FaEdit onClick={handleUserEdit} style={{ marginRight: "20px" }} />
        )}
        {editable && (
          <FaCheck onClick={onConfirm} style={{ marginRight: "20px" }} />
        )}
        {editable && (
          <FaUndo
            onClick={() => {
              setEditable(false);
              setEditableValues(e);
            }}
            style={{ marginRight: "20px" }}
          />
        )}
        <AiFillDelete />
      </td>
    </>
  );
};

export default Row;
