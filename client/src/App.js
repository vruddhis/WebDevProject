import ContentHome from "./pages/content_home";
import Navbar from "./pages/navbar";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import Contact from "./pages/contactus";
import HomeAfter from "./pages/HomeAfter";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user} = useAuthContext();
  

   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={!user ?<HomePage /> : <Navigate to ="/home"/>} />
         <Route path="/home" element={<HomeAfterPage />} />
         <Route path="/signup"element={!user ? <Signuppage /> : <Navigate to="/home" />}/>
         <Route path="/login" element={!user ?<LoginPage /> : <Navigate to="/home" /> } />
        
         <Route path="/contactus" element={<ContactUsPage />} />
        
         
         

       </Routes>
     </BrowserRouter>
   );
 }
 
 function HomePage() {
   return (
    <>
      <div className="homepage">
        <Navbar />     
      </div>
      <div className="homepg">
        <ContentHome />
      </div>
     </>
   );
 }

 function Signuppage() {
   return (
      <div>
      <div className="signuppage">
            <Navbar/>
       </div>

      <div className="signuppg">
            <Signup/>
      </div>
      </div>
   )
 }

 function HomeAfterPage() {
  return (
     <div className="main">
     <div className="homeafterpage">
           <Navbar/>
      </div>

     <div className="homeafterpg">
           <HomeAfter/>
     </div>
     </div>
  )
}

 
 function LoginPage() {
   return (
      <div>
      <div className="loginpage">
                  <Navbar/>
               </div>

              <div className="loginpg">
                 <Login/>
              </div>
      </div>
   );
 }


 function ContactUsPage() {
   return (
      <div>
         <div className="contactpage">
                <Navbar/>
         </div>

               <div className="contactpg">
                  <Contact/>
               </div>
      </div>
   );
}

// function DataDetail() {
//    return (
//       <div>
//          <div className="datadetailpage">
//                 <Navbar/>
//          </div>
 
//                <div className="datadetailpg">
//                   <DataDetails/>
//                </div>
//       </div>
//    );
//  }


export default App;
