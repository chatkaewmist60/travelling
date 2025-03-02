
function Header({ image, title }) {
     return (
       <div className="w-screen h-120 bg-amber-100 relative">
         <img className="object-cover w-full h-full" src={image} alt="Header Background" />
   
         <div className="inset-0 absolute text-center place-items-center grid text-white text-3xl">
           <div className="inset-0 absolute bg-black/60"></div>
   
           {/* แสดงเฉพาะเมื่อมี title */}
           {title && (
             <div className="w-1/2 z-30 space-y-3">
               <h1 className="text-5xl font-medium">{title}</h1>
               <p className="text-lg">
                 From local escapes to far-flung adventures, find what makes you happy anytime, anywhere
               </p>
             </div>
           )}
         </div>
       </div>
     );
   }
   
   export default Header;
   