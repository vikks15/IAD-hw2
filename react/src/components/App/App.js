import React from 'react';
import Title from './components/Title/Title';
import QuestionsList from './components/Questions/QuestionsList';
import SignIn from './components/SignIn/SignIn';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import './styles.css';

import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { changeTitle } from '../../store/ui';

//------------Statefull component------------------
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Main page',
            titleColor: 'red'
        };

        this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
        if (this.state.titleColor == 'red') {
            this.setState({
                titleColor: 'blue'
            });
        } else {
            this.setState({
                titleColor: 'red'
            });
        }
    }

    render() {
        const {
            titleColor,
        } = this.state;

        return(
            <div>
                {/* <Title color={this.props.titleColor} /> */}
                <Title color={ titleColor }>
                    {/* { this.props.title }  */}
                    { this.state.title }
                </Title>

                <Switch>
                    <Route path="/questions" component={ QuestionsList } />
                    <Route path="/signin" component={ SignIn } />
                </Switch>
                
                <Link to="/questions" className="link">
                    Список вопросов
                </Link>
                
                <p></p>

                <Link to="/signin" className="link">
                    Войти
                </Link>

                <div className="main-page-img" />

                <div onClick={this.clickButton} className='my-button'>
                    Кнопка
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        title: state.ui.title
    }
}

const mapDispatchToProps = {
    changeTitle
};

export default hot(module)(withRouter(
    connect(mapStateToProps, mapDispatchToProps)(App))
);