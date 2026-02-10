import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      
    >
      <Card className="p-6 md:p-8">
        <p className="text-sm text-base-muted md:text-base">{profile.summary}</p>
      </Card>
    </Section>
  );
}
