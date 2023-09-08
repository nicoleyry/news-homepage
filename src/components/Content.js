import '../styles/content.scss';
import Banner from '../assets/images/image-web-3-desktop.jpg';
import BannerMobile from '../assets/images/image-web-3-mobile.jpg';
import Gaming from '../assets/images/image-gaming-growth.jpg';
import Retro from '../assets/images/image-retro-pcs.jpg';
import Laptop from '../assets/images/image-top-laptops.jpg';

export default function Content() {
	return (
		<div className="Content">
			<div className="upper">
				<div className="banner">
					<picture>
						<source media="(min-width: 760px)" srcSet={Banner} />
						<img src={BannerMobile} alt="web 3" />
					</picture>
				</div>
				<div className="title">
					<h1>The Bright Future of Web 3.0?</h1>
				</div>
				<div className="desc">
					<p className='text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
					<p className='btn'>Read More</p>
				</div>
				<div className="news">
					<h2 className='title'>New</h2>
					<div className="news-content">
						<p className="news-title">Hydrogen VS Electric Cars</p>
						<p className="news-desc">Will hydrogen-fueled cars ever catch up to EVs?</p>
					</div>
					<div className="news-content">
						<p className="news-title">The Downsides of AI Artistry</p>
						<p className="news-desc">What are the possible adverse effects of on-demand AI image generation?</p>
					</div>
					<div className="news-content">
						<p className="news-title">Is VS Funding Drying Up?</p>
						<p className="news-desc">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
					</div>
				</div>
			</div>
			<div className="bottom">
				<div className="article-block">
					<div className="article-img">
						<img src={Retro} alt="Reviving Retro PCs" />
					</div>
					<div className="article-content">
						<p className="number">01</p>
						<p className="title">Reviving Retro PCs</p>
						<p className="desc">What happens when old PCs are given modern upgrades?</p>
					</div>
				</div>
				<div className="article-block">
					<div className="article-img">
						<img src={Laptop} alt="Top 10 Laptops of 2022" />
					</div>
					<div className="article-content">
						<p className="number">02</p>
						<p className="title">Top 10 Laptops of 2022</p>
						<p className="desc">Our best picks for various needs and budgets.</p>
					</div>
				</div>
				<div className="article-block">
					<div className="article-img">
						<img src={Gaming} alt="The Growth of Gaming" />
					</div>
					<div className="article-content">
						<p className="number">03</p>
						<p className="title">The Growth of Gaming</p>
						<p className="desc">How the pandemic has sparked fresh opportunities.</p>
					</div>
				</div>
			</div>
		</div>
	)
}