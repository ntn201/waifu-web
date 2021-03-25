import "./Upload.css"

export default function Upload(){
    return (
        <div className="upload">
            <form className="upload-form">
                <h1 className="upload-text">Upload</h1>
                <label className="upload-label">Character name:</label>
                <input className="upload-field" />
                <label className="upload-label">Gender:</label>
                <input className="upload-field"/>
                <label className="upload-label">Age:</label>
                <input className="upload-field"/>
                <label className="upload-label">Bio:</label>
                <input className="upload-field"/>
                <label className="upload-label">Image:</label>
                <input type="file"/>
                <button className="btn-submit-upload" type="submit">Upload</button>
            </form>
        </div>
    )
}