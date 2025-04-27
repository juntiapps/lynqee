import React from "react";
import { useAuthContext } from '../../context/AuthContext';

const Dashboard = () => {
    const { user,logout } = useAuthContext();
  return (
    <div>
      <h2>WELCOME TO LYNQEE, XXX</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
