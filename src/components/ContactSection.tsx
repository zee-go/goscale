
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact-form" className="py-24 px-6 bg-gradient-to-br from-[--off-white] to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[--charcoal] mb-6 animate-fade-in">
          Ready to Break Through Your Limits?
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in animate-delay-100">
          Let's discuss how we can accelerate your growth
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in animate-delay-200">
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
            <Select value={formData.adSpend} onValueChange={(value) => setFormData({ ...formData, adSpend: value })}>
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
          <Button 
            type="submit"
            size="lg"
            className="w-full bg-[--coral] hover:bg-[--coral]/90 text-white font-bold text-lg py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book a Strategy Call
          </Button>
        </form>
      </div>
    </section>
  );
}
