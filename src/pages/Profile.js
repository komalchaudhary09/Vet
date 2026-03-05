// src/pages/Profile.js
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import "../style/Profile.css";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({
    name: "Komal Chaudhary",
    phone: "9812929363",
    email: "chaudharykomal1225@gmail.com",
    address: "Naikap",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="profile-page">
        <div className="profile-card">
          {/* LEFT SIDE */}
          <div className="profile-left">
            <p className="profile-name">Name: {user.name}</p>
            <p>Contact no: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>

            {/* Orders */}
            <div className="orders-row">
              <div className="order-box">
                <p className="order-title">Order to ship</p>
                <p className="order-count">01</p>
              </div>
              <div className="divider"></div>
              <div className="order-box">
                <p className="order-title">Order to receive</p>
                <p className="order-count">07</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="profile-right">
            <div className="avatar">{user.name.charAt(0)}</div>
            <button className="edit-btn" onClick={() => setOpen(true)}>
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Dialog */}
        {open && (
          <div className="dialog-overlay">
            <div className="dialog-backdrop" onClick={() => setOpen(false)} />
            <div className="dialog">
              <h3>Edit Profile</h3>
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                value={user.phone}
                placeholder="Phone"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                value={user.address}
                placeholder="Address"
                onChange={handleChange}
              />
              <div className="dialog-buttons">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={() => setOpen(false)}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;