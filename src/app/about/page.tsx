/* app/about/page.tsx (or wherever you place it) */
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  Eye,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ─── Main ──────────────────────────────────────────────── */}
      <main className="container mx-auto px-4 py-12">
        {/* Intro */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            About RivalryLens
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            The ultimate competitor-intelligence platform that helps businesses
            stay ahead of the competition through comprehensive market analysis
            and real-time insights.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, desc }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              At RivalryLens, we believe that knowledge is power. Our mission is
              to democratize competitive intelligence by providing businesses of
              all sizes with the tools and insights they need to make informed
              strategic decisions. We transform complex market data into
              actionable intelligence, helping our clients stay one step ahead
              of the competition.
            </p>
          </CardContent>
        </Card>

        {/* Call-to-action */}
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Join thousands of businesses using RivalryLens to gain competitive
            advantage.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

/* ── Helpers ─────────────────────────────────────────────────── */
const FEATURES = [
  {
    Icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Track competitor movements, product launches, and market trends in real-time",
  },
  {
    Icon: Users,
    title: "Social Media Analytics",
    desc: "Monitor competitor social-media performance, engagement rates, and trending content",
  },
  {
    Icon: BarChart3,
    title: "Revenue Insights",
    desc: "Analyze competitor financial performance and business-model strategies",
  },
  {
    Icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security with 99.9% uptime and data-protection compliance",
  },
  {
    Icon: Zap,
    title: "Real-time Updates",
    desc: "Get instant notifications about competitor activities and market changes",
  },
  {
    Icon: Eye,
    title: "Comprehensive Tracking",
    desc: "Monitor multiple competitors across various industries and market segments",
  },
] satisfies {
  Icon: typeof Eye
  title: string
  desc: string
}[]

