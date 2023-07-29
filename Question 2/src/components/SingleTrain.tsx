import React from 'react';

interface Train {
  trainName: string;
  trainNumber: string;
}

interface Props {
  train: Train | null;
}

const SingleTrain = ({ train }:Props) => {
    
  if (!train) {
    return <p>Loading train data...</p>;
  }

  return (
    <div>
      <h1>Single Train</h1>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
    </div>
  );
};

export default SingleTrain;
