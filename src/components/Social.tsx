const SocialMedia = () => (
	<div className="social">
		<span className="find_me">Find Me on</span>
		<ul>
			<li>
				<a href="https://twitter.com/dav3ly" rel="noreferrer" target="_blank">
					{/* <img src={twitter} alt="Twitter" /> */}
					<span className="pi pi-twitter" />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/david-benard-196961121/" rel="noreferrer" target="_blank">
					{/* <img src={facebook} alt="Facebook" /> */}
					<span className="pi pi-linkedin" />
				</a>
			</li>
			<li>
				<a href="https://wa.link/y6l5ch" rel="noreferrer" target="_blank">
					{/* <img src={facebook} alt="Facebook" /> */}
					<span className="pi pi-whatsapp" />
				</a>
			</li>
			<li>
				<a href="https://github.com/traj3ctory" rel="noreferrer" target="_blank">
					{/* <img src={github} alt="Github" /> */}
					<span className="pi pi-github" />
				</a>
			</li>
		</ul>
	</div>
);

export default SocialMedia;
