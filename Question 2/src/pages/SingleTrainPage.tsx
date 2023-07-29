import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleTrain from '../components/SingleTrain';

interface Train {
  trainName: string;
  trainNumber: string;
}

const SingleTrainPage: React.FC = () => {
  const [train, setTrain] = useState<Train | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Train>('http://20.244.56.144:80/train/trains/1234', {
          headers: {
            Authorization: 'Bearer ',
          },
        });
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchData();
  }, []);

  return <SingleTrain train={train} />;
};

export default SingleTrainPage;
