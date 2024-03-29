import React, { Component } from 'react'
import Item from'./Item'
import ActiveItem from'./ActiveItem'

class Table extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const items = this.props.videos.map ( (data) => {
            // let handleVideoChange = this.props.handleVideoChange.bind(this, data)
            let handleVideoChange = this.props.handleVideoChange.bind(this, data)

            return (
                data.active ?
                <ActiveItem handleVideoChange={handleVideoChange} key={data.id} url={data.url} description={data.description} title={data.title} /> :
                <Item handleVideoChange={handleVideoChange} key={data.id} id={data.id} url={data.url} description={data.description} title={data.title} deleteVideo={this.props.deleteVideo}/>
            )
        })

        // handleVideoChange={handleVideoChange} 
        return(
            <div className="pt-5 pb-5">
                <div casssName="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">Your Videos</h2>
                    </div>
                    {items}
                </div>
            </div>
        )
    }
}

export default Table