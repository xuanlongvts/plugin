import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PostsList extends Component {

    constructor(props) {
        super(props);

        this.handlePostSelect = this.handlePostSelect.bind(this);
    }

    handlePostSelect(id, e) {
        const { selectPost, deselectPost } = this.props;
        e.target.checked ? selectPost(id) : deselectPost(id);
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, selectedPostIds } = this.props;
        
        return (
            <ul className="list-group">
                {
                    posts &&
                    Object.keys(posts).map(key => {
                        let item = posts[key];
                        //console.log(_.includes(selectedPostIds, item.id));
                        return (
                            <li className="list-group-item" key={key}>
                                <label className="each-block">
                                    <input
                                        checked={_.includes(selectedPostIds, item.id)}
                                        type="checkbox"
                                        onChange={this.handlePostSelect.bind(null, item.id)}
                                    />
                                    <span> {item.title}</span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts,
        selectedPostIds: state.selectedPostIds
    }
}

export default connect(
    mapStateToProps,
    actions
)(PostsList);