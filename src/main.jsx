import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SignIn, ForgetPassword, AuthLayout, Dashboard, Home, NewTicket } from './components/index.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn SignIn={true} />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            <SignIn SignIn={true} />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            <SignIn SignIn={false} />
          </AuthLayout>
        ),
      },
      {
        path: "/forget-password",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            <ForgetPassword />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <Dashboard />
          </AuthLayout>
        ),
      },
      {
        path: "/home",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/new-ticket",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            <NewTicket />
          </AuthLayout>
        ),
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
