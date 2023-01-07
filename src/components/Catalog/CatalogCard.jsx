import styled from "@emotion/styled";
import React from "react";

const StyledCatalogCard = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 5px;
  flex: 0 0 50px;
  display: flex;

  &.active {
    border-color: 1px solid red;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const CatalogCard = ({ name, pic, onClick, active, id }) => {
  return (
    <StyledCatalogCard
      id={id}
      style={{ border: active ? "3px solid #ffaf29" : "" }}
      onClick={onClick}
    >
      <img src={pic} alt={name} />
    </StyledCatalogCard>
  );
};

export default CatalogCard;
