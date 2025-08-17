import "../styles/BodyOverView.css";

export default function BodyOverView() {
  return (
    <div className="main-wrapper">
      <div className="overview-box">
        <h1>Your Overview</h1>
      </div>
      <div className="entitlement-boxes">
        <div className="entitlement-box">
          <h2>Entitlement</h2>
          <span>20</span>
          <p>Days remaining</p>
        </div>
        <div className="entitlement-box">
          <h2>Next holiday</h2>
          <span>14th</span>
          <p>March</p>
        </div>
      </div>
    </div>
  );
}
