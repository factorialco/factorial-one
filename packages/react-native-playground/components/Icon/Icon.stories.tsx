import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon,
  AppIcons,
  ModuleIcons,
} from "@factorialco/factorial-one-react-native";
import { IconColorName } from "@factorialco/factorial-one-react-native/src/lib/colors";

const meta = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
  args: {
    size: "md",
    icon: AppIcons.ChevronDown,
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// Helper components with proper TypeScript types
interface IconDisplayProps {
  icon: any; // Using any to avoid import errors
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg";
}

interface StyledIconDisplayProps extends IconDisplayProps {
  color: IconColorName;
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="items-center w-20 mb-4 p-2">
    <Icon icon={icon} size="md" />
    <Text className="text-sm mt-2 text-center">{name}</Text>
  </View>
);

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size={size} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

const StyledIconDisplay = ({ icon, name, color }: StyledIconDisplayProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size="lg" color={color} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

export const IconsShowcase: Story = {
  args: {
    icon: AppIcons.Archive,
  },
  render: () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [appIconList, setAppIconList] = useState<
      Array<{ name: string; icon: any }>
    >([]);
    const [moduleIconList, setModuleIconList] = useState<
      Array<{ name: string; icon: any }>
    >([]);

    // Generate icon lists on component mount
    useEffect(() => {
      // Create array of app icons
      const appIcons = Object.entries(AppIcons).map(([name, icon]) => ({
        name,
        icon,
      }));

      // Create array of module icons
      const modIcons = Object.entries(ModuleIcons).map(([name, icon]) => ({
        name,
        icon,
      }));

      setAppIconList(appIcons);
      setModuleIconList(modIcons);
    }, []);

    // Filter icons based on search term
    const filteredAppIcons = appIconList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const filteredModuleIcons = moduleIconList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <ScrollView>
        <View className="mb-4">
          <Text className="text-lg font-bold mb-2">Search Icons</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2"
            placeholder="Search icons..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        {filteredAppIcons.length > 0 && (
          <>
            <Text className="text-lg font-bold mb-4 mt-6">
              App Icons ({filteredAppIcons.length})
            </Text>
            <View className="flex-row flex-wrap justify-start">
              {filteredAppIcons.map((item) => (
                <IconDisplay
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                />
              ))}
            </View>
          </>
        )}

        {filteredModuleIcons.length > 0 && (
          <>
            <Text className="text-lg font-bold mb-4 mt-6">
              Module Icons ({filteredModuleIcons.length})
            </Text>
            <View className="flex-row flex-wrap justify-start">
              {filteredModuleIcons.map((item) => (
                <IconDisplay
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                />
              ))}
            </View>
          </>
        )}

        {filteredAppIcons.length === 0 && filteredModuleIcons.length === 0 && (
          <View className="items-center justify-center p-10">
            <Text className="text-lg">
              No icons found matching "{searchTerm}"
            </Text>
          </View>
        )}
      </ScrollView>
    );
  },
};

export const ModuleIconsShowcase: Story = {
  args: {
    icon: ModuleIcons.Home,
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Module Icons</Text>
      <View className="flex-row flex-wrap justify-start">
        <IconDisplay icon={ModuleIcons.Benefits} name="Benefits" />
        <IconDisplay icon={ModuleIcons.Calendar} name="Calendar" />
        <IconDisplay icon={ModuleIcons.ClockIn} name="ClockIn" />
        <IconDisplay icon={ModuleIcons.Finance} name="Finance" />
        <IconDisplay icon={ModuleIcons.Home} name="Home" />
        <IconDisplay icon={ModuleIcons.Inbox} name="Inbox" />
        <IconDisplay icon={ModuleIcons.Organization} name="Organization" />
        <IconDisplay icon={ModuleIcons.Payroll} name="Payroll" />
        <IconDisplay icon={ModuleIcons.Settings} name="Settings" />
      </View>
    </ScrollView>
  ),
};

export const SizeVariants: Story = {
  args: {
    icon: AppIcons.ChevronDown,
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Size Variants</Text>
      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
      </View>

      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
      </View>

      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={ModuleIcons.Home} name="xs" size="xs" />
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
      </View>
    </ScrollView>
  ),
};

export const Styling: Story = {
  args: {
    icon: AppIcons.Heart,
    className: "text-f1-icon-critical",
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Styling Icons</Text>
      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <StyledIconDisplay
          icon={AppIcons.Heart}
          name="critical"
          color="text-f1-icon-critical"
        />
        <StyledIconDisplay
          icon={AppIcons.InfoCircle}
          name="info"
          color="text-f1-icon-info"
        />
        <StyledIconDisplay
          icon={AppIcons.Check}
          name="positive"
          color="text-f1-icon-positive"
        />
        <StyledIconDisplay
          icon={AppIcons.Warning}
          name="warning"
          color="text-f1-icon-warning"
        />
      </View>
    </ScrollView>
  ),
};
