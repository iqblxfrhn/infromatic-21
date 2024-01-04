"use client";

import React from "react";
import ProfileText from "../sub/ProfileText";
import { CldVideoPlayer } from "next-cloudinary";

const Profile = () => {
  return (
    <section
      id="profile"
      className="flex flex-col items-center justify-center gap-3 h-full relative pb-40 py-20 z-10"
      style={{ transform: "scale(0.9)" }}
    >
      <ProfileText />

      <div className="w-full h-full flex flex-wrap relative justify-center">
        <iframe
          src="https://youtube.com/embed/vU4A2FXLZ-c"
          width={1280}
          height={720}
        ></iframe>
      </div>
    </section>
  );
};

export default Profile;
