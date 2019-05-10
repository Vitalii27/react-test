import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import {CSSTransitionGroup} from 'react-transition-group';
import './article.css';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log(isOpen);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>

                <CSSTransitionGroup
                transitionName = 'article'
                transitionEnterTimeout = {300}
                transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransitionGroup>

            </div>
        )
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    };
}

export default Article


