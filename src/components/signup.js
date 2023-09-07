import { Link } from "react-router-dom";
const Register = () => {
    return ( 
        <div className="SignUp">
        <h2>Create an Account To Start your journey with JSC</h2>

        <form>
            <div class="form-group">
                <label for="full-name">Full Name</label>
                <input type="text"placeholder="Full name of Student"id="full-name" name="full_name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" id="email" placeholder="Student/parent's Email id" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Create Password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Confirm Password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="tel">Mobile number</label>
                <input type="password" placeholder="Parent's Mobile Number" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="tel">Mobile number</label>
                <input type="password" placeholder="student's Mobile Number" id="password" name="password" required/>
            </div>
            <div class="Sing-up">
                <input type="submit" value="Sign Up"/>
            </div>
        </form>
        <p>Already have an account?<Link to="/">SIgn In</Link></p>
    </div>
     );
}
 
export default Register;