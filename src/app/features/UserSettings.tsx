import "../styles/UserSettings.css";

export default function UserSettingsLayout() {
  return (
    <div className="userSettings-container">
      <div className="userSettings-image">
        <img
          className="profile-img"
          src="https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"
          alt="User avatar"
        />
      </div>

      <div className="user-infomation-container">
        <div className="form-field">
          <dl>
            <div className="form-info">
              <dt>Username</dt>
              <dd>Jacob Murphy</dd>
            </div>

            <div className="form-info">
              <dt>Email</dt>
              <dd>Jacob.murphy@gmail.com</dd>
            </div>

            <div className="form-info">
              <dt>Phone</dt>
              <dd>(269)-748-9882</dd>
            </div>

            <div className="form-info">
              <dt>Date of Birth</dt>
              <dd>10/4/1977</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
