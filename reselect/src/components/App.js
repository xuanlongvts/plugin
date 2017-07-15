import React from 'react';
import Posts from './posts_list';
import SelectedPostsList from './selected_posts_list';

export default () => (
    <div className="app">
        <h4>Selected Posts</h4>
        <SelectedPostsList />
        <hr />
        <h4>All posts</h4>
        <Posts />
    </div>
)