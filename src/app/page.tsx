import Header from "./components/Header";
import MainBody from "./components/MainBody";
import BottomToolbar from "./components/BottomToolBar";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <BottomToolbar />
    </div>
  );
}
