import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Clumsy Rider</strong></Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
