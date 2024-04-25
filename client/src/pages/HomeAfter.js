import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import basket from "../pictures/add-to-basket.png";
import nailpaint from "../pictures/nailpaint.jpeg";
import rednailpaint from"../pictures/rednailpaint.jpg";
import glitternailpaint from "../pictures/glitternailpaint.jpeg";

document.body.style.background = "linear-gradient(90deg, rgba(245, 69, 125,1) 0%, rgba(245,33,114,1) 32%, rgba(255,0,0,1) 88%)";

const HomeAfter = () => {
  const { user } = useAuthContext();

 
  return ( 
    <div>
    {user && (
        <div className="home">
            {/* <h1>{user.username}</h1> */}
            <div>
              <div className="nailpaints">
              <Link to="/nails">
                <p>Nails >></p>
              </Link>
              <div className="cards">
                <div>
                        <div className="image">
                            <img src={nailpaint}></img>
                        </div>

                        <div className="name">
                            <h3>Light Pink NailPaint </h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs: </h3>
                            <h3> 70</h3>
                            {/* <h3> 100</h3> */}
                        </div>
                </div>
                <div className="second">
                        <div className="image">
                            <img src={rednailpaint}></img>
                        </div>

                        <div className="name">
                            <h3>Red NailPaint </h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs: </h3>
                            <h3> 70</h3>
                            {/* <h3> 100</h3> */}
                        </div>
                </div>
                <div className="second">
                        <div className="image">
                            <img src={glitternailpaint}></img>
                        </div>

                        <div className="name">
                            <h3>Glitter NailPaint </h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs: </h3>
                            <h3> 100</h3>
                            {/* <h3> 100</h3> */}
                        </div>
                </div>
                    </div>
              </div>
            </div>
                    
       </div>
         
         )}
   
    </div>
   );
}
 
export default HomeAfter;

