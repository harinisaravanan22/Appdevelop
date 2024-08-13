
// // // // import React, { useContext, useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import Navbar from "./Navbar";
// // // // import axios from "axios";
// // // // import { TaskContext } from "../context/TaskContext";
// // // // import { AuthContext } from "../context/AuthContext";
// // // // import { baseUrl } from "../utils/service";
// // // // import UpdateTaskForm from "../components/UpdateTaskForm";
// // // // import { GrDocumentUpdate } from "react-icons/gr";
// // // // import { MdDeleteForever } from "react-icons/md";
// // // // import { MdCreateNewFolder } from "react-icons/md";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import DatePicker from "react-datepicker";
// // // // import "react-datepicker/dist/react-datepicker.css";

// // // // const Dashboard = () => {
// // // //   const { tasks, isTaskLoading, taskError, setTasks } = useContext(TaskContext);
// // // //   const { user } = useContext(AuthContext);
// // // //   const [userTasks, setUserTasks] = useState([]);
// // // //   const [modalVisible, setModalVisible] = useState(false);
// // // //   const [updateModalVisible, setUpdateModalVisible] = useState(false);
// // // //   const [newTaskTitle, setNewTaskTitle] = useState("");
// // // //   const [newTaskDescription, setNewTaskDescription] = useState("");
// // // //   const [newTaskStatus, setNewTaskStatus] = useState("incomplete");
// // // //   const [selectedTaskToUpdate, setSelectedTaskToUpdate] = useState(null);
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // //   const tasksPerPage = 9;

// // // //   console.log("userTasks check for pagination", userTasks);

// // // //   useEffect(() => {
// // // //     if (user?._id) {
// // // //       const filteredTasks = tasks?.filter((task) => task.userId === user._id);
// // // //       setUserTasks(filteredTasks);
// // // //     }
// // // //   }, [tasks, user]);

// // // //   // Calculate the index of the first and last task for the current page
// // // //   const indexOfLastTask = currentPage * tasksPerPage;
// // // //   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
// // // //   const currentTasks = userTasks.slice(indexOfFirstTask, indexOfLastTask);

// // // //   // Change page
// // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // //   // const handleCreateTask = async () => {
// // // //   //   try {
// // // //   //     const response = await axios.post(`${baseUrl}/tasks`, {
// // // //   //       title: newTaskTitle,
// // // //   //       des: newTaskDescription,
// // // //   //       userId: user._id,
// // // //   //       status: newTaskStatus,
// // // //   //       date: selectedDate.toISOString(), // Add selected date when creating a task
// // // //   //     });
// // // //   //     setUserTasks([...userTasks, response.data]);
// // // //   //     setModalVisible(false);
// // // //   //     toast.success("Task created successfully!");
// // // //   //   } catch (error) {
// // // //   //     console.error("Error creating task:", error);
// // // //   //   }
// // // //   // };
// // // //   const handleCreateTask = async () => {
// // // //   // Log to see if the function is being called
// // // //   console.log("handleCreateTask function called");

// // // //   // Log the values being used in the API request
// // // //   console.log("Title:", newTaskTitle);
// // // //   console.log("Description:", newTaskDescription);
// // // //   console.log("Status:", newTaskStatus);
// // // //   console.log("Selected Date:", selectedDate.toISOString());

// // // //   try {
// // // //     const response = await axios.post(`${baseUrl}/tasks`, {
// // // //       title: newTaskTitle,
// // // //       des: newTaskDescription,
// // // //       userId: user._id,
// // // //       status: newTaskStatus,
// // // //       date: selectedDate.toISOString(),
// // // //     });

// // // //     // Log the response from the API
// // // //     console.log("Task created successfully:", response.data);

// // // //     setUserTasks([...userTasks, response.data]);
// // // //     setModalVisible(false);
// // // //     toast.success("Task created successfully!");
// // // //   } catch (error) {
// // // //     // Log the error if the API request fails
// // // //     console.error("Error creating task:", error);
// // // //   }
// // // // };


// // // //   const handleDeleteTask = async (taskId) => {
// // // //     try {
// // // //       await axios.delete(`${baseUrl}/tasks/${taskId}`);
// // // //       const updatedTasks = userTasks.filter((task) => task._id !== taskId);
// // // //       setUserTasks(updatedTasks);
// // // //       toast.success("Task deleted successfully!");
// // // //     } catch (error) {
// // // //       console.error("Error deleting task:", error);
// // // //     }
// // // //   };

// // // //   const handleUpdateTask = (task) => {
// // // //     setSelectedTaskToUpdate(task);
// // // //     setUpdateModalVisible(true);
// // // //   };

// // // //   const handleSubmitUpdate = async (updateTaskDetails) => {
// // // //     try {
// // // //       const response = await axios.put(
// // // //         `${baseUrl}/tasks/${selectedTaskToUpdate._id}`,
// // // //         updateTaskDetails
// // // //       );
// // // //       console.log("Updated task:", response.data);

// // // //       setUpdateModalVisible(false);
// // // //       toast.success("Task updated successfully!");

