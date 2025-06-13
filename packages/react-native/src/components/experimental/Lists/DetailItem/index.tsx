import { ComponentProps, FC, forwardRef } from "react";
import { DataList } from "../DataList";
import { cn } from "../../../../lib/utils";
import { View } from "react-native";

type Content =
  | (ComponentProps<typeof DataList.Item> & {
      type: "item";
    })
  | (ComponentProps<typeof DataList.PersonItem> & {
      type: "person";
    })
  | (ComponentProps<typeof DataList.CompanyItem> & {
      type: "company";
    })
  | (ComponentProps<typeof DataList.TeamItem> & {
      type: "team";
    })
  | (ComponentProps<typeof DataList.DotTagItem> & {
      type: "dot-tag";
    });

export interface DetailsItemType {
  title: string;
  content: Content | Content[];
  isHorizontal?: boolean;
  spacingAtTheBottom?: boolean;
}

const ItemContent: FC<{ content: Content }> = ({ content }) => (
  <>
    {content.type === "person" && <DataList.PersonItem {...content} />}
    {content.type === "item" && <DataList.Item {...content} />}
    {content.type === "team" && <DataList.TeamItem {...content} />}
    {content.type === "company" && <DataList.CompanyItem {...content} />}
    {content.type === "dot-tag" && <DataList.DotTagItem {...content} />}
  </>
);

export const DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem({
    title,
    content,
    isHorizontal = false,
    spacingAtTheBottom,
  }) {
    const contentArray = Array.isArray(content) ? content : [content];

    return (
      <View
        className={cn(
          "flex flex-col gap-0.5",
          spacingAtTheBottom && !isHorizontal && "pb-3",
          isHorizontal && "xs:[&_ul>li]:p-0 [&_ul]:flex-1",
        )}
      >
        <DataList label={title} isHorizontal={isHorizontal}>
          {contentArray.map((c, i) => (
            <ItemContent key={i} content={c} />
          ))}
        </DataList>
      </View>
    );
  },
);
