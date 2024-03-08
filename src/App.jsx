import "./output.css";
import Header from "./Component/Header";
import "@radix-ui/themes/styles.css";
import { configureWeb3Modal } from "./Connection/connection";

configureWeb3Modal();
function App() {
  return (
    <>
      <div className="bg-[#404040]">
        <Header />
      </div>
    </>
  );
}

export default App;
