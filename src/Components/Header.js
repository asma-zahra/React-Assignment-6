import { useState } from "react";

const Title = () => (
   <a href="/" className="logo-heading">
     <p><b>FoodVilla</b></p> 
   </a>
 );

 const HeaderComponent = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true);
   return (
     <div className="header">
       <Title />
       <div className="nav-items">
         <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
         </ul>
       </div>
       {isLoggedIn? (<button onClick={()=>{setIsLoggedIn(false)}} >Login</button>) : (<button onClick={()=>{setIsLoggedIn(true)}}>Logout</button>) }
     </div>
   );
 };
export default HeaderComponent;