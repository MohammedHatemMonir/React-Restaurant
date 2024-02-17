import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TheRouter from "./pages/TheRouter";
function App() {
  const currentYear = new Date().getFullYear();


  // Otherwise, render the Navbar

  return (
    <div className="my-app">
      <TheRouter />
      {/* <Route path="/stars" element={<Stars />} />
        <Route path="/card" element={<Card />} /> */}

      {/* <Footer /> */}

      {/* <footer className="bg-body-tertiary ">
        <p className="p-3 m-0 text-center">Copyright &copy; {currentYear}</p>
      </footer> */}
    </div>
  );
}

export default App;
