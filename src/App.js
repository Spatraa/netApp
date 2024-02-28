import './App.css';
// Import Font Awesome libraries and icons
import { faPhoneAlt, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ... rest of your code



import image1 from './Components/image1.jpg';
import logo from './Components/logo.jpg';
import Image2 from './Components/Image2.jpg';
import Image3 from './Components/Image3.jpg';

function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <li>C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy-efficient smart pumps with IoT-enabled control panel.</li>
        <div className="middle">
          <img src={image1} alt="heading" className="image" />
          <img src={Image2} alt="heading"  id="image"/>
          </div>
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

        <div className="div1">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</div>
        <div>
        <img src={Image3} alt="heading" className="button" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <hr/>
        </div>
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <div className="last">CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</div>
        <div className="style">
  <div>
    <FontAwesomeIcon icon={faPhoneAlt} />
    Toll-Free: 8864586586
  </div>
  <div>
    <FontAwesomeIcon icon={faFacebook} />
    <a href="https://www.facebook.com/yourpage">www.facebook.com</a>
  </div>
  <div>
    <FontAwesomeIcon icon={faEnvelope} />
    your@email.com
  </div>
  </div>
</div>

      
    </>
  );
}

export default App;
