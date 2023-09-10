import clgimg from "./campus-1.jpg"
const Home = () => {
    return ( 
    <>
     <div className="intro">
         <h1>Welcome to the best place for your 11th & 12th Science journey!🤩</h1><br/>
         <h3>"Welcome to Junior Science College, where knowledge meets ambition. Join us on a journey of discovery and academic excellence."</h3>
         
         
     </div><div className="reasons">
     <img src={clgimg} alt="" width="400px" height="350px"/>
            <h2>Why Junior Science College?</h2>
            <ul>
            <li>Quality of Education</li> 
            <li>Alumni Success Stories</li>
            <li>Geographic Location</li>
            <li>Facilities and Resources</li>
            <li>Scholarships and Financial Aid</li>
            </ul>
       </div>
       <div className="about-us">
        <h3>About Us</h3>
        <p>"Junior Science college, Dabhoi is a private institute, which was established in 2014 and giving highest result since then."</p>
        <p>Join us on a journey of exploration, discovery, and scientific achievement.</p>
        Principal & Director: Dr. J.D.SHAH <br />
        Contact Us:+919825684062 or jayeshshah083@gmail.com<br />
        Address: Dabhoi College Campus
        
       </div>
    </> 
    );
}
 
export default Home;