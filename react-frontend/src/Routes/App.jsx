import "./App.css";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import { Outlet } from "react-router-dom";
import FetchingItem from "../Components/FetchingItem.jsx";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";
function App() {
  const FetchStaus = useSelector((store) => store.fetchingStatus); 
  return (
    <>
      <Header />
      <FetchingItem />
      {FetchStaus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
