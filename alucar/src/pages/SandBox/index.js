import axios from 'axios';
import React from 'react';

export const SandBox = () => {
    const [formValue, setformValue] = React.useState({
        email: '',
        password: ''
      });
    
      const handleSubmit = async() => {
        const loginFormData = new FormData();
  loginFormData.append("username", formValue.email)
  loginFormData.append("password", formValue.password)
  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "http://184.72.115.9:8080/clientes",
      data: loginFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch(error) {
    console.log(error)
  }
      }
    
      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }
  return (
      <main>
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
    </main>
  )
}
