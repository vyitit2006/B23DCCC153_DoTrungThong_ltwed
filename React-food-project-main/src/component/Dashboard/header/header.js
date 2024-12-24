import React, { useState } from "react";
import logo from '../image/food.png';
import cartimg from '../image/cart.jpg';
import '../header/header.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header() {
    const { cartTotalQUantity } = useSelector((state) => state.cart);
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState(""); // Trạng thái lưu từ khóa tìm kiếm

    function AddCart() {
        history.push('/cart');
    }

    function Profile() {
        history.push('/profile');
    }

    function gotoHome() {
        history.push('/home');
    }

    function Logout() {
        history.push('/login');
    }

    function handleSearch() {
        if (searchTerm.trim()) {
            history.push(`/tim-kiem?query=${encodeURIComponent(searchTerm)}`); // Chuyển hướng tới trang tìm kiếm
        }
    }

    return (
        <div className="header">
            <img src={logo} className="logo" alt="Logo" />
            <div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Tìm kiếm</button>
            </div>

            <div style={{ position: 'relative', width: '100px' }}>
                <button className="cart-button" onClick={AddCart}>
                    <img src={cartimg} alt="Giỏ hàng" />
                </button>
                <span className="msg">{cartTotalQUantity}</span>
            </div>
            <button className="cart-button">
                <p style={{ color: "white", marginTop: '12px' }} onClick={gotoHome}>Trang chủ</p>
            </button>
            <button className="cart-button">
                <p style={{ color: "white", marginTop: '12px' }} onClick={Profile}>Hồ sơ</p>
            </button>
            <button className="cart-button">
                <p style={{ color: "white", marginTop: '12px' }} onClick={Logout}>Đăng xuất</p>
            </button>
        </div>
    );
}

export default Header;
