import { fadeIn } from 'apps/app/utils/variants'
import { FormEvent, useReducer } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  readonly name?: string
  readonly email?: string
  readonly message?: string
}

export function Contact() {
  const [form, setForm] = useReducer(
    (currForm: FormData, newForm: FormData): FormData => {
      return {
        ...currForm,
        ...newForm,
      }
    },
    {}
  )

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.name == null) {
      alert('Name is required')
      return
    }
    if (form.email == null) {
      alert('Email is required')
      return
    }
    if (form.message == null) {
      alert('Message is required')
      return
    }

    try {
      const url = new URL('https://api.staticforms.xyz/submit')
      const key = '454ae17f-ff9c-48d1-b955-49310bf0821b'
      const res = await fetch(url.href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessKey: key,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (res.status !== 200) {
        throw new Error(await res.text())
      }

      alert("Your response has been recorded! I'll reach out to you soon!")
    } catch (err) {
      console.error(err)
      alert('Could not submit form - please try again later')
    }
  }

  return (
    <div id="contact" className="section">
      <div className="container mx-auto">
        <div className="mb-24">
          <motion.div
            className="mb-6"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5 className="text-sm text-primary">Like what you see?</h5>
            <h1 className="text-3xl font-bold text-primary">
              Let&apos;s Get In Touch
            </h1>
          </motion.div>
          <motion.div
            className="p-8 bg-secondary rounded-xl"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="mb-4 text-primary">
              <h5>Reach out</h5>
              <h1 className="text-3xl font-bold">Contact</h1>
            </div>
            <form className="text-primary" onSubmit={submitForm}>
              <label>Name</label>
              <input
                className="w-full p-2 mt-2 mb-5 rounded-lg text-secondary"
                type="text"
                name="name"
                minLength={1}
                maxLength={256}
                placeholder="What's your name?"
                onChange={(e) => setForm({ name: e.currentTarget.value })}
              />
              <label>Email</label>
              <input
                className="w-full p-2 mt-2 mb-5 rounded-lg text-secondary"
                type="email"
                name="email"
                placeholder="What's your Email"
                onChange={(e) => setForm({ email: e.currentTarget.value })}
              />
              <label>Message</label>
              <textarea
                className="w-full p-2 mt-2 mb-5 rounded-lg text-secondary"
                name="message"
                placeholder="How can I help you?"
                onChange={(e) => setForm({ message: e.currentTarget.value })}
              />
              <button className="border-2 rounded-btn">Submit</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
