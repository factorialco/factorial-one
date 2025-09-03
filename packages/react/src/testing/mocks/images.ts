const images = {
  person: [
    "../.storybook/static/avatars/person01.jpg",
    "../.storybook/static/avatars/person02.jpg",
    "../.storybook/static/avatars/person03.jpg",
    "../.storybook/static/avatars/person04.jpg",
    "../.storybook/static/avatars/person05.jpg",
    "../.storybook/static/avatars/person06.jpg",
    "../.storybook/static/avatars/person07.jpg",
    "../.storybook/static/avatars/person08.jpg",
  ],
  company: [
    "../.storybook/static/avatars/company01.jpg",
    "../.storybook/static/avatars/company02.jpg",
    "../.storybook/static/avatars/company03.jpg",
    "../.storybook/static/avatars/company04.jpg",
    "../.storybook/static/avatars/company05.jpg",
  ],
  team: [
    "../.storybook/static/avatars/team01.jpg",
    "../.storybook/static/avatars/team02.jpg",
    "../.storybook/static/avatars/team03.jpg",
    "../.storybook/static/avatars/team04.jpg",
    "../.storybook/static/avatars/team05.jpg",
  ],
}

export const mockImage = (type: keyof typeof images, index: number) => {
  const typeImages = images[type] ?? []

  return typeImages[index % typeImages.length]
}
