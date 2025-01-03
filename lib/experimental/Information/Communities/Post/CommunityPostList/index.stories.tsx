import type { Meta, StoryObj } from "@storybook/react"
import { subMonths } from "date-fns"
import { CommunityPostList } from "."
import { HighlightBannerProps } from "../../HighlightBanner"
import { Default as HighlightBannerDefaultStory } from "../../HighlightBanner/index.stories"
import type { CommunityPostProps } from "../CommunityPost"

const meta: Meta<typeof CommunityPostList> = {
  component: CommunityPostList,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof CommunityPostList>

const eventDate = new Date(2024, 11, 13, 10, 30)

const samplePosts: CommunityPostProps[] = [
  {
    id: "1",
    author: {
      firstName: "Saúl",
      lastName: "Domínguez",
      url: "https://github.com/sauldom102",
      avatarUrl: "https://github.com/sauldom102.png",
    },
    group: {
      title: "All company",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 1),
    title:
      "Exciting News: We're Opening a New Office in Berlin - A Major Milestone in Our Global Expansion! 🎉",
    description:
      "I'm thrilled to announce that after months of careful planning and preparation, we're officially expanding our operations to Berlin, Germany! This new office will serve as our European headquarters and marks a significant step in our international growth strategy. We've already secured a beautiful location in the heart of Berlin's vibrant tech district and are looking forward to building an amazing team there.",
    onClick: () => {},
    counters: {
      views: "142 views",
      comments: "31 comments",
    },
    reactions: {
      items: [
        { emoji: "🎉", initialCount: 24 },
        { emoji: "👏", initialCount: 18 },
        { emoji: "🚀", initialCount: 12 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "2",
    author: {
      firstName: "Nik",
      lastName: "Lopin",
      url: "https://github.com/nlopin",
      avatarUrl: "https://github.com/nlopin.png",
    },
    group: {
      title: "Engineering",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 1),
    title:
      "Upcoming Engineering Team Building Retreat in Beautiful Sevilla: Three Days of Collaboration, Culture and Connection",
    description:
      "Get ready for an unforgettable weekend of team building and cultural exploration in the heart of Andalusia! We've planned an exciting itinerary that combines technical workshops, collaborative projects, and immersive cultural experiences. From coding sessions in historic venues to team challenges through Sevilla's picturesque streets, this retreat is designed to strengthen our bonds while inspiring creativity and innovation.",
    event: {
      title: "Engineering Retreat 2024",
      place: "Sevilla",
      imageUrl:
        "https://awaytothecity.com/wp-content/uploads/2023/10/Spain-Seville-Plaza-de-Espana-Hallway-Columns-Fountain-Sunset_Cover.webp",
      date: eventDate,
    },
    onClick: () => {},
    counters: {
      views: "98 views",
      comments: "15 comments",
    },
    reactions: {
      items: [
        { emoji: "✈️", initialCount: 15 },
        { emoji: "🌞", initialCount: 10 },
        { emoji: "❤️", initialCount: 8 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "3",
    author: {
      firstName: "Josep",
      lastName: "Jaume",
      url: "https://github.com/josepjaume",
      avatarUrl: "https://github.com/josepjaume.png",
    },
    group: {
      title: "Product Design",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 2),
    title:
      "Introducing Our Completely Redesigned Product Dashboard: A New Era of User Experience and Functionality",
    description:
      "After months of user research, iterative design, and careful implementation, I'm excited to share the first preview of our completely redesigned dashboard! This new interface brings improved data visualization, streamlined workflows, and a modern aesthetic while maintaining the familiar features our users love. The redesign focuses on enhanced accessibility, faster load times, and a more intuitive navigation system.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    onClick: () => {},
    counters: {
      views: "203 views",
      comments: "45 comments",
    },
    reactions: {
      items: [
        { emoji: "🔥", initialCount: 32 },
        { emoji: "👍", initialCount: 28 },
        { emoji: "💯", initialCount: 15 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "4",
    author: {
      firstName: "Dani",
      lastName: "Moreno",
      url: "https://github.com/dani-moreno",
      avatarUrl: "https://github.com/dani-moreno.png",
    },
    group: {
      title: "HR Updates",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 2),
    title:
      "Welcoming Three Outstanding New Team Members to Our Growing Family! 👋",
    description:
      "I'm delighted to announce three exceptional additions to our team! Please join me in welcoming Sarah Johnson, our new Senior Product Designer with 10 years of experience in user-centered design; John Martinez, who joins our engineering team as a Backend Architect; and Michael Chen, our new Data Science Lead. Each brings unique expertise and impressive backgrounds that will help drive our company's future success.",
    onClick: () => {},
    counters: {
      views: "167 views",
      comments: "28 comments",
    },
    reactions: {
      items: [
        { emoji: "👋", initialCount: 45 },
        { emoji: "🎊", initialCount: 22 },
        { emoji: "💪", initialCount: 18 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "5",
    author: {
      firstName: "Nik",
      lastName: "Lopin",
      url: "https://github.com/nlopin",
      avatarUrl: "https://github.com/nlopin.png",
    },
    group: {
      title: "Tech Talk",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 3),
    title:
      "Revolutionizing Our Technology Stack: How We're Implementing Advanced AI Solutions for Enhanced Product Intelligence",
    description:
      "I'm excited to share a comprehensive overview of how we're integrating cutting-edge machine learning technologies into our existing infrastructure. This initiative includes implementing natural language processing for better search capabilities, predictive analytics for user behavior analysis, and automated testing systems. We've already seen a 40% improvement in response times and a 25% increase in user engagement with these new AI-powered features.",
    onClick: () => {},
    counters: {
      views: "256 views",
      comments: "52 comments",
    },
    reactions: {
      items: [
        { emoji: "🤖", initialCount: 38 },
        { emoji: "🧠", initialCount: 25 },
        { emoji: "💡", initialCount: 20 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "6",
    author: {
      firstName: "Josep",
      lastName: "Jaume",
      url: "https://github.com/josepjaume",
      avatarUrl: "https://github.com/josepjaume.png",
    },
    group: {
      title: "Social Committee",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 3),
    title:
      "Unforgettable Moments from Our Annual Holiday Celebration: A Night of Joy, Connection and Festive Spirit 📸",
    description:
      "Take a journey through the magical moments captured at our most successful holiday party yet! From the stunning venue decoration to the surprise performance by our company band, every detail made this celebration truly special. The photo gallery includes highlights from the awards ceremony, team performances, and those spontaneous moments of joy and laughter that made the evening unforgettable.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    onClick: () => {},
    counters: {
      views: "312 views",
      comments: "67 comments",
    },
    reactions: {
      items: [
        { emoji: "🎄", initialCount: 42 },
        { emoji: "🥳", initialCount: 35 },
        { emoji: "❤️", initialCount: 28 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "7",
    author: {
      firstName: "Saúl",
      lastName: "Domínguez",
      url: "https://github.com/sauldom102",
      avatarUrl: "https://github.com/sauldom102.png",
    },
    group: {
      title: "Engineering",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 4),
    title:
      "Breaking Records: Our Platform Successfully Handled 1 Million Concurrent Users During Black Friday! 🚀",
    description:
      "Proud to share that our infrastructure performed flawlessly during the biggest stress test of the year! Our recent architectural improvements and performance optimizations paid off, handling a peak of 1 million concurrent users with zero downtime. Special thanks to our DevOps team for their incredible work on load balancing and our database team for the query optimizations that made this possible.",
    onClick: () => {},
    counters: {
      views: "423 views",
      comments: "89 comments",
    },
    reactions: {
      items: [
        { emoji: "🏆", initialCount: 56 },
        { emoji: "💪", initialCount: 48 },
        { emoji: "🎯", initialCount: 35 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "8",
    author: {
      firstName: "Dani",
      lastName: "Moreno",
      url: "https://github.com/dani-moreno",
      avatarUrl: "https://github.com/dani-moreno.png",
    },
    group: {
      title: "Learning & Development",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 4),
    title:
      "Launching Our New Professional Development Program: Investing in Your Growth 📚",
    description:
      "Today marks the launch of our comprehensive professional development program! We're partnering with top online learning platforms to offer unlimited access to courses, introducing monthly mentorship sessions with industry experts, and establishing a dedicated budget for conference attendance and certifications. Check out the full program details and start planning your learning journey!",
    onClick: () => {},
    counters: {
      views: "289 views",
      comments: "45 comments",
    },
    reactions: {
      items: [
        { emoji: "📚", initialCount: 62 },
        { emoji: "🎓", initialCount: 41 },
        { emoji: "🌱", initialCount: 33 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
  {
    id: "9",
    author: {
      firstName: "Josep",
      lastName: "Jaume",
      url: "https://github.com/josepjaume",
      avatarUrl: "https://github.com/josepjaume.png",
    },
    group: {
      title: "Product Design",
      onClick: () => {},
    },
    createdAt: subMonths(new Date(), 5),
    title:
      "Accessibility First: Our Journey to Making Our Product More Inclusive for Everyone 🌈",
    description:
      "I'm proud to present our comprehensive accessibility initiative results! Over the past six months, we've implemented WCAG 2.1 AA standards across our platform, introduced a new high-contrast mode, improved screen reader compatibility, and conducted usability testing with diverse user groups. The detailed report includes before-and-after comparisons and user testimonials.",
    imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    onClick: () => {},
    counters: {
      views: "342 views",
      comments: "73 comments",
    },
    reactions: {
      items: [
        { emoji: "👏", initialCount: 89 },
        { emoji: "❤️", initialCount: 67 },
        { emoji: "✨", initialCount: 45 },
      ],
      onInteraction: () => {},
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {},
    },
  },
]

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[755px]">
        <Story />
      </div>
    ),
  ],
  args: {
    posts: Array(3).fill(samplePosts).flat(),
    onClickPost: () => {},
    highlightBanner: HighlightBannerDefaultStory.args as HighlightBannerProps,
  },
}
