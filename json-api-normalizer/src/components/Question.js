import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
    const postWidgets = question.posts.map(
        post => (
            <div className="post" key={post.id}>
                <span className="user">{post.author.name}: </span>
                {post.text}
                {post.comments &&
                   post.comments.map(
                        c => (
                            <div className="comment" key={c.id}>
                                <span className="user">{c.author.name}: </span>
                                {c.text}
                            </div>
                        )
                   ) 
                }
            </div>
        )
    );

    return (
        <div className="question">
            <h3>{question.text}</h3>
            {postWidgets}
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired
}

export default Question;