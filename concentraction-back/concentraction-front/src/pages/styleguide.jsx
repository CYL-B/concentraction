import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body,
  Fineprint,
} from "../components/typography";

import { Button, AddButton } from "../components/button";

import Layout from "../components/layout";

export default function Styleguide() {
  return (
    <>
        <Layout id="Styleguide" headerTitle="Styleguide" containerClassName="flex" 
        mainClassName="grid grid-cols-4 grid-rows-2 gap-2"
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
            <Button variant="primary" label="Primary"/>
            <Button variant="secondary" label="Secondary"/>
            <AddButton>Test</AddButton>
            <AddButton addText={false}></AddButton>
          </section>
        </Layout>
    </>
  );
}
