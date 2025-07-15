import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BasePostDescription } from "./index"

describe("PostDescription XSS Protection", () => {
  it("should sanitize script tags", () => {
    const maliciousContent = `<p>Hello</p><script>alert('XSS')</script>`

    render(<BasePostDescription content={maliciousContent} />)

    // The script tag should be completely removed
    expect(document.querySelector("script")).toBeNull()
    // But the safe content should remain
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  it("should sanitize javascript: URLs", () => {
    const maliciousContent = `<a href="javascript:alert('XSS')">Click me</a>`

    render(<BasePostDescription content={maliciousContent} />)

    const link = screen.getByText("Click me")
    expect(link).toBeInTheDocument()
    // The href should be sanitized (DOMPurify removes javascript: URLs)
    expect(link.getAttribute("href")).not.toContain("javascript:")
  })

  it("should sanitize event handlers", () => {
    const maliciousContent = `<div onclick="alert('XSS')">Click me</div>`

    render(<BasePostDescription content={maliciousContent} />)

    const div = screen.getByText("Click me")
    expect(div).toBeInTheDocument()
    // The onclick attribute should be removed
    expect(div.getAttribute("onclick")).toBeNull()
  })

  it("should sanitize iframe tags", () => {
    const maliciousContent = `<p>Content</p><iframe src="javascript:alert('XSS')"></iframe>`

    render(<BasePostDescription content={maliciousContent} />)

    // The iframe should be removed
    expect(document.querySelector("iframe")).toBeNull()
    // But safe content should remain
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("should sanitize object and embed tags", () => {
    const maliciousContent = `<p>Content</p><object data="javascript:alert('XSS')"></object><embed src="javascript:alert('XSS')">`

    render(<BasePostDescription content={maliciousContent} />)

    // These tags should be removed
    expect(document.querySelector("object")).toBeNull()
    expect(document.querySelector("embed")).toBeNull()
    // But safe content should remain
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("should sanitize style attributes with expressions", () => {
    const maliciousContent = `<div style="background-image: url('javascript:alert(1)')">Content</div>`

    render(<BasePostDescription content={maliciousContent} />)

    const div = screen.getByText("Content")
    expect(div).toBeInTheDocument()
    // The malicious style should be removed
    const style = div.getAttribute("style")
    expect(style).not.toContain("javascript:")
  })

  it("should sanitize data attributes with javascript", () => {
    const maliciousContent = `<div data-bind="javascript:alert('XSS')">Content</div>`

    render(<BasePostDescription content={maliciousContent} />)

    const div = screen.getByText("Content")
    expect(div).toBeInTheDocument()
    // Data attributes with javascript should be handled safely
    const dataBindAttr = div.getAttribute("data-bind")
    expect(dataBindAttr).not.toContain("javascript:")
  })

  it("should sanitize form elements", () => {
    const maliciousContent = `<form action="javascript:alert('XSS')"><input type="submit" value="Submit"></form>`

    render(<BasePostDescription content={maliciousContent} />)

    // Form elements should be removed by DOMPurify
    expect(document.querySelector("form")).toBeNull()
    expect(document.querySelector("input")).toBeNull()
  })

  it("should sanitize meta and link tags", () => {
    const maliciousContent = `<p>Content</p><meta http-equiv="refresh" content="0;url=javascript:alert('XSS')"><link rel="stylesheet" href="javascript:alert('XSS')">`

    render(<BasePostDescription content={maliciousContent} />)

    // These tags should be removed
    expect(document.querySelector("meta")).toBeNull()
    expect(document.querySelector("link")).toBeNull()
    // Safe content should remain
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("should preserve safe HTML content", () => {
    const safeContent = `
      <p>This is a <strong>safe</strong> paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <a href="https://example.com">Safe link</a>
    `

    render(<BasePostDescription content={safeContent} />)

    // All safe elements should be preserved
    expect(screen.getByText("This is a")).toBeInTheDocument()
    expect(screen.getByText("safe")).toBeInTheDocument()
    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    const link = screen.getByText("Safe link")
    expect(link).toBeInTheDocument()
    expect(link.getAttribute("href")).toBe("https://example.com")
  })

  it("should sanitize complex nested XSS attempts", () => {
    const maliciousContent = `
      <div>
        <p>Normal content</p>
        <img src="x" onerror="alert('XSS')">
        <div style="background: url('javascript:alert(1)')">
          <script>alert('nested')</script>
          <p>More content</p>
        </div>
      </div>
    `

    render(<BasePostDescription content={maliciousContent} />)

    // Safe content should remain
    expect(screen.getByText("Normal content")).toBeInTheDocument()
    expect(screen.getByText("More content")).toBeInTheDocument()

    // Malicious elements should be removed or sanitized
    expect(document.querySelector("script")).toBeNull()

    const img = document.querySelector("img")
    if (img) {
      expect(img.getAttribute("onerror")).toBeNull()
    }
  })

  it("should sanitize SVG with embedded scripts", () => {
    const maliciousContent = `
      <svg onload="alert('XSS')">
        <script>alert('SVG XSS')</script>
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
    `

    render(<BasePostDescription content={maliciousContent} />)

    // Script tags should be removed
    expect(document.querySelector("script")).toBeNull()

    // SVG events should be sanitized
    const svg = document.querySelector("svg")
    if (svg) {
      expect(svg.getAttribute("onload")).toBeNull()
    }
  })

  it("should handle empty or null content safely", () => {
    render(<BasePostDescription content="" />)
    // Should not throw any errors
    expect(
      document.querySelector(".FactorialOneTextEditor")
    ).toBeInTheDocument()
  })

  it("should apply collapsed class when collapsed prop is true", () => {
    const content = "<p>Test content</p>"

    render(<BasePostDescription content={content} collapsed={true} />)

    const container = document.querySelector(".FactorialOneTextEditor")
    expect(container).toHaveClass("line-clamp-5")
  })

  it("should not apply collapsed class when collapsed prop is false", () => {
    const content = "<p>Test content</p>"

    render(<BasePostDescription content={content} collapsed={false} />)

    const container = document.querySelector(".FactorialOneTextEditor")
    expect(container).not.toHaveClass("line-clamp-5")
  })
})
