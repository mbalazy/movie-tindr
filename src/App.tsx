import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { DUMMY_DATA } from "./DATA";
import { setMovies } from "./state/actions";
import { useMovie } from "./state/useMovie";

function App() {
  const { dispatch } = useMovie();

  // Normally I will use axios to download movies data
  /* const getMovies = async () => {
    try {
      const movies = await axios.get("mybackendurl");
      dispatch(setMovies(movies));
    } catch (error) {
      console.error(error);
    }
  }; */

  const getMovies = () => dispatch(setMovies(DUMMY_DATA));

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
