import React, { useState } from "react";
import { registerCompany, AuthCredentials } from "../api/api";

interface CompanyRegistrationFormProps {
  authCredentials : AuthCredentials | null;
  setAuthCredentials : React.Dispatch<React.SetStateAction<AuthCredentials | null>>
}

const CompanyRegistrationForm = ({
    authCredentials, setAuthCredentials
}:CompanyRegistrationFormProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const credentials = await registerCompany(formData);
      console.log(credentials)
    //   setAuthCredentials(credentials);
    } catch (error) {
      console.error("Company registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="accessCode">Access Code:</label>
        <input
          type="text"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default CompanyRegistrationForm;
