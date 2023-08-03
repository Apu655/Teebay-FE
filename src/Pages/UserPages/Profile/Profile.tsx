import React, { useState } from "react";
import { PageStyle } from "@/Common/Components";
import { ProductBought, ProductRent, ProductSold } from "@/Components";
import ProductLent from "@/Components/ProductLent";
import { Tabs } from "@mantine/core";

const Profile = () => {
  return (
    <div>
      <Tabs color="violet" defaultValue="bought">
        <Tabs.List grow position="apart">
          <Tabs.Tab value="bought">Bought</Tabs.Tab>
          <Tabs.Tab value="sold">Sold</Tabs.Tab>
          <Tabs.Tab value="borrow">Borrowed</Tabs.Tab>
          <Tabs.Tab value="lent">Lent</Tabs.Tab>
        </Tabs.List>
        <PageStyle>
          <Tabs.Panel value="bought" pt="xs">
            <ProductBought />
          </Tabs.Panel>
          <Tabs.Panel value="sold" pt="xs">
            <ProductSold />
          </Tabs.Panel>
          <Tabs.Panel value="borrow" pt="xs">
            <ProductRent />
          </Tabs.Panel>
          <Tabs.Panel value="lent" pt="xs">
            <ProductLent />
          </Tabs.Panel>
        </PageStyle>
      </Tabs>
    </div>
  );
};

export default Profile;
