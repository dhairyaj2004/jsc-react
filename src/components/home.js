import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <div className="intro">
            <h1>Welcome to the best place for your 11th & 12th Science journey!🤩</h1><br/>
            <h3>"Welcome to Junior Science College, where knowledge meets ambition. Join us on a journey of discovery and academic excellence."</h3>
            </div>
          <div class="Home">
        <h2>Login to JSC</h2>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username of account" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" required/>
            </div>
            <div class="sign-in">
                <input type="submit" value="Sign In"/>
            </div>
            <p>Haven't an account? <Link to='/signup'> Sign Up Here!</Link></p>
           
        </form>
        </div></>
     );
}
 
export default Home;