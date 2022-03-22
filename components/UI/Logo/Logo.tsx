import React from 'react';
import Link from 'next/link'
import styles from "components/UI/Logo/Logo.module.css"
// import Logotype from 'public/images/bistro-logo.svg'

function Logo() {
  return (
    <Link href={"/"} >
      {/* <Logotype className={styles.logo} /> */}
      LOGO :)
    </Link>
  );
}

export default Logo;