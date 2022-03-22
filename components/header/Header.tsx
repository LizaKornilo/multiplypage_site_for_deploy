import React from "react";
import styles from "components/header/Header.module.css";
import HeaderTop from "components/UI/HeaderTop/HeaderTop";
import SiteMenu from "components/UI/SiteMenu/SiteMenu";
import Logo from "components/UI/Logo/Logo";
import { phone, socialLinks, menu } from 'data/bistroData.js';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.loyer}>
        <div className={styles.container}>
          <HeaderTop phone={phone} socialLinks={socialLinks} />
          <div className={styles.wrapperLogoNav}>
            <Logo />
            <SiteMenu menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header