import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions/index';


class App extends Component {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };
  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };
  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// -----------------------------------------------
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };
// this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       image: {
    //         uri: "https://cdn.pixabay.com/photo/2017/10/28/14/17/valley-of-desolation-2897158_960_720.jpg"
    //       }
    //     })
    //   };
    // });
// this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
// this.setState({ selectedPlace: null });
// this.setState(prevState => {
//   return {
//     selectedPlace: prevState.places.find(place => {
//       return place.key === key;
//     })
//   };
// });
