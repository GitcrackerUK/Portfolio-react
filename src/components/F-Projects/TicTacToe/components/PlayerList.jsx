import { getUsers } from '../API/routes';
import Button from '@material-ui/core/Button';
import { createUsers } from 'factory/tictactoe';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { boxShadow3 } from '../styled';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #575a5f47;
    border-radius: 10px;
    height: 300px;
    width: 650px;
    margin: 30px;
    ${boxShadow3}
`;

const columns = [
    { field: 'ranking', headerName: 'Ranking', width: 120 },
    { field: 'name', headerName: 'User', width: 120 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'playingWith', headerName: 'Playing with', width: 150 },
    { field: 'playedGames', headerName: 'Played Games', width: 120 },
];

export default function PlayerList(params) {
    const [Users, setOnlineUsers] = useState([]);

    //Create check if local storage has data with users/players 
    //If there is no users data in the local storage create it, add it to redux and use it to fill up DataGrid.
    //If there is data with users add it to redux and use it to fill up DataGrid.

    useEffect(()=>{
        setOnlineUsers(createUsers());
    },[])

    return (
        <Wrapper>
            <DataGrid handleJoin={params.handleJoin} rows={Users ? Users : []} columns={columns} pageSize={15} checkboxSelection />
        </Wrapper>
    );
}
