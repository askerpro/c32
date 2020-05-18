import React from "react";
import * as E from "./elements";
import Link from "next/link";
import PropTypes from "prop-types";

const Component = ({ slug, poster, name, released, rating }) => {
  return (
    <Link href={`/game/${slug}`} passHref>
      <E.Card>
        <E.PosterWrapper>
          <E.Poster src={poster} />
        </E.PosterWrapper>

        <E.Content>
          <E.Name>{name}</E.Name>
          <E.Descriptopn>Rating: {rating}</E.Descriptopn>
          <E.Descriptopn>Released: {released}</E.Descriptopn>
        </E.Content>
      </E.Card>
    </Link>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
};

export default React.memo(Component);
