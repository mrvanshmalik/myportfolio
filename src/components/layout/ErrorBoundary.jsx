import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="rounded-xl2 border border-base-border bg-base-card p-6 shadow-soft">
            <div className="text-lg font-semibold">Something went wrong.</div>
            <p className="mt-2 text-sm text-base-muted">
              Check the browser console (F12) for the exact error.
            </p>
            <pre className="mt-4 overflow-auto rounded-xl bg-slate-50 p-3 text-xs">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
