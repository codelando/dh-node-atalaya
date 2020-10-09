import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

function Nav(props) {
    console.log(props);
    return (
        <nav className="Nav">
            { props.children }
            { props.items.map(
                (item, index) => <a href={ `/${item}` } key={ `${index}-${item}` }>{ item }</a>
            )}
        </nav>
    )
}

Nav.defaultProps = {
    items: ["inicio"],
};

Nav.propTypes = {
    items: PropTypes.array
};

export default Nav;