import React from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon,
  AppIcons,
  ModuleIcons,
} from "@factorialco/factorial-one-react-native";

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

export const Default: Story = {
  args: {
    icon: AppIcons.ChevronDown,
  },
};

// Helper components with proper TypeScript types
interface IconDisplayProps {
  icon: any; // Using any to avoid import errors
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg";
}

interface StyledIconDisplayProps extends IconDisplayProps {
  className: string;
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="items-center w-20 mb-4">
    <Icon icon={icon} size="md" />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size={size} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

const StyledIconDisplay = ({
  icon,
  name,
  className,
}: StyledIconDisplayProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size="lg" className={className} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

export const AppIconsShowcase: Story = {
  args: {
    icon: AppIcons.Archive,
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">App Icons</Text>
      <View className="flex-row flex-wrap justify-start">
        <IconDisplay icon={AppIcons.Archive} name="Archive" />
        <IconDisplay icon={AppIcons.Bell} name="Bell" />
        <IconDisplay icon={AppIcons.Calendar} name="Calendar" />
        <IconDisplay icon={AppIcons.ChartLine} name="ChartLine" />
        <IconDisplay icon={AppIcons.Check} name="Check" />
        <IconDisplay icon={AppIcons.ChevronDown} name="ChevronDown" />
        <IconDisplay icon={AppIcons.ChevronLeft} name="ChevronLeft" />
        <IconDisplay icon={AppIcons.ChevronRight} name="ChevronRight" />
        <IconDisplay icon={AppIcons.ChevronUp} name="ChevronUp" />
        <IconDisplay icon={AppIcons.Clock} name="Clock" />
        <IconDisplay icon={AppIcons.Download} name="Download" />
        <IconDisplay icon={AppIcons.Heart} name="Heart" />
        <IconDisplay icon={AppIcons.Home} name="Home" />
        <IconDisplay icon={AppIcons.Info} name="Info" />
        <IconDisplay icon={AppIcons.Pencil} name="Pencil" />
        <IconDisplay icon={AppIcons.Search} name="Search" />
        <IconDisplay icon={AppIcons.Settings} name="Settings" />
        <IconDisplay icon={AppIcons.Upload} name="Upload" />
      </View>
    </ScrollView>
  ),
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
    className: "text-red-500",
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Styling Icons</Text>
      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <StyledIconDisplay
          icon={AppIcons.Heart}
          name="red"
          className="text-red-500"
        />
        <StyledIconDisplay
          icon={AppIcons.InfoCircle}
          name="blue"
          className="text-blue-500"
        />
        <StyledIconDisplay
          icon={AppIcons.Check}
          name="green"
          className="text-green-500"
        />
        <StyledIconDisplay
          icon={AppIcons.Warning}
          name="yellow"
          className="text-yellow-500"
        />
        <StyledIconDisplay
          icon={AppIcons.Cross}
          name="gray"
          className="text-gray-500"
        />
      </View>
    </ScrollView>
  ),
};
