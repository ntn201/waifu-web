import "./SignUp.css"

export default function SignUp(){
    return (
        <div className="sign-up">
            <form className="sign-up-form">
                <h1 className="sign-up-text">Sign Up</h1>
                <label className="sign-up-label">Username:</label>
                <input className="sign-up-field" />
                <label className="sign-up-label">Email:</label>
                <input type="password" className="sign-up-field"/>
                <label className="sign-up-label">Password:</label>
                <input type="password" className="sign-up-field"/>
                <label className="sign-up-label">Confirm Password:</label>
                <input type="password" className="sign-up-field"/>
                <button className="btn-submit-sign-up" type="submit">Sign Up</button>
            </form>
        </div>
    )
}