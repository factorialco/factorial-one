// how to export OneModal which would contain OneModal.Header and OneModal.Content being accepted as children of OneModal?
import { OneModal } from "./OneModal"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"

type OneModalComponent = typeof OneModal & {
  Header: typeof OneModalHeader
  Content: typeof OneModalContent
}

const ComposedOneModal = OneModal as OneModalComponent

ComposedOneModal.Header = OneModalHeader
ComposedOneModal.Content = OneModalContent

export { ComposedOneModal as OneModal }
