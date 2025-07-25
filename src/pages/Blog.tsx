import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PenLine } from "lucide-react";
import { TrustedCompanies } from "@/components/trusted-companies";


export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 flex justify-center items-center gap-4">
                <PenLine className="w-10 h-10 text-primary-glow" /> TecShastra <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, news, and stories from the world of technology, innovation, and digital transformation.
              </p>
            </div>
            <div className="glass-card p-12 text-center">
              <div className="text-muted-foreground italic text-lg">No posts yet. Stay tuned for updates!</div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
            <p className="text-muted-foreground mb-12">Coming soon! Check back later for our latest articles and insights.</p>
          </div>
        </div>
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
}
