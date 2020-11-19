import React from 'react';
import LogoCss from '../Logo/Logo.module.css';
const Logo = (props) => {
    return (
        <div className={LogoCss.demo}>
        <div className={LogoCss.democoloredblocks}>
          <div className={LogoCss.democoloredblocksrotater}>
            <div className={LogoCss.democoloredblock}></div>
            <div className={LogoCss.democoloredblock}></div>
            <div className={LogoCss.democoloredblock}></div>
          </div>
          <div className={LogoCss.democoloredblocksinner}>Hi</div>
          <div className={LogoCss.demotext}></div>
        </div>
        </div>
    )
}
export default Logo;