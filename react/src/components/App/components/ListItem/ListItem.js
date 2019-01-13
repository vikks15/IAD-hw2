import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
    render() {
        return ( 
            <a href={this.props.url} className='list-item' target='_blank'> 
                { this.props.item } 
            </a>
        );
    }
}

ListItem.PropTypes = {
    repo: PropTypes.shape({
        item: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
}

export default ListItem;