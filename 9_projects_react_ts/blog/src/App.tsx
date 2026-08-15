import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { BlogProvider } from "./context/BlogProvider";

function App() {
  return (
    <>
      <BlogProvider>
        <AppRoutes />
      </BlogProvider>
    </>
  );
}

export default App;
