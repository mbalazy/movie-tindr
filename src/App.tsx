import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { DUMMY_DATA } from "./DATA";
import { setMovies } from "./state/actions";
import { useMovie } from "./state/useMovie";

function App() {
  const {
    context: { dispatch },
  } = useMovie();

  useEffect(() => {
    dispatch(setMovies(DUMMY_DATA));
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
