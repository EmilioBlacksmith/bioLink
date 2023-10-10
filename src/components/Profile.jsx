import '../styles/profile.css';

export function Profile(){
    return(
        <div className="profile">
            <img src='/assets/profile.jpg'></img>
            <div className='name'>Emilio (Blacksmith) Herrera</div>
            <div className='description'>I make dev fun to watch (sometimes...)</div>
            <div className="social-media">
                <a href='https://twitter.com/EmilioBlacksmit' target='_blank'><i className="fa-brands fa-x-twitter"/></a>
                <a href='https://www.instagram.com/emilioblacksmith/' target='_blank'><i className="fa-brands fa-instagram"/></a>
                <a href='https://www.youtube.com/emilioblacksmith' target='_blank'><i className="fa-brands fa-youtube"/></a>
                <a href='https://www.twitch.tv/emilioblacksmith' target='_blank'><i className="fa-brands fa-twitch"/></a>
                <a href='mailto:emilioblacksmithlush@gmail.com' target='_blank'><i className="fa-solid fa-envelope"/></a>
            </div>
        </div>
    )
}