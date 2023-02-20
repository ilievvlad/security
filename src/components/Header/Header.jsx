import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "context/navState";

import scss from "./Header.module.scss";
import logo from "images/icons/logo.svg"
import { MobMenu } from "components/MobMenu/MobMenu";

export const Header = () => {
	const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

	const clickHandler = () => {
		toggleMenuMode();
	};

	return (
		<header className={scss.styledHeader}>
			<div className="container">
				<div className={scss.topInner}>
					<Link to="/" className={scss.logo}>
						<img src={logo} alt="Prof Security" width={170} />
					</Link>
					<ul className={scss.langList}>
						<li className={`${scss.langItem} ${scss.langItemActive}`}>UA</li>
						<li><span className={scss.separator}>|</span></li>
						<li className={scss.langItem}><a href="#" className={scss.langLink}>EN</a></li>
					</ul>
					<div className={scss.connection}>
						<a href="tel:0800777555" className={scss.connectionLink}><span>0 800</span> 777 555</a>
						<button type="button" className={scss.connectionBtn}>Замовити дзвінок</button>
					</div>
					<button
						type="button"
						className={`${scss.burger} ${isMenuOpen ? scss.menuActive : ''}`}
						aria-label="Відкрити меню"
						onClick={clickHandler}
					>
						<span></span><span></span><span></span>
					</button>
				</div>
				<div className={scss.bottomInner}>
					<nav>
						<ul className={scss.menuList}>
							<li className={scss.menuItem}><Link to="/" className={scss.menuLink}>Головна</Link></li>
							<li className={scss.menuItem}><Link to="about" className={scss.menuLink}>Про нас</Link></li>
							<li className={scss.menuItem}><a href="#" className={scss.menuLink}>Послуги</a></li>
							<li className={scss.menuItem}><a href="#" className={scss.menuLink}>Контакти</a></li>
						</ul>
					</nav>
				</div>
				<MobMenu />
			</div>
		</header>
	);
};