// // // //       // Delay the page reload by 1 second
// // // //       setTimeout(() => {
// // // //         window.location.reload();
// // // //       }, 1000);
// // // //     } catch (error) {
// // // //       console.error("Error updating task:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <ToastContainer />
// // // //       <Navbar />
// // // //       <section className="px-10 py-8 bg-[#292928] min-h-screen mt-16">
// // // //         <div className="flex justify-between items-center px-10 mb-10">
// // // //           <span className="font-bold text-2xl text-white">All Tasks</span>
// // // //           <button
// // // //             onClick={() => setModalVisible(true)}
// // // //             className="hover:bg-[#58554e] text-white text-4xl border border-gray-600 rounded-full p-2"
// // // //           >
// // // //             <MdCreateNewFolder />
// // // //           </button>
// // // //         </div>
// // // //         {isTaskLoading ? (
// // // //           <p>Loading tasks...</p>
// // // //         ) : taskError ? (
// // // //           <p>Error fetching tasks: {taskError.message}</p>
// // // //         ) : userTasks.length === 0 ? (
// // // //           <p className="text-white text-center text-3xl font-bold">
// // // //             Make your first Task
// // // //           </p>
// // // //         ) : (
// // // //           <div className="flex flex-wrap justify-center gap-5">
// // // //             {currentTasks?.map((task) => (
// // // //               <div
// // // //                 key={task._id}
// // // //                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
// // // //               >
// // // //                 <div className="bg-[#4a4a48] shadow-md rounded-md p-4 text-white">
// // // //                   <h2 className="text-xl font-semibold mb-2">{task?.title}</h2>
// // // //                   <p className="text-white mb-2">{task?.des}</p>
// // // //                   <p className="text-gray-400 mb-2">
// // // //                     {new Date(task?.date).toLocaleString()}
// // // //                   </p>
// // // //                   <div className="flex justify-between items-center mt-5">
// // // //                     <div>
// // // //                       <span
// // // //                         className={`text-sm font-semibold ${
// // // //                           task?.status === "complete"
// // // //                             ? "bg-green-600 text-white rounded-full py-1 px-2 cursor-pointer"
// // // //                             : " bg-red-500 text-white rounded-full py-1 px-2 cursor-pointer"
// // // //                         }`}
// // // //                       >
// // // //                         {task?.status}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex justify-center items-center">
// // // //                       <button
// // // //                         onClick={() => handleUpdateTask(task)}
// // // //                         className="text-white text-2xl mt-2 mr-2"
// // // //                       >
// // // //                         <GrDocumentUpdate />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={() => handleDeleteTask(task?._id)}
// // // //                         className="text-red-500 text-3xl mt-2"
// // // //                       >
// // // //                         <MdDeleteForever />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}

// // // //         {/* Pagination */}
// // // //         <div className="flex justify-center mt-5">
// // // //           <ul className="flex list-none rounded-md">
// // // //             {userTasks.length > tasksPerPage &&
// // // //               Array.from({
// // // //                 length: Math.ceil(userTasks.length / tasksPerPage),
// // // //               }).map((_, index) => (
// // // //                 <li
// // // //                   key={index}
// // // //                   className="px-3 py-1 mr-2 bg-gray-600 text-white rounded-md cursor-pointer"
// // // //                 >
// // // //                   <button onClick={() => paginate(index + 1)}>
// // // //                     {index + 1}
// // // //                   </button>
// // // //                 </li>
// // // //               ))}
// // // //           </ul>
// // // //         </div>
// // // //       </section>

