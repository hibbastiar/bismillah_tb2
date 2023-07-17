import React from "react";
import './Home.css';

      const Home = () => {
        return (
          <div>
            <div className="banner-container">
              <img className="banner-image" src="Home/Home-banner.png" alt="Banner" />
            </div>
      
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img className="image-cell" src="Home/Home-Art1.png" alt="Art 1" style={{ width: '450px', height: 'auto' }} />
                    </td>
                    <td>
                      <span>The Descent from the Cross</span>
                      <br /><br />
                      Christ's lifeless body is being removed from
                      the cross, in a scene of intense grief. His
                      mother Mary (in blue) reaches forward,
                      desperate to touch her son. In spite of this,
                      the movement of Christ's body seems graceful
                      and peaceful. The tension between pain and
                      beauty gives this painting great power.
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <span>Adoration of The Shepherds</span>
                      <br /><br />
                      The Adoration of the Shepherds, in the<br />
                      Nativity of Jesus in art, is a scene in<br />
                      which shepherds are near witnesses to<br />
                      the birth of Jesus in Bethlehem, arriving<br />
                      soon after the actual birth. It is often<br />
                      combined in art with the Adoration of the<br />
                      Magi, in which case it is typically just<br />
                      referred to by the latter title. The<br />
                      Annunciation to the Shepherds, when they<br />
                      are summoned by an angel to the scene,<br />
                      is a distinct subject.
                    </td>
                    <td className="image-cell">
                      <img src="Home/Home-Art2.png" alt="Art 2" style={{ width: '450px', height: 'auto' }} />
                    </td>
                  </tr>
      
                  {/* <tr>
                    <td colSpan="2">ARTISTS</td>
                  </tr> */}
      
                  <tr>
                    {/* <td colSpan="2">
                      Peter Paul Rubens - The Descent from the Cross<br />
                      Gerard van Honthorst - Adoration of The Shepherds<br />
                      Eugène Delacroix - Liberty Leading the People<br />
                      Jacques-Louis David - Napoleon Crossing the Alps<br />
                      Caravaggio - The Calling of St Matthew<br />
                      Zhang Daqian's - Tang Dynasty Lady<br />
                      Wang Hui - The King Dynasty<br />
                      (unknown) - Qin pikemen, Warring States in China<br />
                      Michel Angelo - Creation of Adam<br />
                      Leonardo da Vinci - Mona Lisa<br />
                      Hieronymus Bosch - The Garden of Earthly Delights
                    </td> */}

                    <td colSpan="2">
                      <span>ARTISTS</span>
                      <br /><br />
                      Peter Paul Rubens - The Descent from the Cross<br />
                      Gerard van Honthorst - Adoration of The Shepherds<br />
                      Eugène Delacroix - Liberty Leading the People<br />
                      Jacques-Louis David - Napoleon Crossing the Alps<br />
                      Caravaggio - The Calling of St Matthew<br />
                      Zhang Daqian's - Tang Dynasty Lady<br />
                      Wang Hui - The King Dynasty<br />
                      (unknown) - Qin pikemen, Warring States in China<br />
                      Michel Angelo - Creation of Adam<br />
                      Leonardo da Vinci - Mona Lisa<br />
                      Hieronymus Bosch - The Garden of Earthly Delights
                    </td>


                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      };
   
  
  export default Home;
