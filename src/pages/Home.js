import headshot from "../assets/DSC_0067.png"
import "../pages/Home.css"

export default function Home() {
    return (
        <div>
            <img src={headshot} className="home_picture" alt=""/>
        </div>
        
    )
}