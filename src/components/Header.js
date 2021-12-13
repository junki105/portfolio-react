import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';


function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="header" className="flex items-start justify-between l-header">
      <h1 className="logo font-myanmar-regular">
        <Link to={'/'}><span>中川純輝</span></Link>
      </h1>
      <Burger open={open} setOpen={setOpen} />
      <nav className="flex justify-end md:hidden font-hiragino-w4 nav-pc">
        <ul className="flex flex-wrap">
          <li><Link to={'/'}>ホーム</Link></li>
          <li><Link to={'/company'}>会社概要</Link></li>
          <li><Link to={'/business'}>事業内容</Link></li>
          <li><Link to={'/works'}>施工実績</Link></li>
          <li><Link to={'/recruit'}>求人情報</Link></li>
        </ul>
        <Link to={'/contact'} id = "header_mail_btn" className="flex items-center justify-center text-white header-mail-btn bg-blue bgskew">
          <img id="ico_mail_white" src='/assets/image/ico_mail.png' alt=""/>
          <img id="ico_mail_blue" src='/assets/image/ico_mail_blue.png' alt=""/>
          <span>お問い合わせ</span>
        </Link>
      </nav>
      <nav className={open ? 'is-open hidden main-nav md:block font-hiragino-w4': 'hidden main-nav md:block font-hiragino-w4'} id="main-nav">
        <h1 className="logo font-myanmar-regular"><Link to={'/'}>株式会社<span>服部組</span></Link></h1>
        <Burger open={open} setOpen={setOpen} />
        <ul>
          <li><Link to={'/'}>ホーム&nbsp;&nbsp;&nbsp;&nbsp;<span>Home</span></Link></li>
          <li><Link to={'/company'}>会社概要&nbsp;<span>Company</span></Link></li>
          <li><Link to={'/business'}>事業内容&nbsp;<span>Service</span></Link></li>
          <li><Link to={'/works'}>施工実績&nbsp;<span>Works</span></Link></li>
          <li><Link to={'/recruit'}>求人情報&nbsp;<span>Recruit</span></Link></li>
          <li><Link to={'/contact'} className="menu-btn"><img src='/assets/image/menu-message.png' alt="" />お問い合わせ</Link></li>
          <li><Link to={'tel: 058-392-3624'} className="menu-btn"><span>TEL</span>058-392-3624</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;