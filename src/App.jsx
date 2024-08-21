
import { ContainerActivityScheduleTaskboard } from "./Components/ContainerActivityScheduleTaskboard"
import { ContainerCentralTotal } from "./Components/ContainerCentralTotal"
import { ContainerTotalLeft } from "./Components/ContainerTotalLeft"
import { ContainerPage } from "./Components/ContainerPage"
import { Navbar } from "./Components/navbar"


function App() {


  return (
    <>
      <ContainerPage>
        <Navbar />
        <ContainerCentralTotal>
          <ContainerTotalLeft />
          <ContainerActivityScheduleTaskboard />
        </ContainerCentralTotal>
      </ContainerPage>
    </>
  )
}

export default App