// // // //       {modalVisible && (
// // // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// // // //           <div className="bg-gray-200 p-8 rounded-md">
// // // //             <h2 className="text-lg font-bold mb-4 flex justify-center items-center">
// // // //               Create New Task
// // // //             </h2>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Title"
// // // //               value={newTaskTitle}
// // // //               onChange={(e) => setNewTaskTitle(e.target.value)}
// // // //               className="w-full mb-4 p-2 rounded border"
// // // //             />
// // // //             <textarea
// // // //               placeholder="Description"
// // // //               value={newTaskDescription}
// // // //               onChange={(e) => setNewTaskDescription(e.target.value)}
// // // //               className="w-full mb-4 p-2 rounded border"
// // // //             ></textarea>
// // // //             <select
// // // //               value={newTaskStatus}
// // // //               onChange={(e) => setNewTaskStatus(e.target.value)}
// // // //               className="w-full mb-4 p-2 rounded border"
// // // //             >
// // // //               <option value="incomplete">Incomplete</option>
// // // //               <option value="complete">Complete</option>
// // // //             </select>
// // // //             <div className="w-full mb-4 p-2 rounded border">
// // // //               <DatePicker
// // // //                 selected={selectedDate}
// // // //                 onChange={(date) => setSelectedDate(date)}
// // // //                 className="w-full"
// // // //               />
// // // //             </div>
// // // //             <div className="flex justify-end">
// // // //               <button
// // // //                 onClick={() => setModalVisible(false)}
// // // //                 className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button
// // // //                 onClick={handleCreateTask}
// // // //                 className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
// // // //               >
// // // //                 Create
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {updateModalVisible && (
// // // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// // // //           <UpdateTaskForm
// // // //             key={updateModalVisible}
// // // //             taskToUpdate={selectedTaskToUpdate}
// // // //             userId={{ _id: user._id }}
// // // //             onSubmit={handleSubmitUpdate}
// // // //             onCancel={() => setUpdateModalVisible(false)}
// // // //           />
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // import React, { useContext, useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import Navbar from "./Navbar";
// // // import axios from "axios";
// // // import { TaskContext } from "../context/TaskContext";
// // // import { AuthContext } from "../context/AuthContext";
// // // import { baseUrl } from "../utils/service";
// // // import UpdateTaskForm from "../components/UpdateTaskForm";
// // // import { GrDocumentUpdate } from "react-icons/gr";
// // // import { MdDeleteForever, MdCreateNewFolder } from "react-icons/md";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import DatePicker from "react-datepicker";
// // // import "react-datepicker/dist/react-datepicker.css";

// // // const Dashboard = () => {
// // //   const { tasks, isTaskLoading, taskError, setTasks } = useContext(TaskContext);
// // //   const { user } = useContext(AuthContext);
// // //   const [userTasks, setUserTasks] = useState([]);
// // //   const [modalVisible, setModalVisible] = useState(false);
// // //   const [updateModalVisible, setUpdateModalVisible] = useState(false);
// // //   const [newTaskTitle, setNewTaskTitle] = useState("");
// // //   const [newTaskDescription, setNewTaskDescription] = useState("");
// // //   const [newTaskStatus, setNewTaskStatus] = useState("incomplete");
// // //   const [selectedTaskToUpdate, setSelectedTaskToUpdate] = useState(null);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // //   const tasksPerPage = 9;

// // //   useEffect(() => {
// // //     if (user?._id) {
// // //       const filteredTasks = tasks?.filter((task) => task.userId === user._id);
// // //       setUserTasks(filteredTasks);
// // //     }
// // //   }, [tasks, user]);

// // //   // Calculate the index of the first and last task for the current page
// // //   const indexOfLastTask = currentPage * tasksPerPage;
// // //   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
// // //   const currentTasks = userTasks.slice(indexOfFirstTask, indexOfLastTask);

// // //   // Change page
// // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // //   // Handle task creation
// // //   const handleCreateTask = async () => {
// // //     try {
// // //       const response = await axios.post(`${baseUrl}/tasks`, {
// // //         title: newTaskTitle,
// // //         description: newTaskDescription,
// // //         status: newTaskStatus,
// // //         date: selectedDate.toISOString(),
// // //       }, {
// // //         headers: {
// // //           'Content-Type': 'application/json'
// // //         }
// // //       });

// // //       setUserTasks([...userTasks, response.data]);
// // //       setModalVisible(false);
// // //       toast.success("Task created successfully!");
// // //     } catch (error) {
// // //       console.error("Error creating task:", error);
// // //       toast.error("Failed to create task.");
// // //     }
// // //   };

// // //   // Handle task deletion
// // //   const handleDeleteTask = async (taskId) => {
// // //     try {
// // //       await axios.delete("http://localhost:8081/tasks/${taskId}");
// // //       const updatedTasks = userTasks.filter((task) => task.id !== taskId);
// // //       setUserTasks(updatedTasks);
// // //       toast.success("Task deleted successfully!");
// // //     } catch (error) {
// // //       console.error("Error deleting task:", error);
// // //       toast.error("Failed to delete task.");
// // //     }
// // //   };

// // //   // Handle task update
// // //   const handleUpdateTask = (task) => {
// // //     setSelectedTaskToUpdate(task);
// // //     setUpdateModalVisible(true);
// // //   };

// // //   const handleSubmitUpdate = async (updateTaskDetails) => {
// // //     try {
// // //       const response = await axios.put(
// // //         `${baseUrl}/tasks/${selectedTaskToUpdate.id}`,
// // //         updateTaskDetails,
// // //         {
// // //           headers: {
// // //             'Content-Type': 'application/json'
// // //           }
// // //         }
// // //       );
// // //       setUpdateModalVisible(false);
// // //       toast.success("Task updated successfully!");
// // //       setUserTasks(userTasks.map(task => task.id === response.data.id ? response.data : task));
// // //     } catch (error) {
// // //       console.error("Error updating task:", error);
// // //       toast.error("Failed to update task.");
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <ToastContainer />
// // //       <Navbar />
// // //       <section className="px-10 py-8 bg-[#292928] min-h-screen mt-16">
// // //         <div className="flex justify-between items-center px-10 mb-10">
// // //           <span className="font-bold text-2xl text-white">All Tasks</span>
// // //           <button
// // //             onClick={() => setModalVisible(true)}
// // //             className="hover:bg-[#58554e] text-white text-4xl border border-gray-600 rounded-full p-2"
// // //           >
// // //             <MdCreateNewFolder />
// // //           </button>
// // //         </div>
// // //         {isTaskLoading ? (
// // //           <p>Loading tasks...</p>
// // //         ) : taskError ? (
// // //           <p>Error fetching tasks: {taskError.message}</p>
// // //         ) : userTasks.length === 0 ? (
// // //           <p className="text-white text-center text-3xl font-bold">
// // //             Make your first Task
// // //           </p>
// // //         ) : (
// // //           <div className="flex flex-wrap justify-center gap-5">
// // //             {currentTasks?.map((task) => (
// // //               <div
// // //                 key={task.id}
// // //                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
// // //               >
// // //                 <div className="bg-[#4a4a48] shadow-md rounded-md p-4 text-white">
// // //                   <h2 className="text-xl font-semibold mb-2">{task?.title}</h2>
// // //                   <p className="text-white mb-2">{task?.description}</p>
// // //                   <p className="text-gray-400 mb-2">
// // //                     {new Date(task?.date).toLocaleString()}
// // //                   </p>
// // //                   <div className="flex justify-between items-center mt-5">
// // //                     <div>
// // //                       <span
// // //                         className={`text-sm font-semibold ${
// // //                           task?.status === "complete"
// // //                             ? "bg-green-600 text-white rounded-full py-1 px-2 cursor-pointer"
// // //                             : " bg-red-500 text-white rounded-full py-1 px-2 cursor-pointer"
// // //                         }`}
// // //                       >
// // //                         {task?.status}
// // //                       </span>
// // //                     </div>
// // //                     <div className="flex justify-center items-center">
// // //                       <button
// // //                         onClick={() => handleUpdateTask(task)}
// // //                         className="text-white text-2xl mt-2 mr-2"
// // //                       >
// // //                         <GrDocumentUpdate />
// // //                       </button>
// // //                       <button
// // //                         onClick={() => handleDeleteTask(task.id)}
// // //                         className="text-red-500 text-3xl mt-2"
// // //                       >
// // //                         <MdDeleteForever />
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Pagination */}
// // //         <div className="flex justify-center mt-5">
// // //           <ul className="flex list-none rounded-md">
// // //             {userTasks.length > tasksPerPage &&
// // //               Array.from({
// // //                 length: Math.ceil(userTasks.length / tasksPerPage),
// // //               }).map((_, index) => (
// // //                 <li
// // //                   key={index}
// // //                   className="px-3 py-1 mr-2 bg-gray-600 text-white rounded-md cursor-pointer"
// // //                 >
// // //                   <button onClick={() => paginate(index + 1)}>
// // //                     {index + 1}
// // //                   </button>
// // //                 </li>
// // //               ))}
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       {modalVisible && (
// // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// // //           <div className="bg-gray-200 p-8 rounded-md">
// // //             <h2 className="text-lg font-bold mb-4 flex justify-center items-center">
// // //               Create New Task
// // //             </h2>
// // //             <input
// // //               type="text"
// // //               placeholder="Title"
// // //               value={newTaskTitle}
// // //               onChange={(e) => setNewTaskTitle(e.target.value)}
// // //               className="w-full mb-4 p-2 rounded border"
// // //             />
// // //             <textarea
// // //               placeholder="Description"
// // //               value={newTaskDescription}
// // //               onChange={(e) => setNewTaskDescription(e.target.value)}
// // //               className="w-full mb-4 p-2 rounded border"
// // //             ></textarea>
// // //             <select
// // //               value={newTaskStatus}
// // //               onChange={(e) => setNewTaskStatus(e.target.value)}
// // //               className="w-full mb-4 p-2 rounded border"
// // //             >
// // //               <option value="incomplete">Incomplete</option>
// // //               <option value="complete">Complete</option>
// // //             </select>
// // //             <div className="w-full mb-4 p-2 rounded border">
// // //               <DatePicker
// // //                 selected={selectedDate}
// // //                 onChange={(date) => setSelectedDate(date)}
// // //                 className="w-full"
// // //               />
// // //             </div>
// // //             <div className="flex justify-end">
// // //               <button
// // //                 onClick={() => setModalVisible(false)}
// // //                 className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleCreateTask}
// // //                 className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
// // //               >
// // //                 Create
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {updateModalVisible && (
// // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// // //           <UpdateTaskForm
// // //             key={updateModalVisible}
// // //             taskToUpdate={selectedTaskToUpdate}
// // //             userId={{ _id: user._id }}
// // //             onSubmit={handleSubmitUpdate}
// // //             onCancel={() => setUpdateModalVisible(false)}
// // //           />
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Dashboard;

// // import React, { useContext, useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import Navbar from "./Navbar";
// // import axios from "axios";
// // import { TaskContext } from "../context/TaskContext";
// // import { AuthContext } from "../context/AuthContext";
// // import { baseUrl } from "../utils/service";
// // import UpdateTaskForm from "../components/UpdateTaskForm";
// // import { GrDocumentUpdate } from "react-icons/gr";
// // import { MdDeleteForever } from "react-icons/md";
// // import { MdCreateNewFolder } from "react-icons/md";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // const Dashboard = () => {
// //   const { tasks, isTaskLoading, taskError, setTasks } = useContext(TaskContext);
// //   const { user } = useContext(AuthContext);
// //   const [userTasks, setUserTasks] = useState([]);
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [updateModalVisible, setUpdateModalVisible] = useState(false);
// //   const [newTaskTitle, setNewTaskTitle] = useState("");
// //   const [newTaskDescription, setNewTaskDescription] = useState("");
// //   const [newTaskStatus, setNewTaskStatus] = useState("incomplete");
// //   const [selectedTaskToUpdate, setSelectedTaskToUpdate] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const tasksPerPage = 9;

// //   console.log("userTasks check for pagination", userTasks);

// //   useEffect(() => {
// //     if (user?._id) {
// //       const filteredTasks = tasks?.filter((task) => task.userId === user._id);
// //       setUserTasks(filteredTasks);
// //     }
// //   }, [tasks, user]);

// //   // Calculate the index of the first and last task for the current page
// //   const indexOfLastTask = currentPage * tasksPerPage;
// //   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
// //   const currentTasks = userTasks.slice(indexOfFirstTask, indexOfLastTask);

// //   // Change page
// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   const handleCreateTask = async () => {
// //     try {
// //       const response = await axios.post(`${baseUrl}/tasks`, {
// //         title: newTaskTitle,
// //         des: newTaskDescription,
// //         userId: user._id,
// //         status: newTaskStatus,
// //         date: selectedDate.toISOString(), // Add selected date when creating a task
// //       });
// //       setUserTasks([...userTasks, response.data]);
// //       setModalVisible(false);
// //       toast.success("Task created successfully!");
// //     } catch (error) {
// //       console.error("Error creating task:", error);
// //     }
// //   };

// //   const handleDeleteTask = async (taskId) => {
// //     try {
// //       await axios.delete(`${baseUrl}/tasks/${taskId}`);
// //       const updatedTasks = userTasks.filter((task) => task._id !== taskId);
// //       setUserTasks(updatedTasks);
// //       toast.success("Task deleted successfully!");
// //     } catch (error) {
// //       console.error("Error deleting task:", error);
// //     }
// //   };

// //   const handleUpdateTask = (task) => {
// //     setSelectedTaskToUpdate(task);
// //     setUpdateModalVisible(true);
// //   };

// //   const handleSubmitUpdate = async (updateTaskDetails) => {
// //     try {
// //       const response = await axios.put(
// //         `${baseUrl}/tasks/${selectedTaskToUpdate._id}`,
// //         updateTaskDetails
// //       );
// //       console.log("Updated task:", response.data);

// //       setUpdateModalVisible(false);
// //       toast.success("Task updated successfully!");

// //       // Delay the page reload by 1 second
// //       setTimeout(() => {
// //         window.location.reload();
// //       }, 1000);
// //     } catch (error) {
// //       console.error("Error updating task:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <ToastContainer />
// //       <Navbar />
// //       <section className="px-10 py-8 bg-[#292928] min-h-screen mt-16">
// //         <div className="flex justify-between items-center px-10 mb-10">
// //           <span className="font-bold text-2xl text-white">All Tasks</span>
// //           <button
// //             onClick={() => setModalVisible(true)}
// //             className="hover:bg-[#58554e] text-white text-4xl border border-gray-600 rounded-full p-2"
// //           >
// //             <MdCreateNewFolder />
// //           </button>
// //         </div>
// //         {isTaskLoading ? (
// //           <p>Loading tasks...</p>
// //         ) : taskError ? (
// //           <p>Error fetching tasks: {taskError.message}</p>
// //         ) : userTasks.length === 0 ? (
// //           <p className="text-white text-center text-3xl font-bold">
// //             Make your first Task
// //           </p>
// //         ) : (
// //           <div className="flex flex-wrap justify-center gap-5">
// //             {currentTasks?.map((task) => (
// //               <div
// //                 key={task._id}
// //                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
// //               >
// //                 <div className="bg-[#4a4a48] shadow-md rounded-md p-4 text-white">
// //                   <h2 className="text-xl font-semibold mb-2">{task?.title}</h2>
// //                   <p className="text-white mb-2">{task?.des}</p>
// //                   <p className="text-gray-400 mb-2">
// //                     {new Date(task?.date).toLocaleString()}
// //                   </p>
// //                   <div className="flex justify-between items-center mt-5">
// //                     <div>
// //                       <span
// //                         className={`text-sm font-semibold ${
// //                           task?.status === "complete"
// //                             ? "bg-green-600 text-white rounded-full py-1 px-2 cursor-pointer"
// //                             : " bg-red-500 text-white rounded-full py-1 px-2 cursor-pointer"
// //                         }`}
// //                       >
// //                         {task?.status}
// //                       </span>
// //                     </div>
// //                     <div className="flex justify-center items-center">
// //                       <button
// //                         onClick={() => handleUpdateTask(task)}
// //                         className="text-white text-2xl mt-2 mr-2"
// //                       >
// //                         <GrDocumentUpdate />
// //                       </button>
// //                       <button
// //                         onClick={() => handleDeleteTask(task?._id)}
// //                         className="text-red-500 text-3xl mt-2"
// //                       >
// //                         <MdDeleteForever />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Pagination */}
// //         <div className="flex justify-center mt-5">
// //           <ul className="flex list-none rounded-md">
// //             {userTasks.length > tasksPerPage &&
// //               Array.from({
// //                 length: Math.ceil(userTasks.length / tasksPerPage),
// //               }).map((_, index) => (
// //                 <li
// //                   key={index}
// //                   className="px-3 py-1 mr-2 bg-gray-600 text-white rounded-md cursor-pointer"
// //                 >
// //                   <button onClick={() => paginate(index + 1)}>
// //                     {index + 1}
// //                   </button>
// //                 </li>
// //               ))}
// //           </ul>
// //         </div>
// //       </section>

// //       {modalVisible && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// //           <div className="bg-gray-200 p-8 rounded-md">
// //             <h2 className="text-lg font-bold mb-4 flex justify-center items-center">
// //               Create New Task
// //             </h2>
// //             <input
// //               type="text"
// //               placeholder="Title"
// //               value={newTaskTitle}
// //               onChange={(e) => setNewTaskTitle(e.target.value)}
// //               className="w-full mb-4 p-2 rounded border"
// //             />
// //             <textarea
// //               placeholder="Description"
// //               value={newTaskDescription}
// //               onChange={(e) => setNewTaskDescription(e.target.value)}
// //               className="w-full mb-4 p-2 rounded border"
// //             ></textarea>
// //             <select
// //               value={newTaskStatus}
// //               onChange={(e) => setNewTaskStatus(e.target.value)}
// //               className="w-full mb-4 p-2 rounded border"
// //             >
// //               <option value="incomplete">Incomplete</option>
// //               <option value="complete">Complete</option>
// //             </select>
// //             <div className="w-full mb-4 p-2 rounded border">
// //               <DatePicker
// //                 selected={selectedDate}
// //                 onChange={(date) => setSelectedDate(date)}
// //                 className="w-full"
// //               />
// //             </div>
// //             <div className="flex justify-end">
// //               <button
// //                 onClick={() => setModalVisible(false)}
// //                 className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleCreateTask}
// //                 className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
// //               >
// //                 Create
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {updateModalVisible && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
// //           <UpdateTaskForm
// //             key={updateModalVisible}
// //             taskToUpdate={selectedTaskToUpdate}
// //             userId={{ _id: user._id }}
// //             onSubmit={handleSubmitUpdate}
// //             onCancel={() => setUpdateModalVisible(false)}
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Dashboard;








// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios"; // Import axios
// import Navbar from "./Navbar";
// import { TaskContext } from "../context/TaskContext";
// import { AuthContext } from "../context/AuthContext";
// import { GrDocumentUpdate } from "react-icons/gr";
// import { MdDeleteForever, MdCreateNewFolder } from "react-icons/md";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import UpdateTaskForm from "../components/UpdateTaskForm";

// const baseUrl = "http://localhost:8081/api"; // Adjust this to your backend URL

// const Dashboard = () => {
//   const { tasks, isTaskLoading, taskError, setTasks } = useContext(TaskContext);
//   const { user } = useContext(AuthContext);
//   const [userTasks, setUserTasks] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [updateModalVisible, setUpdateModalVisible] = useState(false);
//   const [newTaskTitle, setNewTaskTitle] = useState("");
//   const [newTaskDescription, setNewTaskDescription] = useState("");
//   const [newTaskStatus, setNewTaskStatus] = useState("incomplete");
//   const [selectedTaskToUpdate, setSelectedTaskToUpdate] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const tasksPerPage = 9;

//   useEffect(() => {
//     if (user?._id) {
//       const fetchTasks = async () => {
//         try {
//           const response = await axios.get(`${baseUrl}/tasks`);
//           const filteredTasks = response.data.filter(
//             (task) => task.userId === user._id
//           );
//           setUserTasks(filteredTasks);
//           setTasks(response.data); // Update global tasks context
//         } catch (error) {
//           console.error("Error fetching tasks:", error);
//         }
//       };
//       fetchTasks();
//     }
//   }, [user, setTasks]);

//   // Calculate the index of the first and last task for the current page
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = userTasks.slice(indexOfFirstTask, indexOfLastTask);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleCreateTask = async () => {
//     try {
//       const response = await axios.post(`${baseUrl}/tasks`, {
//         title: newTaskTitle,
//         description: newTaskDescription,
//         userId: user._id,
//         status: newTaskStatus,
//         date: selectedDate.toISOString(),
//       });
//       setUserTasks([...userTasks, response.data]);
//       setModalVisible(false);
//       toast.success("Task created successfully!");
//     } catch (error) {
//       console.error("Error creating task:", error);
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await axios.delete(`${baseUrl}/tasks/${taskId}`);
//       const updatedTasks = userTasks.filter((task) => task._id !== taskId);
//       setUserTasks(updatedTasks);
//       toast.success("Task deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   const handleUpdateTask = (task) => {
//     setSelectedTaskToUpdate(task);
//     setUpdateModalVisible(true);
//   };

//   const handleSubmitUpdate = async (updateTaskDetails) => {
//     try {
//       const response = await axios.put(
//         `${baseUrl}/tasks/${selectedTaskToUpdate._id}`,
//         updateTaskDetails
//       );
//       console.log("Updated task:", response.data);
//       setUpdateModalVisible(false);
//       toast.success("Task updated successfully!");
//       setTimeout(() => {
//         window.location.reload();
//       }, 1000);
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Navbar />
//       <section className="px-10 py-8 bg-[#292928] min-h-screen mt-16">
//         <div className="flex justify-between items-center px-10 mb-10">
//           <span className="font-bold text-2xl text-white">All Tasks</span>
//           <button
//             onClick={() => setModalVisible(true)}
//             className="hover:bg-[#58554e] text-white text-4xl border border-gray-600 rounded-full p-2"
//           >
//             <MdCreateNewFolder />
//           </button>
//         </div>
//         {isTaskLoading ? (
//           <p>Loading tasks...</p>
//         ) : taskError ? (
//           <p>Error fetching tasks: {taskError.message}</p>
//         ) : userTasks.length === 0 ? (
//           <p className="text-white text-center text-3xl font-bold">
//             Make your first Task
//           </p>
//         ) : (
//           <div className="flex flex-wrap justify-center gap-5">
//             {currentTasks.map((task) => (
//               <div
//                 key={task._id}
//                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
//               >
//                 <div className="bg-[#4a4a48] shadow-md rounded-md p-4 text-white">
//                   <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
//                   <p className="text-white mb-2">{task.description}</p>
//                   <p className="text-gray-400 mb-2">
//                     {new Date(task.date).toLocaleString()}
//                   </p>
//                   <div className="flex justify-between items-center mt-5">
//                     <div>
//                       <span
//                         className={`text-sm font-semibold ${
//                           task.status === "complete"
//                             ? "bg-green-600 text-white rounded-full py-1 px-2 cursor-pointer"
//                             : " bg-red-500 text-white rounded-full py-1 px-2 cursor-pointer"
//                         }`}
//                       >
//                         {task.status}
//                       </span>
//                     </div>
//                     <div className="flex justify-center items-center">
//                       <button
//                         onClick={() => handleUpdateTask(task)}
//                         className="text-white text-2xl mt-2 mr-2"
//                       >
//                         <GrDocumentUpdate />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteTask(task._id)}
//                         className="text-red-500 text-3xl mt-2"
//                       >
//                         <MdDeleteForever />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center mt-5">
//           <ul className="flex list-none rounded-md">
//             {userTasks.length > tasksPerPage &&
//               Array.from({
//                 length: Math.ceil(userTasks.length / tasksPerPage),
//               }).map((_, index) => (
//                 <li
//                   key={index}
//                   className="px-3 py-1 mr-2 bg-gray-600 text-white rounded-md cursor-pointer"
//                 >
//                   <button onClick={() => paginate(index + 1)}>
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </section>

//       {modalVisible && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-gray-200 p-8 rounded-md">
//             <h2 className="text-lg font-bold mb-4 flex justify-center items-center">
//               Create New Task
//             </h2>
//             <input
//               type="text"
//               placeholder="Title"
//               value={newTaskTitle}
//               onChange={(e) => setNewTaskTitle(e.target.value)}
//               className="w-full mb-4 p-2 rounded border"
//             />
//             <textarea
//               placeholder="Description"
//               value={newTaskDescription}
//               onChange={(e) => setNewTaskDescription(e.target.value)}
//               className="w-full mb-4 p-2 rounded border"
//             ></textarea>
//             <select
//               value={newTaskStatus}
//               onChange={(e) => setNewTaskStatus(e.target.value)}
//               className="w-full mb-4 p-2 rounded border"
//             >
//               <option value="incomplete">Incomplete</option>
//               <option value="complete">Complete</option>
//             </select>
//             <div className="w-full mb-4 p-2 rounded border">
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 className="w-full"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setModalVisible(false)}
//                 className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateTask}
//                 className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {updateModalVisible && (
//         <UpdateTaskForm
//           task={selectedTaskToUpdate}
//           onClose={() => setUpdateModalVisible(false)}
//           onSubmit={handleSubmitUpdate}
//         />
//       )}
//     </>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const TaskCreationPage = () => {
//   const [inputTitle, setInputTitle] = useState("");
//   const [inputDesc, setInputDesc] = useState("");
//   const [inputDueDate, setInputDueDate] = useState("");
//   const [inputReminder, setInputReminder] = useState("");
//   const [inputStatus, setInputStatus] = useState("in progress"); // Default status
//   const [items, setItems] = useState(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });
//   const [isEditItem, setIsEditItem] = useState(null);
//   const [toggleSubmit, setToggleSubmit] = useState(true);
//   const [minDateTime, setMinDateTime] = useState(new Date().toISOString().slice(0, 16));

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(items));
//   }, [items]);

//   useEffect(() => {
//     const now = new Date().getTime();
//     items.forEach((task) => {
//       if (task.reminder && new Date(task.reminder).getTime() > now) {
//         const delay = new Date(task.reminder).getTime() - now;
//         setTimeout(() => alert(Reminder for task: ${task.title}), delay);
//       }
//     });
//   }, [items]);

//   const handleInputTitle = (e) => setInputTitle(e.target.value);
//   const handleInputDesc = (e) => setInputDesc(e.target.value);
//   const handleInputDueDate = (e) => setInputDueDate(e.target.value);
//   const handleInputReminder = (e) => setInputReminder(e.target.value);
//   const handleInputStatus = (e) => setInputStatus(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!inputTitle || !inputDesc || !inputDueDate) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const newTask = {
//       id: new Date().getTime().toString(),
//       title: inputTitle,
//       description: inputDesc,
//       dueDate: inputDueDate,
//       reminder: inputReminder,
//       status: inputStatus, // Status based on form input
//     };

//     if (inputTitle && !toggleSubmit) {
//       const updatedItems = items.map((elem) =>
//         elem.id === isEditItem ? newTask : elem
//       );
//       setItems(updatedItems);
//       setToggleSubmit(true);
//     } else {
//       setItems([...items, newTask]);
//     }

//     setInputTitle("");
//     setInputDesc("");
//     setInputDueDate("");
//     setInputReminder("");
//     setInputStatus("in progress"); // Reset to default status
//     setIsEditItem(null);
//   };

//   const handleEdit = (id) => {
//     const taskToEdit = items.find((elem) => elem.id === id);
//     setInputTitle(taskToEdit.title);
//     setInputDesc(taskToEdit.description);
//     setInputDueDate(taskToEdit.dueDate);
//     setInputReminder(taskToEdit.reminder);
//     setInputStatus(taskToEdit.status);
//     setIsEditItem(id);
//     setToggleSubmit(false);
//   };

//   const handleDelete = (id) => {
//     const updatedItems = items.filter((elem) => elem.id !== id);
//     setItems(updatedItems);
//   };

//   const handleAdd = () => {
//     setInputTitle("");
//     setInputDesc("");
//     setInputDueDate("");
//     setInputReminder("");
//     setInputStatus("in progress"); // Default status for new tasks
//     setIsEditItem(null);
//     setToggleSubmit(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={styles.pageContainer}>
//         <div style={styles.newButtonContainer}>
//           <button style={styles.newButton} onClick={handleAdd}>
//             New Task
//           </button>
//         </div>
//         <div style={styles.formContainer}>
//           <h2 style={styles.formTitle}>{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <label htmlFor="title" style={styles.label}>
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Task Title"
//               style={styles.input}
//               onChange={handleInputTitle}
//               value={inputTitle}
//             />
//             <label htmlFor="description" style={styles.label}>
//               Description
//             </label>
//             <input
//               type="text"
//               id="description"
//               placeholder="Task Description"
//               style={styles.input}
//               onChange={handleInputDesc}
//               value={inputDesc}
//             />
//             <label htmlFor="dueDate" style={styles.label}>
//               Due Date
//             </label>
//             <input
//               type="datetime-local"
//               id="dueDate"
//               style={styles.input}
//               onChange={handleInputDueDate}
//               value={inputDueDate}
//               min={minDateTime}
//             />
//             <label htmlFor="reminder" style={styles.label}>
//               Reminder
//             </label>
//             <input
//               type="datetime-local"
//               id="reminder"
//               style={styles.input}
//               onChange={handleInputReminder}
//               value={inputReminder}
//               min={minDateTime}
//             />
//             <label htmlFor="status" style={styles.label}>
//               Status
//             </label>
//             <select
//               id="status"
//               style={styles.input}
//               onChange={handleInputStatus}
//               value={inputStatus}
//             >
//               {/* Conditionally render status options */}
//               {toggleSubmit ? (
//                 <option value="in progress">In Progress</option>
//               ) : (
//                 <>
//                   <option value="in progress">In Progress</option>
//                   <option value="completed">Completed</option>
//                 </>
//               )}
//             </select>
//             <button type="submit" style={styles.submitButton}>
//               {toggleSubmit ? "Save" : "Update"}
//             </button>
//           </form>
//         </div>
//         <div style={styles.listContainer}>
//           {items.length === 0 ? (
//             <p>No tasks found.</p>
//           ) : (
//             items.map((elem) => (
//               <div style={styles.itemContainer} key={elem.id}>
//                 <div style={styles.itemContent}>
//                   <h4 style={styles.itemTitle}>{elem.title}</h4>
//                   <p style={styles.itemDesc}>{elem.description}</p>
//                   <p style={styles.itemDueDate}>Due Date: {new Date(elem.dueDate).toLocaleString()}</p>
//                   <p style={styles.itemReminder}>Reminder: {new Date(elem.reminder).toLocaleString()}</p>
//                   <p style={{ ...styles.itemStatus, color: elem.status === "completed" ? "green" : "red" }}>
//                     Status: {elem.status}
//                   </p>
//                 </div>
//                 <div style={styles.itemActions}>
//                   <button style={styles.editButton} onClick={() => handleEdit(elem.id)}>
//                     Edit
//                   </button>
//                   <button style={styles.deleteButton} onClick={() => handleDelete(elem.id)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   pageContainer: { marginTop: "60px", paddingBottom: "50px", padding: "0 20px" },
//   newButtonContainer: { display: "flex", justifyContent: "flex-end", padding: "20px 0" },
//   newButton: {
//     backgroundColor: "#242f47",
//     color: "#fff",
//     border: "none",
//     padding: "12px 24px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "18px",
//     transition: "background-color 0.3s",
//   },
//   formContainer: { backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", padding: "25px", margin: "20px 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" },
//   formTitle: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "20px",
//     fontSize: "24px",
//     fontWeight: "700",
//     fontFamily: "'Roboto', sans-serif",
//     textTransform: "uppercase",
//     letterSpacing: "1.5px",
//   },
//   form: { display: "flex", flexDirection: "column", gap: "15px" },
//   label: { fontSize: "16px", color: "#333", marginBottom: "5px" },
//   input: { padding: "10px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" },
//   submitButton: {
//     backgroundColor: "#242f47",
//     color: "#fff",
//     border: "none",
//     padding: "12px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "18px",
//     transition: "background-color 0.3s",
//   },
//   listContainer: { padding: "20px" },
//   itemContainer: {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//     marginBottom: "20px",
//     padding: "20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   itemContent: { flex: 1 },
//   itemTitle: { fontSize: "20px", color: "#333", marginBottom: "8px" },
//   itemDesc: { color: "#666", marginBottom: "8px" },
//   itemDueDate: { color: "#888", marginBottom: "8px" },
//   itemReminder: { color: "#888", marginBottom: "8px" },
//   itemStatus: { color: "#666", marginBottom: "8px" },
//   itemActions: { display: "flex", gap: "10px" },
//   editButton: {
//     backgroundColor: "#242f47",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s",
//   },
//   deleteButton: {
//     backgroundColor: "#d9534f",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s",
//   },
// };

// export default TaskCreationPage;



import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");
  const [inputReminder, setInputReminder] = useState("");
  const [inputStatus, setInputStatus] = useState("in progress"); // Default status
  const [items, setItems] = useState([]);
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [minDateTime, setMinDateTime] = useState(new Date().toISOString().slice(0, 16));

  useEffect(() => {
    // Fetch tasks from backend
    axios.get("http://localhost:8081/api/tasks")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  useEffect(() => {
    // Update local storage when items change
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    // Set reminders for tasks
    const now = new Date().getTime();
    items.forEach((task) => {
      if (task.reminder && new Date(task.reminder).getTime() > now) {
        const delay = new Date(task.reminder).getTime() - now;
        setTimeout(() => alert(`Reminder for task: ${task.title}`), delay);
      }
    });
  }, [items]);

  const handleInputTitle = (e) => setInputTitle(e.target.value);
  const handleInputDesc = (e) => setInputDesc(e.target.value);
  const handleInputDueDate = (e) => setInputDueDate(e.target.value);
  const handleInputReminder = (e) => setInputReminder(e.target.value);
  const handleInputStatus = (e) => setInputStatus(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputTitle || !inputDesc || !inputDueDate) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      title: inputTitle,
      description: inputDesc,
      dueDate: inputDueDate,
      reminder: inputReminder,
      status: inputStatus,
    };

    if (inputTitle && !toggleSubmit) {
      axios.put(`http://localhost:8080/api/tasks/${isEditItem}`, newTask)
        .then(response => {
          const updatedItems = items.map((elem) =>
            elem.id === isEditItem ? response.data : elem
          );
          setItems(updatedItems);
          setToggleSubmit(true);
        })
        .catch(error => {
          console.error("Error updating task:", error);
        });
    } else {
      axios.post("http://localhost:8081/api/tasks", newTask)
        .then(response => {
          setItems([...items, response.data]);
        })
        .catch(error => {
          console.error("Error creating task:", error);
        });
    }

    setInputTitle("");
    setInputDesc("");
    setInputDueDate("");
    setInputReminder("");
    setInputStatus("in progress"); // Reset to default status
    setIsEditItem(null);
  };

  const handleEdit = (id) => {
    const taskToEdit = items.find((elem) => elem.id === id);
    setInputTitle(taskToEdit.title);
    setInputDesc(taskToEdit.description);
    setInputDueDate(taskToEdit.dueDate);
    setInputReminder(taskToEdit.reminder);
    setInputStatus(taskToEdit.status);
    setIsEditItem(id);
    setToggleSubmit(false);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/tasks/${id}`)
      .then(() => {
        const updatedItems = items.filter((elem) => elem.id !== id);
        setItems(updatedItems);
      })
      .catch(error => {
        console.error("Error deleting task:", error);
      });
  };

  const handleAdd = () => {
    setInputTitle("");
    setInputDesc("");
    setInputDueDate("");
    setInputReminder("");
    setInputStatus("in progress"); // Default status for new tasks
    setIsEditItem(null);
    setToggleSubmit(true);
  };

  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.newButtonContainer}>
          <button style={styles.newButton} onClick={handleAdd}>
            New Task
          </button>
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="title" style={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Task Title"
              style={styles.input}
              onChange={handleInputTitle}
              value={inputTitle}
            />
            <label htmlFor="description" style={styles.label}>
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Task Description"
              style={styles.input}
              onChange={handleInputDesc}
              value={inputDesc}
            />
            <label htmlFor="dueDate" style={styles.label}>
              Due Date
            </label>
            <input
              type="datetime-local"
              id="dueDate"
              style={styles.input}
              onChange={handleInputDueDate}
              value={inputDueDate}
              min={minDateTime}
            />
            <label htmlFor="reminder" style={styles.label}>
              Reminder
            </label>
            <input
              type="datetime-local"
              id="reminder"
              style={styles.input}
              onChange={handleInputReminder}
              value={inputReminder}
              min={minDateTime}
            />
            <label htmlFor="status" style={styles.label}>
              Status
            </label>
            <select
              id="status"
              style={styles.input}
              onChange={handleInputStatus}
              value={inputStatus}
            >
              {/* Conditionally render status options */}
              {toggleSubmit ? (
                <option value="in progress">In Progress</option>
              ) : (
                <>
                  <option value="in progress">In Progress</option>
                  <option value="completed">Completed</option>
                </>
              )}
            </select>
            <button type="submit" style={styles.submitButton}>
              {toggleSubmit ? "Save" : "Update"}
            </button>
          </form>
        </div>
        <div style={styles.listContainer}>
          {items.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            items.map((elem) => (
              <div style={styles.itemContainer} key={elem.id}>
                <div style={styles.itemContent}>
                  <h4 style={styles.itemTitle}>{elem.title}</h4>
                  <p style={styles.itemDesc}>{elem.description}</p>
                  <p style={styles.itemDueDate}>Due Date: {new Date(elem.dueDate).toLocaleString()}</p>
                  <p style={styles.itemReminder}>Reminder: {new Date(elem.reminder).toLocaleString()}</p>
                  <p style={{ ...styles.itemStatus, color: elem.status === "completed" ? "green" : "red" }}>
                    Status: {elem.status}
                  </p>
                </div>
                <div style={styles.itemActions}>
                  <button style={styles.editButton} onClick={() => handleEdit(elem.id)}>
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => handleDelete(elem.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
  
    </>
  );
};

const styles = {
  pageContainer: { marginTop: "60px", paddingBottom: "50px", padding: "0 20px" ,backgroundColor:"#292928"},
  newButtonContainer: { display: "flex", justifyContent: "flex-end", padding: "20px 0" },
  newButton: {
    backgroundColor: "#242f47",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s",
  },
  formContainer: { backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", padding: "25px", margin: "20px 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" },
  formTitle: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "700",
    fontFamily: "'Roboto', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  label: { fontSize: "16px", color: "#333", marginBottom: "5px" },
  input: { padding: "10px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" },
  submitButton: {
    backgroundColor: "#242f47",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s",
  },
  listContainer: { padding: "20px" },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    marginBottom: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: { flex: 1 },
  itemTitle: { fontSize: "20px", color: "#333", marginBottom: "8px" },
  itemDesc: { color: "#666", marginBottom: "8px" },
  itemDueDate: { color: "#888", marginBottom: "8px" },
  itemReminder: { color: "#888", marginBottom: "8px" },
  itemStatus: { color: "#666", marginBottom: "8px" },
  itemActions: { display: "flex", gap: "10px" },
  editButton: {
    backgroundColor: "#242f47",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};
export default Dashboard;