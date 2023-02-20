import { useState } from "react";

import scss from "./BenefitsBlock.module.scss";
import { benefits } from "data/benefitsBlockData";

export const BenefitsBlock = () => {
	const [currentTab, setCurrentTab] = useState('1');

	const handleTabClick = e => {
		setCurrentTab(e.target.id);
	}

	return (
		<section className={scss.benefitsBlock}>
			<div className="container">
				<h2 className={`${scss.benefitsTitle} title`}>Переваги компанії <br /> Prof Security<span>.</span></h2>
				<ul className={scss.tabs}>
					{benefits.map(({ id, number, title }, i) => (
						<li key={id}>
							<button
								id={id}
								type="button"
								disabled={currentTab === `${id}`}
								onClick={(handleTabClick)}
								className={`${scss.tab} ${currentTab === `${id}` ? scss.tabActive : ''}`}
							>
								<span>{number}</span>{title} <p><span></span><span></span></p>
							</button>
						</li>
					))}
				</ul>
				<ul>
					{benefits.map(({ id, text, text2 }, i) => (
						<li key={id} className={`${scss.item} ${currentTab === `${id}` ? scss.itemActive : ''}`}>
							{currentTab === `${id}` && <><p>{text}</p><p>{text2}</p></>}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};