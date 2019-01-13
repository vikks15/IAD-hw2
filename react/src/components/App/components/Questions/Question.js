import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadQuestions } from '../../../../store/questions';

class Question extends React.Component {
    componentDidMount() {
        const { questions, loadQuestions } = this.props;
        if (!questions.list && !questions.isLoading) {
            loadQuestions();
        }
    }

    get question() {
        const {
            questions,
            match
        } = this.props;

        return questions.list.find((question) =>
            Number(match.params.id) === question.id
        );
    }

    render() {
        if (!this.question) {
            return null;
        }

        const {
            name,
            clone_url: cloneUrl,
            forks
        } = this.question;

        return (
            <div>
                <div>Имя: { name }</div>
                <div>git clone: { cloneUrl }</div>
                <div>Число форков: { forks }</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    questions: state.questions
});

const mapDispatchToProps = {
    loadQuestions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));