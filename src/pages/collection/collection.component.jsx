import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selctor';
import './collection.styles.scss';

const CollectionPage = ({ collections }) => {
  console.log(collections);
  return (
    <div className="category">
      <h2>CollectionPage</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  collections: selectCollection(ownProps.match.params.collectionId)(state);
};

export default connect(mapStateToProps)(CollectionPage);
