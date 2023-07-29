import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllTrains from '../components/AllTrains';

interface Train {
  trainName: string;
  trainNumber: string;
}

const AllTrainsPage = () => {
  const [trains, setTrains] = useState<Train[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Train[]>('http://20.244.56.144:80/train/trains', {
          headers: {
            Authorization: 'Bearer ',
          },
        });
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchData();
  }, []);

  return <AllTrains trains={trains} />;
};

export default AllTrainsPage;
