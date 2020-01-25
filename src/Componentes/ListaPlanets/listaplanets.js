import React from 'react';
import planets from '../../services/planets'
import './Lista.css';

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
                films: [],
            }
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        let getInfoPlanet = Math.floor((Math.random() * 88 + 1))
        planets.getPlanet(getInfoPlanet).then(planet => {
            this.setState({
                planet: planet.data,
            })
            if( planet === "" ){
                this.setState({loanding: 'Carregando...'})
            }
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
                            <li>Name: {this.state.planet.name}</li>
                        </div>
                        <li>Population: {this.state.planet.population}</li>
                        <li>Climate: {this.state.planet.climate}</li>
                        <li>Terrain: {this.state.planet.terrain}</li>
                        <li>Gravity: {this.state.planet.gravity}</li>
                        <li>Diameter: {this.state.planet.diameter}</li>
                        <button onClick={this.getData}>Next</button>
                    </ul>
                </div>
            </div>

        );
    }
}
