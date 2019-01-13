import React from 'react';
import Title from './components/Title/Title';
import ListItem from './components/ListItem/ListItem';
import axios from 'axios';
import './styles.css';

//------------Statefull component------------------
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    componentWillMount() {
        this.setState({
            isLoading: true
        });

        axios.get('https://api.github.com/users/vikks15/repos').then(
            response => {
                this.setState({
                    repos: response.data,
                    isLoading: false
                })              
            },
            error => {
                this.setState({
                    isLoading: false
                })
            });
    }

    render() {
        return(
            <div>
                <Title color={this.state.titleColor} />
                { this.state.isLoading && <div>Загрузка...</div> }
                { !this.state.isLoading &&                    
                    this.state.repos.map(repo => <ListItem url={repo.clone_url} item={repo.name}/>)
                    // ['ИУ5', 'ИУ6', 'ИУ7'].map(el => <ListItem>{el}</ListItem>)
                }
                <div className="main-page-img" />
                <div onClick={this.clickButton} className='my-button'>
                    Кнопка
                </div>
            </div>
        );
    }
}

export default App;


//------------Stateless component------------------
// export default() => (
//     <div>
//         <Title color="red" />
//         <div className="main-page-img" />
//         <div onClick={() => {alert('click')}}>
//             Кнопка
//         </div>
//     </div>
// );
