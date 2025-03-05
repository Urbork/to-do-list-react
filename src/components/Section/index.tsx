import { ReactNode } from "react";
import { SectionWrapper, SectionHeader } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <SectionWrapper>
    <SectionHeader>
      <h2>{title}</h2>
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </SectionWrapper>
);

export default Section;
