import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section className="pb-[100px]">
      <div className="container"> 
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-3xl font-semibold text-gray-200">
              Your AI-powered collaboration companion
            </h2>
            <ul className="mt-12 flex flex-col gap-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-6 text-violet-400" />
                  <span className="text-xl font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              className="mt-16"
            >
              Try it now
            </Button>
            <div>
              <Orbit />
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Features;
