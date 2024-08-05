// package com.example.demo.controller;

// import com.example.demo.model.Task;
// import com.example.demo.service.TaskService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/tasks")
// public class TaskController {

//     @Autowired
//     private TaskService taskService;

//     @GetMapping
//     public List<Task> getAllTasks() {
//         return taskService.getAllTasks();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
//         Task task = taskService.getTaskById(id).orElseThrow(() -> new RuntimeException("Task not found"));
//         return ResponseEntity.ok(task);
//     }

//     // post register
//     @PostMapping("/register")
//     public ResponseEntity<Task> registerUser(@RequestBody Task task) {
//         Task registeredUser = taskService.createTask(task);
//         return ResponseEntity.ok(registeredUser);
//     }

//     //check log in
//     @PostMapping("/login")
//     public ResponseEntity<?> loginUser(@RequestBody Task task) {
//         Task loggedInUser = taskService.loginUser(task.getEmail(),task.getUsername(), task.getPassword());
//         if (loggedInUser != null) {
//             return ResponseEntity.ok(loggedInUser);
//         }
//         return ResponseEntity.status(401).body("Invalid user details");
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
//         Task updatedTask = taskService.updateTask(id, taskDetails);
//         return ResponseEntity.ok(updatedTask);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
//         taskService.deleteTask(id);
//         return ResponseEntity.noContent().build();
//     }
// }
package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskService.getTaskById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        return ResponseEntity.ok(task);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Task updatedTask = taskService.updateTask(id, taskDetails);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
