//Typography section
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body,
  Fineprint,
} from "../components/typography";

//Buttons and links section
import { Button, AddButton } from "../components/button";
import { Link } from "../components/links";

//Page layout
import Layout from "../components/layout";

export default function Styleguide() {
  return (
    <>
        <Layout id="Styleguide" headerTitle="Styleguide" containerClassName="flex" 
        pageClassName="grid grid-cols-4 grid-rows-2 gap-2"
        >
          <section className="typography">
            <Heading1>Heading 1</Heading1>
            <Heading2>Heading 2</Heading2>
            <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Body>Body</Body>
            <Body body2={true}>Body 2</Body>
            <Fineprint>Fineprint</Fineprint>
          </section>
          <section className="flex flex-wrap gap-5 items-start Buttons and Links">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <AddButton>Test</AddButton>
            <AddButton addText={false}></AddButton>
            <Link variant="primary">Link primary</Link>
            <Link variant="secondary">Link secondary</Link>
            <Link variant="fineprint">Link fineprint</Link>
          </section>
        </Layout>
    </>
  );
}
