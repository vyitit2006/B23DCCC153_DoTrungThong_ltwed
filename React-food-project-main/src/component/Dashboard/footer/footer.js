import React from "react";
import logo from '../image/food.png'
import Food from "../../foodimage";
import '../footer/footer.css'
import { useHistory } from "react-router-dom";
import insta from '../image/instagram.png'
import whatsapp from '../image/whatsapp.png'
import linkedin from '../image/likedin.png'
import pintrest from '../image/pintrest.png'
import youtube from '../image/youtube.png'
import { Link } from "react-router-dom";
function Footer(){
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood')
    let history=useHistory();
      function Alldish(titleId){
        history.push(`/alldish?id=${titleId}`)
    }
    return(
        <div className="footer">
              <img src={logo} className='flogo'></img>
              <div className="footer-main">
                <div>
                    <h4>Công ty </h4>
                    <ul>
                        <li>Về chúng tôi </li>
                        <li>Nhóm </li>
                        <li>Hỗ trợ & Trợ giúp </li>
                    </ul>
                </div>
                <div>
                    <h4>Trang </h4>
                    <ul>
                        <li><Link to={'/home'} className='linkto'>Trang chủ</Link></li>
                        <li> <Link to={'/cart'} className='linkto'>Giỏ hàng </Link></li>
                        <li><Link to={'/profile'} className='linkto'>Hồ sơ </Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Danh mục </h4>
                    <ul>
                        <li onClick={()=>Alldish(Food1[0].titleId) } >Ấn Độ </li>
                        <li onClick={()=>Alldish(Food2[0].titleId)}>Italia</li>
                        <li>Hàn Quốc </li>
                    </ul>
                </div>
                <div>
                    <h4>Địa điểm</h4>
                    <ul>
                        <li>Tamil Nadu</li>
                        <li>Kerala</li>
                        <li>Karnataka</li>
                    </ul>
                </div>
                <div>
                    <h4>Liên hệ với chúng tôi</h4>
                    <h5> Hotline   : 0388732005</h5>
                    <a href="https://www.facebook.com/profile.php?id=100041604135380"><img src={insta} className='footerimg' ></img></a>
                    <a href="#" onClick={() => alert("Liên hệ : 0388732005")}>
                    <img src={whatsapp} className='footerimg' alt="WhatsApp" /></a>    
                    <a href="https://www.youtube.com/@batanvlog1157"><img src={youtube} className='footerimg' ></img></a>
                    <a href="#"><img src={pintrest} className='footerimg' ></img></a>
                    <a href="#"><img src={linkedin} className='footerimg' ></img></a>
                
                </div>
              
              </div>
        </div>
    )
}

export default Footer