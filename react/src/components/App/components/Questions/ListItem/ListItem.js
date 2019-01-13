import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
    render() {
        const { question } = this.props;

        return (
            <Link
                to={ `/questions/${ question.id }` }
                className="list-item"
            >
                { question.name }
            </Link>
        );
    }
}

ListItem.PropTypes = {
    question: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
}

export default ListItem;