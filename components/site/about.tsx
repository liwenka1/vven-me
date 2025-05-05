import Markdown from "react-markdown";

import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const About = () => {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="mb-5 text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade
        delay={BLUR_FADE_DELAY * 4}
        className="prose text-muted-foreground dark:prose-invert max-w-full font-sans text-sm text-pretty"
      >
        <Markdown>{DATA.summary}</Markdown>
      </BlurFade>
    </section>
  );
};

export default About;
