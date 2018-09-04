import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import defaultFeaturedImage from '../assets/images/pic01.jpg'

const Tile = ({
    featuredImagePath,
    title,
    excerpt,
    path,
}) => (
    <article style={{backgroundImage: `url(${featuredImagePath})`}}>
        <header className="major">
            <h3>{ title }</h3>
            <p>{ excerpt }</p>
        </header>
        <Link to={path} className="link primary"></Link>
    </article>
)

Tile.propTypes = {
    featuredImagePath: PropTypes.string,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

Tile.defaultProps = {
    featuredImagePath: defaultFeaturedImage,
};

export default Tile
