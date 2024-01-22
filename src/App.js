// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import Meals from "./Meals";
import Search from "./Search";
import Modal from "./Modal";
import Favorites from "./Favorites";
import { useGlobalContext } from "./context";

const App = () => {
  const { showModal, favorites } = useGlobalContext();
  return (
    <div>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
};

export default App;
