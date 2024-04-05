import "./App.scss";
import "./CssVariables.scss";
import "./TemplateCss.scss";
import TheRouter from "./components/MainComponents/TheRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
