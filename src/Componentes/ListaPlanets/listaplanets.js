import React from 'react';
import planets from '../../services/planets'
import './Lista.css';

export default class StarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            films: [],
            error: false,
            loading: ''
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        let idPlanet = Math.floor((Math.random() * 88 + 1))
        planets.getPlanet(idPlanet).then(planet => {
            this.setState({
                planet: planet.data,
                loading: false,
                error: planet.ok
            })
        }).catch(error => {
            this.setState({
                loading: false,
                error: false
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="main">
                <div className='info'>
                    <ul>
                        <div className='first-li'>
                            <li>Name: {this.state.name}</li>
                        </div>
                        <li>Population: {this.state.population}</li>
                        <li>Climate: {this.state.climate}</li>
                        <li>Terrain: {this.state.population}</li>
                        <div className="filmes">Featured in {this.state.films.length} FILMS</div>
                        <button onClick={this.getData}>Next</button>
                    </ul>
                </div>
            </div>

        );
    }
}

