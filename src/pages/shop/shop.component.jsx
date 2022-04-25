import React, { useEffect } from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  /*   //Fetch shop data from Firestor
  unsubscribeFromSnapshot = null; */
  //We use useEffect here to fetch the collections of items. Though, we pass the same method in the following array in order to fetch data ONLY if fetchCollectionsStart changes, and not every time that user or parent component (App)s re-renders
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  /* 
   //EVERYTHING IS MANAGED BY REDUX AND REDUX-THUNK SINCE IT'S A BETTER PRACTICE. SHOP ITEMS COULDN'T LOAD UNLESS SHOP PAGE WAS VISITED
   const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
//----------------------------------------------------
    /*     //The "fetch" method is similiar to the get() method, but the object returned is far more articulated than the others.
    fetch(
      "https://firestore.googleapis.com/v1/projects/crwn-db-4e424/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((collections) => console.log(collections)); */
  //----------------------------------------------------
  /*     //This way is a one-time fetch method, quite common and doesn't require a listener component
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    }); */
  //----------------------------------------------------
  /*     
      //This method to fetch data is more advanced. It establishes a live listener on the DB or whatever event-generating component.
      this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    ); */

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
