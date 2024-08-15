import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const locations = data.map(location => (
    <Card 
      key={location.id}
      {...location}
    />
  ))
  return (
    <>
      <Navbar/>
      <div className="cards-container">
        {locations}
      </div>
    </>
  )
}

export default App
