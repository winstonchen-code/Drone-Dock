import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Location from './FootageLog'
import styled from 'styled-components'
import AddLog from './AddLog'
import ScrollToTop from '../ScrollToTop';

const Home = styled.div`
    text-align: center;
    max-width: 1600px;
    margin-left: 0px;
    margn-right: 0px;
    background: white;
`
const Header = styled.div`
    padding: 200px 100px 220px 100px;
    h1 {
        font-size: 42px;
    }
    background: linear-gradient(
        108deg,
        rgba(0, 119, 182, 1) 0%,
        rgba(5, 160, 200, 1) 100%
    );
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Btn = styled.div`
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
`
const Header1 = styled.h1`
    color: black;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
`

const Subhead = styled.p`
    font-size: 18px;
    font-weight: 500;
`

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    padding: 10px 20px;
    font-size: 18px;
`

function FootageLogs( {user, footageLogs, setFootageLogs} ) {
    const [showForm, setShowForm] = useState(false) 

    const onClick = () => {
        console.log('Click')
    }

    const addLog = (log) => {
        // console.log(log)
        let newlog = { 
            name: log.name, 
            image: log.image, 
            location: log.location, 
            date: log.date, 
            user_id: user.id
        }
        fetch("http://localhost:3000/footage_logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newlog),
        })
            .then(r => r.json())
            .then(footageLog => {
                // setUser({...user, footage_logs: [...user.footage_logs, footagelog]});
                setFootageLogs([...footageLogs, footageLog])
            })
    }

    const deleteLog = (id) => {
        fetch(`http://localhost:3000/footage_logs/${id}`, {method: "DELETE"})
        let newLogs = footageLogs.filter(logs => logs.id !== id)
        setFootageLogs(newLogs)
    }

    const grid = footageLogs.map( item => {
        return (<Location key={item.id} item={item} deleteLog={deleteLog} > </Location>)
    })

    return (
    <Home>
        <ScrollToTop/>
        <Header>
            {/* <div>
                <Header1>Hello {user.name}! </Header1>
                    <Subhead></Subhead>
                        <div className="cta-wrapper">
                            <Button onClick={() => setShowForm(!showForm)}> Create New Log </Button>
                            {showForm && <AddLog onAdd={addLog} />}
                        </div>
            </div> */}


            <Header1>Hello {user.name}!</Header1>
            <Subheader> Check Out Your Footage Logs </Subheader>
            <Btn onClick={() => setShowForm(!showForm)}> Create New Log </Btn>
            {showForm && <AddLog onAdd={addLog} />}
        </Header>
        <Grid>
            {grid}
        </Grid>
    </Home> 
    )
}

export default FootageLogs
