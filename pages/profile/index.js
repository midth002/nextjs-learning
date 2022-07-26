import React from "react";
import Head from 'next/head';
import Link from "next/link";

const ProfileDefault = () => {
  return (
    <div>
        
      <h2>Profile Default</h2>
      <Link href="/about">About</Link>
    </div>
  );
};

export default ProfileDefault;
