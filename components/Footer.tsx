export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zheyuan Lin
      </div>
    </footer>
  )
}

