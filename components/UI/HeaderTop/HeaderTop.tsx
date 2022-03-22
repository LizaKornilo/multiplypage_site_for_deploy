import React from 'react';
import styles from "components/UI/HeaderTop/HeaderTop.module.css";
import formatPhoneString from 'utils/formatPhoneString';
// import Instagram from "public/images/social/instagram.svg";
// import Viber from "public/images/social/viber.svg";
// import Google from "public/images/social/google.svg";

function HeaderTop({ phone, socialLinks }: any) {
  return (
    <div className={styles.top}>
      <div className={styles.city}>Гродно</div>
      <a className={styles.phone} href={`tel:${formatPhoneString(phone)}`}>{phone}</a>
      <div className={styles.social}>
        {/* <a className={styles.socialLink} href={socialLinks[0]} target="_blank">
          <Instagram className={styles.icon} />
        </a>
        <a className={styles.socialLink} href={socialLinks[1]} target="_blank">
          <Viber className={styles.icon} />
        </a>
        <a className={styles.socialLink} href={socialLinks[2]} target="_blank">
          <Google className={styles.icon} />
        </a> */}
      </div>
    </div>
  );
}

export default HeaderTop;

//import { SiInstagram, SiViber, SiGooglechrome } from 'react-icons/si';
{/* <a className={styles.socialLink} href={socialLinks[0]} ><SiInstagram className={styles.icon} color="white" /></a>
        <a className={styles.socialLink} href={socialLinks[1]} ><SiViber className={styles.icon} color="white" /></a>
        <a className={styles.socialLink} href={socialLinks[2]} ><SiGooglechrome className={styles.icon} color="white" /></a>
       */}