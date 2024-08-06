import "../App.css"
import CardButtonGroup from "./CardButtonGroup"

export default function CardMainContent() {
    return(
        <>
            <div className="container info">
                <h1 className="name">Shtanko Arseniy</h1>
                <h3 className="job">Wannabe fullstack dev</h3>
                <CardButtonGroup/>
            </div>
            <div className="container text-container">
                <h2>About</h2>
                <p>A curious and passionate learner with good understanding of 
                    the object-oriented programming principles and some experience 
                    in developing desktop applications for Windows using C++ with Qt framework. 
                    Currently focused on learning C# language, .NET platform in 
                    general and JS front-end development using React.js library
                </p>
            </div>
        </>
    )
}