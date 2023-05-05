import useAuth from "../index.jsx";
import App from "../../App.jsx"
function Dashboard() {
  const [isLogin, token] = useAuth();
  return isLogin ? (
    <div>
        <App token={token} />
    </div>
    ) : (
    <div>
        <h1>Not logged in</h1>
    </div>
    );
}


export default Dashboard;