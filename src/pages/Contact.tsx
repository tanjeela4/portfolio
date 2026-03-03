import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div id='reach-out' className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Have a question or want to work together? Drop me a message!
      </p>
      <form className="w-full max-w-md space-y-4 mt-8">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded bg-background" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded bg-background" />
        <textarea placeholder="Message" className="w-full p-2 border rounded bg-background h-32"></textarea>
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  )
}
