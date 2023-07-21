import axios, { AxiosResponse } from 'axios'

interface RegistrationData {
  companyName: string
  ownerName: string
  rollNo: string
  ownerEmail: string
  accessCode: string
}

export interface AuthCredentials {
  companyName: string
  clientID: string
  ownerName: string
  ownerEmail: string
  rollNo: string
  clientSecret: string
}

export interface Train {
  trainName: string
  trainNumber: string
  departureTime: {
    Hours: number
    Minutes: number
    Seconds: number
  }
  seatsAvailable: {
    sleeper: number
    AC: number
  }
  price: {
    sleeper: number
    AC: number
  }
  delayedBy: number
}

const BASE_URL = 'http://20.244.56.144'

export const registerCompany = async (
  registrationData: RegistrationData,
): Promise<
  AxiosResponse<{ companyName: string; clientID: string; clientSecret: string }>
> => {
  const response = await axios.post(
    `${BASE_URL}/train/register`,
    registrationData,
  )
  console.log(response.data)
  return response.data
}

export const getAuthorizationToken = async (
  authCredentials: AuthCredentials,
): Promise<
  AxiosResponse<{
    token_type: string
    access_token: string
    expires_in: number
  }>
> => {
  const response = await axios.post(`${BASE_URL}/train/auth`, authCredentials)
  return response.data
}

export const fetchTrainData = async (
  accessToken: string,
): Promise<AxiosResponse<Train[]>> => {
  const response = await axios.get(`${BASE_URL}/train/trains`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return response.data
}
