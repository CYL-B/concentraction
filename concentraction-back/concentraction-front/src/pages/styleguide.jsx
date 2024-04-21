import { useState } from "react";
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

//Input
import Checkbox from "../components/input/checkbox";
import { Input, TextArea } from "../components/input/input";
import { FormTwo } from "../components/input/form";
import InputDatePicker from "../components/input/datePicker";
import { Dropdown, CustomDropdown } from "../components/input/dropdown";
//Page layout
import Layout from "../components/layout/layout";

//Tabs
import Tabs from "../components/tabs";

//Tags and Cards
import Tag from "../components/tags";
import  Card  from "../components/dnd/card";
import ListCard from "../components/dnd/listCard"

export default function Styleguide() {
  const onSubmitExample = (data) => {
    console.log(data)
  }
  return (
    <Layout
      id="Styleguide"
      headerTitle="Styleguide"
      containerClassName="flex"
      pageClassName="grid grid-cols-4 grid-rows-2 gap-2"
    >
      <section className="typography">
        <Heading4 classHeading="underline">Typography</Heading4>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Body>Body</Body>
        <Body body2={true}>Body 2</Body>
        <Fineprint>Fineprint</Fineprint>
      </section>
      <section className="flex flex-wrap gap-5 items-start Buttons and Links">
        <Heading4 classHeading="underline">Buttons and Links</Heading4>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <AddButton>Test</AddButton>
        <AddButton addText={false}></AddButton>
        <Link variant="primary">Link primary</Link>
        <Link variant="secondary">Link secondary</Link>
        <Link variant="fineprint">Link fineprint</Link>
      </section>
      <section className="flex flex-col gap-2 Input">
        <Heading4 classHeading="underline">Inputs</Heading4>
        <FormTwo onSubmit={onSubmitExample}>
          <Checkbox name="Example" checkboxTitle="Example" />
          <Input
            name="example"
            placeholder="Placeholder"
            inputTitle="Input Example"
          ></Input>
          <TextArea
            name="example1"
            placeholder="Textarea"
            textTitle="TextArea"
          ></TextArea>
          <Dropdown
            name="Dropdown"
            options={["Options1", "Option2", "Option3"]}
          ></Dropdown>
            <InputDatePicker></InputDatePicker>
          {/* <CustomDropdown
          headerTitle="Choose an option"
          name="Dropdown 2"
          options={[
            { isSelected: false, name: "Example 1" },
            { isSelected: false, name: "Example 2" },
          ]}
        /> */}
          <button type="submit">Submit</button>
        </FormTwo>
        
      </section>
      <section className="tabs flex flex-col w-fit">
        <Heading4 classHeading="underline">Tabs</Heading4>
        <Tabs
          tabMenuClassName="flex-wrap"
          tabsIds={["Example1", "Example2", "Example3"]}
          getHeader={(tabId) => {
            return tabId;
          }}
          renderContent={(tabId) => {
            return tabId.toUpperCase();
          }}
        />
      </section>
      <section className="cards">
        <Heading4 classHeading="underline">Cards and lists</Heading4>
        <Tag>Example 1</Tag>
        <Card cardId="Example1" cardTitle="Example1" cardDate="29 mai 2024" />
        <Card cardId="Example2" cardTitle="Example2" cardDate="28 mai 2024" />
        <ListCard listTitle="Test" listId="Test"></ListCard>
      </section>
    </Layout>
  );
}
