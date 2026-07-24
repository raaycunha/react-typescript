import Layout from "./components/Layout/Layout";
import { AlbumContextProvider } from "./contexts/AlbumProvider";
function App() {
  return (
    <div>
      <AlbumContextProvider>
        <Layout />
      </AlbumContextProvider>
    </div>
  );
}

export default App;
