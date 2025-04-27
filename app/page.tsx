import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { CursorFollower } from "@/components/cursor-follower";
import { SectionWrapper } from "@/components/section-wrapper";
import { ParticleBackground } from "@/components/particle-background";
import { AnimatedCard } from "@/components/animated-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CursorFollower />
      <ParticleBackground />

      {/* Navigation */}
      <header className="fixed w-full z-10 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-xl font-bold group">
            <span className="text-purple-500 inline-block transition-transform group-hover:scale-110 duration-300">
              Dev
            </span>
            <span className="inline-block transition-transform group-hover:scale-110 duration-300 delay-75">
              Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#projects"
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#skills"
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500/10 relative overflow-hidden group"
            asChild
          >
            <a href="/CV.pdf" download>
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container px-4 mx-auto min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-purple-500 font-medium mb-2 opacity-0 animate-[fadeIn_0.5s_0.1s_forwards]">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <AnimatedText
                text="MERAH ALAEDDINE"
                className="text-white"
                once
              />
            </h1>
            <h2 className="text-1xl md:text-5xl font-bold text-zinc-400 mb-6">
              <AnimatedText
                text="Full-Stack Developer | AI Enthusiast | Builder of Scalable Systems"
                className="text-zinc-400"
                once
              />
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md opacity-0 animate-[fadeIn_0.5s_0.6s_forwards]">
              I craft web, mobile, and AI-driven applications that don't just
              work — they scale. Whether it's real-time chat systems, e-commerce
              platforms, or computer vision projects, I combine strong
              engineering practices with a user-first approach.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-md flex items-center gap-2 group relative overflow-hidden opacity-0 animate-[fadeIn_0.5s_0.8s_forwards]">
              <span className="relative z-10">View My Work</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-purple-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </div>
          <div className="relative opacity-0 animate-[fadeIn_0.5s_0.4s_forwards]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-zinc-900 p-6 rounded-lg border border-zinc-800 transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <pre className="text-sm text-zinc-300 font-mono">
                <code>{`const developer = {
  name: 'MERAH ALAEDDINE',
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js',...],
  loves: ['Clean code', 'Problem solving', 'Learning'],
  currentlyLearning: 'learning to become a dev ops engineer',
};

// Let's build something amazing together!`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about" className="py-20 bg-zinc-950">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="text-purple-500">01.</span> About Me
            <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText
                text="I'm a full-stack developer with a passion for building applications that are fast, scalable, and user-friendly. Over the past few years, I’ve worked across diverse tech stacks — from MERN and FastAPI to Flutter and Dockerized deployments."
                className="text-zinc-400 mb-4"
                once
              />
              <AnimatedText
                text="Beyond web and mobile development, I'm deeply interested in AI/ML, especially using computer vision to solve real-world problems."
                className="text-zinc-400 mb-4"
                once
              />
              <AnimatedText
                text="I enjoy designing backend architectures that handle real-time data (like WebSocket chats) just as much as creating polished frontends that feel intuitive to users."
                className="text-zinc-400  mb-4"
                once
              />
              <AnimatedText
                text="Monitoring, scalability, and clean code are things I obsess over, whether I'm shipping a feature or deploying a full system."
                className="text-zinc-400  mb-4"
                once
              />
              <AnimatedText
                text="When I'm not coding, you'll find me experimenting with new technologies, improving existing apps, or optimizing infrastructure with tools like Prometheus and Grafana."
                className="text-zinc-400  mb-4"
                once
              />
              <AnimatedText
                text="I'm excited about building systems that are both innovative and impactful — and always looking forward to the next challenge."
                className="text-zinc-400"
                once
              />
            </div>
            <div className="relative group perspective">
              <div className="absolute -inset-1.5 bg-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-purple-500/50 transform transition-all duration-500 group-hover:rotate-y-12">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="text-purple-500">02.</span> My Projects
            <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
          </h2>

          <div className="grid gap-12">
            {/* Project 1 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  Soket-IO-Real-Time-Chat-Application
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    We Message is a Full Stack Chatting App. Uses Socket.io for
                    real time communication and stores user details in encrypted
                    format in Mongo DB Database.
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {["NodeJs/Express", "React", "MongoDB", "Socket.IO"].map(
                    (tech, index) => (
                      <AnimatedCard
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                        delay={index * 0.1}
                      >
                        {tech}
                      </AnimatedCard>
                    )
                  )}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/Soket-IO-Real-Time-Chat-Application"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/Soket-IO-Real-Time-Chat-Application"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/ChatApp.png"
                    alt="Soket-IO-Real-Time-Chat-Application"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/ecommerce.png"
                    alt="MERN E-commerce Website with Braintree Payments & Chat Feature"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  MERN E-commerce Website with Braintree Payments & Chat Feature
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    This is a full-stack e-commerce application built using the
                    MERN stack (MongoDB, Express.js, React, and Node.js) with
                    Braintree payment integration and a chat feature powered by
                    a Python-based server. The project combines MongoDB and
                    PostgreSQL databases to handle different parts of the
                    application, leveraging the strength of each technology for
                    optimal performance and scalability.
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    "Python",
                    "Fast API",
                    "Node.js",
                    "Express",
                    "React / Chakra Ui",
                    "MongoDB",
                    "PostgreSQL",
                  ].map((tech, index) => (
                    <AnimatedCard
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                      delay={index * 0.1}
                    >
                      {tech}
                    </AnimatedCard>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/mern-ecommerce"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/mern-ecommerce"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  StudyMate - Educational Platform
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    StudyMate is an educational platform where users can
                    register as either students or teachers. The platform
                    facilitates content sharing, learning, and interaction
                    between students and teachers through video lessons,
                    playlists, subscriptions, and performance tracking.
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    "NodeJs/Express",
                    "MongoDB",
                    "Socket.IO",
                    "Strip",
                    "Flutter",
                  ].map((tech, index) => (
                    <AnimatedCard
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                      delay={index * 0.1}
                    >
                      {tech}
                    </AnimatedCard>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/StudyMate"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/StudyMate"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/studyMate.png"
                    alt="StudyMate - Educational Platform"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/finance.png"
                    alt="finance"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  Personal Finance Tracker
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    A full-stack web application for managing personal finances,
                    tracking expenses, and monitoring budgets. Built with the
                    MERN stack (MongoDB, Express.js, React, Node.js).
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    "NodeJs/Express",
                    "React",
                    "MongoDB",
                    "Shadcn UI",
                    "Tailwind CSS",
                  ].map((tech, index) => (
                    <AnimatedCard
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                      delay={index * 0.1}
                    >
                      {tech}
                    </AnimatedCard>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/Personal-Finance"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/Personal-Finance"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  Algorithmic Exploration NextJS Application
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    A comprehensive NextJS application showcasing multiple
                    advanced computational algorithms across various
                    problem-solving paradigms.
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {["NextJs", "TypeScript", "Shadcn UI", "Tailwind CSS"].map(
                    (tech, index) => (
                      <AnimatedCard
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                        delay={index * 0.1}
                      >
                        {tech}
                      </AnimatedCard>
                    )
                  )}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/the-algorithmes-matser"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/the-algorithmes-matser"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/algorithmeMaster.svg"
                    alt="Algorithmic Exploration NextJS Application"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg z-0 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/images/devfolio.png"
                    alt="DevFolio - Portfolio Builder for Developers"
                    className="rounded-lg w-full h-auto relative z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-purple-500 mb-4">
                  DevFolio - Portfolio Builder for Developers
                </h4>
                <AnimatedCard className="bg-zinc-900 p-6 rounded-lg shadow-xl mb-4 relative z-10 border border-zinc-800">
                  <p className="text-zinc-400">
                    A modern, customizable portfolio platform built specifically
                    for developers to showcase their work, skills, and
                    professional journey.
                  </p>
                </AnimatedCard>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    "NextJs",
                    "TypeScript",
                    "NextAuth",
                    "MongoDB",
                    "Shadcn UI",
                    "Tailwind CSS",
                  ].map((tech, index) => (
                    <AnimatedCard
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800"
                      delay={index * 0.1}
                    >
                      {tech}
                    </AnimatedCard>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DrLivesey-Shura/developer-portfolio-platform"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/DrLivesey-Shura/developer-portfolio-platform"
                    className="text-white hover:text-purple-500 transition-colors transform hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" className="py-20 bg-zinc-950">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="text-purple-500">03.</span> My Skills
            <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                skills: [
                  "JavaScript / TypeScript",
                  "React / Next.js",
                  "Angular",
                  "Tailwind CSS / Bootstrap / shadcn",
                ],
              },
              {
                title: "Mobile",
                skills: [
                  "Flutter",
                  "React Native",
                  "Dart",
                  "Android Development",
                  "REST APIs",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Python",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "FastAPI",
                  "Flask",
                  "Redis",
                  "GraphQL",
                  "Socket.IO",
                  "WebSocket",
                ],
              },
              {
                title: "Tools",
                skills: ["Git / GitHub", "Docker", "Postman"],
              },
              {
                title: "Other",
                skills: [
                  "CI/CD",
                  "Testing (Jest)",
                  "Responsive Design",
                  "SEO Optimization",
                ],
              },
            ].map((category, categoryIndex) => (
              <AnimatedCard
                key={category.title}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-purple-500 transition-colors group"
                delay={categoryIndex * 0.15}
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 opacity-0 animate-[fadeIn_0.3s_forwards]"
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.15 + skillIndex * 0.1 + 0.3
                        }s`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 justify-center">
            <span className="text-purple-500">04.</span> Get In Touch
          </h2>
          <AnimatedText
            text="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            className="text-zinc-400 mb-8 text-center"
            once
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md relative overflow-hidden group">
            <span className="relative z-10">Say Hello</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute -inset-px bg-gradient-to-r from-purple-400 to-blue-500 rounded-md opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 group-hover:duration-200"></span>
          </Button>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Github, href: "https://github.com/DrLivesey-Shura" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/merah-alaeddine-599b72263/",
              },
              { icon: Mail, href: "merahalaeddine02@gmail.com" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="text-zinc-400 hover:text-purple-500 transition-colors relative group"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                  <span className="absolute -inset-2 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-6 bg-zinc-950 border-t border-zinc-900">
        <div className="container px-4 mx-auto text-center">
          <p className="text-zinc-500 text-sm">
            Designed & Built by Merah Alaeddine © {new Date().getFullYear()}
          </p>
          <div className="mt-2 text-zinc-600 text-xs animate-pulse">
            Crafted with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
