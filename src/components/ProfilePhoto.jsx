import { useState } from "react";

const profilePhotoPath = "/images/profile-photo-new.jpeg";
const altText = "Ido Carmi professional profile photo";

function ProfilePhoto({ variant = "default" }) {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className={`profile-photo-card ${variant}`}>
      {isAvailable ? (
        <img
          src={profilePhotoPath}
          alt={altText}
          decoding="async"
          fetchPriority={variant === "hero-photo" ? "high" : "auto"}
          loading={variant === "hero-photo" ? "eager" : "lazy"}
          onError={() => setIsAvailable(false)}
        />
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
