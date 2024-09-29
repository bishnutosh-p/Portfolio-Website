import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import ReCAPTCHA from 'react-google-recaptcha'

const EMAIL_JS_KEY = import.meta.env.VITE_EMAILJS_KEY
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_ID
const FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL
const EMAIL_JS_SID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAIL_JS_TID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [captcha, setCaptcha] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleCaptchaChange = (value) => {
    setCaptcha(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!captcha) {
      alert("Please complete the captcha.")
      return
    }

    setLoading(true)

    emailjs.send(
      EMAIL_JS_SID,
      EMAIL_JS_TID,
      {
        from_name: form.name,
        to_name: "Bishnu",
        from_email: form.email,
        to_email: FROM_EMAIL,
        message: form.message,
        'g-recaptcha-response': captcha
      },
      EMAIL_JS_KEY
    )
      .then(() => {
        setLoading(false)
        alert("Thank You! I will get back to you.. :)")
        setForm({
          name: '',
          email: '',
          message: ''
        })
        setCaptcha(null)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        alert("Failed to send mail. Please try again later.")
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get In Touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact Form
        </h3>
        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your Message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <center>
            <ReCAPTCHA
              sitekey= {RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </center>
          
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
