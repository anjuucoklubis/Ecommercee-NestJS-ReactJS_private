import "./App.css";
import { AuthProvider } from "./guard/AuthContext";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
