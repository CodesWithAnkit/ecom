import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection-styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
// All of the anonymous function calls inside of any component fo get called again and re rendered brand new, when ever they calll back or refresh. They make impact on slower computer most
export default CollectionPreview;
