import React from "react";
import * as E from "./elements";
import Card from "components/card";
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from "prop-types";

const List = ({ items, hasMore, itemsCount, onLoadMore, lastItem }) => {
  return (
    <>
      <InfiniteScroll
        dataLength={itemsCount}
        next={onLoadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>end</h4>}
        key={lastItem}
      >
        <E.List>
          {items.map((item) => (
            <Card
              name={item.name}
              key={item.id}
              slug={item.slug}
              released={item.released}
              poster={item.background_image}
              rating={item.rating}
            />
          ))}
        </E.List>
      </InfiniteScroll>
    </>
  );
};

List.propTypes = {
  items: propTypes.array.isRequired,
  hasMore: propTypes.bool.isRequired,
  itemsCount: propTypes.number.isRequired,
  onLoadMore: propTypes.func.isRequired,
  lastItem: propTypes.number.isRequired,
};

export default List;
