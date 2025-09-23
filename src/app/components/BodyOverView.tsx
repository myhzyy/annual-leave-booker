import "../styles/BodyOverView.css";
import { MdOutlineAccessAlarm } from "react-icons/md";

export default function BodyOverView() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };
  const today = new Date().toLocaleDateString("en-GB", options);

  return (
    <div className="main-wrapper">
      <div className="overview-and-entitlement">
        <div className="overview-box">
          <h1>Your Overview</h1>
          <h2>{today}</h2>
        </div>
        <div className="entitlement-boxes">
          <div className="entitlement-box">
            <div className="entitlement-header">
              <h2>Entitlement</h2>
              <MdOutlineAccessAlarm className="icon" />
            </div>
            <span>20</span>
            <p>Days remaining</p>
          </div>
          <div className="entitlement-box">
            <div className="entitlement-header">
              <h2>Next holiday</h2>
              <MdOutlineAccessAlarm className="icon" />
            </div>

            <span>14th</span>
            <p>March</p>
          </div>
        </div>
      </div>

      <div className="request-box-btn-wrapper">
        <button className="request-btn">Request</button>
      </div>
    </div>
  );
}
