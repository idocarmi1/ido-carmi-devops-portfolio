import { useState } from "react";

const profilePhotoPath = "/images/profile-photo.jpg";
const altText = "Ido Carmi professional profile photo";

function ProfilePhoto({ variant = "default" }) {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className={`profile-photo-card ${variant}`}>
      {isAvailable ? (
        <img src={profilePhotoPath} alt={altText} onError={() => setIsAvailable(false)} />
      ) : (
        <div className="profile-photo-fallback" role="img" aria-label={altText}>
          <span>IC</span>
          <p>Profile photo</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePhoto;
