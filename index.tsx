import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Languages, Mic, Volume2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishav AI — Hindi & English AI Assistant" },
      { name: "description", content: "Ask anything in Hindi or English. Voice input, spoken replies and photo questions with Rishav AI." },
      { property: "og:title", content: "Rishav AI — Hindi & English AI Assistant" },
      { property: "og:description", content: "Chat, speak and share photos with an AI that understands Hindi and English." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Languages, title: "हिंदी + English", text: "Ask in Hindi, English or Hinglish." },
  { icon: Mic, title: "Voice input", text: "Just speak — it types for you." },
  { icon: Volume2, title: "Voice replies", text: "Hear answers read aloud." },
  { icon: Camera, title: "Photo questions", text: "Snap or upload a photo to ask about it." },
];

function Index() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-aura" />
      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <Logo />
        <Button asChild variant="ghost">
          <Link to="/auth">Sign in</Link>
        </Button>
      </header>
      <section className="relative mx-auto max-w-3xl px-5 pb-16 pt-14 text-center sm:pt-24">
        <p className="mx-auto mb-5 w-fit rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          नमस्ते 🙏 · Your bilingual assistant
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Ask anything. <br />
          <span className="text-brand">कुछ भी पूछिए।</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Rishav AI answers in your language — type, talk, or show it a photo.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="h-12 rounded-full bg-brand px-8 text-base text-primary-foreground shadow-glow hover:opacity-90">
            <Link to="/chat">Start chatting</Link>
          </Button>
        </div>
      </section>
      <section className="relative mx-auto grid max-w-4xl grid-cols-2 gap-3 px-5 pb-20 sm:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-4 shadow-soft">
            <f.icon className="mb-3 size-5 text-primary" />
            <h3 className="text-sm font-semibold">{f.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
