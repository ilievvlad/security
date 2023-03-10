import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "context/navState";

import scss from "./MobMenu.module.scss";
import s from "../Header/Header.module.scss"

export const MobMenu = () => {
	const { isMenuOpen } = useContext(MenuContext);

	return (
		<nav className={`${scss.mobInner} ${isMenuOpen ? scss.menuActive : ''}`}>
			<ul className={scss.mobList}>
				<li className={scss.mobItem}>
					<Link to="/" className={scss.mobLink}><span>01</span>Головна</Link>
				</li>
				<li className={scss.mobItem}>
					<Link to="/" className={scss.mobLink}><span>02</span>Про нас</Link>
				</li>
				<li className={scss.mobItem}>
					<Link to="/" className={scss.mobLink}><span>03</span>Послуги</Link>
				</li>
				<li className={scss.mobItem}>
					<Link to="/" className={scss.mobLink}><span>04</span>Контакти</Link>
				</li>
			</ul>
			<div className={scss.mobConnection}>
				<a href="tel:0800777555" className={s.connectionLink}><span>0 800</span> 777 555</a>
				<button type="button" className={s.connectionBtn}>Замовити дзвінок</button>
			</div>
			<ul className={scss.mobLangList}>
				<li className={`${s.langItem} ${s.langItemActive}`}>UA</li>
				<li><span className={s.separator}>|</span></li>
				<li className={s.langItem}><Link to="/" className={s.langLink}>EN</Link></li>
			</ul>
		</nav>
	);
};