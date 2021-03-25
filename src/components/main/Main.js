import "./Main.css"
import Card from "../card/Card"
import {Link} from "react-router-dom"

export default function Main (){
    return (
        <div className="main">
            <div className="side-bar">
                <button className="btn-upload"><Link to="/upload">Upload</Link></button>
            </div>
            <div className="card-container">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}