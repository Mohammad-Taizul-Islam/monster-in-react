import Greeting from "./Component/Greeting"
import UserStatus from "./Component/UserStatus"
import Weather from "./Component/Weather"


function App() {
  

  return (
    <>
      <Greeting timeOfDay={"morning"}/>
      <UserStatus loggedIn={true} isAdmin={false}/>
      <Weather temperature={23}/>
    </>
  )
}

export default App
