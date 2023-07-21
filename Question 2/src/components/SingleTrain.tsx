import React from 'react'
import { useParams } from 'react-router-dom'
import { Train } from '../api/api'

interface SingleTrainProps {
  trains: Train[]
}

const SingleTrain = ({ trains }: SingleTrainProps) => {
  const { trainNumber } = useParams<{ trainNumber: string }>()

  const selectedTrain = trains.find(
    (train) => train.trainNumber === trainNumber,
  )

  if (!selectedTrain) {
    return <div>Train not found!</div>
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {selectedTrain.trainName}</p>
      <p>Train Number: {selectedTrain.trainNumber}</p>
      <p>
        Departure Time: {selectedTrain.departureTime.Hours}:
        {selectedTrain.departureTime.Minutes}
      </p>
      <p>Seats Available (Sleeper): {selectedTrain.seatsAvailable.sleeper}</p>
      <p>Seats Available (AC): {selectedTrain.seatsAvailable.AC}</p>
      <p>Price (Sleeper): {selectedTrain.price.sleeper}</p>
      <p>Price (AC): {selectedTrain.price.AC}</p>
      <p>Delayed By: {selectedTrain.delayedBy} minutes</p>
    </div>
  )
}

export default SingleTrain
