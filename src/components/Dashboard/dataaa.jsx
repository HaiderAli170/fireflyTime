import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../redux/dataSlice'; // Replace with the correct path to your dataSlice

const MyComponent = () => {
  const dispatch = useDispatch();
//   const data = useSelector((state) => state.data.value); // Select data from the store

  const handleUpdateData = () => {
    const newData = "New Data";
    dispatch(setData(newData)); // Dispatch the action to update the data
  };

  return (
    <div>
<button onClick={handleUpdateData}> add data </button>
      <p>hi</p>
      {/* <div>Current Data: {data}</div> */}
    </div>
  );
};

export default MyComponent;
