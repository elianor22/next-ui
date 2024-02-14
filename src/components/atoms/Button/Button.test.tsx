import { render } from "@testing-library/react"
import Button from "./Button"

describe("<Button>", () => {
  it("Should Render Button", () => {
    const { container } = render(<Button>Button</Button>)

    expect(container).toBeInTheDocument()
  })
})
