import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="hero">
         {/* Navbar */}
         <nav className="navbar">
           <div className="logo">
             <div className="triangle"></div>
             <h2>Staybnb</h2>
           </div>
   
           <ul className="nav-links">
             <li className="active">Popular Places</li>
             <li>Travel Outside</li>
             <li>Online Packages</li>
           </ul>
   
           <button className="register-btn">Register Now</button>
         </nav>
   
         {/* Hero Content */}
         <div className="hero-content">
           <h1>Find Your Next Stay</h1>
   
           {/* Search Box */}
           <div className="search-box">
             <div className="search-item">
               <label>Location</label>
               <p>Where are you going?</p>
             </div>
   
             <div className="search-item">
               <label>Check In</label>
               <p>Add Dates</p>
             </div>
   
             <div className="search-item">
               <label>Check out</label>
               <p>Add Dates</p>
             </div>
   
             <div className="search-item">
               <label>Guests</label>
               <p>Add guests</p>
             </div>
   
             <button className="search-btn">🔍</button>
           </div>
         </div>
       </div>
  )
}

export default Navbar
