import "../styles/profile.css";

export function Profile() {
	return (
		<div className="profile">
			<a href="/bioLink/">
				<img
					src="https://pbs.twimg.com/profile_images/1801773800377487362/_HU-TPws_400x400.jpg"
					alt="Emilio Blacksmith's Profile Picture"
				></img>
			</a>
			<div className="name">Emilio (Blacksmith) Herrera</div>
			<div className="description">I make dev fun to watch (sometimes...)</div>
			<div className="social-media">
				<a
					href="https://twitter.com/EmilioBlacksmit"
					target="_blank"
				>
					
				</a>
				<a
					href="https://www.instagram.com/emilioblacksmith/"
					target="_blank"
				>
					
				</a>
				<a
					href="https://www.youtube.com/emilioblacksmith"
					target="_blank"
				>
					󰗃
				</a>
				<a
					href="https://www.twitch.tv/emilioblacksmith"
					target="_blank"
				>
					
				</a>
				<a
					href="mailto:emilioblacksmithlush@gmail.com"
					target="_blank"
				>
					
				</a>
			</div>
		</div>
	);
}
