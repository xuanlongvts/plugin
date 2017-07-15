import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = state => state.posts;
const selectedPosts = state => state.selectedPostIds;

const getSelected = (posts, selectedPostIds) => {
    const selectedPosts = _.filter(
        posts,
        post => _.includes(selectedPostIds, post.id)
    );

    return selectedPosts;
}

export default createSelector(
    postsSelector,
    selectedPosts,
    getSelected
)