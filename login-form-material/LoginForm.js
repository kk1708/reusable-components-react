import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: 'Invalid email address' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }

    if (name === 'password') {
      if (value.length < 6) {
        setErrors({ ...errors, password: 'Password must be at least 6 characters long' });
      } else {
        setErrors({ ...errors, password: '' });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.email && !errors.password) {
      console.log('Form submitted successfully:', formData);
      
      // API CALL LOGIC GOES HERE
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
