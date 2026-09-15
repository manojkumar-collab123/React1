import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./view/UserPage";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/User" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
