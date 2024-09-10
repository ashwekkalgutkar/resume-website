// "use client"

// import { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'
// import { motion, useAnimation } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Badge } from "@/components/ui/badge"
// //import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
// import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { z } from 'zod'

// const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Extra-Curricular', 'Contact']

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters long"),
//   email: z.string().email("Invalid email address"),
//   message: z.string().min(10, "Message must be at least 10 characters long")
// })

// export default function ResumePage() {
//   const [activeSection, setActiveSection] = useState('About')
//   const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
//   const [formErrors, setFormErrors] = useState({})
//   const sectionRefs = useRef(sections.map(() => React.createRef()))
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start(i => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 }
//     }))
//   }, [controls])

//   const scrollToSection = (section) => {
//     const index = sections.indexOf(section)
//     sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth' })
//     setActiveSection(section)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setContactForm(prev => ({ ...prev, [name]: value }))
//     try {
//       contactSchema.shape[name].parse(value)
//       setFormErrors(prev => ({ ...prev, [name]: undefined }))
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         setFormErrors(prev => ({ ...prev, [name]: error.errors[0].message }))
//       }
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     try {
//       contactSchema.parse(contactForm)
//       toast.success("Message sent successfully!")
//       setContactForm({ name: '', email: '', message: '' })
//       setFormErrors({})
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         setFormErrors(error.flatten().fieldErrors)
//       }
//     }
//   }

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
//       <ToastContainer />
      
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
//         <div className="mb-8 text-center">
//           <Image
//             src="/placeholder.svg?height=120&width=120"
//             alt="Ashwek Kalgutkar"
//             width={120}
//             height={120}
//             className="rounded-full mx-auto mb-4 border-4 border-yellow-400"
//           />
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ashwek Kalgutkar</h1>
//           <p className="text-yellow-600 dark:text-yellow-400">Full Stack Developer</p>
//           <div className="mt-4 flex justify-center space-x-4">
//             <a href="https://github.com/ashwekkalgutkar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
//               <GitHubIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
//             </a>
//             <a href="https://in/ashwek-kalgutkar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
//               <LinkedInIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
//             </a>
//             <a href="mailto:kalgutkarashwek@gmail.com" className="transition-transform hover:scale-110">
//               <MailIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
//             </a>
//             <a href="tel:+919006772560" className="transition-transform hover:scale-110">
//               <PhoneIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
//             </a>
//           </div>
//         </div>
//         <nav>
//           <ul className="space-y-2">
//             {sections.map((section) => (
//               <li key={section}>
//                 <Button
//                   variant={activeSection === section ? "default" : "ghost"}
//                   className="w-full justify-start transition-all duration-300 hover:translate-x-2"
//                   onClick={() => scrollToSection(section)}
//                 >
//                   {section}
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-auto">
//         <ScrollArea className="h-full">
//           {sections.map((section, index) => (
//             <motion.section
//               key={section}
//               ref={sectionRefs.current[index]}
//               initial={{ opacity: 0, y: 20 }}
//               animate={controls}
//               custom={index}
//               className="mb-12"
//             >
//               <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{section}</h2>
//               <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
//                 <CardContent className="p-6">
//                   {section === 'About' && (
//                     <motion.p 
//                       className="text-gray-700 dark:text-gray-300"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       Creative Full Stack Developer with a passion for building dynamic eCommerce solutions. Skilled in crafting RESTful APIs and CRUD operations with Node.js, Express, and MongoDB. Expert in integrating backend and frontend using React, Tailwind CSS, and Material-UI to create engaging, responsive UIs. Thrives in agile environments, committed to delivering high-impact digital experiences.
//                     </motion.p>
//                   )}
//                   {section === 'Experience' && (
//                     <Tabs defaultValue="job1" className="w-full">
//                       <TabsList className="mb-4">
//                         <TabsTrigger value="job1" className="transition-all duration-300 hover:bg-yellow-400 hover:text-black">.Net Full Stack Developer</TabsTrigger>
//                       </TabsList>
//                       <TabsContent value="job1">
//                         <CardHeader>
//                           <CardTitle>.Net Full Stack Developer at Xiphias Software Technology</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-gray-700 dark:text-gray-300 mb-2">Mar 2022 - Jul 2022 | Bangalore Karnataka, IN</p>
//                           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
//                             <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
//                               Designed and developed dynamic webpages, including a CRM and CMS, using .NET MVC, MySQL, and jQuery.
//                             </motion.li>
//                             <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
//                               Implemented a CMS to streamline CRUD operations and enable real-time updates without hardcoding.
//                             </motion.li>
//                             <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
//                               Transitioned the company website to dynamic, enhancing functionality and user engagement.
//                             </motion.li>
//                             <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
//                               Utilized Azure for deployment and integrated email-based authentication for secure login and signup.
//                             </motion.li>
//                           </ul>
//                         </CardContent>
//                       </TabsContent>
//                     </Tabs>
//                   )}
//                   {section === 'Education' && (
//                     <div className="space-y-4">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Master of Science in Computer Science</h3>
//                         <p className="text-gray-700 dark:text-gray-300">Mangalore University, 2019 - 2021</p>
//                       </motion.div>
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Bachelor of Science in Computer Science, Physics, Mathematics</h3>
//                         <p className="text-gray-700 dark:text-gray-300">Dharwad University, 2016 - 2019</p>
//                       </motion.div>
//                     </div>
//                   )}
//                   {section === 'Projects' && (
//                     <div className="space-y-6">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sugar Cosmetics Clone</h3>
//                         <p className="text-gray-700 dark:text-gray-300 mb-2">A collaborative project replicating the Sugar Cosmetics website. My contributions were:</p>
//                         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                           <li>Developed the homepage using ChakraUI, ensuring a responsive design and adherence to brand aesthetics.</li>
//                           <li>Integrated API for real-time data fetching, enabling dynamic content updates and enhancing the UI.</li>
//                         </ul>
//                       </motion.div>
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Timezone Wrap</h3>
//                         <p className="text-gray-700 dark:text-gray-300 mb-2">A tool for timezone management and conversion. Key features include:</p>
//                         <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                           <li>Used Moment.js and Moment Timezone.js for precise timezone calculations and conversions.</li>
//                           <li>Utilized React Beautiful DND for drag-and-drop functionality, enhancing the user experience with timezone organization.</li>
//                         </ul>
//                       </motion.div>
//                     </div>
//                   )}
//                   {section === 'Skills' && (
//                     <div className="space-y-4">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//                         <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technical Skills</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {["Java", "JavaScript", "HTML", "TailwindCSS", "MongoDB", "MUI", "Git"].map((skill, index) => (
//                             <Badge key={index} variant="secondary" className="transition-all duration-300 hover:bg-yellow-400 hover:text-black">{skill}</Badge>
//                           ))}
//                         </div>
//                       </motion.div>
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//                         <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Soft Skills</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {["Resilience", "Adaptive Thinking", "Proactive Learning"].map((skill, index) => (
//                             <Badge key={index} variant="secondary" className="transition-all duration-300 hover:bg-yellow-400 hover:text-black">{skill}</Badge>
//                           ))}
//                         </div>
//                       </motion.div>
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
//                         <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Frameworks</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {["React", "Next.js", "Node.js", "Express"].map((skill, index) => (
//                             <Badge key={index} variant="secondary" className="transition-all duration-300 hover:bg-yellow-400 hover:text-black">{skill}</Badge>
//                           ))}
//                         </div>
//                       </motion.div>
//                     </div>
//                   )}
//                   {section === 'Extra-Curricular' && (
//                     <div className="space-y-4">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Zoom Marathon Challenge</h3>
//                         <p className="text-gray-700 dark:text-gray-300">Participated in a 5-month Zoom marathon challenge at Masai School, consistently uploading daily videos discussing both tech and non-tech topics. Demonstrated commitment to regular content creation and public speaking.</p>
//                       </motion.div>
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Full Stack Web Development</h3>
//                         <p className="text-gray-700 dark:text-gray-300">Completed a comprehensive program at Masai School, building dynamic web applications with React, Node.js, and Express, while mastering data structures and algorithms.</p>
//                       </motion.div>
//                     </div>
//                   )}
//                   {section === 'Contact' && (
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <Label htmlFor="name">Name</Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           value={contactForm.name}
//                           onChange={handleInputChange}
//                           className={formErrors.name ? "border-red-500" : ""}
//                         />
//                         {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
//                       </div>
//                       <div>
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={contactForm.email}
//                           onChange={handleInputChange}
//                           className={formErrors.email ? "border-red-500" : ""}
//                         />
//                         {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
//                       </div>
//                       <div>
//                         <Label htmlFor="message">Message</Label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           value={contactForm.message}
//                           onChange={handleInputChange}
//                           className={formErrors.message ? "border-red-500" : ""}
//                         />
//                         {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
//                       </div>
//                       <Button type="submit" className="w-full transition-all duration-300 hover:bg-yellow-400 hover:text-black">Send Message</Button>
//                     </form>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.section>
//           ))}
//         </ScrollArea>
//       </main>
//     </div>
//   )
// }

"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'

const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Extra-Curricular', 'Contact']

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
})

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('About')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const sectionRefs = useRef(sections.map(() => React.createRef()))
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  const scrollToSection = (section) => {
    const index = sections.indexOf(section)
    sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(section)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
    try {
      contactSchema.shape[name].parse(value)
      setFormErrors(prev => ({ ...prev, [name]: undefined }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(prev => ({ ...prev, [name]: error.errors[0].message }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      contactSchema.parse(contactForm)
      toast.success("Message sent successfully!")
      setContactForm({ name: '', email: '', message: '' })
      setFormErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.flatten().fieldErrors)
      }
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <ToastContainer />
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
        <div className="mb-8 text-center">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Ashwek Kalgutkar"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-yellow-400"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ashwek Kalgutkar</h1>
          <p className="text-yellow-600 dark:text-yellow-400">Full Stack Developer</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/ashwekkalgutkar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <GitHubIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
            </a>
            <a href="https://in/ashwek-kalgutkar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <LinkedInIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
            </a>
            <a href="mailto:kalgutkarashwek@gmail.com" className="transition-transform hover:scale-110">
              <MailIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
            </a>
            <a href="tel:+919006772560" className="transition-transform hover:scale-110">
              <PhoneIcon className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400" width={24} height={24} />
            </a>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <Button
                  variant={activeSection === section ? "default" : "ghost"}
                  className="w-full justify-start transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <ScrollArea className="h-full">
          <Tabs defaultValue="About" className="space-y-4">
            <TabsList>
              {sections.map((section) => (
                <TabsTrigger key={section} value={section} onClick={() => scrollToSection(section)}>{section}</TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section, index) => (
              <TabsContent key={section} value={section}>
                <motion.div
                  className="my-4"
                  animate={controls}
                  initial={{ opacity: 0, y: 20 }}
                  custom={index}
                >
                  <div ref={sectionRefs.current[index]}>
                    {/* Add your section content here */}
                    <h2 className="text-2xl font-bold">{section}</h2>
                    {/* Placeholder for section content */}
                    {section === 'Contact' && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Contact Form</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={contactForm.name}
                                  onChange={handleInputChange}
                                  placeholder="Your Name"
                                />
                                {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
                              </div>
                              <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  value={contactForm.email}
                                  onChange={handleInputChange}
                                  placeholder="Your Email"
                                />
                                {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
                              </div>
                              <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  value={contactForm.message}
                                  onChange={handleInputChange}
                                  placeholder="Your Message"
                                />
                                {formErrors.message && <p className="text-red-600">{formErrors.message}</p>}
                              </div>
                              <Button type="submit">Send Message</Button>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollArea>
      </main>
    </div>
  )
}
