import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import DashBoard from "./components/dashboard/DashBoard"
import ForgotPassword from "./components/login/ForgotPassword"
import DashBoardNotePage from "./components/dashboard/DashBoardNotePage"
import CreateNotePage from "./components/dashboard/CreateNotePage"
import UpdateNotes from "./components/dashboard/UpdateNotes"
import PrivateRoute from "./components/privateRoute/PrivateRoute"

const App=()=> {
   
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          index:true,
          element:<DashBoard/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/forgotpassword",
          element:<ForgotPassword/>
        },
        {
          path:"/dashboardNotePage",
          element:<PrivateRoute>
            <DashBoardNotePage/>
          </PrivateRoute>
        },
        {
          path:"/createNotePage",
          element:<PrivateRoute>
            <CreateNotePage/>
          </PrivateRoute>
        },
        {
          path:"/update-notes",
          element:<PrivateRoute>
            <UpdateNotes/>
          </PrivateRoute>
        }
      ]
    }
  ])

  return (
    <div >
     <RouterProvider router={route}/>
    </div>
  )
}

export default App
