import './table.css';

import { useEffect, useState } from 'react';

import Row from '../RowHandler/Row';

const Table = ({
  data,
  setEditedDataToPagination,
  queryToPagination,
  DeleteTrToPagination,
}) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const handleQuery = (e) => {
    queryToPagination(e.target.value);
  };

  const saveEditedData = (payload) => {
    setEditedDataToPagination(payload);
  };

  const handleSelectToTable = (name, checked) => {
    handleSelect(name, checked);
  };

  const checkAll = (e) => {
    const { name, checked } = e.target;
    handleSelect(name, checked);
  };

  const handleSelect = (name, checked) => {
    if (name === 'allSelect') {
      let tempData = newData.map((e) => {
        return { ...e, isChecked: checked };
      });
      setNewData(tempData);
    } else {
      let tempData = newData.map((e) =>
        e.name === name ? { ...e, isChecked: !checked } : e
      );
      setNewData(tempData);
    }
  };

  const DeleteTr = (trData) => {
    DeleteTrToPagination(trData);
  };

  const deleteSelected = (e) => {
    e.preventDefault();
    const delSelectData = newData.filter((e) => e.isChecked !== true);
    setNewData(delSelectData);
  };

  return (
    <>
      <div className='search'>
        <input type='text' placeholder='Search User' onChange={handleQuery} />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                name='allSelect'
                onChange={checkAll}
                checked={
                  newData.filter((d) => d?.isChecked !== true).length < 1
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
          {newData.map((e, index) => (
            <tr
              className={!e.isChecked ? 'nc' : 'bc'}
              key={index + Math.random()}
            >
              <Row
                e={e}
                saveEditedData={saveEditedData}
                handleSelectToTable={handleSelectToTable}
                DeleteTr={DeleteTr}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <button className='deleteButton' onClick={deleteSelected}>
        Delete Selected
      </button>
    </>
  );
};

export default Table;
