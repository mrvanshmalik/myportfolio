import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-base-border bg-base-bg">
      <Container className="py-10">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold">My Portfolio</div>
            <div className="text-xs text-base-muted">
              Built with React, Vite, Tailwind 
            </div>
          </div>
          <div className="text-xs text-base-muted">© {year} Vansh Malik</div>
        </div>
      </Container>
    </footer>
  );
}
