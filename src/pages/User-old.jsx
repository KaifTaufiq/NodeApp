import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserForm = ({ type, handleSwitch }) => {
  const formTitle = {
    login: "Login",
    signup: "Sign Up",
    reset: "Reset Password",
  };
  const formDescription = {
    login: "Enter your email below to login to your account.",
    signup: "Enter your information to create an account.",
    reset: "Enter your email to reset your password.",
  };
  const renderFields = () => {
    if (type === "signup") {
      return (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </>
      );
    } else if (type === "login") {
      return (
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Button
              variant="link"
              className="ml-auto inline-block text-sm"
              onClick={() => handleSwitch("reset")}
            >
              Forgot your Password
            </Button>
          </div>
          <Input id="password" type="password" required />
        </div>
      );
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">{formTitle[type]}</CardTitle>
        <CardDescription>{formDescription[type]}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          {renderFields()}
          <Button type="submit" className="w-full">
            {type === "login"
              ? "Login"
              : type === "signup"
              ? "Create an Account"
              : "Reset Password"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {type === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Button
                variant="link"
                className="underline"
                onClick={() => handleSwitch("signup")}
              >
                Sign up
              </Button>
            </>
          ) : type === "signup" ? (
            <>
              Already have an account?{" "}
              <Button
                variant="link"
                className="underline"
                onClick={() => handleSwitch("login")}
              >
                Sign in
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="link"
                className="underline"
                onClick={() => handleSwitch("login")}
              >
                Login
              </Button>{" "}
              |{" "}
              <Button
                variant="link"
                className="underline"
                onClick={() => handleSwitch("signup")}
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </>
  );
};

const UserLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formType, setFormType] = useState("login");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/login") setFormType("login");
    else if (path === "/signup") setFormType("signup");
    else if (path === "/reset-password") setFormType("reset");
  }, [location.pathname]);

  const handleSwitch = (type) => {
    setFormType(type);
    document.getElementById("email").value = "";
    if (type === "login") navigate("/login");
    else if (type === "signup") navigate("/signup");
    else if (type === "reset") navigate("/reset-password");
  };

  return (
    <Card>
      <UserForm type={formType} handleSwitch={handleSwitch} />
    </Card>
  );
};

export default UserLogin;
