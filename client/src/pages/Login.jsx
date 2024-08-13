// // // // // // // import React, { useContext } from "react";
// // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // import { AuthContext } from "../context/AuthContext";

// // // // // // // const Login = () => {
// // // // // // //   const navigateTo = useNavigate();
// // // // // // //   const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
// // // // // // //     useContext(AuthContext);

// // // // // // //   console.log("loginError from login page:", loginError);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     updateLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       await loginUser(e);
// // // // // // //       navigateTo("/");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Login failed:", error);
// // // // // // //     }
// // // // // // //     try {
// // // // // // //       const response = await axios.post(
// // // // // // //         "http://localhost:8080/api/auth/login",
// // // // // // //         formData
// // // // // // //       );
// // // // // // //       // try {
// // // // // // //       //   const response = await axios.post(
// // // // // // //       //     "http://localhost:8080/api/auth/authenticate",
// // // // // // //       //     formData
// // // // // // //       //   );
// // // // // // //       console.log(response.data);
// // // // // // //       const { accessToken, role } = response.data;
// // // // // // //       localStorage.setItem("token", accessToken);
// // // // // // //       localStorage.setItem("role", role);
// // // // // // //       // sessionStorage.setItem("token", token);
// // // // // // //       // sessionStorage.setItem("role", role);

