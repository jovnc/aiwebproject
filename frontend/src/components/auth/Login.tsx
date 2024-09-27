import api from "@/api";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "../ui/form";
import { useForm } from "react-hook-form";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { username, password });
      const { access_token } = response.data;

      // Store JWT in localStorage
      localStorage.setItem("token", access_token);
      alert("Logged in successfully!");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="bg-gradient-to-b from-violet-300 to-purple-300 w-full max-w-screen-sm flex-col py-5 overflow-hidden rounded-3xl">
        <div className="flex font-bold text-3xl justify-center pt-5 text-white font bold">
          Log In
        </div>
        <div className="flex text-xl justify-center pb-12 text-white italic">
          Start Splitting!
        </div>
        <div className="flex justify-center w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full gap-8 px-8"
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="rounded-xl p-3"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="rounded-xl p-3"
            />
            <Button type="submit" className="rounded-3xl h-12 bg-violet-500">
              Login
            </Button>
          </form>
        </div>
        <div className="flex-col h-full justify-self-end overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-full flex-col"
          >
            <path
              d="M0,30 C150,80 350,20 500,30 L500,100 L0,100 Z"
              style={{ fill: "#E6E6FA" }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
