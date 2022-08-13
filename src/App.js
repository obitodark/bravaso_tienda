import DataProvider from "./Context/DataProvider";
import { AuthProvider, ShoppingCartProvider } from "./Context";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
