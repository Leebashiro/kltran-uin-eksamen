import { Outlet } from "react-router-dom";
import Nav from "./Nav"

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

      <footer>
        <p>API Attribution</p>
      </footer>
    </div>
  );
}