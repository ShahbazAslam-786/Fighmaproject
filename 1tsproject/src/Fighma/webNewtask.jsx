import React, { useState } from "react";
import "./../ProjectStyling/web.css";
import taskImage from '../assets/file.png';
import locationIcon from '../assets/Vector1.png';
import logoutIcon from '../assets/logout.png';

export const WebNewtask = () => {
  const [currentView, setCurrentView] = useState("tasks");
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    summary: "",
    description: "",
    dueDate: "",
  });

  const [tasks, setTasks] = useState([
    { id: 1, text: "Submit my resume", completed: false, dueDate: "Today, 17:00" },
    { id: 2, text: "Complete the test", completed: false, dueDate: "Tomorrow, 10:00" },
    { id: 3, text: "Meeting with Jack", completed: false, dueDate: "24 Feb, 15:00" },
    { id: 4, text: "Buy a chocolate for Mom", completed: false, dueDate: "24 Feb, 11:00" },
    { id: 5, text: "Facetime with Dad", completed: false, dueDate: "24 Feb, 18:00" },
    { id: 6, text: "Respond to Jane email", completed: true },
    { id: 7, text: "Reschedule weekly meeting", completed: true },
    { id: 8, text: "Service my bike", completed: true },
    { id: 9, text: "Recheck the agreement document", completed: true },
    { id: 10, text: "Check the latest on Community", completed: true },
  ]);

  const locations = [
    { id: 1, name: "Pustegrand, Stockholm, SE", time: "3h ago", type: "current" },
    { id: 2, name: "Helsingegatan, Stockholm, SE", time: "1d ago", type: "previous" },
    { id: 3, name: "Pustegrand, Stockholm, SE", time: "2d ago", type: "previous" },
    { id: 4, name: "Langa Gatan, Stockholm, SE", time: "3d ago", type: "previous" },
    { id: 5, name: "Djurgården, Stockholm, SE", time: "4d ago", type: "previous" },
    { id: 6, name: "Svartengsgatan, Stockholm, SE", time: "5d ago", type: "previous" },
  ];

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.summary.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.summary,
        completed: false,
        dueDate: newTask.dueDate || undefined,
      };
      setTasks([...tasks, task]);
      setNewTask({ summary: "", description: "", dueDate: "" });
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setNewTask({ summary: "", description: "", dueDate: "" });
    setShowModal(false);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="task-manager">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="menu-items">
            <div
              className={`menu-item ${currentView === "tasks" ? "active" : ""}`}
              onClick={() => setCurrentView("tasks")}
            >
              <img src={taskImage} alt="task icon" className="menu-icon" />
              Task
            </div>
            <div
              className={`menu-item ${currentView === "location" ? "active" : ""}`}
              onClick={() => setCurrentView("location")}
            >
              <img src={locationIcon} alt="location icon" className="menu-icon" />
              Location
            </div>
          </div>
          <div className="logout">
            <img src={logoutIcon} alt="logout icon" className="menu-icon" />
            Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {currentView === "tasks" ? (
          <div className="tasks-view">
            <button onClick={() => setShowModal(true)} className="add-task-btn">
              + Add new task
            </button>

            {/* Incomplete Tasks */}
            <div className="tasks-section">
              <h2 className="section-title">Incomplete</h2>
              <div className="task-list">
                {incompleteTasks.map((task) => (
                  <div key={task.id} className="task-item">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="task-checkbox"
                    />
                    <div className="task-content">
                      <span className="task-text">{task.text}</span>
                      {task.dueDate && (
                        <div className="task-due-date">🕒 {task.dueDate}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Tasks */}
            <div className="tasks-section">
              <h2 className="section-title">Completed</h2>
              <div className="task-list">
                {completedTasks.map((task) => (
                  <div key={task.id} className="task-item completed">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="task-checkbox"
                    />
                    <div className="task-content">
                      <span className="task-text">{task.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="location-view">
            <button className="add-task-btn">+ Check In</button>

            {/* Current Location */}
            <div className="location-section">
              <h2 className="section-title">Current location</h2>
              <div className="location-item">
                <div className="location-dot current"></div>
                <div className="location-content">
                  <div className="location-name">
                    {locations.find((loc) => loc.type === "current")?.name}
                  </div>
                  <div className="location-time">
                    {locations.find((loc) => loc.type === "current")?.time}
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Locations */}
            <div className="location-section">
              <h2 className="section-title">Previous location</h2>
              <div className="location-list">
                {locations
                  .filter((loc) => loc.type === "previous")
                  .map((location) => (
                    <div key={location.id} className="location-item">
                      <div className="location-dot"></div>
                      <div className="location-content">
                        <div className="location-name">{location.name}</div>
                        <div className="location-time">{location.time}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">New Task</h3>

            <div className="modal-form">
              <div className="form-field">
                <span className="field-icon">📄</span>
                <input
                  type="text"
                  placeholder="Summary"
                  value={newTask.summary}
                  onChange={(e) =>
                    setNewTask({ ...newTask, summary: e.target.value })
                  }
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <span className="field-icon">📝</span>
                <input
                  type="text"
                  placeholder="Description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <span className="field-icon">📅</span>
                <input
                  type="text"
                  placeholder="Due date"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="field-input"
                />
              </div>
            </div>

            <div className="modal-buttons">
              <button onClick={handleAddTask} className="save-btn">
                Save
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
