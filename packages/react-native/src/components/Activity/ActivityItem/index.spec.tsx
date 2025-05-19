import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { IconType } from "../../Icon";
import { vi } from "vitest";
import {
  ActivityItem,
  ActivityItemSkeleton,
} from "../../Activity/ActivityItem";

// Mock the IconAvatar component
vi.mock("../../IconAvatar", () => ({
  IconAvatar: () => null,
}));

// Mock dependencies
const mockIcon: IconType = "check" as unknown as IconType;
const mockOnPress = vi.fn();

describe("ActivityItem", () => {
  const defaultProps = {
    id: "activity-123",
    date: "Today",
    title: "Activity Title",
    category: "Time off",
    onPress: mockOnPress,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with required props", () => {
    const { getByText } = render(<ActivityItem {...defaultProps} />);

    expect(getByText("Activity Title")).toBeTruthy();
    expect(getByText("Time off · Today")).toBeTruthy();
  });

  it("renders correctly with description", () => {
    const { getByText } = render(
      <ActivityItem {...defaultProps} description="Test description" />,
    );

    expect(getByText("Test description")).toBeTruthy();
  });

  it("renders icon container when icon is provided", () => {
    const { getByLabelText } = render(
      <ActivityItem {...defaultProps} icon={mockIcon} />,
    );

    expect(getByLabelText("activity-icon-container")).toBeTruthy();
  });

  it("does not render icon container when icon is not provided", () => {
    const { queryByLabelText } = render(<ActivityItem {...defaultProps} />);

    expect(queryByLabelText("activity-icon-container")).toBeNull();
  });

  it("shows unread indicator when isUnread is true", () => {
    const { getByLabelText } = render(
      <ActivityItem {...defaultProps} isUnread={true} />,
    );

    expect(getByLabelText("unread-indicator")).toBeTruthy();
  });

  it("does not show unread indicator when isUnread is false", () => {
    const { queryByLabelText } = render(
      <ActivityItem {...defaultProps} isUnread={false} />,
    );

    expect(queryByLabelText("unread-indicator")).toBeNull();
  });

  it("calls onPress with correct id when pressed", () => {
    const { getByLabelText } = render(<ActivityItem {...defaultProps} />);

    fireEvent.press(getByLabelText("activity-item"));
    expect(mockOnPress).toHaveBeenCalledWith("activity-123");
  });
});

describe("ActivityItemSkeleton", () => {
  it("renders skeleton correctly", () => {
    const { getByLabelText } = render(<ActivityItemSkeleton />);

    expect(getByLabelText("activity-skeleton")).toBeTruthy();
  });
});
