import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 w-full">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
          Get in <span className="text-[#ccff00]">Touch</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Have questions before booking? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 flex-shrink-0">
                <MapPin className="text-[#ccff00]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-zinc-400">123 Tennis Court Lane<br />Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 flex-shrink-0">
                <Phone className="text-[#ccff00]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-zinc-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 flex-shrink-0">
                <Mail className="text-[#ccff00]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-zinc-400">coach@protennis.com</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <a 
              href="https://wa.me/15551234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition"
            >
              <MessageCircle />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
              <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
              <input type="email" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-[#ccff00] transition mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
