export default function Layout({ children }) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-background text-foreground">
        {children}
      </div>
    );
  }
  