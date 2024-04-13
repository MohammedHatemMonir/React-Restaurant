import "./App.scss";
import "./CssVariables.scss";
import "./TemplateCss.scss";
import TheRouter from "./components/MainComponents/TheRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BtnUp from "./components/BtnUp/BtnUp";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false,
        // refetchOnmount: false,
        // refetchOnReconnect: false,
        // retry: 1,
        // staleTime: 5 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <TheRouter />
          <BtnUp />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
