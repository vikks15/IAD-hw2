import React, { Fragment } from 'react';
import ListItem from './ListItem/ListItem';
import { Route, Switch, withRouter } from 'react-router-dom';
import Question from './Question';

import { connect } from 'react-redux';
import { loadQuestions } from '../../../../store/questions';

class QuestionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {
            questionsList,
            isLoading
        } = this.props;

        if (questionsList.length === 0 && !isLoading) {
            this.props.loadQuestions();
        }
    }

    render() {
        //const { questionsList, isLoading } = this.state;
        const { questionsList, isLoading } = this.props;

        return(
            <Fragment>
                { isLoading && <div>Загрузка...</div> }
                <Switch>
                    <Route
                        exact
                        path="/questions"
                        render={ () => questionsList.map((question) => (
                            <ListItem
                                // key={ question.id }
                                // repo={ question }

                                url={ question.clone_url }
                                name={ question.name }
                                question={ question }
                                id={ question.id }
                            />
                        )) }
                    />
                    <Route
                        path="/questions/:id"
                        component={ Question }
                    />
                </Switch>
            </Fragment>           
        );
    }
}

const mapStateToProps = (state) => ({
    questionsList: state.questions.list,
    isLoading: state.questions.isLoading,
});

const mapDispatchToProps = {
    loadQuestions
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
);