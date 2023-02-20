import { useDispatch } from "react-redux";
import { openModal } from "redux/modalSlice";

import parse from "html-react-parser";

import scss from "./Home.module.scss"
import video from "files/hero.mp4"
import { popularServices, facts } from "data/homePageData"

import { AboutBlock } from "components/AboutBlock/AboutBlock";
import { BenefitsBlock } from "components/BenefitsBlock/BenefitsBlock";
import { OrderBlock } from "components/OrderBlock/OrderBlock";

export const Home = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(openModal());
	};

	return (
		<>
			<section className={scss.hero}>
				<video autoPlay muted playsInline loop className={scss.video} src={video}></video>
				<div className="container">
					<div className={scss.content}>
						<span className={scss.heroSubTitle}>PROF Security</span>
						<h1 className={scss.heroTitle}>Професійний підхід <br /> до Вашої безпеки</h1>
						<button
							type="button"
							className="button gradient"
							onClick={handleClick}
						>
							Дізнатись більше
						</button>
					</div>
				</div>
			</section>
			<section className={scss.services}>
				<div className="container">
					<h2 className={`${scss.servicesTitle} title`}>Наші популярні <br /> послуги<span>.</span></h2>
					<ul className={scss.servicesList}>
						{popularServices.map(({ id, link, icon, number, title }) => (
							<li key={id} className={scss.servicesItem}>
								<a href={link} className={`${scss.servicesLink} ${icon}`}>
									<span>{number}</span>
									<h3 className={scss.servicesTitle}>{title}</h3>
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<AboutBlock
				title={parse("Вибір на користь <br /> професіоналів<span >.</span>")}
				showButton={true}
				column={false}
			/>
			<section className={scss.facts}>
				<div className="container">
					<h2 className="visuallyHidden">Факти про нашу компанію</h2>
					<ul className={scss.factsList}>
						{facts.map(({ id, quantity, title, number }) => (
							<li key={id} className={scss.factsItem}>
								<span className={scss.factsQuantity}>{quantity}</span>
								<h3 className={scss.factsTitle}>{title}</h3>
								<span className={scss.factsNumber}>{number}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
			<BenefitsBlock />
			<OrderBlock />
		</>
	);
};