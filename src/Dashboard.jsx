import React from 'react';
// import { useAuth } from '../../../contexts/authContext';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { userLoggedIn } = useAuth(); // Get the user login status from context
  
  // If the user is not logged in, redirect them to the login page
  if (!userLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-3/4 bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">Welcome to your Dashboard!</h1>
        <p className="mt-4 text-gray-700">Here you can view your activity, edit your profile, and manage settings.</p>

        {/* You can display user data here */}
        <div className="mt-6">
          <h3 className="text-xl font-medium">User Info:</h3>
          <p>Name: [User Name]</p>
          <p>Email: [User Email]</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
