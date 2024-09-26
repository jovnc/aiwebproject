import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
