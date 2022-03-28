import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import logging from "../config/logging";

const Register = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  let navigate = useNavigate();

  const signUpWithEmailandPassword = () => {
    if (password !== confirm) setError("Please enter a correct");
    if (error !== "") {
      setError("");
    }
  };
  setRegistering(true);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      logging.info(result);
      navigate;
    })
    .catch((error) => {});
  return <div>Register</div>;
};

export default Register;
