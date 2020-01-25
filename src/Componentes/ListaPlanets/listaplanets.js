import React from 'react';
import planets from '../../services/planets'
import './Lista.css';
import FadeIn from 'react-fade-in'


export default class StarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planet: {
                name: '',
                population: '',
                climate: '',
                terrain: '',
                gravity: '',
                diameter: '',
            }
        }
        this.getData = this.getData.bind(this)
    }


    getData() {
        let getInfoPlanet = Math.floor((Math.random() * 56 + 1))
        planets.getPlanet(getInfoPlanet).then(planet => {
            this.setState({
                planet: planet.data,
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <FadeIn>
                <div className="main">
                    <div className='info'>
                        <ul>
                            <div className='first-li'>
                                <li>Planet: {this.state.planet.name}</li>
                            </div>
                            <li>Population: {this.state.planet.population}</li>
                            <li>Climate: {this.state.planet.climate}</li>
                            <li>Terrain: {this.state.planet.terrain}</li>
                            <li>Gravity: {this.state.planet.gravity}</li>
                            <li>Diameter: {this.state.planet.diameter}</li>
                            <button type='button' onClick={this.getData}>Next</button>
                        </ul>
                    </div>
                </div>
            </FadeIn>
        );
    }
}

