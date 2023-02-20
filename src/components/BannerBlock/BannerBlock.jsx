import { Link } from "react-router-dom";

import scss from "./BannerBlock.module.scss";
import img from "images/man.jpg";

export const BannerBlock = ({ pagesData, activeItem, subTitle, title }) => {
	const items = pagesData;

	return (
		<section className={scss.bannerBlock}>
			<div className="container">
				<div className={scss.image}>
					<img src={img} alt="Man" />
				</div>
				<div className={scss.content}>
					<ul className={scss.breadcrumbs}>
						{items.map(({ id, name, link }) => (
							<li key={id} className={scss.breadcrumbsItem}>
								<Link to={link} className={scss.breadcrumbsLink}>{name}</Link>
							</li>
						))}
						<li className={scss.breadcrumbsItem}>
							<span className={scss.breadcrumbsActive}>{activeItem}</span>
						</li>
					</ul>
					<span className={scss.subTitle}>{subTitle}</span>
					<h1 className={scss.title}>{title}</h1>
				</div>
			</div>
		</section>
	);
};