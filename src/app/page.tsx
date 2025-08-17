import Header from "./features/Header";
import MainBody from "./features/MainBody";
import BottomToolbar from "./features/BottomToolBar";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <BottomToolbar />
    </div>
  );
}
