import React from 'react';
import { Heart, Sparkles, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { motion as Motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Crafted with Love',
      description: 'Every gift is selected and packaged with the utmost care, ensuring it carries the warmth of your gesture.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: 'Premium Quality',
      description: 'We source only the finest materials and products, maintaining a standard of elegance that lasts.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: 'Trusted Elegance',
      description: 'Our reputation is built on reliability and a timeless aesthetic that suits every sophisticated taste.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-gold" />,
      title: 'Sustainable Choice',
      description: 'We are committed to mindful gifting, prioritizing eco-friendly packaging and ethical sourcing.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop"
            alt="About Pealora Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Story<span className="text-gold">.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting moments of joy and connection through the art of elegant gifting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop"
                    alt="Our Philosophy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-softpink/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase">
                  Our Philosophy
                </div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 leading-tight">
                  Where Elegance Meets <br />
                  <span className="italic text-gold">Heartfelt Connection</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in the heart of Ahangama, Pealora began with a simple vision: to transform the act of giving into an extraordinary experience. We believe that a gift is more than just an object—it's a messenger of emotions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team meticulously curates every collection, from fresh blooms to artisanal cakes and bespoke photo frames, ensuring each piece meets our rigorous standards of beauty and quality.
                </p>
                <div className="pt-4">
                  <Link
                    to="/products"
                    className="group inline-flex items-center text-lg font-semibold text-gray-900 hover:text-gold transition-colors"
                  >
                    Explore our collection
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">Why Pealora?</h2>
            <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-8 rounded-2xl bg-cream border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Story CTA */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-gold rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-softpink rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Let's Create a Memory Together</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Whether it's a small token of appreciation or a grand celebration, we're here to help you find the perfect expression of your feelings.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}

