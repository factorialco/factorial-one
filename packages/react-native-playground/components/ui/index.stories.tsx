import * as React from "react";
import { View } from "react-native";
import { DetailsList } from "../../../react-native/src/components/DetailsList";
import { DetailsItem } from "../../../react-native/src/components/DetailsItem";

export default {
  title: "Components/DetailsList",
  component: DetailsList,
};

const singleItem = [{ title: "Requester", value: "Elias Skile" }];

const multipleItems = [
  { title: "Requester", value: "Elias Skile" },
  { title: "Total amount", value: "13,46€" },
  { title: "Payment", value: "Reimbursable" },
  { title: "Type", value: "Manual" },
  { title: "Category", value: "Fuel" },
  { title: "Date", value: "19/03/2025" },
  { title: "Vendor", value: "Repsol · B458239" },
  { title: "Cost centers", value: "Product · Design" },
];

export const DetailsListSingle = () => (
  <View className="p-4">
    <DetailsList items={singleItem} />
  </View>
);

export const DetailsListMultiple = () => (
  <View className="p-4">
    <DetailsList items={multipleItems} />
  </View>
);

export const DetailsItemStandalone = () => (
  <View className="p-4">
    <DetailsItem title="Requester" value="Elias Skile" />
    <DetailsItem title="Total amount" value="13,46€" />
    <DetailsItem title="Cost centers" value="Product · Design" />
  </View>
);
