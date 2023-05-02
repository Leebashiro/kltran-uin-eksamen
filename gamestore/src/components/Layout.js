import { Outlet } from "react-router-dom";
import Nav from "./Nav"
import Footer from "./DashBoard/Footer"

export default function Layout() {
  return (
    <div id="container">
      <nav>
        <Nav/>
      </nav>
    
      <main>
        <Outlet/>
      </main>

      <section>
        
      </section>

      <footer >
        <Footer/>
      </footer>
    </div>
  );
}