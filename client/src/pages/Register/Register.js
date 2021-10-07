import React from "react";
import "./Register.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Register = () => {
  const registerHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="register__card">
      <h3 className="register__title">Sign up</h3>
      <form onSubmit={registerHandler}>
        <Input type="text" label="Full name" placeholder="Full name" />
        <Input type="text" label="Username" placeholder="Username" />
        <Input type="email" label="Email" placeholder="Email" />
        <Input type="password" label="Password" placeholder="Password" />
        <Button type="submit" text="Register" />
      </form>
    </Card>
  );
};

export default Register;
