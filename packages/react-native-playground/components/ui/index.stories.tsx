import * as React from "react";
import { View } from "react-native";
import { DetailsList } from "../../../react-native/src/ui/DetailsList";
import { DetailsItem } from "../../../react-native/src/ui/DetailsItem";

export default {
  title: "UI/DetailsList",
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
    <DetailsItem title="Requester" value="Elias Skile" isSingle />
    <DetailsItem title="Total amount" value="13,46€" isFirst />
    <DetailsItem title="Cost centers" value="Product · Design" isLast />
  </View>
);
