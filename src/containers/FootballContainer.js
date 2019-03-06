import React, { Component } from 'react';
import TeamSelector from '../components/TeamSelector.js';
import TeamDetail from '../components/TeamDetail.js';
import SquadDetail from '../components/SquadDetail.js';
import APIkey from "../components/Auth"


class FootballContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            teams: [],
      currentTeam: null
         }
         this.handleTeamSelected = this.handleTeamSelected.bind(this);

    }

    componentDidMount(){
        const url = "http://api.football-data.org/v2/competitions/PL/teams";
        fetch(url, {
            headers: {'X-Auth-Token': APIkey}
            })
            .then(response => response.json())
            .then(data => {
                this.setState({teams: data.teams})
                console.log(this.state.teams);
            })
            .catch(err => console.error(err));
    }

    handleTeamSelected(id){
        const selectedTeam = this.state.teams[id];
        this.setState({currentTeam: selectedTeam})
        const url = `http://api.football-data.org/v2/teams/${id}`;
    
        fetch(url, {
            headers: {'X-Auth-Token': APIkey}
            })
            .then(response => response.json())
            .then(data => {
                this.setState({currentTeam: data})
                console.log("Team selected:", data.name);
        })
            .catch(err => console.error(err));
    }

        render() { 
            return ( 
                <section className = "football-container">
                    <h1>Football Teams and Squads</h1>
                    <TeamSelector teams={this.state.teams} onTeamSelected={this.handleTeamSelected}/>
                    <TeamDetail team={this.state.currentTeam}/>
                    <SquadDetail teams={this.state.currentTeam}/>
                </section>
            );
        }
}
 
export default FootballContainer;