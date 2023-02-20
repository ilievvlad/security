import { Link } from "react-router-dom";

import scss from "./AboutBlock.module.scss";
import aboutImg from "images/man.jpg";

export const AboutBlock = ({ title, showButton, column }) => {
	return (
		<section className={scss.aboutBlock}>
			<div className={`${scss.inner} ${column ? scss.innerColumn : ''} container`}>
				{showButton &&
					<Link to="/about" className={`${scss.aboutBtnMob} button doubleBorder`}>Дізнатись більше</Link>
				}
				<div className={scss.aboutImg}>
					<img src={aboutImg} alt="Man" width={460} />
				</div>
				<div className={scss.content}>
					<h2 className={`${scss.aboutTitle} title`}>{title}</h2>
					<div className={scss.aboutText}>
						<p>
							Всі співробітники Prof Security мають кваліфікацію охоронця та охоронника на законодавчому
							рівні та систематично проходять вогневу та фізичну підготовку разом з домедичною допомогою.
						</p>
						<p>
							В нашій компанії працюють досвідчені поліграфологи та провідники в галузі детекції брехні по всій Україні, а також найкращі інструктори - практики з багаторічним досвідом роботи.
						</p>
						<p>
							По бажанню клієнта та специфіки охороняємого обьекта охорона може бути озброєна: травматичною, нарізною чи гладкоствольною зброєю.
						</p>
					</div>
					{showButton &&
						<Link to="/about" className={`${scss.aboutBtn} button doubleBorder`}>Дізнатись більше</Link>
					}
				</div>
			</div>
		</section>
	);
};