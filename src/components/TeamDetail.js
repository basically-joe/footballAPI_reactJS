import React from 'react';

const TeamDetail = ({ team }) =>{
    if (!team) return null;
    return(  
        <section>
            <h2 className="team-name">{team.name} ({team.founded})</h2>
            <img src={team.crestUrl} className="crest" alt="img"/>
            </section>
    );
    
}
 
export default TeamDetail;