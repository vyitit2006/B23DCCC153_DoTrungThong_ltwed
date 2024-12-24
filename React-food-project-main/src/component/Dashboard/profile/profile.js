import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import profile from "../image/profile.png";
import "../profile/profilr.css";

function Profile() {
  let data = JSON.parse(sessionStorage.getItem("user")) || { name: "Guest" };
  const [inputValue, setInput] = useState("");
  const [inputErr, setInputErr] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState(""); // Địa chỉ mặc định
  const [secondaryAddresses, setSecondaryAddresses] = useState([]); // Địa chỉ phụ
  const [showModal, setShowModal] = useState(false);
  const [savedData, setSavedData] = useState({}); // Lưu thông tin đã lưu

  function AddEvent() {
    if (inputValue.trim().length === 0) {
      setInputErr(true);
    } else {
      setInputErr(false);
      if (!defaultAddress) {
        setDefaultAddress(inputValue); // Nếu chưa có địa chỉ mặc định, gán địa chỉ đầu tiên
      } else {
        setSecondaryAddresses([...secondaryAddresses, inputValue]); // Thêm vào danh sách địa chỉ phụ
      }
      setInput("");
    }
  }

  function SaveProfile() {
    const profileData = {
      name: data.name,
      phone: "0388732005",
      defaultAddress,
      secondaryAddresses,
    };
    sessionStorage.setItem("profile", JSON.stringify(profileData));
    setSavedData(profileData); // Lưu thông tin vào state
    setShowModal(true); // Hiện modal sau khi lưu
  }

  function removeAddress(type, address) {
    if (type === "default") {
      setDefaultAddress(""); // Xóa địa chỉ mặc định
    } else {
      setSecondaryAddresses(
        secondaryAddresses.filter((addr) => addr !== address) // Xóa địa chỉ phụ
      );
    }
  }

  function closeModal() {
    setShowModal(false); // Đóng modal
  }

  return (
    <div className="progile-bg">
      <Header />
      <div className="profile-main">
        <img src={profile} className="imge" alt="Profile" />
        <br />
        <label>UserName</label> : <p>{data.name}</p>
        <br />
        <label>Phone</label> : <p>0388732005</p>
        <label>Địa chỉ</label>
        <div style={{ marginLeft: "208px", marginTop: "-32PX" }}>
          <textarea
            rows="4"
            cols="55"
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập địa chỉ của bạn..."
          ></textarea>
          {inputErr && (
            <small style={{ display: "block" }}>
              Bạn phải điền đầy đủ thông tin
            </small>
          )}
          <button className="btne" onClick={AddEvent}>
            Thêm địa chỉ
          </button>

          <div>
            <h4>Địa chỉ mặc định:</h4>
            {defaultAddress ? (
              <div className="profile-address">
                {defaultAddress}
                <button
                  onClick={() => removeAddress("default", defaultAddress)}
                >
                  X
                </button>
              </div>
            ) : (
              <p>Chưa có địa chỉ mặc định.</p>
            )}
          </div>

          <div>
            <h4>Địa chỉ phụ:</h4>
            <ul className="profile-ul">
              {secondaryAddresses.map((address, index) => (
                <li key={index} className="profile-li">
                  {address}
                  <button onClick={() => removeAddress("secondary", address)}>
                    Xóa
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={SaveProfile} className="savebutton">
            Lưu
          </button>
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thông tin đã lưu</h2>
            <p>
              <strong>Tên:</strong> {savedData.name}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {savedData.phone}
            </p>
            <p>
              <strong>Địa chỉ mặc định:</strong> {savedData.defaultAddress || "Chưa có"}
            </p>
            <p>
              <strong>Địa chỉ phụ:</strong>
            </p>
            <ul>
              {savedData.secondaryAddresses &&
                savedData.secondaryAddresses.map((address, index) => (
                  <li key={index}>{address}</li>
                ))}
            </ul>
            <button className="modal-close-btn" onClick={closeModal}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
