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
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 1),
    title: "Title",
    description: `<p class="TextEditorTheme__paragraph" dir="ltr"><span>Super Kudos for </span><strong class="mentioned"><span><a href="/employees/1">First Employee</a></span></strong><span> and </span><strong class="mentioned"><span><a href="/employees/2">Second Employee</a></span></strong><span> , who always are available to help in any way they can and as quickly as possible. You guys are great! ⭐</span></p><p class="TextEditorTheme__paragraph" dir="ltr">Including some link here too: <a href="mailto:randomemail@factorial.co" class="TextEditorTheme__link"><span>randomemail@factorial.co</span></a></p></p>`,
    onClick: () => {},
    mediaUrl:
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
    dropdownItems: [
      {
        label: "Edit post",
        onClick: () => {},
      },
      {
        label: "Turn comments and reactions on",
        onClick: () => {},
      },
      "separator",
      {
        label: "Delete post",
        onClick: () => {},
        critical: true,
      },
    ],
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
    mediaUrl: undefined,
  },
}

export const WithVideo: Story = {
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined,
    mediaUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
