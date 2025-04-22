import * as React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {
  Icon,
  AppIcons,
  ModuleIcons,
} from "@factorialco/factorial-one-react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { SvgProps } from "react-native-svg";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function IconsScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold mb-4">Factorial One Icons</Text>

      {/* App Icons Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>App Icons</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row flex-wrap">
            {Object.entries(AppIcons)
              .slice(0, 20)
              .map(([name, IconComponent]) => (
                <IconDisplay key={name} name={name} icon={IconComponent} />
              ))}
          </View>
        </CardContent>
      </Card>

      {/* Module Icons Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Module Icons</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row flex-wrap">
            {Object.entries(ModuleIcons).map(([name, IconComponent]) => (
              <IconDisplay key={name} name={name} icon={IconComponent} />
            ))}
          </View>
        </CardContent>
      </Card>

      {/* Size Variants Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Size Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row justify-around mb-4">
            <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
            <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
            <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
            <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
          </View>
          <View className="flex-row justify-around">
            <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
            <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
            <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
            <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
          </View>
        </CardContent>
      </Card>

      {/* Styling Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Color Styling</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row justify-around">
            <StyledIcon
              icon={AppIcons.Heart}
              name="red"
              className="text-red-500"
            />
            <StyledIcon
              icon={AppIcons.InfoCircle}
              name="blue"
              className="text-blue-500"
            />
            <StyledIcon
              icon={AppIcons.Check}
              name="green"
              className="text-green-500"
            />
            <StyledIcon
              icon={AppIcons.Warning}
              name="yellow"
              className="text-yellow-500"
            />
            <StyledIcon
              icon={AppIcons.Cross}
              name="gray"
              className="text-gray-500"
            />
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// Type definitions
type IconType = ForwardRefExoticComponent<
  SvgProps &
    RefAttributes<SVGSVGElement> & {
      className?: string;
    }
>;

interface IconDisplayProps {
  icon: IconType;
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg";
}

interface StyledIconProps extends IconDisplayProps {
  className: string;
}

// Helper components
const IconDisplay: React.FC<IconDisplayProps> = ({ icon, name }) => (
  <TouchableOpacity style={styles.iconItem}>
    <View style={styles.iconWrapper}>
      <Icon icon={icon} size="md" />
    </View>
    <Text className="text-xs text-center mt-1">{name}</Text>
  </TouchableOpacity>
);

const SizeVariant: React.FC<SizeVariantProps> = ({ icon, name, size }) => (
  <View style={styles.sizeVariant}>
    <Icon icon={icon} size={size} />
    <Text className="text-xs text-center mt-1">{name}</Text>
  </View>
);

const StyledIcon: React.FC<StyledIconProps> = ({ icon, name, className }) => (
  <View style={styles.styledIcon}>
    <Icon icon={icon} size="lg" className={className} />
    <Text className="text-xs text-center mt-1">{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  iconItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 16,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeVariant: {
    alignItems: "center",
  },
  styledIcon: {
    alignItems: "center",
  },
});
