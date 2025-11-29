
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { ArrowRight, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.adSpend || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          adSpend: formData.adSpend,
          message: formData.message,
          subject: "New GoScale Media Strategy Call Request",
          from_name: "GoScale Media Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", adSpend: "", message: "" });
        
        setTimeout(() => {
          setStatus("idle");
        }, 8000);
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      console.error("Form submission error:", error);
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@goscale.media?subject=GoScale Media Inquiry";
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
            Ready to Break Through Your Limits?
          </h2>
          <p className="text-lg text-[#6D8CA6] max-w-2xl mx-auto">
            Let&apos;s discuss how we can scale your ad performance
          </p>
        </div>

        {status === "success" && (
          <div className="mb-8 p-6 bg-[#2DD4BF] bg-opacity-10 border border-[#2DD4BF] rounded-lg flex items-center gap-3 max-w-6xl mx-auto">
            <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={24} />
            <div>
              <p className="text-[#2E2E2E] font-semibold">
                Thanks for reaching out!
              </p>
              <p className="text-[#6D8CA6] text-sm">
                We&apos;ll be in touch within 24 hours to schedule your strategy call.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 p-6 bg-[#FF6B6B] bg-opacity-10 border border-[#FF6B6B] rounded-lg flex items-center gap-3 max-w-6xl mx-auto">
            <AlertCircle className="text-[#FF6B6B] flex-shrink-0" size={24} />
            <div>
              <p className="text-[#2E2E2E] font-semibold">
                {errorMessage}
              </p>
              <p className="text-[#6D8CA6] text-sm">
                You can also reach us directly at hello@goscale.media
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6" style={{ fontFamily: "Satoshi, sans-serif" }}>
              Get Started
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#2E2E2E] mb-2">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="border-[#6D8CA6] disabled:opacity-50"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#2E2E2E] mb-2">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="border-[#6D8CA6] disabled:opacity-50"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-[#2E2E2E] mb-2">Company *</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="border-[#6D8CA6] disabled:opacity-50"
                />
              </div>

              <div>
                <Label htmlFor="adSpend" className="text-[#2E2E2E] mb-2">Monthly Ad Spend *</Label>
                <Select
                  value={formData.adSpend}
                  onValueChange={(value) => setFormData({ ...formData, adSpend: value })}
                  required
                  disabled={status === "loading"}
                >
                  <SelectTrigger className="border-[#6D8CA6] disabled:opacity-50">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<$10k">&lt;$10k</SelectItem>
                    <SelectItem value="$10k-$50k">$10k-$50k</SelectItem>
                    <SelectItem value="$50k-$100k">$50k-$100k</SelectItem>
                    <SelectItem value="$100k+">$100k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#2E2E2E] mb-2">Message/Goals *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={status === "loading"}
                  rows={4}
                  className="border-[#6D8CA6] disabled:opacity-50"
                  placeholder="Tell us about your goals and challenges..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold py-6 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Book a Strategy Call
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-[#FAFAFA] rounded-lg p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6" style={{ fontFamily: "Satoshi, sans-serif" }}>
                Prefer to reach out directly?
              </h3>
              
              <div className="mb-8">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-[#6D8CA6] hover:text-[#2DD4BF] transition-colors duration-300 group"
                >
                  <Mail size={28} />
                  <span className="text-2xl font-semibold">
                    hello@goscale.media
                  </span>
                </button>
              </div>

              <p className="text-sm text-[#6D8CA6]">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
