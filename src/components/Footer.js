import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li>
                    <a href="#" className="icon alt fab fa-strava">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-strava-icon" role="img" viewBox="0 0 24 24"><title id="simpleicons-strava-icon">Strava icon</title><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
                        <span className="label">Strava</span>
                    </a>
                </li>
                <li><a target="_blank" href="https://www.instagram.com/canibanoglu/" className="icon alt fab fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
            {/* <ul className="copyright">
                <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul> */}
        </div>
    </footer>
)

export default Footer
