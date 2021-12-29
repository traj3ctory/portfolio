import facebook from '../asset/icons/facebook.svg';
import twitter from '../asset/icons/twitter.svg';
import github from '../asset/icons/github.svg';

const SocialMedia = () => (
	<div className="social">
		<span>Find Me on</span>
		<ul>
			<li>
				<a href="https://twitter.com/said_mounaim" rel="noreferrer" target="_blank">
					<img src={twitter} alt="Twitter" />
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/apiyaue06" rel="noreferrer" target="_blank">
					<img src={facebook} alt="Facebook" />
				</a>
			</li>
			<li>
				<a href="https://github.com/saidMounaim" rel="noreferrer" target="_blank">
					<img src={github} alt="Github" />
				</a>
			</li>
		</ul>
	</div>
);

export default SocialMedia;
