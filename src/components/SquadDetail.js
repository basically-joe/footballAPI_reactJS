import React from 'react';

const SquadDetail = ({ teams }) =>{
    
    if (!teams) return null;
    const teamsSquad = teams.squad;

    const teamNodes = teamsSquad.map(squad => {
        return (
            <p key = {squad.id}>{squad.name} ({squad.shirtNumber})</p>
        )
    })

    return (
        <div className="team-list">
            {teamNodes}
        </div>
    )
}



export default SquadDetail;