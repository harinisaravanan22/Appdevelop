import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
import { toast } from "react-toastify";

const UpdateTaskForm = ({ task, onClose, onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskStatus, setTaskStatus] = useState(task.status);
  const [taskDate, setTaskDate] = useState(new Date(task.date));

  const handleUpdateTask = () => {
    if (!taskTitle || !taskDescription) {
      toast.error("Title and description are required.");
      return;
    }

    const updatedTask = {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
      date: taskDate.toISOString(),
    };

    onSubmit(updatedTask);
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>Update Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <MenuItem value="incomplete">Incomplete</MenuItem>
            <MenuItem value="complete">Complete</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body1" gutterBottom>
          Date
        </Typography>
        <DatePicker
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
          className="w-full"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdateTask} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTaskForm;
