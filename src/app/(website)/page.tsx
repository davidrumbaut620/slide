'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, MessageSquare, ThumbsUp, Zap, MessageCircle, BarChart, Bot, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { keyframes } from '@emotion/react'

const moveWater = keyframes`
  0% { 
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% { 
    transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
    opacity: 0.6;
  }
  100% { 
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
    opacity: 0.8;
  }
`

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #3352CC,
                0 0 15px #3352CC,
                0 0 25px #3352CC;
  }
  50% {
    box-shadow: 0 0 10px #3352CC,
                0 0 30px #3352CC,
                0 0 50px #3352CC;
  }
  100% {
    box-shadow: 0 0 5px #3352CC,
                0 0 15px #3352CC,
                0 0 25px #3352CC;
  }
`

function Logo() {
  return (
    <svg
      width="200"
      height="55"
      viewBox="0 0 116 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M86.542 48H84.9589L82.4164 44.4741C81.7928 45.0338 81.1292 45.5615 80.4256 46.0572C79.7381 46.5369 79.0105 46.9606 78.243 47.3284C77.4754 47.6802 76.6839 47.96 75.8684 48.1679C75.0689 48.3758 74.2534 48.4797 73.4219 48.4797C71.6149 48.4797 69.912 48.1439 68.3129 47.4723C66.7299 46.7847 65.3387 45.8413 64.1395 44.642C62.9562 43.4268 62.0207 41.9956 61.3331 40.3486C60.6456 38.6856 60.3018 36.8787 60.3018 34.9279C60.3018 32.993 60.6456 31.1941 61.3331 29.5311C62.0207 27.8681 62.9562 26.429 64.1395 25.2137C65.3387 23.9985 66.7299 23.047 68.3129 22.3594C69.912 21.6719 71.6149 21.3281 73.4219 21.3281C73.9975 21.3281 74.5892 21.376 75.1968 21.472C75.8204 21.5679 76.4201 21.7278 76.9957 21.9517C77.5873 22.1596 78.139 22.4394 78.6507 22.7912C79.1624 23.143 79.5941 23.5747 79.9459 24.0864V12.0936H86.542V48ZM79.9459 34.9279C79.9459 34.0324 79.77 33.1689 79.4182 32.3374C79.0824 31.4899 78.6187 30.7464 78.0271 30.1068C77.4354 29.4512 76.7399 28.9315 75.9403 28.5477C75.1568 28.148 74.3173 27.9481 73.4219 27.9481C72.5264 27.9481 71.6789 28.108 70.8794 28.4278C70.0959 28.7476 69.4083 29.2113 68.8166 29.819C68.241 30.4106 67.7853 31.1382 67.4495 32.0016C67.1137 32.8651 66.9458 33.8405 66.9458 34.9279C66.9458 35.8713 67.1137 36.7668 67.4495 37.6143C67.7853 38.4617 68.241 39.2053 68.8166 39.8449C69.4083 40.4845 70.0959 40.9882 70.8794 41.356C71.6789 41.7238 72.5264 41.9077 73.4219 41.9077C74.3173 41.9077 75.1568 41.7158 75.9403 41.332C76.7399 40.9323 77.4354 40.4126 78.0271 39.773C78.6187 39.1174 79.0824 38.3738 79.4182 37.5423C79.77 36.6948 79.9459 35.8233 79.9459 34.9279ZM101.773 41.7158C102.029 41.7957 102.284 41.8517 102.54 41.8837C102.796 41.8997 103.052 41.9077 103.308 41.9077C103.947 41.9077 104.563 41.8197 105.155 41.6438C105.746 41.4679 106.298 41.2201 106.81 40.9003C107.337 40.5645 107.801 40.1647 108.201 39.701C108.617 39.2213 108.952 38.6936 109.208 38.118L114.005 42.939C113.398 43.8025 112.694 44.5781 111.895 45.2656C111.111 45.9532 110.256 46.5369 109.328 47.0166C108.417 47.4963 107.449 47.8561 106.426 48.0959C105.419 48.3518 104.379 48.4797 103.308 48.4797C101.501 48.4797 99.798 48.1439 98.1989 47.4723C96.6159 46.8007 95.2247 45.8653 94.0254 44.666C92.8422 43.4667 91.9067 42.0436 91.2191 40.3966C90.5316 38.7336 90.1878 36.9107 90.1878 34.9279C90.1878 32.8971 90.5316 31.0422 91.2191 29.3632C91.9067 27.6842 92.8422 26.2531 94.0254 25.0698C95.2247 23.8865 96.6159 22.9671 98.1989 22.3115C99.798 21.6559 101.501 21.3281 103.308 21.3281C104.379 21.3281 105.427 21.456 106.45 21.7118C107.473 21.9677 108.441 22.3355 109.352 22.8152C110.28 23.2949 111.143 23.8865 111.943 24.5901C112.742 25.2777 113.446 26.0532 114.053 26.9167L101.773 41.7158ZM105.131 28.2119C104.827 28.1 104.523 28.028 104.219 27.996C103.931 27.9641 103.628 27.9481 103.308 27.9481C102.412 27.9481 101.565 28.116 100.765 28.4518C99.9819 28.7716 99.2943 29.2353 98.7026 29.8429C98.127 30.4506 97.6713 31.1861 97.3355 32.0496C96.9997 32.8971 96.8318 33.8565 96.8318 34.9279C96.8318 35.1677 96.8398 35.4396 96.8557 35.7434C96.8877 36.0472 96.9277 36.359 96.9757 36.6788C97.0396 36.9826 97.1116 37.2785 97.1915 37.5663C97.2715 37.8541 97.3754 38.11 97.5034 38.3338L105.131 28.2119Z"
        fill="#ffffff"
      />
      <path
        d="M1.95264 23.9185C1.95264 22.4954 2.22447 21.1602 2.76814 19.9129C3.31182 18.6657 4.04737 17.5783 4.97482 16.6509C5.91825 15.7075 7.01359 14.9639 8.26084 14.4202C9.50808 13.8766 10.8433 13.6047 12.2664 13.6047L28.0489 13.6047V20.4886H12.2664C11.7867 20.4886 11.339 20.5765 10.9232 20.7524C10.5075 20.9283 10.1397 21.1762 9.8199 21.496C9.51608 21.7998 9.27622 22.1596 9.10033 22.5753C8.92444 22.9911 8.83649 23.4388 8.83649 23.9185C8.83649 24.3982 8.92444 24.8539 9.10033 25.2857C9.27622 25.7014 9.51608 26.0692 9.8199 26.389C10.1397 26.6928 10.5075 26.9327 10.9232 27.1086C11.339 27.2845 11.7867 27.3724 12.2664 27.3724H19.1503C20.5734 27.3724 21.9086 27.6443 23.1559 28.1879C24.4191 28.7156 25.5144 29.4512 26.4419 30.3946C27.3853 31.322 28.1209 32.4174 28.6486 33.6806C29.1922 34.9279 29.4641 36.2631 29.4641 37.6862C29.4641 39.1094 29.1922 40.4446 28.6486 41.6918C28.1209 42.939 27.3853 44.0344 26.4419 44.9778C25.5144 45.9053 24.4191 46.6408 23.1559 47.1845C21.9086 47.7282 20.5734 48 19.1503 48H3.87148L3.87148 41.1161H19.1503C19.63 41.1161 20.0777 41.0282 20.4935 40.8523C20.9092 40.6764 21.269 40.4366 21.5728 40.1327C21.8926 39.8129 22.1405 39.4452 22.3164 39.0294C22.4923 38.6137 22.5802 38.1659 22.5802 37.6862C22.5802 37.2065 22.4923 36.7588 22.3164 36.343C22.1405 35.9273 21.8926 35.5675 21.5728 35.2637C21.269 34.9439 20.9092 34.696 20.4935 34.5201C20.0777 34.3442 19.63 34.2563 19.1503 34.2563H12.2664C10.8433 34.2563 9.50808 33.9844 8.26084 33.4408C7.01359 32.8971 5.91825 32.1615 4.97482 31.2341C4.04737 30.2907 3.31182 29.1953 2.76814 27.9481C2.22447 26.6848 1.95264 25.3416 1.95264 23.9185Z"
        fill="#ffffff"
      />
      <path
        d="M29.98 22.9948C33.7041 41.0907 45.869 46.2111 61.1018 43.7636"
        stroke="#ffffff"
        stroke-width="6.38743"
      />
      <path
        d="M41.2124 25.9109C41.7282 28.558 44.102 34.4987 49.4707 37.0849"
        stroke="#ffffff"
        stroke-width="5.10995"
      />
      <circle
        cx="41.0184"
        cy="20.1204"
        r="2.87435"
        fill="#ffffff"
      />
    </svg>
  )
}

function Navbar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = Math.min(scroll / 50, 1)

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 h-[120px] z-40 pointer-events-none will-change-transform"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0, 0, 0, ${opacity * 0}) 30%, 
            rgba(0, 0, 0, ${opacity * 0}) 70%, 
            rgba(0, 0, 0, 0) 100%)`
        }}
      />
      <div 
        className="fixed top-0 left-0 right-0 h-[120px] z-40 pointer-events-none will-change-transform supports-[backdrop-filter]:bg-background/60"
        style={{
          backdropFilter: `blur(${opacity * 10}px)`,
          WebkitBackdropFilter: `blur(${opacity * 10}px)`,
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          transform: 'translateZ(0)'
        }}
      />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            <nav className="hidden space-x-6 text-sm md:block">
              <Link href="#features" className="text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-white/70 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                Testimonials
              </Link>
            </nav>

            <Button className="bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(51, 82, 204, 0.5) 0%, rgba(51, 82, 204, 0.2) 40%, rgba(0, 0, 0, 0) 80%)',
          animation: `${moveWater} 15s ease-in-out infinite`,
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(51, 82, 204, 0.4) 0%, rgba(51, 82, 204, 0.1) 30%, rgba(0, 0, 0, 0) 70%)',
          animation: `${moveWater} 20s ease-in-out infinite reverse`,
        }}
      />
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Automate Your Instagram Engagement with Slide Ai
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Turn DMs into opportunities, automate comment replies, and boost your Instagram presence effortlessly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
          <Link href="/dashboard">
  <Button 
    size="lg" 
    className="bg-[#3352CC] text-white hover:bg-[#3352CC]/90"
  >
    Start for Free
  </Button>
