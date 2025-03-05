import { Link, useLocation, useNavigate } from "react-router"


function Navbar() {
     const menus = [
          { id: 1, to: '/calendar', text: 'CalendarPage' },
          { id: 2, to: '/tour', text: 'ToursPage' },
          { id: 3, to: '/share', text: 'SharePlanPage' },
     ]

     const { pathname } = useLocation()
     console.log(pathname)

     let navigate = useNavigate();
     const routeChangRegister = () => {
          let path = '/register';
          navigate(path);
     }

     const routeChangeLogin = () => {
          let path = '/login';
          navigate(path);
     } 
     


     return (
          <div className="flex items-center justify-between w-[80vw] mx-auto py-4">

               {/* NavLeft */}
               <div className="flex items-center gap-4 flex-1">
                    <Link to='/'>
                         <h1 className="font-bold font-display text-5xl text-orange-600 ">Travelling Plannor</h1>
                    </Link>
                    <input
                         className="border-gray-300 border rounded-full py-2 px-6 outline-none w-2xs"
                         placeholder="Seach Detination"
                         type="text"
                    />
               </div>

               {/* NavRight */}
               <div className="flex items-center gap-6">
                    {menus.map((menu) => (
                         <Link key={menu.id} to={menu.to} className={` ${pathname === menu.to
                              ? "font-medium text-orange-700"
                              : "hover:underline"
                              }`}>{menu.text}
                         </Link>
                    ))}
                    <button className="py-3 px-7 rounded-full 
                    bg-orange-500 
                    text-white hover:underline 
                    cursor-pointer " onClick={routeChangRegister}>Register</button>

                    <button className="py-3 px-7 rounded-full 
                    bg-orange-500 
                    text-white hover:underline 
                    cursor-pointer " onClick={routeChangeLogin}>Login</button>
               </div>
          </div>
     )


}

export default Navbar


// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/logo.jpg"; // ถ้าใช้จาก src/assets/images/

// function Navbar() {
//   const menus = [
//     { id: 1, to: "/calendar", text: "CalendarPage" },
//     { id: 2, to: "/tour", text: "ToursPage" },
//     { id: 3, to: "/share", text: "SharePlanPage" },
//   ];

//   const { pathname } = useLocation();

//   return (
//     <div className="flex items-center justify-between w-[80vw] mx-auto py-4">
//       {/* NavLeft */}
//       <div className="flex items-center gap-4 flex-1">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Travelling Planner Logo" className="w-12 h-12" />
//           <h1 className="font-bold font-display text-5xl text-orange-600">Travelling Planner</h1>
//         </Link>
//         <input
//           className="border-gray-300 border rounded-full py-2 px-6 outline-none w-2xs"
//           placeholder="Search Destination"
//           type="text"
//         />
//       </div>

//       {/* NavRight */}
//       <div className="flex items-center gap-6">
//         {menus.map((menu) => (
//           <Link
//             key={menu.id}
//             to={menu.to}
//             className={` ${
//               pathname === menu.to ? "font-medium text-orange-700" : "hover:underline"
//             }`}
//           >
//             {menu.text}
//           </Link>
//         ))}
//         <button className="py-3 px-7 rounded-full bg-orange-500 text-white hover:underline cursor-pointer">
//           Login/Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;