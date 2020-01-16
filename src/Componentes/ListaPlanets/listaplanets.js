import axios from 'axios';
import React from 'react';
import './Lista.css';

export default class StarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
           
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        const randomNumber = Math.floor((Math.random() * 88 + 1))
        let apiUrl = "https://swapi.co/api/planets" + randomNumber

        axios.get(apiUrl)
        .then(response => response.data.results)
    }

    componentDidMount() {
        const responseInfoPlanets = this.getData('planets');
        responseInfoPlanets.then(planets => {
            console.log(planets)
            this.setState({ planets })
        })
    }

    handleClick(){
       console.log('Fui clicado')
       this.getData()
    }
    render() {
        return (
            <div  className="main">
                <div className='info'>
                    <ul>
                        <div className='first-li'>
                            <li>Name: {this.state.name}</li>
                        </div>
                        <li>Population: {this.state.population}</li>
                        <li>Climate: {this.state.climate}</li>
                        <li>Terrain: {this.state.population}</li>
                        <p>Featured in films</p>
                        <button onClick={this.handleClick}>Next</button>
                    </ul>
                </div>
            </div>

        );
    }
}

