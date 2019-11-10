import axios from 'axios';
import React from 'react';
import './Main.css';

export default class CharacterStarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charactes: [],
            films: [],    
            filtered: [],
            name: ""
        }
        this.getCharactes = this.getCharactes.bind(this)
    }

    getCharactes() {
        return axios.get("https://swapi.co/api/people")
            .then((response) => {
                console.log(response)
                this.setState({ charactes: response.data.results });
                this.setState({ filtered: response.data.results });
            })
    }

    componentDidMount() {
        this.getCharactes()
    }

    handleChange = event => {
        const inputValue = event.target.value.toLowerCase();
        let originalList = this.state.charactes;
        let filteredList = [];
        originalList.filter(people => {
            if (people.name.toLowerCase().includes(inputValue)) {
                filteredList.push(people);
                this.setState({ filtered: filteredList });
            }
        });
    }

    render() {
        const charactes = this.state.filtered;
        return (

            <div className="main">
                <div className="texts">
                    <h3>Star Wars</h3>
                    <p>May the force be with you</p>
                </div>
                <div className="form">
                    <form>
                        <label>
                        Pesquise sobre seu personagem favorito:
                            <input type="text" className="userInput" name="name" onChange={this.handleChange} />
                        </label>
                    </form>
                </div>

                {charactes.length > 0 && charactes.map((p, index) => {
                    return (
                        <div key={index}>
                            <div className="films">
                                <h4>Name: {p.name}</h4>
                                <p>Gender: {p.gender}</p>
                                <h4>Filmes que participou</h4>
                                <p>{p.films.title}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

