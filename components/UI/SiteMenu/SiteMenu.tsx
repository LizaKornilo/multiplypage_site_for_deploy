import React from 'react';
import Link from 'next/link'
import styles from "components/UI/SiteMenu/SiteMenu.module.css"

function SiteMenu({ menu }: any) {
  return (
    <div className={styles.siteMenuList}>
      {menu.map((m: any, i: any) => {
        return (
          <div className={styles.siteMenuItem} key={i}>
            <Link href={m.pagePath}>
              <a>{m.name}</a>
            </Link>
          </div>);
      })}
    </div>
  );
}

export default SiteMenu;