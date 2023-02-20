import parse from "html-react-parser";
import scss from "./About.module.scss"

import { BannerBlock } from "components/BannerBlock/BannerBlock";
import { AboutBlock } from "components/AboutBlock/AboutBlock";
import { Gallery } from "components/Gallery/Gallery";
import { OrderBlock } from "components/OrderBlock/OrderBlock";

export const About = () => {
	return (
		<>
			<BannerBlock
				pagesData={[{ id: 1, name: "Головна", link: "/" }]}
				activeItem={"Про нас"}
				subTitle={"Prof Security"}
				title={"Професійний підхід до Вашої безпеки"}
			/>
			<div className={scss.information}>
				<div className={`${scss.container} container`}>
					<p className={scss.informationText}>
						Сучасний погляд на забезпечення безпеки, індивідуальний підхід, найсучасніше обладнання яке
						застосовується в роботі (системи сигналізації, квадрокоптери, засоби нічного бачення, броньовані авто, квадроцикли та тому подібне).
					</p>
					<p className={scss.informationBenefit}>
						Саме це ви отримуєте при виборі нашої компанії.
					</p>
				</div>
			</div>
			<AboutBlock
				title={parse("Чому слід обрати <br /> саме нас ?")}
				showButton={false}
				column={true}
			/>
			<Gallery />
			<OrderBlock />
		</>
	);
};