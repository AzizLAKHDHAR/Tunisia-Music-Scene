import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      title: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "What is AltScene Tunisia?",
          answer: "AltScene Tunisia is a comprehensive platform dedicated to mapping, documenting, and celebrating Tunisia's vibrant alternative music scene. We provide a space for artists, venues, and music professionals to connect and showcase their work."
        },
        {
          question: "Is the platform free to use?",
          answer: "Yes, AltScene Tunisia is completely free to use for both artists and music lovers. We believe in making music discovery and cultural preservation accessible to everyone."
        },
        {
          question: "What types of music do you feature?",
          answer: "We focus on Tunisia's alternative music scene, which includes indie, electronic, hip-hop, fusion, experimental music, and contemporary interpretations of traditional Tunisian music. We welcome all genres that represent the diverse and innovative side of Tunisian music."
        },
        {
          question: "How often is the content updated?",
          answer: "We continuously update our platform with new artists, venues, and events. Our team works closely with the music community to ensure our database stays current and comprehensive."
        }
      ]
    },
    {
      title: "For Artists",
      icon: MessageCircle,
      questions: [
        {
          question: "How can I get featured on AltScene Tunisia?",
          answer: "Artists can submit their profiles through our contact form or reach out to us directly. We review all submissions and feature artists who align with our focus on Tunisia's alternative music scene."
        },
        {
          question: "What information do I need to provide?",
          answer: "We typically need your artist bio, music samples, photos, social media links, and information about your musical style and influences. The more comprehensive your submission, the better we can represent your work."
        },
        {
          question: "Can I update my artist profile?",
          answer: "Yes, once your profile is live, you can contact us with updates to your information, new releases, upcoming shows, or any other changes you'd like to make."
        },
        {
          question: "Do you charge artists for featuring them?",
          answer: "No, we never charge artists for featuring them on our platform. Our mission is to support the music community, not profit from individual artists."
        }
      ]
    },
    {
      title: "For Venues",
      icon: ExternalLink,
      questions: [
        {
          question: "How can my venue be listed on the platform?",
          answer: "Venue owners can contact us to have their space included in our database. We feature venues that regularly host live music, from intimate clubs to large concert halls."
        },
        {
          question: "What venue information do you include?",
          answer: "We include venue capacity, location, contact information, types of events hosted, technical specifications, and photos. We also feature upcoming events and past notable performances."
        },
        {
          question: "Can I promote events through your platform?",
          answer: "While our current platform focuses on venue and artist profiles, we're working on event promotion features. Contact us to discuss promoting your upcoming shows."
        },
        {
          question: "Is there a cost for venue listings?",
          answer: "Basic venue listings are free. We believe in supporting the entire music ecosystem, including the spaces where music comes alive."
        }
      ]
    },
    {
      title: "Technical",
      icon: HelpCircle,
      questions: [
        {
          question: "What browsers are supported?",
          answer: "Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience."
        },
        {
          question: "Is there a mobile app?",
          answer: "Currently, we don't have a dedicated mobile app, but our website is fully responsive and works great on mobile devices. A mobile app is in our future development plans."
        },
        {
          question: "How do I report a technical issue?",
          answer: "If you encounter any technical problems, please contact us with details about the issue, including your browser, device, and what you were trying to do when the problem occurred."
        },
        {
          question: "Do you have an API for developers?",
          answer: "We're currently developing an API that will allow developers to access our music data. Stay tuned for updates on this feature."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: "General Inquiries",
      description: "For general questions about the platform",
      icon: Mail,
      action: "Email Us",
      link: "mailto:info@altscenetunisia.com"
    },
    {
      title: "Artist Submissions",
      description: "To submit your music for consideration",
      icon: MessageCircle,
      action: "Submit Music",
      link: "mailto:artists@altscenetunisia.com"
    },
    {
      title: "Venue Partnerships",
      description: "For venue listings and partnerships",
      icon: ExternalLink,
      action: "Partner With Us",
      link: "mailto:venues@altscenetunisia.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about AltScene Tunisia, or reach out to us directly if you need more help.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <category.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full mb-4">
                    <option.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button asChild className="w-full">
                    <a href={option.link}>
                      {option.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">For Artists</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Prepare high-quality photos and music samples</li>
                <li>• Include links to your social media and streaming platforms</li>
                <li>• Write a compelling artist bio that tells your story</li>
                <li>• Keep your contact information up to date</li>
              </ul>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">For Venues</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Provide detailed venue specifications</li>
                <li>• Include high-quality photos of your space</li>
                <li>• Share information about your sound system</li>
                <li>• Keep your event calendar updated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
