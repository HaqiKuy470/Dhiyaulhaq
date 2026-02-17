"use client";

import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./ui/SpotlightCard";
import FadeIn from "./ui/FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-500 font-mono mb-4"
          >
            <FolderGit2 className="w-5 h-5" />
            <span>02. Featured Projects</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Apa yang telah saya <span className="text-blue-500">bangun?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2} fullWidth>
              <SpotlightCard
                key={project.id}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >

                <div className="p-6 md:p-8 h-full flex flex-col">

                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">
                      {project.category}
                    </div>
                    <div className="flex gap-4">
                      <Link href={project.links.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link href={project.links.demo} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}