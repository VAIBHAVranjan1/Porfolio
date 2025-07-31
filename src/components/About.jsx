import { Briefcase, Code, User, Activity } from 'lucide-react'

const About = () => {
  return (
    <section className='py-32 px-6 md:px-12 lg:px-32 relative' id='about'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-center'>
          About <span className='text-primary font-semibold'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
          {/* Left Side */}
          <div className='space-y-6'>

            {/* Heading Card */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg'>
              <h3 className='text-2xl md:text-3xl font-semibold text-center'>
                Web Developer with MERN and AI Skills
              </h3>
            </div>

            {/* Paragraph 1 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg text-base md:text-lg leading-relaxed'>
              I'm a Computer Science student and I have experience with full-stack web development using the MERN stack. I love building responsive UIs and integrating scalable backend APIs.
            </div>

            {/* Paragraph 2 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg text-base md:text-lg leading-relaxed'>
              I also work with AI and computer vision technologies like MediaPipe, OpenCV, and TensorFlow to build intelligent, interactive web applications. I aim to solve real-world problems through efficient, clean code.
            </div>
            {/* Buttons */}
            <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
              <a href="#contact" className='px-6 py-2 rounded-full bg-primary font-medium hover:bg-primary/80 transition'>
                Get In Touch
              </a>
              <a
                href='/Resume.pdf'
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black hover transition duration-300'
                target='_blank'
                rel='noopener noreferrer'
              >
                View My CV
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className='grid grid-cols-1 gap-6'>
            {/* Card 1 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg transition hover:bg-white/20'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>AI & Web Development</h4>
                  <p className='text-sm text-muted-foreground'>
                    Building intelligent web apps using React, Node.js, and AI tools like TensorFlow & MediaPipe.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg transition hover:bg-white/20'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Team Collaboration</h4>
                  <p className='text-sm text-muted-foreground'>
                    Experience working in project teams, hackathons, and Git-based workflows following agile principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg transition hover:bg-white/20'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>Projects & Problem Solving</h4>
                  <p className='text-sm text-muted-foreground'>
                    Developed real-world apps addressing daily life challenges with user-centric and scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className='bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-lg transition hover:bg-white/20'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Activity className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-lg mb-1'>DSA & Competitive Programming</h4>
                  <p className='text-sm text-muted-foreground'>
                    Solved 300+ problems combined on LeetCode, GFG, and Codeforces — focused on improving algorithmic thinking and coding efficiency.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
