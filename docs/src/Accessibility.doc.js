// @flow strict
import type { Node } from 'react';
import PageHeader from './components/PageHeader.js';
import MainSection from './components/MainSection.js';

const cards: Array<Node> = [];
const card = (c) => cards.push(c);

card(
  <PageHeader
    name="Accessibility"
    description="At Pinterest we strive to create an inclusive product that brings inspiration to everyone. A large part of that requires creating accessible designs and components that contribute to an accessible product."
    showSourceLink={false}
  />,
);

// General
card(
  <MainSection
    name="Our approach"
    description={`
    Everyone should be able to create the life they love with Pinterest, no matter their ability. An inclusive product is a top priority, and it relies on everyone's commitment to accessibility. Pinterest's goal as a company is to meet <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 AA standards</a>, and Gestalt's goal is no different. By creating accessible components, we aim to help everyone create an inclusive product.

    It's important to remember that accessible components are a great starting point, but there is further work to do to create a cohesive, accessible experience. Below we've highlighted some key areas to address, but for a more extensive list we recommend checking out <a href="https://www.a11yproject.com/">The A11Y Project</a> and Heydon Pickering's <a href="https://github.com/Heydon/inclusive-design-checklist">Inclusive Design Checklist</a>.
    `}
  />,
);

card(
  <MainSection
    name="Design considerations"
    description="Accessibility starts at the design phase! Below are some key things to watch out for when designing inclusive products. For further detail and matching visual examples, check out our [Accessible Design deck](https://docs.google.com/presentation/d/1b-L0tuzaMTIf1xX7j86g46QfDW3_C0Ep_Ca4TEmXPz8/edit?usp=sharing)."
  >
    <MainSection.Subsection
      title="Visuals"
      description={`
      When designing, it's important to ensure our use of color is appropriate.

      - **Avoid using color as the sole indicator of information.** For instance, always supply and icon or text describing errors, rather than relying on a red outline or red text. Color-only changes do not work well for those who may be color blind or have low vision.
      - **Check your color contrast!** We follow AA guidance from the Web Content Accessibility Guidelines, so we recommend using a tool like [aremycolorsaccessible.com](https://www.aremycolorsaccessible.com/) to check the foreground color against the background color. In Figma, you can use [the Able plugin](https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility) to check color contrast in your designs.
      `}
    />
    <MainSection.Subsection
      title="Interaction"
      description={`
    Accounting for all aspects of interaction is critical to creating inclusive designs.

    - **Create designs for every state**, like focus, hover, focus + hover, active, selected, disabled, and anything else that might be relevant. Ensure each combination is visually distinct from the others.
    - **Keep disabled elements disabled.** Disabled buttons are removed from the tab order, so they are impossible to access with a keyboard. Adding something like a tooltip to a disabled item means only mouse-users can access the content of the tooltip, so the best option is to attach the tooltip to an active element, like an IconButton, next to the disabled element instead.
    `}
    />
    <MainSection.Subsection
      title="Comprehension"
      description={`
    Seemingly small design decisions can have a large impact on users comprehension.

    - **Use form labels whenever possible.** Placeholder text is not enough to indicate to users what information they are expected to enter in any given text field, since it disappears as soon as any content is typed. Adding labels to every form field and dropdown will make expectations clearer for everyone.
    - **Design a logical heading hierarchy.** Screen reader users can quickly navigate an entire page by analyzing the headings provided. Be sure to follow a logical order, starting with a single H1, and progressing to H2, H3, etc. If you could see only your headings, would the page make sense?
    - **Create descriptive link text.** Avoid multiple links with vague text like "More info" or "Learn more". Instead, users should be able to tell exactly what info will be provided at a given link by the link text only. For instance, "Explore campaigns" instead of just "Learn more".
    `}
    />
    <MainSection.Subsection
      title="Responsiveness"
      description={`
    Accessibility requirements vary depending on the device used, so be sure to account for small and large screens alike.

    - **Account for zooming!** Many users, especially on mobile, adjust the default size of fonts and often increase the zoom setting. Does your design still work when zoomed in 200%?
    - **Create large touch targets.** If you've ever clicked on the wrong thing because the tap target was too small, you know how frustrating it can be to have to re-orient yourself. Ensure your touch targets on mobile are large enough for people with limited mobility to accurately press what they're aiming for.`}
    />
  </MainSection>,
);

