import { useState } from "react";
import { login, logout, getToken } from "../service/auth/authService";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getToken());
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    const handleLogin = async (username: string, password: string) => {
      setLoading(true);
      try {
        const token = await login(username, password);

        if (token) {
          setIsAuthenticated(true);
          setError(null);
        }
      } catch (error) {
        setError(`Invalid credentials - ${error}`);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
      };
    
      return { isAuthenticated, loading, error, handleLogin, handleLogout };
    };