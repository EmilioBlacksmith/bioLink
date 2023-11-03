import '../styles/profile.css';

export function Profile(){
    return(
        <div className="profile">
            <img src='/assets/images/alpha_profile.webp' alt="Emilio Blacksmith's Profile Picture"></img>
            <div className='name'>Emilio (Blacksmith) Herrera</div>
            <div className='description'>I make dev fun to watch (sometimes...)</div>
            <div className="social-media">
                <a href='https://twitter.com/EmilioBlacksmit' target='_blank'></a>
                <a href='https://www.instagram.com/emilioblacksmith/' target='_blank'></a>
                <a href='https://www.youtube.com/emilioblacksmith' target='_blank'>󰗃</a>
                <a href='https://www.twitch.tv/emilioblacksmith' target='_blank'></a>
                <a href='mailto:emilioblacksmithlush@gmail.com' target='_blank'></a>
            </div>
        </div>
    )
}