import { NavigationFilter, NavigationFilterComponentProps } from "../../types"
import { DateNavigation } from "./DateNavigation"

const dateNavigatorFilter: NavigationFilter<Date> = {
  render: (props: NavigationFilterComponentProps<Date>) => {
    return <DateNavigation {...props} />
  },
}

export default dateNavigatorFilter
