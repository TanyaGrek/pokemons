import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './index.css'
import Pokemon from './Pokemon';
import ActivePokemon from './ActivePokemon';
import * as pokeApi from './api/pokemons-api'
import * as pokeActions from './actions/pokemon-actions'
import {  filterItems, sortedItems, toggleFavorite } from './actions/pokemon-actions';
import store from './store/store';

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

class App extends React.Component {

    componentDidMount() {
        pokeApi.addPokemonList(`http://pokeapi.co/api/v2/pokemon/`);
        pokeApi.addActivePokemon(`http://pokeapi.co/api/v2/pokemon/1/`);
    }

    handleActivePokemon (pokemonName){
        pokeApi.addActivePokemon(`http://pokeapi.co/api/v2/pokemon/`+ pokemonName);
    }

    handleAddStar (pokemon) {
        store.dispatch(toggleFavorite(pokemon));
    }

    handleSearch () {
        const searchQuery = this.refs.searchInput.value.toLowerCase();
        pokeApi.addActivePokemon(`http://pokeapi.co/api/v2/pokemon/` + searchQuery + '/');
    }

    handleSearchQuery () {
        const searchHandleQuery = this.refs.searchInput.value;
        store.dispatch(filterItems(searchHandleQuery));
    }

    handleSort (){
        const pokemons = this.props.pokemons;
        store.dispatch(sortedItems(pokemons));
    }

    handleLoadNext(event){
        event.preventDefault();
        pokeApi.addPokemonList(this.props.next);
    }

    render() {
        const { pokemons, active } = this.props;
        return (
            <div className="appContent">
                <div className="header">
                    <img className="logoImage" src="https://www.apple-iphone.ru/wp-content/uploads/2016/11/pokemon-go-2-1.png" alt="LOGO"/>
                    <img className="toolBarImage" src="https://johanesekajaya.com/wp-content/uploads/2016/07/025Pikachu_OS_anime_11.png" alt="pikachu" />
                </div>
                <div className="toolBar nav row">
                    <div className="searchBar  col-sm-offset-3 col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <span>Search </span>
                        <form onSubmit={this.handleSearch.bind(this)}>
                            <div className="input-group">
                                <input type="text" ref="searchInput" className="form-control" placeholder="Enter name or ID" onChange={this.handleSearchQuery.bind(this)} />
                                <span className="input-group-btn">
                                <button onClick={this.handleSearch.bind(this)} className="btn btn-default" type="button">GO</button>
                                </span>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="content row">
                    <div className="pokemonList col-xs-12 col-sm-offset-1 col-sm-4 col-md-3 col-lg-3">
                        {(!pokemons) ? (<div>sorry :(</div>) :
                            (pokemons.map(pokemon =>
                                <Pokemon
                                    pokemon={pokemon}
                                    name={pokemon.name}
                                    key={pokemon.name}
                                    selectedPokemon={this.handleActivePokemon.bind(this)}
                                    addStar={this.handleAddStar.bind(this)}
                                    favorites={favorites}
                                    checked={pokemon.checked}
                                />
                            ))
                        }
                        <nav aria-label="...">
                            <ul className="pager">
                                <li><a href="#" onClick={this.handleLoadNext.bind(this)}>More <span aria-hidden="true">&rarr;</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    {(!active) ? ((
                            <div>
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                                <span className="ddy">Loading...</span>
                            </div>
                        )) :
                        <ActivePokemon listFromParent={active}
                                       id={active.id}
                                       types={active.types}
                                       abilities={active.abilities}
                                       stats={active.stats}
                                       sprites={active.sprites}
                        />
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        pokemons: (state.filterItems === 0) ?
            (state.pokemons ):
            (state.pokemons.filter(pokemon => pokemon.name.includes(state.filterItems))),
        next: state.next,
        active: state.active.active,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pokeActions: bindActionCreators(pokeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
