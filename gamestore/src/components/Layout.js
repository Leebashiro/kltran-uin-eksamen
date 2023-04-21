import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard"

export default function Layout({ games }) {
  return (
    <div id="container">
      <header>
        <Dashboard />
      </header>

      <main>
        <Outlet games={games}/>
      </main>

      <section>
        
      </section>

      <footer></footer>
    </div>
  );
}