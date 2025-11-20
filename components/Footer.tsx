export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <div className="space-y-4">
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zheyuan Lin • Built with Next.js & TypeScript
          </div>
          <div className="text-xs text-muted-foreground/70">
            Thanks for stopping by! ✨
          </div>
        </div>
      </div>
    </footer>
  )
}

