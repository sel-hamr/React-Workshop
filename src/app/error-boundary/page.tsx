import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>What is an Error Boundary in React</Section.Title>
        <Section.Description>
          An Error Boundary is a special component in React designed to handle
          runtime errors in a part of the component tree. It catches JavaScript
          errors anywhere in its child component tree, logs those errors, and
          displays a fallback UI instead of crashing the whole application.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Use Cases</p>

      <Section.Description>
        <ul className="list-disc px-8 my-2">
          <li>
            Prevent Application Crashes: Use Error Boundaries to prevent the
            entire app from crashing due to a bug in a specific component.
          </li>
          <li>
            Display User-Friendly Messages: Replace technical error messages
            with a user-friendly fallback UI.
          </li>
          <li>
            Isolate Errors: Debug specific parts of the component tree by
            wrapping them with separate Error Boundaries.
          </li>
          <li>
            Logging Errors: Log error details to external error-tracking
            services (e.g., Sentry, Bugsnag).
          </li>
        </ul>
      </Section.Description>
      <Section.Body>
        <Section.Code>
          {`
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by Error Boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

`}
        </Section.Code>
      </Section.Body>
    </Section>
  );
}
