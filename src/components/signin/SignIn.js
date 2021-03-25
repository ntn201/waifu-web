import "./SignIn.css"

export default function SignIn(){
    return (
        <div className="sign-in">
            <form className="sign-in-form">
                <h1 className="sign-in-text">Sign In</h1>
                <label className="sign-in-label">Username:</label>
                <input className="sign-in-field" />
                <label className="sign-in-label">Password:</label>
                <input type="password" className="sign-in-field"/>
                <button className="btn-submit-sign-in" type="submit">Sign In</button>
            </form>
        </div>
    )
}