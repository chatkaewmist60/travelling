import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Homepage from "../pages/homepage"
import CalendarPage from "../pages/calendarPage"
import ToursPage from "../pages/toursPage"
import SharePlanPage from "../pages/sharePlanPage"
import Navbar from "../components/Navbar"

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
               { path: 'share', element: <SharePlanPage /> }
          ]
     }
])


function AppRouter() {
     return (
          <RouterProvider router={guestRouter} />
     )
}

export default AppRouter