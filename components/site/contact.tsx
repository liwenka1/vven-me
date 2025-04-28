import Link from "next/link";

import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const Contact = () => {
  return (
    <section id="contact">
      <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="text-muted-foreground mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              你可以通过{" "}
              <Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
                twitter
              </Link>{" "}
              联系我
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;
