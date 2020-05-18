import React from "react";
import * as E from "./elements";
import PropTypes from "prop-types";

const MyInput = ({ label, value, onChange, startIcon, ...rest }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <E.Wrapper>
      <E.Label startIcon={!!startIcon} shrink={isFocused || !!value}>
        {label}
      </E.Label>
      <E.InputWrapper focused={isFocused}>
        {startIcon && <E.IconWrapper>{startIcon}</E.IconWrapper>}
        <E.Input
          type="text"
          value={value}
          onChange={onChange}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...rest}
        />
      </E.InputWrapper>
    </E.Wrapper>
  );
};

MyInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  startIcon: PropTypes.element,
};

export default MyInput;
