import Header from "../features/Header";
import CalendarBody from "../features/CalendarBody";
import BottomToolbar from "../features/BottomToolBar";
import "../styles/BottomToolBar.css";

export default function CalendarPage() {
  return (
    <div className="app">
      <Header />
      <CalendarBody />
      <BottomToolbar />
    </div>
  );
}
