import { Train } from "../api/api";

interface TrainListProps {
  trains: Train[];
}

const AllTrains = ({ trains } : TrainListProps) => {

  return (
    <div>
      <h2>All Trains</h2>

      {trains.map((train) => (
        <div key={train.trainNumber}>
          <p>Train Name: {train.trainName}</p>
          <p>Train Number: {train.trainNumber}</p>
          <p>
            Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
          </p>
          <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
          <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
          <p>Price (Sleeper): {train.price.sleeper}</p>
          <p>Price (AC): {train.price.AC}</p>
          <p>Delayed By: {train.delayedBy} minutes</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AllTrains;
