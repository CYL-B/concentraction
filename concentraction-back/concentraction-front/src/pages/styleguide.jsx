import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body,
  Fineprint,
} from "../components/typography";

import { Button } from "../components/button";

import Layout from "../components/layout";

export default function Styleguide() {
  return (
    <>
      <div id="Styleguide">
        <Layout headerTitle="Styleguide" containerClassName="flex" mainClassName="flex">
          <section className="typography">
            <Heading1>Heading 1</Heading1>
            <Heading2>Heading 2</Heading2>
            <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Body>Body</Body>
            <Body body2={true}>Body 2</Body>
            <Fineprint>Fineprint</Fineprint>
          </section>
          <section className="Buttons and Links">
            <Button variant="primary" label="Primary"></Button>
            <Button variant="secondary" label="Secondary"></Button>
          </section>
        </Layout>
      </div>
    </>
  );
}
