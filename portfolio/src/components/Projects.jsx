import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import {
  SiDocker,
  SiFastapi,
  SiHuggingface,
  SiLangchain,
  SiMeta,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiScikitlearn,
} from 'react-icons/si';

const projects = [
  {
    id: 'lead-discovery',
    number: '01',
    title: 'AI Lead Discovery Agent',
    category: 'Agentic AI · Browser automation',
    description: 'An autonomous research agent that finds, qualifies, and structures prospect data.',
    overview:
      'A browser-automation agent built with Playwright and Llama 3.3 70B. It navigates dynamic pages, classifies useful fields, and returns qualified lead data as clean JSON—without repetitive manual research.',
    challenge: 'Lead research across dynamic websites is slow, inconsistent, and difficult to scale.',
    approach:
      'Combined browser automation with an LLM-powered qualification step in a modular pipeline, then shaped the results into a predictable JSON format.',
    outcome: 'Delivered a working proof of concept in 10 days while learning the APIs and browser automation from scratch.',
    features: [
      'Discovers information across dynamic pages with browser automation',
      'Uses an LLM to classify and qualify extracted fields',
      'Returns structured lead records as JSON',
      'Separates discovery, extraction, and qualification into reusable steps',
    ],
    technologies: [
      { name: 'Python', icon: SiPython },
      { name: 'Llama 3.3 70B', icon: SiMeta },
      { name: 'REST APIs', icon: FaCode },
    ],
    github: 'https://github.com/Prasannaram2k4/AI-Lead-Discovery-Agent',
    demo: null,
    visual: 'leads',
    accent: 'violet',
    metric: '10 days',
    metricLabel: 'proof of concept',
  },
  {
    id: 'ragnify',
    number: '02',
    title: 'Ragnify',
    category: 'Generative AI · Retrieval-augmented generation',
    description: 'A local-first document assistant that turns long PDFs into searchable conversations.',
    overview:
      'A context-aware PDF question-answering system built with FastAPI, FAISS, Hugging Face embeddings, and LangChain. A React interface connects to multiple language-model providers, with a Dockerized backend for a repeatable setup.',
    challenge: 'Finding a trustworthy answer inside a long document often means searching and reading it page by page.',
    approach:
      'Built a retrieval-augmented pipeline that chunks documents, indexes embeddings, retrieves relevant context, and passes that context to a selectable language model.',
    outcome: 'Sub-second vector retrieval on large documents, with provider options for OpenAI, Anthropic, and Ollama.',
    features: [
      'Ask natural-language questions about uploaded PDFs',
      'Retrieve relevant passages using FAISS vector search',
      'Choose between OpenAI, Anthropic, and Ollama providers',
      'Run the backend in a Dockerized environment',
    ],
    technologies: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React', icon: SiReact },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Docker', icon: SiDocker },
    ],
    github: 'https://github.com/Prasannaram2k4/ragnify',
    demo: 'https://ragnify-gamma.vercel.app',
    visual: 'ragnify',
    accent: 'blue',
    metric: '< 1 sec',
    metricLabel: 'vector retrieval',
  },
  {
    id: 'insightify',
    number: '03',
    title: 'Insightify',
    category: 'AI · Career intelligence',
    description: 'Resume-to-role analysis with actionable ATS gaps and interview preparation.',
    overview:
      'An AI-powered resume and job-description analyzer. TF-IDF similarity scoring and NLP keyword extraction surface a match score and missing skills; transformer-powered prompts help candidates prepare for interviews.',
    challenge: 'Candidates need more than a match percentage—they need to understand what to improve and what to prepare.',
    approach:
      'Built a FastAPI and React application that compares resume and job-description text, highlights keyword gaps, and generates interview questions with selectable models.',
    outcome: 'Turns a resume and job description into a clear match score, gap analysis, and practical next steps.',
    features: [
      'Score resume-to-role similarity with TF-IDF and cosine similarity',
      'Extract keywords and identify ATS gaps',
      'Generate tailored interview questions',
      'Optionally save analysis history to MongoDB',
      'Run a containerized FastAPI backend with GitHub Actions CI/CD',
    ],
    technologies: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React', icon: SiReact },
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    github: 'https://github.com/Prasannaram2k4/Insightify',
    demo: 'https://insightify-nu.vercel.app',
    visual: 'insightify',
    accent: 'orange',
    metric: 'ATS',
    metricLabel: 'gap analysis',
  },
  {
    id: 'marketpulse',
    number: '04',
    title: 'MarketPulse',
    category: 'Full stack · Financial analytics',
    description: 'A market and portfolio dashboard for following financial data at a glance.',
    overview:
      'A full-stack finance platform with React and Recharts visualizations, portfolio tracking, and a Node.js and Express API. JWT authentication protects user access, while MongoDB indexing keeps common queries fast.',
    challenge: 'Market data and portfolio activity are easier to act on when they are visible together in one responsive dashboard.',
    approach:
      'Built a React dashboard backed by REST APIs, then improved data access with targeted MongoDB indexes and added JWT-based authentication.',
    outcome: 'Optimized MongoDB indexes improved query speed by more than 40%.',
    features: [
      'Visualize market activity and track a portfolio',
      'Secure account access with JWT authentication',
      'Connect a React interface to RESTful backend APIs',
      'Improve query performance with MongoDB indexing',
    ],
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'React', icon: SiReact },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    github: 'https://github.com/Prasannaram2k4/MarketPulse',
    demo: 'https://marketpulse-vercel-eight.vercel.app',
    visual: 'marketpulse',
    accent: 'green',
    metric: '40%+',
    metricLabel: 'faster queries',
  },
];

