import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import build from 'redux-object';
import { test } from '../actions/index';
import Question from './Question';

const Content = ({ dispatch, loading = false, questions }) => {
    
    const fetchData = () => {
        dispatch(test());
    }

    const qWidgets = questions.map(
        q => <Question key={q.id} question={q} />
    )

    console.log('loading: ', loading);

    let loadingTag = '';
    if (loading) {
        loadingTag = <button className="button"><span className="text">Fetch Data from API</span> <span className="loader"></span></button>
    }
    else {
        loadingTag = <button className="button"
                onClick={() => fetchData()}
            >
                <span className="text">Fetch Data from API</span>
            </button>
    }

    return (
        <div>
            {loadingTag}
            {qWidgets}
        </div>
    )
}

Content.propTypes = {
    dispatch: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    loading: PropTypes.bool,
}

const mapStateToProps = state => {
    let dataEndpoint = state.data.meta['/test'];
    if (dataEndpoint) {
        const questions = (dataEndpoint.data || []).map(
            obj => build(state.data, 'question', obj.id)
        );
        const loading = dataEndpoint.loading;

        return {
            questions,
            loading
        }
    }
    
    return {
        questions: []
    }
}

export default connect(mapStateToProps)(Content);
