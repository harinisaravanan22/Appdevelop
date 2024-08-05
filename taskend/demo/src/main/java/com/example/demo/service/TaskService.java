// // package com.example.demo.service;

// // import com.example.demo.model.Task;
// // import com.example.demo.repository.TaskRepository;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.stereotype.Service;

// // import java.util.List;
// // import java.util.Optional;

// // @Service
// // public class TaskService {

// //     @Autowired
// //     private TaskRepository taskRepository;

// //     public List<Task> getAllTasks() {
// //         return taskRepository.findAll();
// //     }

// //     public Optional<Task> getTaskById(Long id) {
// //         return taskRepository.findById(id);
// //     }

// //     public Task createTask(Task task) {
// //         return taskRepository.save(task);
// //     }

// //     public Task loginUser(String email,String username, String password) {
// //         Task task = taskRepository.findByEmail(email);
// //         if (task != null && task.getPassword().equals(password) && username != null) {
// //             return task;
// //         }
// //         return null;
// //     }

// //     public Task updateTask(Long id, Task taskDetails) {
// //         Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

// //         task.setTitle(taskDetails.getTitle());
// //         task.setDescription(taskDetails.getDescription());
// //         task.setStartTime(taskDetails.getStartTime());
// //         task.setEndTime(taskDetails.getEndTime());

// //         return taskRepository.save(task);
// //     }

// //     public void deleteTask(Long id) {
// //         Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
// //         taskRepository.delete(task);
// //     }
// // }
// package com.example.demo.service;

// import com.example.demo.model.Task;
// import com.example.demo.repository.TaskRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class TaskService {

//     @Autowired
//     private TaskRepository taskRepository;

//     public List<Task> getAllTasks() {
//         return taskRepository.findAll();
//     }

//     public Optional<Task> getTaskById(Long id) {
//         return taskRepository.findById(id);
//     }

//     public Task createTask(Task task) {
//         return taskRepository.save(task);
//     }

//     public Task updateTask(Long id, Task taskDetails) {
//         Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

//         task.setTitle(taskDetails.getTitle());
//         task.setDescription(taskDetails.getDescription());
//         task.setStartTime(taskDetails.getStartTime());
//         task.setEndTime(taskDetails.getEndTime());

//         return taskRepository.save(task);
//     }

//     public void deleteTask(Long id) {
//         Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
//         taskRepository.delete(task);
//     }
// }
package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task createTask(Task task) {
        // Consider validating or encrypting the password here if needed
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

        task.setFirstname(taskDetails.getFirstname());
        task.setLastname(taskDetails.getLastname());
        task.setEmail(taskDetails.getEmail());
        task.setPhoneNumber(taskDetails.getPhoneNumber());
        task.setPassword(taskDetails.getPassword()); // Handle password securely

        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepository.delete(task);
    }
}
