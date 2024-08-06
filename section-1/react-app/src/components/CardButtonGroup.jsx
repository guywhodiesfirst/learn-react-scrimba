import '../App.css'

export default function CardButtonGroup() {
    return(
        <div className="btn-group">
            <a 
                href="mailto: arseniy.w.shtanko@gmail.com">
                <button>
                    Email
                </button>
            </a>
            <a 
                href="https://www.linkedin.com/in/arseniy-shtanko/"
                target="_blank">
                <button style={{backgroundColor: "#5093E2", color: "white"}}>
                    LinkedIn
                </button>
            </a>
        </div>
    )
}