card(
  <MainSection name="Engineering considerations">
    <MainSection.Subsection title="ARIA attributes" description="" />
    <MainSection.Subsection title="Labels" description="" />
    <MainSection.Subsection title="Keyboard navigation" description="" />
    <MainSection.Subsection
      columns={2}
      title="Available hooks"
      description={`Gestalt provides two functions that help create more accessible experiences: \`useFocusVisible\` and \`useReducedMotion\`.`}
    >
      <MainSection.Card
        cardSize="md"
        title="useFocusVisible"
        description={`
          \`useFocusVisible\` manages focus interactions on the page and determines whether a focus ring should be shown. If a user interacts with a mouse/touch, then the focus is not visible. When the user interacts with the keyboard, then the focus is visible.

          References:
          <ul>
            <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html">WCAG 2.4.7: Focus Visible</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible">:focus-visible CSS pseudo-class</a></li>
          </ul>
        `}
        defaultCode={`
function Example() {
  const { isFocusVisible } = useFocusVisible();
  const [ focussedButton1, setFocussedButton1 ] = React.useState(false);
  const [ focussedButton2, setFocussedButton2 ] = React.useState(false);

  return (
    <Flex alignItems="start" direction="column" gap={4}>
      <Flex alignItems="center" gap={4}>
        <Text>With focus visible</Text>
        <button
          onBlur={() => setFocussedButton1(false)}
          onFocus={() => setFocussedButton1(true)}
          style={{
            outline: 'none',
            boxShadow: isFocusVisible && focussedButton1 ? "0 0 0 4px rgba(0, 132, 255, 0.5)" : null
          }}
        >
          <Text>Button 1</Text>
        </button>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Text>Without focus visible</Text>
        <button
          onBlur={() => setFocussedButton2(false)}
          onFocus={() => setFocussedButton2(true)}
          style={{
            outline: 'none',
            boxShadow: focussedButton2 ? "0 0 0 4px rgba(0, 132, 255, 0.5)" : null
          }}
        >
          <Text>Button 2</Text>
        </button>
      </Flex>
    </Flex>
  );
}`}
      />
      <MainSection.Card
        cardSize="md"
        title="useReducedMotion"
        description={`
          \`useReducedMotion\` allows a user to request that the system minimize the amount of non-essential motion.

          Users can experience distraction or nausea from animated content. For example, scrolling a page which causes elements to move (other than the essential movement associated with scrolling) can trigger vestibular disorders.

          References:
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank">CSS media query: prefers-reduced-motion</a></li>
            <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C39.html">WCAG C39: Using the CSS reduce-motion query to prevent motion</a></li>
          </ul>
        `}
        defaultCode={`
        function Example() {
          const shouldReduceMotion = useReducedMotion();

          return (
            <React.Fragment>
              <style dangerouslySetInnerHTML={{__html: \`
                @keyframes vibrate {
                  0% {
                    transform: translate(0);
                  }
                  33% {
                    transform: translate(-2px, -2px);
                  }
                  66% {
                    transform: translate(2px, -2px);
                  }
                  100% {
                    transform: translate(0);
                  }
                }
              \`}} />
              <div
                style={
                  shouldReduceMotion
                    ? {}
                    : { animation: 'vibrate 0.3s linear infinite both' }
                }
              >
                <Box color="red" display="inlineBlock" padding={4}>
                  <Text color="white">{shouldReduceMotion ? 'Reduced motion enabled' : 'Reduced motion disabled'}</Text>
                </Box>
              </div>
            </React.Fragment>
          );
        }`}
      />
    </MainSection.Subsection>
  </MainSection>,
);

card(
  <MainSection name="Further learning">
    <MainSection.Subsection title="Internal" description="" />
    <MainSection.Subsection title="External" description="" />
  </MainSection>,
);

export default cards;