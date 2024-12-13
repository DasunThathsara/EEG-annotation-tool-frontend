import React, { useState } from "react";

interface User {
  name: string;
  age: string;
  gender: string;
}

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<User>({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="userContainer">
      <p className="topic">Enter Your Details</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" style={{marginTop: '80px', backgroundColor: '#45a049'}}>Start</button>
      </form>
    </div>
  );
};

export default UserForm;
