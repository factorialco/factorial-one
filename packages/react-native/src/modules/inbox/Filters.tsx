import { View, ScrollView } from "react-native";
import { OnePreset } from "../../components/OnePreset";

export type FilterOption = {
  label: string;
  number?: number;
  selected?: boolean;
};

type FiltersProps = {
  filters: FilterOption[];
  onFilterChange?: (index: number) => void;
};

export const Filters = ({ filters, onFilterChange }: FiltersProps) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2 px-5 py-3">
          {filters.map((filter, idx) => (
            <OnePreset
              key={filter.label}
              label={filter.label}
              number={filter.number}
              selected={filter.selected}
              onClick={() => onFilterChange?.(idx)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
