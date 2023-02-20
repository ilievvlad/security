import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

import scss from "./Gallery.module.scss"
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import img from "../../images/man.jpg"

const images = [
	{ id: 1, src: img, thumb: img },
	{ id: 2, src: img, thumb: img },
	{ id: 3, src: img, thumb: img },
	{ id: 4, src: img, thumb: img },
	{ id: 5, src: img, thumb: img },
	{ id: 6, src: img, thumb: img }
];

export const Gallery = () => {
	return (
		<section className={scss.gallery}>
			<div className={`${scss.container} container`}>
				<h2 className={`${scss.title} title`}>Галерея<span>.</span></h2>
				<LightGallery
					speed={500}
					plugins={[lgZoom]}
					elementClassNames={scss.galleryItems}
					licenseKey={'7EC452A9-0CFD441C-BD984C7C-17C8456E'}
					download={false}
					zoom={false}
					getCaptionFromTitleOrAlt={false}
				>
					{images.map(({ id, src, thumb }) => (
						<a key={id} href={src} className={`${scss.galleryItem} ${scss.gallerySlide}`}>
							<img src={thumb} alt="Man" width="320" height="320" />
						</a>
					))}
				</LightGallery>
			</div>
		</section>
	);
};