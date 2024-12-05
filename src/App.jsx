import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import UserProtectedWrapper from "./context/UserProtectedWrapper";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <div className="p-4 h-[100svh] flex justify-center items-center">
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Login Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <UserProtectedWrapper>
              <UserDashboard />
            </UserProtectedWrapper>
          }
        />

        {/* Catch-All Redirect to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
