export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <div className="space-y-4">
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full"></div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zheyuan Lin • Built with Next.js & TypeScript
          </div>
        </div>
      </div>
    </footer>
  )
}

