import MainBody from "./features/MainBody";
import BottomToolbar from "./features/BottomToolBar";
import Header from "./features/Header";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <BottomToolbar />
    </div>
  );
}