const ProjectPreview = ({ project }) => (
  <div className={`project-preview project-preview--${project.visual}`} aria-hidden="true">
    <div className="project-preview__window">
      <div className="project-preview__toolbar">
        <span className="project-preview__dots"><i /><i /><i /></span>
        <span className="project-preview__address">{project.title}</span>
        <span className="project-preview__window-mark">↗</span>
      </div>
      <div className="project-preview__content">
        {project.visual === 'leads' && (
          <>
            <div className="preview-heading"><span>Prospect intelligence</span><b>● Agent online</b></div>
            <div className="preview-search">⌕ &nbsp; SaaS companies · United States</div>
            {['Northstar Systems', 'Orbit Analytics', 'Cedar Labs'].map((name, index) => (
              <div className="preview-lead" key={name}>
                <span className="preview-avatar">{name.charAt(0)}</span>
                <span className="preview-lead__name">{name}<small>{['Technology', 'Data & AI', 'Developer tools'][index]}</small></span>
                <span className="preview-score">{[96, 89, 84][index]}%</span>
              </div>
            ))}
          </>
        )}
        {project.visual === 'ragnify' && (
          <>
            <div className="preview-heading"><span>Document workspace</span><b>PDF indexed</b></div>
            <div className="preview-document"><span>▤</span><span>Research-notes.pdf<small>42 pages · Indexed just now</small></span></div>
            <div className="preview-chat preview-chat--user">What are the key findings?</div>
            <div className="preview-chat preview-chat--answer">The report highlights three key findings from the latest analysis…<small>Sources · pages 08, 14, 27</small></div>
          </>
        )}
        {project.visual === 'insightify' && (
          <>
            <div className="preview-heading"><span>Role match report</span><b>Analysis complete</b></div>
            <div className="preview-score-panel"><div className="preview-ring"><span>86<small>%</small></span></div><span>Strong match<small>Senior software engineer</small></span></div>
            <div className="preview-progress"><span>Relevant experience</span><i><b style={{ width: '88%' }} /></i></div>
            <div className="preview-progress"><span>Role keywords</span><i><b style={{ width: '66%' }} /></i></div>
            <div className="preview-gap">＋ &nbsp; 3 skills to highlight</div>
          </>
        )}
        {project.visual === 'marketpulse' && (
          <>
            <div className="preview-heading"><span>Portfolio overview</span><b>Market open</b></div>
            <div className="preview-value">$24,680.50 <small>↗ 8.24% this month</small></div>
            <svg className="preview-chart" viewBox="0 0 360 90" preserveAspectRatio="none">
              <defs><linearGradient id={`market-fill-${project.id}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity=".25" /><stop offset="100%" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
              <path d="M0 72 C22 64 26 71 44 56 S74 62 91 44 S122 53 144 37 S177 48 197 28 S224 38 244 25 S269 40 289 17 S328 28 360 6 V90 H0Z" fill={`url(#market-fill-${project.id})`} />
              <path d="M0 72 C22 64 26 71 44 56 S74 62 91 44 S122 53 144 37 S177 48 197 28 S224 38 244 25 S269 40 289 17 S328 28 360 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <div className="preview-market-footer"><span>Portfolio performance</span><span>1D &nbsp; 1W &nbsp; <b>1M</b> &nbsp; 1Y</span></div>
          </>
        )}
      </div>
    </div>
    <span className="project-preview__index">{project.number} / SELECTED WORK</span>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding project-showcase relative overflow-hidden bg-gray-50 dark:bg-[#08090b] transition-colors duration-300">
      <div className="project-showcase__glow" aria-hidden="true" />
      <div className="container relative z-10 mx-auto">
        <motion.header
          className="project-showcase__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="project-eyebrow">A FEW THINGS I’VE BUILT</p>
          <h2 className="text-gray-900 dark:text-white">Ideas, meet execution.</h2>
          <p className="project-showcase__intro">
            A closer look at the products, experiments, and engineering decisions behind my work.
          </p>
          <div className="project-showcase__count"><span>04</span> PROJECTS <i /> AI · FULL STACK · DATA</div>
        </motion.header>

        <div className="project-showcase__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card project-card--${project.accent}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: 'easeOut' }}
            >
              <button
                type="button"
                className="project-card__preview-button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title} case study`}
              >
                <ProjectPreview project={project} />
              </button>
              <div className="project-card__body">
                <div className="project-card__meta"><span>{project.category}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                <div className="project-card__tech" aria-label="Technologies">
                  {project.technologies.slice(0, 4).map(({ name, icon: Icon }) => (
                    <span className="project-tech" key={name} title={name}>
                      <Icon aria-hidden="true" /><span>{name}</span>
                    </span>
                  ))}
                  {project.technologies.length > 4 && <span className="project-tech__more">+{project.technologies.length - 4}</span>}
                </div>
                <div className="project-card__actions">
                  <button type="button" className="project-details-link" onClick={() => setSelectedProject(project)}>
                    Case study <FaArrowRight aria-hidden="true" />
                  </button>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-demo-link">
                      Live demo <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.section
              className={`project-modal__panel project-card--${selectedProject.accent}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="project-modal__top">
                <div><p className="project-eyebrow">{selectedProject.category}</p><span>CASE STUDY &nbsp; / &nbsp; {selectedProject.number}</span></div>
                <button type="button" className="project-modal__close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><FaTimes /></button>
              </div>
              <div className="project-modal__content">
                <ProjectPreview project={selectedProject} />
                <h3 id="project-modal-title">{selectedProject.title}</h3>
                <p className="project-modal__lead">{selectedProject.overview}</p>
                <div className="project-modal__metrics">
                  <span><strong>{selectedProject.metric}</strong>{selectedProject.metricLabel}</span>
                  <span><strong>{selectedProject.technologies.length}</strong>core technologies</span>
                  <span><strong>{selectedProject.demo ? 'Live' : 'Open source'}</strong>{selectedProject.demo ? 'try the project' : 'explore the code'}</span>
                </div>
                <div className="project-modal__story">
                  <div><h4>The challenge</h4><p>{selectedProject.challenge}</p></div>
                  <div><h4>What I built</h4><p>{selectedProject.approach}</p></div>
                  <div><h4>The outcome</h4><p>{selectedProject.outcome}</p></div>
                </div>
                <div className="project-modal__features">
                  <h4>Highlights</h4>
                  <ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>
                <div className="project-modal__stack">
                  <h4>Built with</h4>
                  <div>{selectedProject.technologies.map(({ name, icon: Icon }) => (
                    <span className="project-stack-item" key={name}><Icon aria-hidden="true" />{name}</span>
                  ))}</div>
                </div>
                <div className="project-modal__actions">
                  {selectedProject.demo && (
                    <a className="project-action project-action--primary" href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt aria-hidden="true" /> Open live demo
                    </a>
                  )}
                  <a className="project-action project-action--secondary" href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" /> View source code
                  </a>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
