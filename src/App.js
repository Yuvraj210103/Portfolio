import { About } from "./component/About";
import { ContactForm } from "./component/ContactForm";
import { Home } from "./component/Home";
import NavBar from "./component/NavBar";
import { Skills } from "./component/Skills";
import { Work } from "./component/Work";



function App() {
  return (
    <div>
      
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <ContactForm/>
    </div>
  );
}

export default App;
