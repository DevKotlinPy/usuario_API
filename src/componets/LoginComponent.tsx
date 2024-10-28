import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginComponent = () => {
  const { handleLogin, loading, error, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  if (isAuthenticated) {
    return <div>You are logged in!</div>;
  }

  return (
    <div>


      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Inicio de sesion
            </h1>
            <input
              type="text"
              placeholder="Username"
              className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                       dark:focus:border-blue-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />



            <input
              className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember"
                    className="w-4 h-4 border border-gray-300 rounded
                             bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 
                             dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    placeholder='Recordar?'
                    type="checkbox"
                    required />
                </div>
                <div className="ml-3 text-sm">
                  <label form="remember" className="text-gray-500 dark:text-gray-300">Recordar</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>


            <button
             type="submit" 
            className='w-full text-white bg-green-700 hover:bg-orange-700 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center
                         dark:bg-green-900'
             disabled={loading}
            >
        
              {loading ? 'iniciando Sesión...' : 'Iniciar'}
            </button>

          </form>

        </div>
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginComponent;