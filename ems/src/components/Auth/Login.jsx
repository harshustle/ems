import React,{ useState } from 'react';

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(handleLogin)
    

    
    const submitHandler = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Login submitted');
        handleLogin(email, password);
        
        // You can add your API call here to authenticate the user
        setEmail('');
        setPassword('');
    };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        <form className="w-full space-y-4" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              autoComplete="current-Username"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
