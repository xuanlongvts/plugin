import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PostsList extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <ul className="list-group">
                {
                    posts &&
                    Object.keys(posts).map(key => {
                        let item = posts[key];
                        return (
                            <li className="list-group-item" key={key}>
                                <label className="each-block">
                                    <input
                                        type="checkbox"
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
        posts: state.posts
    }
}

export default connect(
    mapStateToProps,
    actions
)(PostsList);