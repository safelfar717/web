import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
