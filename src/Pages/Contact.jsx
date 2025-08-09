import ContactSection from "../Components/ContactSection";
import FAQSection from "../Components/Faq";
import GoogleMapSection from "../Components/GoogleMap";
import MiniHeader from "../Components/MiniHeader";

export default function Contact() {
    return <div className="contact">
        <MiniHeader text={"Contact"} />
        <ContactSection />
        <GoogleMapSection />
        <FAQSection />
    </div>
}