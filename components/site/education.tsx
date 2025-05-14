import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { ResumeCard } from "../resume-card";
import { GraduationCap } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Education = () => {
  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div
        className="bg-accent/5 absolute top-10 -left-20 h-[200px] w-[200px] rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="bg-accent/10 mr-3 flex size-10 items-center justify-center rounded-full">
              <GraduationCap className="text-accent size-5" aria-hidden="true" />
            </div>
            <h2 className="my-0 flex items-center text-2xl font-bold tracking-tight sm:text-3xl">教育经历</h2>
          </div>
        </BlurFade>

        {/* 内容部分 */}
        <div className="space-y-4">
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
