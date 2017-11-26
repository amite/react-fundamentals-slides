// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  basicLayout: require("../assets/basic-layout.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
}

preloader(images)

const theme = createTheme(
  {
    primary: "white",
    secondary: "#3C45C1",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["fade"]}
          bgImage="https://source.unsplash.com/jzU3TbR0U6A/1200x900"
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Welcome to React Redux Workshop
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A 4 day journey to mastering React
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage="https://source.unsplash.com/anhQGEYbnV4/1200x900"
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What to Expect
          </Heading>
          <List textColor="tertiary">
            <Appear>
              <ListItem>A lot of code</ListItem>
            </Appear>
            <Appear>
              <ListItem>Hands On Challenges</ListItem>
            </Appear>
            <Appear>
              <ListItem>Good Conversations</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage="https://source.unsplash.com/IClZBVw5W5A/1200x900"
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What are we building?
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage="https://source.unsplash.com/y8CtjK0ej6A/1200x900"
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Ready to get started?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Git clone amite/wallaby
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module One - Basic Layout
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Use JSX to create a heirarchical layout
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            That looks like this
          </Heading>
          <Image
            src={images.basicLayout.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Simple Layout Complete
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-layout.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            You just used JSX (JavaScript XML)
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is JSX?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Its not Html in your Javascript!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            You also just used the render method
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module 1.2 - Let's refactor
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            After Refactoring
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/refactoring-layout.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Simple Paper Component
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-paper-component.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is props.children?
          </Heading>
          <List>
            <Appear>
              <ListItem>a special built in Prop (property)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Is passed to components automatically</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Life with Children 🙌
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/life-without-children.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Life without Children 🙁
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/life-without-children-2.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            You would have to
          </Heading>
          <List>
            <Appear>
              <ListItem>manually pass in props</ListItem>
            </Appear>
            <Appear>
              <ListItem>for each piece of content</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module 1.3 - Css in Js
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Add some glamor 💋
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-some-glamor.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How does it work?
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/how-glamor-works.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Why use it?
          </Heading>
          <List>
            <Appear>
              <ListItem>Custom Components on the Fly</ListItem>
            </Appear>
            <Appear>
              <ListItem>No more boring html</ListItem>
            </Appear>
            <Appear>
              <ListItem>All custom components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Co-locate your styles</ListItem>
            </Appear>
            <Appear>
              <ListItem>No style conflicts</ListItem>
            </Appear>
            <Appear>
              <ListItem>Strong control over presentation logic</ListItem>
            </Appear>
            <Appear>
              <ListItem>Styles based on component state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pass props to your styles</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pass in custom theme at runtime</ListItem>
            </Appear>
            <Appear>
              <ListItem>Great for building brand libraries</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dynamic Button Example
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/glamor-dynamic-button.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dynamic Wrapper Example
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/glamor-wrapper.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Some Cons
          </Heading>
          <List>
            <Appear>
              <ListItem>Can't write natural "css"</ListItem>
            </Appear>
            <Appear>
              <ListItem>Performance overhead</ListItem>
            </Appear>
            <Appear>
              <ListItem>One more thing to learn 🙄</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not all or nothing</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Check out the competition
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://css-in-js-playground.com
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Two - Adding State
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to Add data to your App
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Let's make it move
          </Heading>
          <Image
            src={images.basicLayout.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Where does State live in a React App?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            According to the docs:
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/state-acc-to-docs.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ...but we can do better
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/better-state-placement.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            So how do you change state?
          </Heading>
          <List>
            <Appear>
              <ListItem>You don't</ListItem>
            </Appear>
            <Appear>
              <ListItem>You kinda do - but very carefully</ListItem>
            </Appear>
            <Appear>
              <ListItem>You use the `setState()` api</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            First look at setState
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/changing-state-simple.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Event Handling in React - Best Practices
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Event handling (basics)
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/event-handling-basics.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            But it doesn't work by default
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/event-handling-basics-2.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Try it out!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            You need to Bind!
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/old-event-handling.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            More old ways to do event binding (deprecated)
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/old-event-handling-2.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Correct (updated) way to bind to this in es6 class
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/updated-event-handling.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Challenge: Let's make that number move
          </Heading>
          <Image
            src={images.basicLayout.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Solution
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-setstate-solution.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            But we are mutating state!!
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Make your update Immutable
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-setstate-immutable.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            You can also use Object.extend()
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-setstate-immutable-with-extend.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Does everyone know how to ...spread?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={18} bold>
            https://www.youtube.com/watch?v=pbuxUhkT0AA
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={18} bold>
            https://davidwalsh.name/merge-objects
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            More on Simple setState - it takes a callback
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-setstate-callback.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Let's upgrade to Functional Immutable setState
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/first-functional-setstate.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Lets Recap
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Which one should I use?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            But our business logic is still stuck in our component
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/business-logic-stuck-in-component.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Refactor it out like this
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/business-logic-out.example")}
          />
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" textSize={18} bold>
              And then use it like this
            </Text>
          </Appear>
          <Appear>
            <CodePane
              margin="10px 0 0"
              textSize={20}
              lang="js"
              source={require("raw-loader!../assets/code/call-your-api.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Complete your Api module
          </Heading>
          <List>
            <Appear>
              <ListItem>Write a spend method</ListItem>
            </Appear>
            <Appear>
              <ListItem>Make sure your balance is never negative</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Three - React Forms
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How Forms work in React
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            There are two kinds of Form components
          </Heading>
          <List>
            <Appear>
              <ListItem>Controlled</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uncontrolled</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What's the difference?
          </Heading>
          <List>
            <Appear>
              <ListItem>Controlled forms are attached to state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uncontrolled forms are unattached to state</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Uncontrolled Form Example
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/uncontrolled-form.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Controlled Form Example
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/controlled-form.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Add controlled fields to the UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Add textarea and range controls
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            But First...
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              A look at our state
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Our state is about to grow...
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/growing-state.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            But we can control it!
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/controlling-growing-state.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Add controlled fields to the UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Add textarea and range controls
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Create a Note component
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/note-component-without-change-handler.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Problem: Why your controls don't update
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            ...when you bind them to state
          </Text>
          <List>
            <Appear>
              <ListItem>There is no 2-way binding in React</ListItem>
            </Appear>
            <Appear>
              <ListItem>State is read-only by default</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Solution: Use onChange handlers
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/note-component-with-change-handler.example")}
          />
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/onChange-note.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Generic Change Handler
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/generic-change-handler.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Refactor your controls into a Form component
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Pass state as props to the Child Form component
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Update balance
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            ...based on new form inputs
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module 4 Third Party Components
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Let's add a Date Picker
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            More Third Party Components
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Let's add Notifications
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Five Refactoring State
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Real world data modeling with React
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Six Ajax Api calls
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Let's create the http layer
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What do you use for Fake Data?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Use Faker + Json DB server
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Json DB server
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A Cors enabled server is just a db.json file away 😀
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Lifecycle
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Understanding lifecycle hooks
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            There are six of them
          </Heading>
          <List>
            <Appear>
              <ListItem>componentWillMount()</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentDidMount()</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillReceiveProps()</ListItem>
            </Appear>
            <Appear>
              <ListItem>shouldComponentUpdate()</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillUpdate()</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillUnmount()</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How to remember them?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Some memory tricks for you
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Think Birth/Growth/Death
          </Heading>
          <List>
            <Appear>
              <ListItem>componentWillMount() - PreBirth</ListItem>
            </Appear>
            <Appear>
              <ListItem>render() - Birth</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentDidMount() - PostBirth</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillReceiveProps() - Growth</ListItem>
            </Appear>
            <Appear>
              <ListItem>shouldComponentUpdate() - Growth</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillUpdate() - Growth</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentWillUnmount() - Death</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            In official React Terminology
          </Heading>
          <List>
            <Appear>
              <ListItem>Birth is called Mounting</ListItem>
            </Appear>
            <Appear>
              <ListItem>Growth is called Updating</ListItem>
            </Appear>
            <Appear>
              <ListItem>Death is Unmounting</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Two Questions to ask when using lifecycle methods
          </Heading>
          <List>
            <Appear>
              <ListItem>When is this called? (what order)</ListItem>
            </Appear>
            <Appear>
              <ListItem>How often is this called?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Can I call setState()?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Visualizing the React Lifecyle
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://reactarmory.com/resources/lifecycle-simulators
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            So which one should I use for Ajax calls?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            componentDidMount()
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Ajax using promises
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Ajax using the new async await
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/async-await.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Refactor Ajax Calls
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Move to HTTP Layer
          </Text>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/http-layer.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Seven: Real world State
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Refactor balance, deposit and spend into transactions
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Rendering lists with arrays
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Hint: Use your map skills
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Render an array of data
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-array-rendering.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Add data to transactions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Render transaction list
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Ordering transactions list data
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/ordering-data.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Challenge: Render transaction list
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Move Business logic out of component
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/business-logic-out-full-api.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Eight: Testing React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Using Jest
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Simple Api testing
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/api-testing-1.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why UI Testing Sucks
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/ui-testing-sucks.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            More UI Testing without Snapshots
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/ui-testing-sucks-2.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Nine - Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Are you ready to Time Travel?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux in a Nutshell
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            State + Action = NewState
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Redux - Why Bother? (The Advantages)
          </Heading>
          <List>
            <Appear>
              <ListItem>Predictable - Single Source of Truth</ListItem>
            </Appear>
            <Appear>
              <ListItem>Robust - Single Direction Data Flow</ListItem>
            </Appear>
            <Appear>
              <ListItem>Maintainable - Architecture that scales</ListItem>
            </Appear>
            <Appear>
              <ListItem>Fantastic Ecosystem and Community</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy to test</ListItem>
            </Appear>
            <Appear>
              <ListItem>Killer Dev Tools</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Redux - Such a Bother! (The Cons)
          </Heading>
          <List>
            <Appear>
              <ListItem>Not easy to learn</ListItem>
            </Appear>
            <Appear>
              <ListItem>Odd mental model for OOP programmers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Generates a lot of boilerplate</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not component based</ListItem>
            </Appear>
            <Appear>
              <ListItem>Action at a distance</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Redux - the building blocks
          </Heading>
          <List>
            <Appear>
              <ListItem>Store - where your state lives</ListItem>
            </Appear>
            <Appear>
              <ListItem>Actions - used to fire events</ListItem>
            </Appear>
            <Appear>
              <ListItem>Reducers - actually change state</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Notice something missing?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              No opinions about UI
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Demo Time
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Redux without React
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            First you create a store
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/create-a-store.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Why is it called...
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            a reducer?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Next you configure the store (optional but recommended)
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/configure-a-store.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Next you add your actions
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/redux-action.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Then you fire your actions
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/redux-dispatch.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ...And watch your state change
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/redux-getstate.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Module Eleven - Wallaby Redux
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Moving state management outside our components
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Clone Wallaby Redux
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            git clone amite/wallaby-redux
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Redux Architecture
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Lets use re-ducks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://hackernoon.com/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Typical Redux Architecture
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/typical-redux-project.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            The Problem
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Adding a small feature means interacting with multiple folders
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Introducing Ducks
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            a proposal for bundling reducers, action types and actions in the
            same file
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ...leading to a reduced boilerplate
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Connect your component
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-connect.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Module Twelve React Router 4
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            A new mental model for Routing
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            How routes usually work (Ember)
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/ember-routes.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            How routes usually work (Angular)
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/angular-routes.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            This is React
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/react-routes.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Here's what you need to know about RR4
          </Heading>
          <List>
            <Appear>
              <ListItem>Router is not centralized in one place</ListItem>
            </Appear>
            <Appear>
              <ListItem>Matching is "inclusive" by default</ListItem>
            </Appear>
            <Appear>
              <ListItem>Can asynchronously load components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Work Seamlessly with layout and pages</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Demo Time
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Router Basics
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Simple Routes Example
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/simple-routes.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Building a basic layout
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-layout.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="secondary" caps>
            🎉 Let's get started 🎉
          </Heading>
          <List>
            <Appear>
              <ListItem>Create a new node Project</ListItem>
            </Appear>
            <Appear>
              <ListItem>Setup Prettier and Eslint</ListItem>
            </Appear>
            <Appear>
              <ListItem>Add babel setup</ListItem>
            </Appear>
            <Appear>
              <ListItem>Add JSX support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Create Webpack config</ListItem>
            </Appear>
            <Appear>
              <ListItem>Setup webpack server</ListItem>
            </Appear>
            <Appear>
              <ListItem>Add Production setup</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Create a new node Project
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/npm-init.example")}
          />
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            Create a .npmrc for defaults (optional)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Setup Prettier locally and globally
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/prettier-settings.example")}
          />
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            https://prettier.io/docs/en/options.html
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Setup eslint with vscode
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/eslint-init.example")}
          />
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            Install missing peer dependencies for airbnb
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Setup Webpack
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-webpack.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Add Babel
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-babel-setup.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Add React and Babel React Support
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-react-setup.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Add HTML template
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-html-template.example")}
          />
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            Add .babelrc
          </Text>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-babelrc.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Basic Hello World React
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-hello-world-react.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Basic Hello World React as ES6 class
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/basic-hello-world-react-class.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Run Webpack in watch mode
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/webpack-watch-mode.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Add webpack server
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-webpack-dev-server.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Add HTML Webpack plugin
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-html-webpack-plugin.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Loading CSS
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/loading-css-one.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Loading a CSS Framework
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/import-and-use-foundation.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Using image assets in your app
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/using-cdn.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Using local image assets in your app
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/add-local-image-assets.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Let's Build Wallaby
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/install-cra.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Choosing the right API for your components
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/choosing-the-right-api.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Forwarding props using rest spread
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/choosing-the-right-api.example")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
