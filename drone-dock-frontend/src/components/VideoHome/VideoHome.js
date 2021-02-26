import React, { Component } from 'react'
import Jumbotron from'./Jumbotron'
import Table from './Table/Table'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            course_modules: [
                { id: 1, title: '1. Setting up', description: 'asdf', active: false},
                { id: 2, title: '2. Adding React', description: 'asdf', active: false},
                { id: 3, title: '3. Build', description: 'asdf', active: false},
                { id: 4, title: '4. Hello', description: 'sadf', active: false},
            ]
        }
    }

    handleVideoChange(item, event){
        event.preventDefault()

        let course_modules = [...this.state.course_modules]

        course_modules.map (data => {
            data.active = false
        })

        item.active = !item.active

        course_modules[item.id - 1] = item

        this.setState({course_modules})
    }

    render() {
        return(
            <div>
                <Jumbotron/>
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
            </div>
        )
    }
}

export default Home