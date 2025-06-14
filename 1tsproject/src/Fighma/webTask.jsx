import { Link } from 'react-router-dom';
import "./../ProjectStyling/web.css";
import taskImage from '../assets/file.png';

export const WebTask = () => (
  <div className="container">
    <div className="task-section with-bg">
      <Link to="/task" className="menu-button task-inline">
        <img src={taskImage} alt="Task Icon" className="task-icon" />
        <span>Task</span>
      </Link>
    </div>
    <div className="locate">
      <Link to="/location" className="location-btn">
        <span>Location</span>
      </Link>
    </div>
  </div>
);
      
