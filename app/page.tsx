'use client';

import Image from 'next/image';
import { Shield, Users, Trophy, Heart, ChevronRight, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-16">
              <Image 
                src="/logo.svg" 
                alt="Elite Logo" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="font-display text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 transform -skew-x-6">FUSION ELITE</span>
          </div>
          <nav className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#classes" className="hover:text-red-500 transition-colors">Classes</a>
            <a href="#why-us" className="hover:text-red-500 transition-colors">Why Us</a>
          </nav>
          <a href="#trial" className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-black font-bold uppercase tracking-wider transform -skew-x-12 hover:scale-105 transition-transform">
            <span className="transform skew-x-12">2 Free Weeks</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/martialarts/1920/1080" 
            alt="Martial Arts Training" 
            fill 
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 bg-red-600 transform -skew-x-12">
              <span className="block transform skew-x-12 font-bold uppercase tracking-widest text-sm">Kids • Teens • Families</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              TRAIN HARD.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">RISE ELITE.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl border-l-4 border-yellow-500 pl-4">
              Discover your true potential. Build discipline, confidence, and strength in a welcoming, high-energy environment designed for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#trial" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-black font-display text-2xl tracking-wider transform -skew-x-12 hover:scale-105 transition-transform group">
                <span className="transform skew-x-12 flex items-center gap-2">
                  Claim Your 2 Free Weeks
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120H0V0l1200 120z" className="fill-zinc-950"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-6">
                MORE THAN JUST <span className="text-red-500">KICKS & PUNCHES</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At Fusion Elite, our mission is to forge strong bodies and unbreakable minds. We believe martial arts is the ultimate vehicle for personal growth, teaching young athletes the value of hard work, respect, and perseverance.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether your child is taking their first step onto the mat or preparing for competition, our expert instructors provide a safe, motivating, and high-energy environment where everyone can thrive.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-red-500 pl-4">
                  <div className="font-display text-4xl text-white">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Active Students</div>
                </div>
                <div className="border-l-2 border-yellow-500 pl-4">
                  <div className="font-display text-4xl text-white">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Expert Coaches</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] w-full transform md:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-yellow-500 transform -skew-x-6 translate-x-4 translate-y-4"></div>
              <Image 
                src="https://picsum.photos/seed/dojo/800/1000" 
                alt="Dojo Training" 
                fill 
                className="object-cover transform -skew-x-6 grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-black relative">
        {/* Top Diagonal */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120H0V0l1200 120z" className="fill-zinc-950"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl mb-4">OUR <span className="text-yellow-500">DISCIPLINES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Master multiple arts. We offer specialized programs tailored for different ages and skill levels.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Karate', desc: 'Traditional striking, forms, and discipline. Perfect for building a strong foundation.', color: 'from-red-600 to-red-900', glow: 'hover:shadow-red-600/40', seed: 'karate' },
              { name: 'Brazilian Jiu-Jitsu', desc: 'Grappling and ground fighting. Learn leverage and technique over brute strength.', color: 'from-yellow-500 to-yellow-700', glow: 'hover:shadow-yellow-500/40', seed: 'bjj' },
              { name: 'Kickboxing / Muay Thai', desc: 'High-energy striking using punches, kicks, knees, and elbows. Great for fitness.', color: 'from-red-500 to-orange-600', glow: 'hover:shadow-red-500/40', seed: 'kickboxing' },
              { name: 'Taekwondo', desc: 'Dynamic kicking techniques and agility. Enhances flexibility and focus.', color: 'from-orange-500 to-red-600', glow: 'hover:shadow-orange-500/40', seed: 'taekwondo' },
              { name: 'Judo', desc: 'Throws and takedowns. Learn to use an opponent\'s energy against them safely.', color: 'from-yellow-600 to-orange-600', glow: 'hover:shadow-yellow-600/40', seed: 'judo' },
            ].map((cls, i) => (
              <div key={i} className={`group relative h-80 overflow-hidden bg-zinc-900 transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:z-10 ${cls.glow}`}>
                <Image 
                  src={`https://picsum.photos/seed/${cls.seed}/600/800`} 
                  alt={cls.name} 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} mix-blend-multiply opacity-80`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-1 bg-white mb-4 transform -skew-x-12 origin-left group-hover:scale-x-150 transition-transform"></div>
                  <h3 className="font-display text-3xl mb-2">{cls.name}</h3>
                  <p className="text-gray-200 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{cls.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Why Choose Us */}
      <section id="why-us" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Who It's For */}
            <div>
              <h2 className="font-display text-5xl mb-8">PROGRAMS FOR <span className="text-red-500">EVERY AGE</span></h2>
              <div className="space-y-6">
                <div className="bg-black p-6 border-l-4 border-yellow-500 transform -skew-x-3">
                  <div className="transform skew-x-3">
                    <h3 className="font-display text-2xl mb-2">Little Ninjas (Ages 4-7)</h3>
                    <p className="text-gray-400">Focuses on listening skills, coordination, and basic motor skills in a fun, game-based environment.</p>
                  </div>
                </div>
                <div className="bg-black p-6 border-l-4 border-red-500 transform -skew-x-3">
                  <div className="transform skew-x-3">
                    <h3 className="font-display text-2xl mb-2">Junior Elite (Ages 8-12)</h3>
                    <p className="text-gray-400">Builds confidence, anti-bullying strategies, and solid martial arts fundamentals.</p>
                  </div>
                </div>
                <div className="bg-black p-6 border-l-4 border-orange-500 transform -skew-x-3">
                  <div className="transform skew-x-3">
                    <h3 className="font-display text-2xl mb-2">Teens & Adults (13+)</h3>
                    <p className="text-gray-400">High-intensity training focusing on self-defense, fitness, and advanced techniques.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-display text-5xl mb-8">WHY <span className="text-yellow-500">CHOOSE US</span></h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Users, title: 'Expert Instructors', desc: 'Learn from champions and certified black belts dedicated to your success.', color: 'red' },
                  { icon: Shield, title: 'Safe Environment', desc: 'Clean, fully matted facilities with a strict focus on safety and respect.', color: 'yellow' },
                  { icon: Heart, title: 'Build Confidence', desc: 'Watch your child transform as they overcome challenges and earn their ranks.', color: 'orange' },
                  { icon: Trophy, title: 'Competition Ready', desc: 'Optional competition tracks for those looking to test their skills in tournaments.', color: 'red' }
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  const colorClasses = 
                    feature.color === 'red' ? 'bg-red-600/20 text-red-500' :
                    feature.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-orange-500/20 text-orange-500';
                  
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex flex-col gap-4 group cursor-default"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className={`w-14 h-14 ${colorClasses} flex items-center justify-center rounded-tl-xl rounded-br-xl transform -skew-x-12 transition-colors duration-300 group-hover:bg-opacity-40`}
                      >
                        <Icon className="w-7 h-7 transform skew-x-12" />
                      </motion.div>
                      <h3 className="font-display text-2xl">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trial Form Section */}
      <section id="trial" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/boxing/1920/1080" 
            alt="Dojo Background" 
            fill 
            className="object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black/80 to-black" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-zinc-900/80 backdrop-blur-xl p-8 md:p-12 border-t-4 border-red-600 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1 mb-4 bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm transform -skew-x-12">
                <span className="block transform skew-x-12">Limited Time Offer</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">2 FREE WEEKS</span></h2>
              <p className="text-gray-300 text-lg">Fill out the form below to claim your two free weeks of unlimited training. No commitment required.</p>
            </div>

            <form action="https://formspree.io/f/mbdznork" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Student Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Student Age</label>
                  <input name="student_age" type="number" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="e.g. 10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Parent / Guardian Name (If under 18)</label>
                <input name="student_name" name="parent_name" type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="Jane Doe" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                  <input name="email" type="email" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                  <input name="phone" name="phone" type="tel" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Preferred Program</label>
                <select name="program" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors appearance-none">
                  <option>Select a program...</option>
                  <option>Little Ninjas (Ages 4-7)</option>
                  <option>Junior Elite (Ages 8-12)</option>
                  <option>Teens & Adults (13+)</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <button type="submit" className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-display text-3xl tracking-wider transform -skew-x-6 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <span className="transform skew-x-6 block">CLAIM MY 2 FREE WEEKS</span>
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">By submitting this form, you agree to our terms and conditions. We respect your privacy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-14">
                  <Image 
                    src="/logo.svg" 
                    alt="Elite Logo" 
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="font-display text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 transform -skew-x-6">FUSION ELITE</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">Empowering the next generation through the discipline, respect, and physical fitness of martial arts.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <span>123 Dojo Way, Suite 100<br/>Martial City, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <span>(555) 987-6543</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <span>info@fusionelite.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider mb-6 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#classes" className="hover:text-red-500 transition-colors">Programs</a></li>
                <li><a href="#why-us" className="hover:text-red-500 transition-colors">Why Choose Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Schedule</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Member Portal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Fusion Elite Martial Arts. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
