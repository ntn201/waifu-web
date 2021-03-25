import "./Card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="card-img"></div>
            <div className="card-info">
                <span className="card-name"></span>
                <div className="flex-row">
                    <span className="card-gender"></span>
                    <span>,</span>
                    <div className="card-age"></div>
                </div>
                <span className="card-bio"></span>
            </div>
        </div>
    )
}