// // // // // // //       console.log("Token:", localStorage.getItem("token"));
// // // // // // //       alert("Login Success.!");
// // // // // // //       if (role === "ADMIN") {
// // // // // // //         navigate("/admin");
// // // // // // //       } else {
// // // // // // //         navigate("/users");
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       alert("Invalid Credentials.!");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
// // // // // // //       <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
// // // // // // //         <div>
// // // // // // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// // // // // // //             Login
// // // // // // //           </h2>
// // // // // // //         </div>
// // // // // // //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700">
// // // // // // //               Email address
// // // // // // //             </label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               name="email"
// // // // // // //               id="email"
// // // // // // //               autoComplete="email"
// // // // // // //               required
// // // // // // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // // // // // //               value={loginInfo?.email}
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             {loginError?.email && (
// // // // // // //               <p className="text-red-500 text-xs italic">{loginError.email}</p>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <label className="block text-sm font-medium text-gray-700">
// // // // // // //               Password
// // // // // // //             </label>
// // // // // // //             <input
// // // // // // //               type="password"
// // // // // // //               name="password"
// // // // // // //               id="password"
// // // // // // //               autoComplete="current-password"
// // // // // // //               required
// // // // // // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // // // // // //               value={loginInfo?.password}
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             {loginError?.password && (
// // // // // // //               <p className="text-red-500 text-xs italic">
// // // // // // //                 {loginError.password}
// // // // // // //               </p>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// // // // // // //               disabled={isLoginLoading}
// // // // // // //             >
// // // // // // //               {isLoginLoading ? "Logging in..." : "Login"}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </form>

// // // // // // //         <div className="mt-4 grid justify-center items-center">
// // // // // // //           {loginError && (
// // // // // // //             <p className="text-red-500 mt-2">{loginError.message}</p>
// // // // // // //           )}
// // // // // // //           <span className="mt-4">
// // // // // // //             Dont have an account?{" "}
// // // // // // //             <span className="text-blue-500 ml-3">
// // // // // // //               <Link to="/register">Register</Link>
// // // // // // //             </span>{" "}
// // // // // // //           </span>
// // // // // // //         </div>
        
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;




// // // // import React, { useContext } from "react";
// // // // import axios from "axios";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { AuthContext } from "../context/AuthContext";

// // // // const Login = () => {
// // // //   const navigate = useNavigate();
// // // //   const {
// // // //     loginInfo,
// // // //     updateLoginInfo,
// // // //     loginUser,
// // // //     loginError,
// // // //     isLoginLoading,
// // // //   } = useContext(AuthContext);

// // // //   const handleChange = (e) => {
// // // //     updateLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await loginUser(e);
// // // //       const response = await axios.post(
// // // //         "http://localhost:8080/api/auth/login",
// // // //         loginInfo
// // // //       );
// // // //       console.log(response.data);
// // // //       const { accessToken, role } = response.data;
// // // //       localStorage.setItem("token", accessToken);
// // // //       localStorage.setItem("role", role);

// // // //       console.log("Token:", localStorage.getItem("token"));
// // // //       alert("Login Success!");

// // // //       if (role === "ADMIN") {
// // // //         navigate("/admin");
// // // //       } else {
// // // //         navigate("/dashboard");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Login failed:", error);
// // // //       alert("Invalid Credentials!");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
// // // //       <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
// // // //         <div>
// // // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// // // //             Login
// // // //           </h2>
// // // //         </div>
// // // //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700">
// // // //               Email address
// // // //             </label>
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               id="email"
// // // //               autoComplete="email"
// // // //               required
// // // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // // //               value={loginInfo?.email}
// // // //               onChange={handleChange}
// // // //             />
// // // //             {loginError?.email && (
// // // //               <p className="text-red-500 text-xs italic">{loginError.email}</p>
// // // //             )}
// // // //           </div>
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700">
// // // //               Password
// // // //             </label>
// // // //             <input
// // // //               type="password"
// // // //               name="password"
// // // //               id="password"
// // // //               autoComplete="current-password"
// // // //               required
// // // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // // //               value={loginInfo?.password}
// // // //               onChange={handleChange}
// // // //             />
// // // //             {loginError?.password && (
// // // //               <p className="text-red-500 text-xs italic">
// // // //                 {loginError.password}
// // // //               </p>
// // // //             )}
// // // //           </div>
// // // //           <div>
// // // //             <button
// // // //               type="submit"
// // // //               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// // // //               disabled={isLoginLoading}
// // // //             >
// // // //               {isLoginLoading ? "Logging in..." : "Login"}
// // // //             </button>
// // // //           </div>
// // // //         </form>

// // // //         <div className="mt-4 grid justify-center items-center">
// // // //           {loginError && (
// // // //             <p className="text-red-500 mt-2">{loginError.message}</p>
// // // //           )}
// // // //           <span className="mt-4">
// // // //             Don't have an account?{" "}
// // // //             <span className="text-blue-500 ml-3">
// // // //               <Link to="/register">Register</Link>
// // // //             </span>
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;


// // // import React, { useContext } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { AuthContext } from "../context/AuthContext";

// // // const Login = () => {
// // //   const navigateTo = useNavigate();
// // //   const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
// // //     useContext(AuthContext);

// // //   console.log("loginError from login page:", loginError);

// // //   const handleChange = (e) => {
// // //     updateLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await loginUser(e);
// // //       navigateTo("/");
// // //     } catch (error) {
// // //       console.error("Login failed:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
// // //       <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
// // //         <div>
// // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// // //             Login
// // //           </h2>
// // //         </div>
// // //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Email address
// // //             </label>
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               id="email"
// // //               autoComplete="email"
// // //               required
// // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // //               value={loginInfo?.email}
// // //               onChange={handleChange}
// // //             />
// // //             {loginError?.email && (
// // //               <p className="text-red-500 text-xs italic">{loginError.email}</p>
// // //             )}
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Password
// // //             </label>
// // //             <input
// // //               type="password"
// // //               name="password"
// // //               id="password"
// // //               autoComplete="current-password"
// // //               required
// // //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// // //               value={loginInfo?.password}
// // //               onChange={handleChange}
// // //             />
// // //             {loginError?.password && (
// // //               <p className="text-red-500 text-xs italic">
// // //                 {loginError.password}
// // //               </p>
// // //             )}
// // //           </div>
// // //           <div>
// // //             <button
// // //               type="submit"
// // //               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// // //               disabled={isLoginLoading}
// // //             >
// // //               {isLoginLoading ? "Logging in..." : "Login"}
// // //             </button>
// // //           </div>
// // //         </form>

// // //         <div className="mt-4 grid justify-center items-center">
// // //           {loginError && (
// // //             <p className="text-red-500 mt-2">{loginError.message}</p>
// // //           )}
// // //           <span className="mt-4">
// // //             Dont have an account?{" "}
// // //             <span className="text-blue-500 ml-3">
// // //               <Link to="/register">Register</Link>
// // //             </span>{" "}
// // //           </span>
// // //         </div>
        
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
// //   const [loginError, setLoginError] = useState(null);
// //   const [isLoginLoading, setIsLoginLoading] = useState(false);
// //   const navigateTo = useNavigate();

// //   const handleChange = (e) => {
// //     setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoginLoading(true);
// //     try {
// //       const response = await axios.post("http://localhost:8081/api/register/login", loginInfo);
// //       if (response.status === 200) {
// //         navigateTo("/barchart"); // Redirect to BarChart page on successful login
// //       }
// //     } catch (error) {
// //       setLoginError(error.response ? error.response.data : "Login failed");
// //       console.error("Login failed:", error);
// //     } finally {
// //       setIsLoginLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             Login
// //           </h2>
// //         </div>
// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Email address
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               id="email"
// //               autoComplete="email"
// //               required
// //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// //               value={loginInfo.email}
// //               onChange={handleChange}
// //             />
// //             {loginError && (
// //               <p className="text-red-500 text-xs italic">{loginError}</p>
// //             )}
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               name="password"
// //               id="password"
// //               autoComplete="current-password"
// //               required
// //               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
// //               value={loginInfo.password}
// //               onChange={handleChange}
// //             />
// //             {loginError && (
// //               <p className="text-red-500 text-xs italic">{loginError}</p>
// //             )}
// //           </div>
// //           <div>
// //             <button
// //               type="submit"
// //               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //               disabled={isLoginLoading}
// //             >
// //               {isLoginLoading ? "Logging in..." : "Login"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
//   const [loginError, setLoginError] = useState(null);
//   const [isLoginLoading, setIsLoginLoading] = useState(false);
//   const navigateTo = useNavigate();

//   const handleChange = (e) => {
//     setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoginLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8081/api/register/login", loginInfo);
//       if (response.status === 200) {
//         navigateTo("/dashboard"); // Redirect to BarChart page on successful login
//       }
//     } catch (error) {
//       setLoginError(error.response ? error.response.data : "Login failed");
//       console.error("Login failed:", error);
//     } finally {
//       setIsLoginLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Login
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               autoComplete="email"
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               value={loginInfo.email}
//               onChange={handleChange}
//             />
//             {loginError && (
//               <p className="text-red-500 text-xs italic">{loginError}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               autoComplete="current-password"
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               value={loginInfo.password}
//               onChange={handleChange}
//             />
//             {loginError && (
//               <p className="text-red-500 text-xs italic">{loginError}</p>
//             )}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               disabled={isLoginLoading}
//             >
//               {isLoginLoading ? "Logging in..." : "Login"}
//             </button>
//           </div>
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true);
    try {
      const response = await axios.post("http://localhost:8081/api/register/login", loginInfo);
      if (response.status === 200) {
        navigateTo("/dashboard"); // Redirect to BarChart page on successful login
      }
    } 
    catch (error) {
      setLoginError(error.response ? error.response.data : "Login failed");
      console.error("Login failed:", error);
    } 
    finally {
      setIsLoginLoading(false);
    }
  };

  return (
    <>
      <Nav /> {/* Include the Nav component here */}
      <div className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white px-20 border py-5">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={loginInfo.email}
                onChange={handleChange}
              />
              {loginError && (
                <p className="text-red-500 text-xs italic">{loginError}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={loginInfo.password}
                onChange={handleChange}
              />
              {loginError && (
                <p className="text-red-500 text-xs italic">{loginError}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoginLoading}
              >
                {isLoginLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
                <b>REGISTER</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
