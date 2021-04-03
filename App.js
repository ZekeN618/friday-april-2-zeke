import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { randy, pokeFetch } from './util';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonName: 'Zeke',
      pokemonImage: { uri: ''}
    };
  }

  async componentDidMount() {
    const pokemon = await pokeFetch('pokemon', randy(1, 898));
    console.log('pokemon: ', pokemon);

    this.setState({
      pokemonName: pokemon.name,
      pokemonImage: {uri: pokemon.sprites.front_default}
    });
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image 
          style={styles.pokemonImage}
          source={this.state.pokemonImage}>
        </Image>
        <Text>Name: {this.state.pokemonName}</Text>
        <View>
          <Text>Types</Text>
          <Text>Electric</Text>
          <Text>Grass</Text>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    resizeMode: 'contain',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 200,
    height: 200,
  },
});
