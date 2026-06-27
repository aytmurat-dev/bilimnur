import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50 py-6">
      <Container>
        <div className="text-center text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} {site.name}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </Container>
    </footer>
  );
}
