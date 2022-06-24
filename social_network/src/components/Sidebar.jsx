import "./../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav className="rounded">
      <div>
        <h4>Shortcuts</h4>
        <hr />
      </div>
      <ul>
        <li>
          <img src="" alt="" srcset="" />
          <Link to="/home">Home</Link>
        </li>
        <li>
          <img src="" alt="" srcset="" />
          <Link to="/search">Search</Link>
        </li>
        <li>
          <img src="" alt="" srcset="" />
          <Link to="/add-post">Add post</Link>
        </li>
        <li>
          <img src="" alt="" srcset="" />
          <Link to="/dialogs">Dialogs</Link>
        </li>
        <li>
          <img src="" alt="" srcset="" />
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
