import type { Meta, StoryObj } from "@storybook/react"
import { subMonths } from "date-fns"
import { CommunityPost } from "."

const meta: Meta<typeof CommunityPost> = {
  component: CommunityPost,
}

export default meta

type Story = StoryObj<typeof CommunityPost>

// Fixed date for the example stories
const eventDate = new Date(2024, 11, 13, 10, 30)

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {
    author: {
      firstName: "Saúl",
      lastName: "Domínguez",
      url: "https://google.com/",
      avatarUrl: "https://github.com/sauldom102.png",
    },
    group: {
      title: "All company",
      url: "https://google.com/",
    },
    createdAt: subMonths(new Date(), 1),
    title: "Title",
    description:
      "Description with a maximum of two lines visible.<br />Like this one :)<br />This shouldn't be visible",
    onClick: () => {},
    imageUrl:
      "https://multimedia.andalucia.org/media/0BC700DB844F4EDFBE00C1FA9B493D71/img/1112772E6D5945A1B89C26E539DD0D99/SE_Catedral_01.jpg?responsive",
    event: {
      title: "Sevilla Tour",
      place: "Sevilla",
      imageUrl:
        "https://awaytothecity.com/wp-content/uploads/2023/10/Spain-Seville-Plaza-de-Espana-Hallway-Columns-Fountain-Sunset_Cover.webp",
      date: eventDate,
    },
    counters: {
      views: "14 views",
      comments: "3 comments",
    },
    reactions: {
      items: [
        {
          emoji: "💖",
          initialCount: 25,
        },
        {
          emoji: "🍆",
          initialCount: 8,
        },
        {
          emoji: "🎉",
          initialCount: 12,
        },
        {
          emoji: "🥰",
          initialCount: 3,
        },
        {
          emoji: "🤩",
          initialCount: 32,
        },
        {
          emoji: "🎯",
          initialCount: 3,
        },
      ],
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
}

export const WithImage: Story = {
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined,
  },
}

export const NoImageNoEvent: Story = {
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined,
    imageUrl: undefined,
  },
}

type SkeletonStory = StoryObj<typeof CommunityPost.Skeleton>

export const Skeleton: SkeletonStory = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {
    withEvent: true,
  },
  render: (args) => <CommunityPost.Skeleton {...args} />,
}

export const SkeletonWithImage: SkeletonStory = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {
    withImage: true,
  },
  render: (args) => <CommunityPost.Skeleton {...args} />,
}
