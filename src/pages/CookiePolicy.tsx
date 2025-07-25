import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Cookie } from "lucide-react";
import { TrustedCompanies } from "@/components/trusted-companies";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 flex justify-center items-center gap-4">
                <Cookie className="w-10 h-10 text-primary-glow" /> Cookie <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We use cookies to enhance your experience, analyze site usage, and assist with our marketing efforts.
              </p>
            </div>
            <div className="glass-card p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gradient">What Are Cookies?</h2>
              <p className="mb-4">Cookies are small text files stored on your device by your browser. They help us remember your preferences and improve your experience.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">How We Use Cookies</h2>
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>Remember your preferences</li>
                <li>Analyze site traffic</li>
                <li>Support marketing efforts</li>
              </ul>
              <p className="text-muted-foreground mt-8">For questions, contact <a href="mailto:privacy@tecshastra.com" className="text-primary underline">privacy@tecshastra.com</a>.</p>
            </div>
          </div>
        </section>
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
}
