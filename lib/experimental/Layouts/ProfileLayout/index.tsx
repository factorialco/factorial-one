interface ProfileLayoutProps {
  mainContent: React.ReactNode
  sideContent: React.ReactNode
}

export const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  mainContent,
  sideContent,
}) => {
  return (
    <div className="grid min-h-svh grid-cols-1 py-6 sm:grid-cols-[7fr_3fr] sm:divide-x sm:divide-y-0 sm:divide-solid sm:divide-f1-foreground-disabled">
      <div className="order-2 px-6 sm:order-1">{mainContent}</div>
      <div className="order-1 px-6 sm:order-2">{sideContent}</div>
    </div>
  )
}
