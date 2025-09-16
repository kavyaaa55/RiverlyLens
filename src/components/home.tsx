"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, TrendingUp, Users, BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Track Your Competition with Precision
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get real-time insights into competitor activities, social media trends, and business intelligence to stay
            ahead in your market.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Tracking Competitors
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything You Need to Monitor Competition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Social Media Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track follower growth, engagement rates, and trending content across all major platforms.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Revenue Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Monitor competitor sales performance and revenue growth patterns.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get AI-powered summaries of news, press releases, and market movements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Product Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay informed about new features, pricing changes, and product launches.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Gain the Competitive Edge?</h3>
          <p className="text-lg text-foreground mb-8">
            Join hundreds of businesses already using RivalryLens to outpace their competition.
          </p>
          <Link href="/signup">
            <Button size="lg">Start Your Free Trial</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 RivalryLens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

