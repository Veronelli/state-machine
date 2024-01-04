import "./App.css";
import { BaseLayout } from "./components/BaseLayout.jsx";
import { Body } from "./components/Body.jsx";
import { HomeUI } from "./ui/Home/index.jsx";

function App() {
  return (
    <div className="App">
      {/* <BaseLayout /> */}
      <HomeUI>
        <Body style={{ background: "url('/img/hospital.webp')" }}></Body>
      </HomeUI>
    </div>
  );
}

export default App;
