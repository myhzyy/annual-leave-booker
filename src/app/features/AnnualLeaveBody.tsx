import "../styles/AnnualLeaveBody.css";

export default function AnnualLeaveBody() {
  return (
    <div className="annual-leave-body-container">
      <div className="upcoming-leave">
        <div className="upcoming-leave-and-btn-wrapper">
          <div>Upcoming leave</div>
          <button>View more &gt;</button>
        </div>
      </div>
      <div className="leave-blocks">
        {/* <div className="leave-block">
          <p>date</p>
          <p>annual leave</p>
          <p>9:30am - 5pm</p>
        </div>
        <div className="leave-block">leave block</div> */}
        <div className="leave-block">leave block</div>
        <div className="leave-block">leave block</div>
      </div>
    </div>
  );
}
