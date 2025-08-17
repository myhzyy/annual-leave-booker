import "../styles/MainBody.css";
import BodyOverView from "../components/BodyOverView";
import AnnualLeaveBody from "./AnnualLeaveBody";

export default function MainBody() {
  return (
    <>
      <div className="mainBody-wrapper">
        <BodyOverView />
        <AnnualLeaveBody />
      </div>
    </>
  );
}
