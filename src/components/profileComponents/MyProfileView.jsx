import Image from "next/image";
import Link from "next/link";
import "@/styles/my-profile.css";

const MyProfileView = ({ session }) => {
  const user = session?.user;

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "N/A";
  return (
    <div className="profile-page">
      {/* ── Page Header ── */}
      <div className="profile-page-header">
        <div className="page-container profile-header-inner">
          <p className="profile-eyebrow">Your Account</p>
          <h1 className="profile-heading">My Profile</h1>
          <div className="divider" style={{ margin: "0.5rem auto 0" }} />
        </div>
      </div>

      {/* ── Profile Card ── */}
      <div className="page-container profile-body">
        <div className="profile-card">
          {/* Avatar */}
          <div className="profile-avatar-wrap">
            {user?.image ? (
              <Image
                src={user?.image}
                alt={user?.name}
                fill
                style={{ objectFit: "cover" }}
                className="profile-avatar-img"
              />
            ) : (
              <span className="profile-avatar-placeholder">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Name & Email */}
          <h2 className="profile-name">{user?.name}</h2>
          <p className="profile-email">{user?.email}</p>

          {/* Divider */}
          <div className="profile-divider" />

          {/* Account Details */}
          <div className="profile-details">
            <h3 className="profile-section-label">Account Details</h3>

            <div className="profile-detail-row">
              <span className="profile-detail-key">Email</span>
              <span className="profile-detail-val">{user?.email}</span>
            </div>

            <div className="profile-detail-row">
              <span className="profile-detail-key">Member Since</span>
              <span className="profile-detail-val">{memberSince}</span>
            </div>

            <div className="profile-detail-row">
              <span className="profile-detail-key">Account Type</span>
              <span className="profile-detail-val">Email & Password</span>
            </div>

            <div className="profile-detail-row">
              <span className="profile-detail-key">Profile Photo</span>
              <span className="profile-detail-val">
                {user?.image ? "Uploaded" : "Not set"}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="profile-divider" />

          {/* Update Button */}
          <div className="profile-actions">
            <Link
              href="/my-profile/update"
              className="btn-primary profile-update-btn"
            >
              Update Profile
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileView;
