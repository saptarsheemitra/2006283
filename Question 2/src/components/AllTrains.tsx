import React from 'react';

interface Train {
  trainName: string;
  trainNumber: string;
}

interface Props {
  trains: Train[];
}

const AllTrains = ({ trains }: Props) => {
  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h2>{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>

        </div>
      ))}
    </div>
  );
};

export default AllTrains;
