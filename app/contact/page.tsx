"use client"
import { Button } from "@/components/ui/button"
import { instrumentSerif } from "../fonts"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"

const ContactPage = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success("Message submitted successfully")
    e.currentTarget.reset()
  }
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start md:justify-center gap-4 px-4 md:px-8 animate-in fade-in zoom-in duration-500'>
      <div className='text-center space-y-4'>
        <h1
          className={`w-full max-w-3xl text-3xl md:text-5xl font-serif text-foreground ${instrumentSerif.className}`}
        >
          Get in Touch
        </h1>
        <p className='text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto'>
          We&apos;d love to hear from you. Whether you have a question about
          features, trials, pricing, or anything else, our team is ready to
          answer all your questions.
        </p>
      </div>

      <div className='w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 md:mt-8'>
        <div className='flex flex-col gap-4'>
          <div className='p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all flex items-start gap-4'>
            <div className='p-3 bg-primary/10 rounded-full text-primary shrink-0'>
              <Mail className='w-6 h-6' />
            </div>
            <div>
              <h3 className='font-semibold text-lg'>Email Us</h3>
              <p className='text-muted-foreground mt-1'>
                Our friendly team is here to help.
              </p>
              <a
                href='mailto:hello@puter.js'
                className='text-primary font-medium mt-2 inline-block hover:underline transition-all'
              >
                hello@puter.js
              </a>
            </div>
          </div>

          <div className='p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all flex items-start gap-4'>
            <div className='p-3 bg-primary/10 rounded-full text-primary shrink-0'>
              <MapPin className='w-6 h-6' />
            </div>
            <div>
              <h3 className='font-semibold text-lg'>Visit Us</h3>
              <p className='text-muted-foreground mt-1'>
                Come say hello at our office HQ.
              </p>
              <p className='text-foreground font-medium mt-2'>
                100 AI Cloud Blvd, San Francisco, CA
              </p>
            </div>
          </div>

          <div className='p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all flex items-start gap-4'>
            <div className='p-3 bg-primary/10 rounded-full text-primary shrink-0'>
              <Phone className='w-6 h-6' />
            </div>
            <div>
              <h3 className='font-semibold text-lg'>Call Us</h3>
              <p className='text-muted-foreground mt-1'>
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                href='tel:+1234567890'
                className='text-primary font-medium mt-2 inline-block hover:underline transition-all'
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <div className='p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-sm h-full flex flex-col justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='space-y-2'>
                <label
                  htmlFor='first-name'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  First name
                </label>
                <input
                  id='first-name'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors'
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='last-name'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Last name
                </label>
                <input
                  id='last-name'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors'
                  placeholder='Last Name'
                  required
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Email address
              </label>
              <input
                id='email'
                type='email'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors'
                placeholder='you@company.com'
                required
              />
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='message'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                How can we help?
              </label>
              <textarea
                id='message'
                className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none'
                placeholder='Tell us a little about your project or what you need...'
                required
              ></textarea>
            </div>

            <Button
              type='submit'
              className='mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full gap-2'
            >
              Send Message <Send className='w-4 h-4' />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
