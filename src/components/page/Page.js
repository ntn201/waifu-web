import Nav from "../nav/Nav"
import Main from "../main/Main"
import Footer from "../footer/Footer"

export default function Page(){
    return (
        <div className="page">
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    )
}