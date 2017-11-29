// Import React
import React from "react";

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
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  opener: require("../assets/opener.jpg"),
  waiting: require("../assets/waiting.jpg"),
  coding: require("../assets/coding.jpg"),
  next: require("../assets/next.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  reactLogo: require("../assets/react_logo.png"),
  markdown: require("../assets/markdown.png"),
  reactTree: require("../assets/react-element-tree.png"),
  animTree: require("../assets/animated-tree.gif"),
  sketch: require("../assets/sketch.jpg"),
  lifecycle: require("../assets/lifecycle.jpg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Welome to
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Fundamentals
          </Text>
        </Slide>
        <Slide
          bgImage={images.waiting.replace("/", "")}
          bgDarken={0.4}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Let's get to know YOU
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How many of you already React?
          </Text>
        </Slide>
        <Slide
          bgImage={images.coding.replace("/", "")}
          bgDarken={0.4}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            So what is React?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            What do you think it is?
          </Text>
        </Slide>
        <Slide bgDarken={0.4} transition={["zoom"]} bgColor="primary">
          <Image
            src="https://media.giphy.com/media/sauYjWmJJ18xW/giphy-downsized-large.gif"
            margin="0px auto 20px"
            height="550px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>
            🔑 5 keys to understand React 🔑
          </Heading>
          <List>
            <Appear>
              <ListItem>Everything is a Component</ListItem>
            </Appear>
            <Appear>
              <ListItem>JSX is not HTML</ListItem>
            </Appear>
            <Appear>
              <ListItem>Using Props vs State</ListItem>
            </Appear>
            <Appear>
              <ListItem>Using immutable state updates</ListItem>
            </Appear>
            <Appear>
              <ListItem>Know the Component Lifecycle</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit margin="0 0 40px 0" textColor="secondary" caps>
            Vanilla Javascript - The Imperative way
          </Heading>
          <CodePane
            textSize={25}
            lang="js"
            source={require("raw-loader!../assets/code/imperative.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} margin="0 0 40px 0" fit textColor="secondary" caps>
            Declarative Javascript - The React way
          </Heading>
          <CodePane
            textSize={23}
            lang="js"
            source={require("raw-loader!../assets/code/declarative-react.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} margin="0 0 40px 0" fit textColor="secondary" caps>
            Everything is a Component
          </Heading>
          <Appear>
            <Image
              src="https://media.giphy.com/media/fxZ7cC3zYIVXi/giphy.gif"
              margin="0px auto 20px"
              height="600px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} margin="0 0 40px 0" fit textColor="secondary" caps>
            This is a Component
          </Heading>
          <CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-hello.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} margin="0 0 40px 0" fit textColor="secondary" caps>
            This is also a (stateless) Component
          </Heading>
          <CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-stateless.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading
            size={5}
            lineHeight={1.1}
            margin="0 0 40px 0"
            textColor="primary"
          >
            Think of components as Lego blocks not jigsaw puzzles
          </Heading>
          <Appear>
            <Image src="https://i0.wp.com/c1.staticflickr.com/1/380/32642938662_a2de171c9f_b.jpg?resize=625%2C297&ssl=1" />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} margin="0 0 40px 0" fit textColor="primary" caps>
            And that gives us composition
          </Heading>
          <Image
            src="https://media.giphy.com/media/uZDTYzxdYzmbS/giphy.gif"
            margin="0px auto 20px"
            height="550px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            margin="0 0 40px 0"
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-parent-child.example")}
          />
          <Appear>
            <CodePane
              textSize={30}
              lang="js"
              source={require("raw-loader!../assets/code/react-read-props.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>
            Let's build Facebook
          </Heading>
          <Appear>
            <CodePane
              textSize={30}
              lang="js"
              source={require("raw-loader!../assets/code/react-facebook.example")}
            />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 40px 0" size={1} fit textColor="tertiary" caps>
            What is JSX?
          </Heading>
          <Appear>
            <CodePane
              textSize={30}
              lang="js"
              source={require("raw-loader!../assets/code/react-jsx.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 40px 0" size={1} fit textColor="tertiary" caps>
            It's not html inside your javascript
          </Heading>
          <Appear>
            <Image src="https://i.imgflip.com/1zyu77.jpg" />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image
            src="https://purelyfunctional.tv/wp-content/uploads/2016/09/mustache.jpg"
            height="550px"
          />

          <Heading margin="0 0 40px 0" size={1} fit textColor="tertiary" caps>
            It's not string templates
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image
            src="https://media.giphy.com/media/xlTwaFb20TVjW/giphy.gif"
            height="550px"
          />

          <Heading margin="0 0 40px 0" size={1} fit textColor="tertiary" caps>
            It's javascript inside your javascript
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>
            Conditional Logic
          </Heading>
          <Appear>
            <CodePane
              textSize={19}
              lang="js"
              source={require("raw-loader!../assets/code/react-jsx-conditional.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>
            Conditional Rendering
          </Heading>
          <Appear>
            <CodePane
              textSize={20}
              lang="js"
              source={require("raw-loader!../assets/code/react-jsx-conditional-rendering.example")}
            />
          </Appear>
        </Slide>
        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Understanding Data
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            in React
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            What is Data in React?
          </Heading>
          <Appear>
            <Heading
              margin="0 0 40px 0"
              size={3}
              fit
              textColor="secondary"
              caps
            >
              Two concepts of data: Props and State
            </Heading>
          </Appear>
          <Appear>
            <Image
              src="https://media.giphy.com/media/hiGtDruqN8x7W/giphy.gif"
              margin="0px auto 20px"
              height="500px"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>
            Props are how components talk to each other 💬
          </Heading>
          <Appear>
            <CodePane
              textSize={25}
              lang="js"
              source={require("raw-loader!../assets/code/react-props.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>
            State is what changes inside a component
          </Heading>
          <Text margin="40px 0" textColor="secondary" textSize={24} bold>
            (a local dictionary of values available inside components)
          </Text>
          <Appear>
            <CodePane
              textSize={22}
              lang="js"
              source={require("raw-loader!../assets/code/react-state.example")}
            />
          </Appear>
        </Slide>
        <Slide>
          <Image
            src={images.sketch.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>

        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Understanding
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Props vs State
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            What is common between them?
          </Heading>
          <List>
            <Appear>
              <ListItem>Both props and state are plain JS objects</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                changes in props or state trigger a render update
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Both props and state are deterministic</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            When do I use props v state?
          </Heading>
          <List>
            <Appear>
              <ListItem>Do you need to alter data?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Need initial value from parent?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do you need default values?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do you need options to configure a component?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do you need initial values?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Does data change in child components?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            When do I change props v state?
          </Heading>
          <Image src="https://d26dzxoao6i3hh.cloudfront.net/items/293V2c23163S2z2H052l/changing-props-v-state.png?v=19f5427e" />
        </Slide>

        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44} bold>
            React Component Tree
          </Text>
          <Image
            src={images.reactTree.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44}>
            Data flows from parent to children, except when it comes to state,
            which originates inside a component.
          </Text>
          <Image
            src={images.reactTree.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="40px 0" textColor="secondary" textSize={44}>
            Data keeps flowing through React
          </Text>
          <Image
            src={images.animTree.replace("/", "")}
            margin="0px auto 40px"
            height="500px"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Rules for Data flow in React
          </Heading>
          <List>
            <Appear>
              <ListItem>Try to minimize state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Use props as much as possible</ListItem>
            </Appear>
            <Appear>
              <ListItem>Maintain single direction data flow</ListItem>
            </Appear>
            <Appear>
              <ListItem>Don't communicate Child to Parent</ListItem>
            </Appear>
            <Appear>
              <ListItem>Communicate Parent to Child</ListItem>
            </Appear>
            <Appear>
              <ListItem>Modify child state via callbacks</ListItem>
            </Appear>
            <Appear>
              <ListItem>Don't modify props</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            My Best Practices for React Beginners
          </Heading>
          <List>
            <Appear>
              <ListItem>Keep your components small</ListItem>
            </Appear>
            <Appear>
              <ListItem>Minimize number of props</ListItem>
            </Appear>
            <Appear>
              <ListItem>Write stateless components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Keep your state flat</ListItem>
            </Appear>
            <Appear>
              <ListItem>Use immutable updates</ListItem>
            </Appear>
            <Appear>
              <ListItem>Don't mix logic with rendering</ListItem>
            </Appear>
            <Appear>
              <ListItem>Optimize rendering</ListItem>
            </Appear>
            <Appear>
              <ListItem>Use React dev tools</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Adding State
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to Add data to your App
          </Text>
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

        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Forms
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            ..the longest part of your day job
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
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            What's the difference?
          </Heading>
          <List>
            <Appear>
              <ListItem>Controlled forms are attached to state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uncontrolled forms are unattached to state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uncontrolled forms are controlled by the user</ListItem>
            </Appear>
            <Appear>
              <ListItem>Controlled forms are controlled by you</ListItem>
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
        <Slide transition={["fade"]} bgColor="tertiary">
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
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
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
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
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
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Visualizing the React Lifecyle
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
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
        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Getting Started
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Let's use Create React App
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Rules for Parent/Child Component Communication
          </Heading>
          <List>
            <Appear>
              <ListItem>Do not communicate child to parent</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do not communicate between sibling components</ListItem>
            </Appear>
            <Appear>
              <ListItem>From parent pass down state and...</ListItem>
            </Appear>
            <Appear>
              <ListItem>A callback to modify that state</ListItem>
            </Appear>
          </List>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            React Router 4
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
        <Slide
          bgImage={images.opener.replace("/", "")}
          bgDarken={0.45}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            src={images.reactLogo.replace("/", "")}
            margin="0px auto 20px"
            height="128px"
          />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Best Practices
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            to keep your components sane and simple
          </Text>
          <Text margin="10px 0 0" textColor="primary" size={5} fit bold>
            https://github.com/chrisui/sane-react
          </Text>
          <Text margin="10px 0 0" textColor="primary" size={5} fit bold>
            https://medium.com/@justintulk/react-anti-patterns-props-in-initial-state-28687846cc2e
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>
            Pure Render
          </Heading>
          <CodePane
            margin="10px 0 0"
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/pure-render.example")}
          />
        </Slide>
      </Deck>
    );
  }
}
