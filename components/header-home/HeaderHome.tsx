import React from "react";
import styles from "components/header-home/HeaderHome.module.css";
import CustomBtn from "components/UI/CustomBtn/CustomBtn";
import HeaderTop from "components/UI/HeaderTop/HeaderTop";
import SiteMenu from "components/UI/SiteMenu/SiteMenu";
import Logo from "components/UI/Logo/Logo";
import {phone, socialLinks, menu} from 'data/bistroData.js'

function HeaderHome() {
  // const bgImages = ['/images/header-bg1.jpg', '/images/header-bg2.jpg', '/images/header-bg3.jpg'];
  // const phone = "+375 (29) 838-23-45";
  // const socialLinks = ['https://www.instagram.com/bistro_bufet', 'ViberLink', 'GoogleLink'];
  // const menu = [{ name: "Главная", pagePath: "/" },
  // { name: "Меню", pagePath: "/menu" },
  // { name: "Новости", pagePath: "/news" },
  // { name: "Отзывы", pagePath: "/comments" },
  // { name: "Контакты", pagePath: "/contacts" }];


  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.container}>
          <HeaderTop phone={phone} socialLinks={socialLinks} />
          <div className={styles.wrapperLogoNav}>
            <Logo />
            <SiteMenu menu={menu} />
          </div>
          <h1 className={styles.title}>Бистро “Обед-Буфет” или другой текст :)</h1>
          <CustomBtn text="Заказать звонок" />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome