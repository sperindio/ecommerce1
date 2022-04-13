import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../collection/collection.component";

//Selectors
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  /*   //Fetch shop data from Firestor
  unsubscribeFromSnapshot = null; */

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

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
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
