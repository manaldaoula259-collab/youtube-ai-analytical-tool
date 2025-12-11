"use client";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { CheckCircle2, Zap, TrendingUp, Sparkles, Users, BarChart3, Award, Star, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUser();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode as default on mount
    document.documentElement.classList.add('dark');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">poweraitool</span>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:justify-end gap-6">
            <a href="#features" onClick={handleSmoothScroll} className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-medium transition">
              Features
            </a>
            <a href="#pricing" onClick={handleSmoothScroll} className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-medium transition">
              Pricing
            </a>
            <a href="#testimonials" onClick={handleSmoothScroll} className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-medium transition">
              Testimonials
            </a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {!user ? (
              <SignInButton mode="modal" signUpForceRedirectUrl="/dashboard">
                <button data-sign-in-button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl hover:shadow-red-600/50">
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </SignInButton>
            ) : (
              <>
                <a href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl hover:shadow-red-600/50">
                  <span>Dashboard</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <UserButton />
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 text-sm text-gray-900 dark:text-gray-300 p-1 ps-3 rounded-full transition hover:border-red-600 hover:bg-gray-200 dark:hover:bg-neutral-800/80 duration-300 group"
              href="https://poweraitool.site/" target="_blank" rel="noopener noreferrer">
              <span className="text-lg">🔥</span>
              Try it free today – Start creating with AI in just one click
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-sm group-hover:from-red-700 group-hover:to-red-600 transition duration-300 shadow-lg shadow-red-600/50">
                <span>visit here</span>
                <svg className="flex-shrink-0 size-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              poweraitool: Smarter
              <span className="bg-clip-text bg-gradient-to-tl from-red-600 to-red-400 text-transparent"> YouTube Growth with AI</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Analyze, Optimize, and Grow your YouTube channel with AI — all in one platform built for creators.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 border-2 border-red-600 hover:border-red-700 text-white text-sm font-bold rounded-lg py-3 px-6 transition shadow-md hover:shadow-lg hover:shadow-red-600/30 hover:scale-105 duration-300 relative overflow-hidden group"
              href="/dashboard">
              <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 animate-pulse group-hover:animate-none pointer-events-none"></span>
              <span className="relative">Get Started</span>
              <svg className="flex-shrink-0 size-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "Active Users", value: "10K+" },
            { icon: BarChart3, label: "Channels Analyzed", value: "5K+" },
            { icon: TrendingUp, label: "Videos Analyzed", value: "50K+" },
            { icon: Star, label: "Satisfaction Rate", value: "4.9/5" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i} 
                className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border border-gray-200 dark:border-neutral-700 hover:border-red-600/50 dark:hover:border-red-600/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-600/5 transition duration-300 pointer-events-none"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 group-hover:scale-110 transition duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition duration-300">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Your Channel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive suite of AI-powered tools designed to help you understand and improve your YouTube channel performance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: Sparkles,
              title: "AI Thumbnail Generator", 
              desc: "Create stunning and eye-catching thumbnails using advanced AI technology",
              features: ["Professional Design", "Full Customization", "Lightning Fast"]
            },
            { 
              icon: TrendingUp,
              title: "Thumbnail Search", 
              desc: "Explore top-performing thumbnails across YouTube and learn from success",
              features: ["Performance Analytics", "Competitor Insights", "Visual Intelligence"]
            },
            { 
              icon: BarChart3,
              title: "Outlier Detection", 
              desc: "Identify videos performing unusually well or poorly with precision",
              features: ["Smart Analysis", "Custom Suggestions", "Detailed Reports"]
            },
            { 
              icon: Award,
              title: "Content Generator", 
              desc: "Create viral video ideas and professional scripts with ease",
              features: ["Creative Ideas", "Professional Writing", "SEO Optimized"]
            },
            { 
              icon: Zap,
              title: "Trending Keywords", 
              desc: "Stay ahead with real-time YouTube keyword trends and insights",
              features: ["Real-Time Updates", "Competition Analysis", "Growth Strategies"]
            },
            { 
              icon: CheckCircle2,
              title: "Performance Optimization", 
              desc: "Get smart suggestions to improve titles, tags, and descriptions",
              features: ["AI Recommendations", "Best Practices", "Continuous Improvement"]
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border border-gray-200 dark:border-neutral-800 hover:border-red-600/50 dark:hover:border-red-600/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-600/0 group-hover:from-red-600/15 group-hover:to-red-600/5 transition duration-300 pointer-events-none"></div>
                <div className="relative flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 group-hover:scale-110 transition duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition duration-300">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition duration-300">
                      <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 dark:from-red-600/5 to-transparent pointer-events-none -z-10 rounded-3xl"></div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Plans for Every Creator
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your channel and start growing today
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              name: "Free",
              price: "0",
              description: "Start with essential features",
              features: [
                "AI Thumbnail Generator - Basic",
                "Thumbnail Search - Limited",
                "Core Statistics Dashboard",
                "Email Support",
              ],
              cta: "Get Started",
              highlight: false,
            },
            {
              name: "Professional",
              price: "29",
              description: "For serious creators",
              features: [
                "AI Thumbnail Generator - Advanced",
                "Thumbnail Search - Full Access",
                "Outlier Detection",
                "Content Generator - Professional",
                "Trending Keywords - Real-time",
                "Performance Optimization",
                "Priority Support",
              ],
              cta: "Subscribe Now",
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "99",
              description: "For professional channels",
              features: [
                "All Professional Features",
                "AI Thumbnail Generator - Unlimited",
                "Advanced Outlier Detection",
                "Content Generator - Premium",
                "Trending Keywords - Advanced Analytics",
                "Performance Optimization - Custom",
                "Custom API",
                "Dedicated Support Team",
                "Priority Updates",
              ],
              cta: "Start Free Trial",
              highlight: false,
            },
          ].map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl transition transform hover:scale-105 duration-300 w-full max-w-sm ${
                plan.highlight 
                  ? "bg-gradient-to-br from-red-600 to-red-500 text-white shadow-2xl ring-2 ring-red-600 dark:ring-red-500 lg:scale-105" 
                  : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-neutral-800 hover:border-red-600/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular ⭐
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-red-100" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    ${plan.price}
                  </span>
                  {plan.price !== "0" && (
                    <span className={`${plan.highlight ? "text-red-100" : "text-gray-600 dark:text-gray-400"}`}>
                      /month
                    </span>
                  )}
                </div>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition mb-8 hover:scale-105 duration-300 ${
                  plan.highlight 
                    ? "bg-white text-red-600 hover:bg-red-50 shadow-lg" 
                    : "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 shadow-lg"
                }`}
                onClick={() => {
                  if (!user) {
                    // Trigger sign in if not authenticated
                    const signInButton = document.querySelector('[data-sign-in-button]') as HTMLElement;
                    if (signInButton) signInButton.click();
                  } else {
                    window.location.href = '/dashboard';
                  }
                }}>
                  {plan.cta}
                </button>

                <ul className={`space-y-4 ${plan.highlight ? "text-red-50" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-red-100" : "text-red-600"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include a free 14-day trial. No credit card required.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Creators Say About poweraitool
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful content creators
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ahmed Mohamed",
              channel: "Tech Channel",
              avatar: "AM",
              rating: 5,
              text: "My channel views increased by 300% after using poweraitool. The thumbnail analysis tools are game-changing!",
            },
            {
              name: "Fatima Ali",
              channel: "Educational Content",
              avatar: "FA",
              rating: 5,
              text: "Best investment for my channel. Features are easy to use and the support team is amazing.",
            },
            {
              name: "Mahmoud Hassan",
              channel: "Entertainment Channel",
              avatar: "MH",
              rating: 5,
              text: "AI saves me hours of research every week. Exceptional value for money.",
            },
          ].map((testimonial, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-neutral-800 hover:border-red-600/50 transition duration-300 hover:shadow-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none group-hover:from-red-600/10 transition duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-red-600/30 group-hover:scale-110 transition duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.channel}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 dark:text-gray-400 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Section - Motivational */}
      <div className="flex items-center justify-center min-h-screen py-12 lg:py-16">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              See Real Results in Days
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our users see measurable improvements right from day one. Here's what you can expect:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "30% Average CTR Boost",
                description: "Creators improve their thumbnail click-through rates significantly with AI insights"
              },
              {
                icon: "⏱️",
                title: "5+ Hours Saved Weekly",
                description: "Stop wasting time researching. Our AI does the analysis for you instantly"
              },
              {
                icon: "🎯",
                title: "Better Content Strategy",
                description: "Make data-driven decisions with comprehensive analytics and trending insights"
              },
              {
                icon: "🚀",
                title: "Consistent Growth",
                description: "Watch your channel grow steadily with continuous AI-powered recommendations"
              },
              {
                icon: "💡",
                title: "Creative Edge",
                description: "Generate fresh viral ideas monthly with our content inspiration engine"
              },
              {
                icon: "🏆",
                title: "Compete Smarter",
                description: "Outperform competitors by leveraging advanced AI analytics they don't have"
              }
            ].map((item, i) => (
              <div key={i} className="group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-800/20 rounded-2xl mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose poweraitool Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why poweraitool Stands Out
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to succeed on YouTube in one intelligent platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { title: "Lightning-Fast Analysis", desc: "Get insights in seconds, not hours" },
              { title: "AI-Powered Recommendations", desc: "Smart suggestions tailored to your channel" },
              { title: "Real-Time Trending Data", desc: "Stay ahead with live market insights" },
              { title: "No Technical Skills Required", desc: "Easy to use for everyone" },
              { title: "24/7 Support & Updates", desc: "We're here when you need us" },
              { title: "Proven Track Record", desc: "Trusted by 10,000+ successful creators" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="group-hover:translate-x-2 transition">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  10K+
                </span>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Creators trust poweraitool</p>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[85%] rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">85% users see growth in 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex items-center justify-center min-h-[70vh] py-6 lg:py-8">
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 dark:from-red-600 dark:via-red-500 dark:to-red-600 max-w-[85rem] mx-4 sm:mx-6 lg:mx-8 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-600/50 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none"></div>
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Channel?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Start your journey with poweraitool today and unlock your channel's true potential
            </p>
            {!user ? (
              <SignInButton mode="modal" signUpForceRedirectUrl="/dashboard">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 hover:bg-red-50 font-bold rounded-lg transition shadow-lg hover:shadow-2xl hover:scale-105 duration-300">
                  <span>Start Free Trial</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </SignInButton>
            ) : (
              <a href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 hover:bg-red-50 font-bold rounded-lg transition shadow-lg hover:shadow-2xl hover:scale-105 duration-300">
                <span>Go to Dashboard</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-gray-400 py-12 border-t border-neutral-800">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">poweraitool</span>
              </div>
              <p className="text-sm text-gray-500">Powerful AI platform to grow your YouTube channel</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" onClick={handleSmoothScroll} className="hover:text-red-400 transition duration-300">Features</a></li>
                <li><a href="#pricing" onClick={handleSmoothScroll} className="hover:text-red-400 transition duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-red-400 transition duration-300">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition duration-300">About</a></li>
                <li><a href="#" className="hover:text-red-400 transition duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-red-400 transition duration-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition duration-300">Privacy</a></li>
                <li><a href="#" className="hover:text-red-400 transition duration-300">Terms</a></li>
                <li><a href="#" className="hover:text-red-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; 2025 poweraitool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
