
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: ""
  });

  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon to schedule your strategy call.");
  };

  return (
    <section id="contact-form" ref={ref} className="py-24 px-6 bg-gradient-to-br from-[--off-white] to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-black text-[--charcoal] mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Ready to Break Through Your Limits?
        </h2>
        <p className={`text-xl text-gray-600 mb-12 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Let's discuss how we can accelerate your growth
        </p>
        <form 
          onSubmit={handleSubmit} 
          className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <Label htmlFor="name" className="text-[--charcoal] font-semibold">Name</Label>
              <Input 
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-2 border-gray-200 focus:border-[--teal] transition-colors"
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-[--charcoal] font-semibold">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 border-gray-200 focus:border-[--teal] transition-colors"
                required
              />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="company" className="text-[--charcoal] font-semibold">Company</Label>
            <Input 
              id="company"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border-2 border-gray-200 focus:border-[--teal] transition-colors"
              required
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="adSpend" className="text-[--charcoal] font-semibold">Monthly Ad Spend</Label>
            <Select value={formData.adSpend} onValueChange={(value) => setFormData({ ...formData, adSpend: value })} required>
              <SelectTrigger className="border-2 border-gray-200 focus:border-[--teal] transition-colors">
                <SelectValue placeholder="Select your monthly ad spend" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<10k">Less than $10k</SelectItem>
                <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                <SelectItem value="500k+">$500k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button 
            type="submit"
            className="cta-button w-full text-lg"
          >
            Book a Strategy Call
          </button>
        </form>
      </div>
    </section>
  );
}
