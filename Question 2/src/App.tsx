import React, { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { Train, fetchTrainData, getAuthorizationToken, AuthCredentials } from "./api/api";
import RegistrationForm from "./components/RegistrationForm";
import TrainList from "./components/AllTrains";
import SingleTrain from "./components/SingleTrain";

const App = () => {
  const [trainData, setTrainData] = useState<Train[]>([]);
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (authCredentials) {
        const authToken = await getAuthorizationToken(authCredentials);

        const trainResponse = await fetchTrainData(authToken.data.access_token);

        setTrainData(trainResponse.data);
      }
    };

    fetchData();
  }, [authCredentials]);


  return (
    <div>
      <h1>Trains Schedule</h1>
      {authCredentials ? (
        <div>

          <Routes>
            <Route  path="/" element={<TrainList trains={trainData} />}/>
            <Route path="/train/:trainNumber" element={<SingleTrain trains={trainData} />}/>
          </Routes>
        </div>
      ) : (
<RegistrationForm authCredentials={authCredentials} setAuthCredentials={setAuthCredentials}  />
      )}
    </div>
  );
};

export default App;
