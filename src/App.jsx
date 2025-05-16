import React, { useState } from 'react';

function Test({ initialData }) {  // data может приходить как пропс
  const [isEdit, setIsEdit] = useState(false);  // стейт
  const [data, setData] = useState(initialData);  // стейт
  
  let elem;  // переменная
  
  if (isEdit) {
    elem = <input value={data} onChange={e => setData(e.target.value)} />;
  } else {
    elem = <span>{data}</span>;
  }
  
  return <div>
    {elem}
    <button onClick={() => setIsEdit(!isEdit)}>
      {isEdit ? 'Save' : 'Edit'}
    </button>
  </div>;
}

export default Users;