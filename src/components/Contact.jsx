
import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../constants'
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const textVariants ={
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay,
        }

    })
}

const iconVariants ={
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
        }

    })
}

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

  emailjs
  .sendForm(
  "service_nimietech",
  "template_cfam9nm",
  form.current,
  "djhrKvExPRYvAz4dt"
  )
  .then((result) => {
  console.log("Owner email sent:", result);

  // then send auto-reply...
  emailjs
    .sendForm(
      "service_nimietech",
      "template_5booqv7",
      form.current,
      "djhrKvExPRYvAz4dt"
    )
    .then((result2) => {
      console.log("Client auto-reply sent:", result2);
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error("Auto-reply failed:", error?.text || error?.message || JSON.stringify(error));
      setError(true);
    });

})
.catch((error) => {
  console.error("Owner email failed:", error?.text || error?.message || JSON.stringify(error));
  setError(true);
});

};

  return (
    <section className='min-h-screen flex flex-col justify-center px-4 md:px-10' id='contact'>
        <h2 className='text-4xl md:text:6xl font-medium tracking-tight mb-8'>Contact</h2>

        <div className='h-1 w-20 mb-8 bg-white'></div>

        <motion.h3 className='text-6xl md:text-8xl leading-none'
            initial= "hidden"
            whileInView= "visible"
            custom={0.4}
            variants={textVariants}>
                {CONTACT_CONTENT.headline}
        </motion.h3>

        <div className='flex space-x-6 mt-8'>
            {CONTACT_CONTENT.socialLinks.map( (link, i) => {
                const Icon = link.icon === "RiGithubFill" ? RiGithubFill : link.icon === "RiLinkedinFill" ? RiLinkedinFill : null;

                return (
                    Icon && (
                    <motion.a key={link.platform}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.ariaLabel}
                    initial='hidden'
                    whileInView='visible'
                    custom={1.0 + i * 0.2}
                    variants={iconVariants}
                    className=''>
                        <Icon size={36}/>
                    </motion.a> 
                    )
                )
            })}
        </div>

        <div className='max-w-3xl mt-10 rounded-xl shadow-lg p-8'>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" name="user_name" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-black" />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" name="user_email" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 white:bg-gray-700 dark:text-black" />
              </div>
              <div>

                <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="subject">
                    Subject
                </label>
                    <select id="subject" name="subject" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white white:bg-gray-700 dark:text-black"
                    defaultValue="">
                        <option value="" disabled> Select a subject... </option>
                        <option value="general-enquiry">General Enquiry</option>
                        <option value="investor-inquiry">Web Development</option>
                        <option value="business-collaboration">Business Collaboration / RAWBOT Initiatives</option>
                        <option value="service-request">Tech Training / Workshops</option>
                        <option value="partnership-proposal">Partnership Proposal</option>
                        <option value="other">Other</option>
                    </select>

              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 dark:text-white mb-1">Message</label>
                <textarea name="message" rows="5" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 white:bg-gray-700 dark:text-black"></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-amber-950 text-white font-medium text-lg py-2 px-4 rounded-md transition duration-300">
                📩 Contact Me
              </button>
            </form>

            {success && <p className="text-green-600 text-sm mt-4 text-center">✅ Message sent successfully!</p>}
            {error && <p className="text-red-600 text-sm mt-4 text-center">❌ Something went wrong. Please try again later.</p>}
        </div>
        
        <div className='text-center pt-10'>
          {CONTACT_CONTENT.footerText}
        </div>
        
    </section>
  )
}

export default Contact
