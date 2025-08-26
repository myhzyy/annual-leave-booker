import Header from "../features/Header";
import BottomToolbar from "../features/BottomToolBar";
import UserSettingsLayout from "../features/UserSettings";

export default function userSettings() {
  return (
    <div className="app">
      <Header />
      <UserSettingsLayout />
      <BottomToolbar />
    </div>
  );
}
