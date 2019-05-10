import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {};

    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
                <UserForm/>
                <ArticleList articles={this.props.articles}/>
            </div>
        )

    }

    changeSelection = selection => {
        return this.setState({selection})
    }
}

export default App;