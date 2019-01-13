import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
    const titleClasses = `main-page-title title_${props.color}`;
    return (
        <div className={ titleClasses }>
        Main page
        </div>
    );
}

Title.PropTypes = {
    color: PropTypes.oneOf(['blue','red'])
};

Title.defaultProps = {
    color: 'blue'
};

export default Title;