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
        return axios.get("https://swapi.co/api/planets")
            .then(response => response.data.results)
    }

    componentDidMount() {
        const responseInfoPlanets = this.getData('planets');
        responseInfoPlanets.then(planets => {
            console.log(planets)
            this.setState({ planets })
        })
    }

    handleChange = event => {
      
    }

    handleSubmit = event => {
        this.setState({
           
        })
    }

    render() {
        return (
            <div  className="main">
                { this.state.planets.map((item) => {
                    return(
                    <div className='info'>
                        <ul key={item.id}>
                            <div className='first-li'>
                                <li>Name: {item.name}</li>
                            </div>
                            <li>Population: {item.population}</li>
                            <li>Climate: {item.climate}</li>
                            <li>Terrain: {item.terrain}</li>
                            <button>Next</button>
                        </ul>
                    </div>
                    )
                })}
            </div>

        );
    }
}

