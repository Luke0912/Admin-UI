import { useEffect, useState } from 'react';

import Pagination from './components/PaginationHandler/Pagination';
import axios from 'axios';
import configuration from './configs';

function App() {
  const [data, setData] = useState([]);
  const [query, setNewQuery] = useState('');
  const keys = ['name', 'role', 'email'];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(configuration.BASE_URL).then((data) => {
      let tempMark = data.data.map((e) => {
        return { ...e, isChecked: false };
      });
      setData(tempMark);
    });
  };

  const queryToApp = (payload) => {
    setNewQuery(payload);
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const setEditedDataToApp = (payload) => {
    const newData = data.map((e) => {
      if (payload.id === e.id) {
        return { ...e, ...payload };
      }
      return e;
    });

    setData(newData);
  };

  const DeleteTrToApp = (trData) => {
    const { id } = trData;
    const delUpdatedArr = data.filter((e) => e.id !== id);
    setData(delUpdatedArr);
  };

  return (
    <>
      <div className='App'>
        <Pagination
          queryToApp={queryToApp}
          data={search(data)}
          setEditedDataToApp={setEditedDataToApp}
          DeleteTrToApp={DeleteTrToApp}
        />
      </div>
    </>
  );
}

export default App;
