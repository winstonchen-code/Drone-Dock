import Jumbotron from'./Jumbotron'
import Table from './Table/Table'

import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import ScrollToTop from '../ScrollToTop';

function Home(props) {
    const [videos, setVideos] = useState([])
    // const [location, setLocation] = useState([])

    useEffect ((match)=> {
        const id = props.match.params.id
        const url = `http://localhost:3000/footage_logs/${id}`
        axios.get(url)
        .then( resp => {
            // setLocation(resp.data) 
            setVideos(resp.data.videos) 
        })
        .catch( resp => console.log (resp) )
    }, [])

    const handleVideoChange = useCallback(
        (item, event) => {
        event.preventDefault()

        let list_videos = [...videos]
        list_videos.map (data => {
            data.active = false 
        })

        item.active = !item.active 

        list_videos[item.id - 11] = item
        console.log(list_videos)

        setVideos(list_videos)
        },
        [],
    );

    const deleteVideo = (id) => {
        fetch(`http://localhost:3000/videos/${id}`, {method: "DELETE"})
        let newVideos = videos.filter(videos => videos.id !== id)
        setVideos(newVideos)
        alert("Your video has been deleted!")
        console.log(id)
    }

    return (
        <div>
            <ScrollToTop />
            <Jumbotron/>
            <Table handleVideoChange={handleVideoChange} videos={videos} deleteVideo={deleteVideo} />
        </div>
    )
}

export default Home