import "../styles/BodyOverView.css";
import { MdOutlineAccessAlarm } from "react-icons/md";

export default function BodyOverView() {
  return (
    <div className="main-wrapper">
      <div className="overview-box">
        <h1>Your Overview</h1>
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

      <div className="request-box-btn-wrapper">
        <button className="request-btn">Request</button>
      </div>
    </div>
  );
}
