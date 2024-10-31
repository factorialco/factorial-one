import { Meta, StoryObj } from "@storybook/react"

import { Check } from "@/icons"
import { DataList } from "."

const meta: Meta<typeof DataList> = {
  component: DataList,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <DataList.Item text="test" />
        <DataList.Item icon={Check} text="Make coffee" />
        <DataList.Item text="hellen@factorial.co" action={{ text: "hellen" }} />
        <DataList.Item
          action={{ href: "https://factorialhr.com/" }}
          text="Factorial"
        />
        <DataList.Item
          action={{ href: "https://factorialhr.com/" }}
          text="Banco Bilbao Vizcaya Argentaria"
        />
        <DataList.EmployeeItem
          fullName="Saul Dominguez"
          avatarUrl="https://avatars.githubusercontent.com/u/22561733?v=4"
        />
        <DataList.EmployeeItem
          fullName="Dani Moreno"
          avatarUrl="https://avatars.githubusercontent.com/u/96433370?s=60&v=4"
          action={{ text: "Dani Moreno" }}
        />
        <DataList.EmployeeItem
          fullName="Josep Jaume Roy Peroy"
          avatarUrl="https://avatars.githubusercontent.com/u/111746?s=60&v=4"
          action={{
            href: "https://avatars.githubusercontent.com/u/111746?s=60&v=4",
          }}
        />
        <DataList.CompanyItem
          name="Factorial"
          avatarUrl="https://avatars.githubusercontent.com/u/21041797?s=200&v=4"
        />
        <DataList.TeamItem name="Foundations" />
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Related Data",
  },
}