</Link>

<Link href="/learn-more">
  <Button 
    size="lg" 
    variant="outline" 
    className="border-gray-600 text-white hover:bg-white/10"
  >
    Learn More
  </Button>
</Link>

          </div>
        </div>
        <div className="relative w-[85%] md:w-[75%] lg:w-[60%] mx-auto mt-[60px] aspect-[16/9]">
          <Image
            src="https://i.postimg.cc/3JGj006M/SLIDE.jpg"
            alt="Slide Instagram Dashboard"
            fill
            className="object-contain rounded-lg shadow-2xl"
            style={{
              animation: `${glow} 3s ease-in-out infinite`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      title: "Set Up Keywords",
      description: "Define keywords that trigger automated responses in DMs.",
      icon: MessageSquare,
    },
    {
      title: "Automate Replies",
      description: "Slide responds to comments and DMs based on your settings.",
      icon: Zap,
    },
    {
      title: "Engage & Convert",
      description: "Turn engagement into opportunities with targeted interactions.",
      icon: ThumbsUp,
    },
  ]

  return (
    <section id="how-it-works" className="bg-black py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Slide Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <step.icon className="h-12 w-12 text-[#3352CC] mb-4" />
                <CardTitle className="text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: "Automated DM Responses",
      description: "Respond to specific keywords in DMs automatically.",
      icon: MessageCircle,
    },
    {
      title: "Comment Interaction",
      description: "Like and reply to comments on your posts automatically.",
      icon: Users,
    },
    {
      title: "AI-Driven Messaging",
      description: "Generate intelligent responses with AI technology.",
      icon: Bot,
    },
    {
      title: "Engagement Analytics",
      description: "Track and analyze your Instagram engagement metrics.",
      icon: BarChart,
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-[#3352CC] mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Slide has transformed how I engage with my followers. It's like having a personal assistant for my Instagram!",
      author: "Sarah Johnson",
      role: "Fashion Influencer",
      avatar: "/placeholder.svg",
    },
    {
      quote: "The automated responses have saved me hours each week. I can focus on creating content while Slide handles engagement.",
      author: "Mike Chen",
      role: "Tech Reviewer",
      avatar: "/placeholder.svg",
    },
    {
      quote: "Our brand's Instagram engagement has skyrocketed since we started using Slide. It's a game-changer!",
      author: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-center text-gray-500 mb-12">
          Select the perfect plan to boost your Instagram engagement
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#111111] border border-gray-800 p-8"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline text-white">
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-gray-500 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={index === 0 ? '/sign-up' : '/sign-up'}>
  <Button 
    className="w-full bg-white hover:bg-gray-100 text-black rounded-xl py-6 text-base font-medium"
  >
    {plan.cta}
  </Button>
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-blue-600 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Supercharge Your Instagram Engagement?</h2>
        <p className="text-xl text-blue-100 mb-8">Start your free trial today and see the difference Slide can make.</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-background text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Slide</h3>
            <p className="text-gray-400">Automate your Instagram engagement and grow your audience effortlessly.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-blue-500 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Slide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

