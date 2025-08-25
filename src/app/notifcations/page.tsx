import BottomToolbar from "../features/BottomToolBar";
import Header from "../features/Header";
import NotificationPanel from "../features/NotificationPanel";

export default function notifcationsPage() {
  return (
    <div className="app">
      <Header />
      <NotificationPanel />
      <BottomToolbar />
    </div>
  );
}
