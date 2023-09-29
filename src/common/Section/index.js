import { SectionWrapper, SectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionWrapper>
    <SectionHeader>
      <h2>{title}</h2>
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </SectionWrapper>
);

export default Section;
