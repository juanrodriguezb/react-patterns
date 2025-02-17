import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h1>React Patterns & Practices</h1>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id='experience' className="accordion-item">
            <Accordion.Title className="accordion-item-title">We got 20 years of experience</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p> We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='local-guides' className="accordion-item">
            <Accordion.Title className="accordion-item-title">We're working with local guides</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>Instead, we are working with local gides to ensure a safe and pleasant vacation.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
