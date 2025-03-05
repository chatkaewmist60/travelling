import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Homepage from "../pages/homepage"
import CalendarPage from "../pages/calendarPage"
import ToursPage from "../pages/toursPage"
import SharePlanPage from "../pages/sharePlanPage"
import Navbar from "../components/Navbar"
import Register from "../pages/Register"
import Login from "../pages/Login"
import BlockPost from "../components/BlockPost"
import MemberHomepage from "../pages/memberHomepage"
import CreatePlanPage from "../pages/CreatePlanPage"

const guestRouter = createBrowserRouter([
     {
          path: '/', element:
               <>
                    <Navbar />
                    <Outlet />
               </>,
          children: [
               { index: true, element: <Homepage /> },
               { path: 'calendar', element: <CalendarPage /> },
               { path: 'tour', element: <ToursPage /> },
               { path: 'share', element: <SharePlanPage /> },
               { path: 'register', element: <Register /> },
               { path: 'blockpost', element: <BlockPost /> },
               { path: 'login', element: <Login /> },
               { path: 'memberhomepage', element: <MemberHomepage /> },
               { path: 'createplan', element: <CreatePlanPage /> },




          ]
     }
])


function AppRouter() {
     return (
          <RouterProvider router={guestRouter} />
     )
}

export default AppRouter