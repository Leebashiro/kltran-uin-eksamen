import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard"

export default function Layout() {
  return (
    <div id="container">
      <nav>
        <Dashboard />
      </nav>
    
      <main>
        <Outlet/>
      </main>

      <section>
        
      </section>

      <footer>
        
      </footer>
    </div>
  );
}