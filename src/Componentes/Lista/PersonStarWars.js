import axios from 'axios';
import React from 'react';
import './Lista.css';

export default class StarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
            filteredPeople: [],
            films: [],
            filteredFilms: [],
            selected: ''
        }
        this.getData = this.getData.bind(this)
    }

    getData(param) {
        return axios.get(`https://swapi.co/api/${param}`)
            .then(response => response.data.results)
    }

    componentDidMount() {
        const responsePeople = this.getData('people');
        responsePeople.then(people => {
            this.setState({ people, filteredPeople: people })

        })

        const responseFilms = this.getData('films');
        responseFilms.then(films => {
            this.setState({ films, filteredFilms: films })

        })
    }

    handleChange = event => {
        const { selected } = this.state;
        const inputValue = event.target.value.toLowerCase();
        if (selected === 'people') {
            let originalList = this.state.people;
            let filteredList = [];
            originalList.filter(person => {
                if (person.name.toLowerCase().includes(inputValue)) {
                    filteredList.push(person);
                    this.setState({ filteredPeople: filteredList });
                }
            });
        } else {
            let originalList = this.state.films;
            let filteredList = [];
            originalList.filter(film => {
                if (film.title.toLowerCase().includes(inputValue)) {
                    filteredList.push(film);
                    this.setState({ filteredFilms: filteredList });
                }
            });
        }
    }

    handleSubmit = event => {
        this.setState({
            selected: event.target.value,
            filteredFilms: this.state.films,
            filteredPeople: this.state.people
        })
    }

    render() {
        const people = this.state.filteredPeople
        const films = this.state.filteredFilms
        const selected = this.state.selected
        return (

            <div className="main">
                <div className="form">
                    <form>
                        <label>
                            <input type="text" className="userInput" placeholder="Search here movie or character.." name="name" onChange={this.handleChange} />
                        </label>

                        <select value={this.state.value} onChange={this.handleSubmit}>
                            <option defaultValue value="films">Films</option>
                            <option value="people">Character</option>
                        </select>
                    </form>
                </div>
                {
                    selected === 'people' ? (
                        people.length > 0 && people.map((p, index) => {
                            return (
                                <div key={index}>
                                    <p>{p.name}</p>
                                    <p>Year of birth: {p.birth_year}</p>
                                    <p>Films: {p.films.title}</p>
                                </div>
                            )
                        })
                    ) : (

                            films.length > 0 && films.map((f, index) => {
                                return (
                                    <div key={index}>
                                        <p>{f.title}</p>
                                        <p> Episode {f.episode_id}</p>
                                        <p>{f.opening_crawl}</p>
                                    </div>
                                )
                            })
                        )
                }
            </div>
        );
    }
}

