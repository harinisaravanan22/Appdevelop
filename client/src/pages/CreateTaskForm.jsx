import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const CreateTaskForm = ({ onClose, onSubmit }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("incomplete");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCreateTask = () => {
    if (!newTaskTitle || !newTaskDescription) {
      toast.error("Title and description are required.");
      return;
    }

    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      status: newTaskStatus,
      date: selectedDate.toISOString(),
    };

    onSubmit(newTask);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setNewTaskStatus("incomplete");
    setSelectedDate(new Date());
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={newTaskStatus}
            onChange={(e) => setNewTaskStatus(e.target.value)}
          >
            <MenuItem value="incomplete">Incomplete</MenuItem>
            <MenuItem value="complete">Complete</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body1" gutterBottom>
          Date
        </Typography>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleCreateTask} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskForm;
