import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,Link } from "react-router-dom";

export default function App() {
    return  (
      
            <div>
                <h1>Testing</h1>
                <nav
                    style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                    }}>
                    <Link to="/home">Home</Link> |{" "}
                    <Link to="/messages/1">Messages</Link>
                </nav>
                <Outlet />
            </div>
       

    )
}