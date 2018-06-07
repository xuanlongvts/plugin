import React from 'react';
import { connect } from 'react-redux';
import SelectedPosts from '../selectors/selected_posts';

const SelectedPostsList = ({listSelected}) => (
    <ul className="list-items-selected">
        {
            listSelected &&
            listSelected.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))
        }
        {
            listSelected && console.log('listSelected: ', listSelected)
        }
    </ul>
);

const mapStateToProps = state => {
    return {
        listSelected: SelectedPosts(state)
    }
}

export default connect(mapStateToProps)(SelectedPostsList);