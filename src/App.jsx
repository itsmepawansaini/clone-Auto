import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/authStore";
import Home from "./views/home";
import Layout from "./components/Layout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

function App() {
  const { checkSession, session, loading } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Processing your request...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          session?.authenticated ? <Navigate to="/" /> : <div>Login Page</div>
        }
      />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>{/* Protected pages go here */}</Route>
      </Route>

      <Route path="*" element={<h2>404 - Page not found</h2>} />
    </Routes>
  );
}

export default App;
