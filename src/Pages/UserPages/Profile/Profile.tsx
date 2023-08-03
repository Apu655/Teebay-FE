import React from "react";
import { Header } from "./Profile.styles";
import { PageStyle, ProductCardView } from "@/Common/Components";

const Profile = () => {
  return (
    <div>
      <Header>
        <div>Bought</div>
        <div>Sold</div>
        <div>Borrowed</div>
        <div>Lent</div>
      </Header>
      <PageStyle>
        <ProductCardView/>
      </PageStyle>
    </div>
  );
};

export default Profile;
