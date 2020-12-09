# Class 43: Ethics / Gatsby

## Warm Up

- Find the largest value in a linked list.
- Czarl:
  - declare a maxValue variable
  - declare a current / head
  - while current is not null
    - if max is less than head / current
    - set maxValue to current / head
  - return maxValue

```javascript

function largestValue(linkedList) {

  let maxValue = 0;
  let current = linkedList.head;

  while (current) {
    if (current.value > maxValue) {
      maxValue = current.value
    }
    current = current.next;
  }

  return maxValue;

}

```

## Ethics of Programming / Engineering

- Is not meant to tell you what to think.
- Goal: expose you to the types of problems that engineers and programmers.

### Ethics vs Morals

- Ethics: What people should do.
  - rules / formulae
- Morals: What do people feel is right.
  - Internal feeling
- How does these differ?
  - Morals tend to be more personal.
  - Ethics seems to be a set structure.
    - They can be in conflict.
    - Working at company > do project A.
    - Feel that project A is immoral.

### Readings

- Ethics in the Workplace
  - DragonFly:
    - Search engine built by Google for China => censorship of certain ideas.
      - Getting rid of ideas is powerful.
      - Limit our perspective.
      - When does this goes to far.
      - Censorship of content vs censorship of ideas.
        - We censor gory images with the goal to protect ourselves from string emotions.
      - We still have ways of un-censoring.
        - Selective control of certain types of content.
        - Allows us to have a conversation before being shown.
        - Consent?
    - Should governments be able to remove ideas?
    - What happened?
      - Google employees blew the whistle on Google, and wanted it to be shut down.
      - Secretive project, people felt that they need to leak the information
        - Chain affect.
      - What was google response to the employees?
        - Is this still ongoing? Maybe...
  - Code that I'm still ashamed of
    - Works at company building websites.
      - Hired to build a quiz for a pharmacy
      - Marketed as a informational quiz, but was really a marketing stunt.
      - All results pushed the medication.
    - Someone writes to him, and is protesting that this practice is immoral.
      - Report of a suicide from side affects of the medication.
    - Author feels shame.
  - Microsoft Employees and ICE
    - Contract with immigration enforcement
    - Employees protesting quite heavily for invlovment with ICE.
    - Microsoft cancellation of something that people felt immoral.
  - TikTok
    - Run by an american dev shop, owned by a large chinese corporations.
  - Sara: tech workers have a lot of power!
    - With great power means lots leverage.
  - How tech workers are actully influencing the outcomes at some of these large tech companies.

- Ethics in Technology: tech has lots of progress, but should our technology do the things that it's capable of.
  - Amazon's Rekognition: facial recoginition software.
    - Do we sell this to law enforcment.
  - Self Driving Cars.
    - Michael: we are able to tell a car how they make decisions
      - We have finally reached the ethical delemma from those hypothetical scenarios.
    - Kevin: Drawing lines, has other effects down the chain of logic.
    - We have to be the arbitors of change.
      - This prevents progress a little bit.
  - Riva: The only solution is to opt out?
    - How do you make better decisions when companies are not able to?
    - Kevin: the individual is always responsible for their decisions.
    - Rizo: People are entitled to their feelings.
    - Sara: You can do more my being in the middle of it.
  - Kevin: What happens when the employees are in the wrong / acting unethical.
    - Who is right and who is wrong.
    - Rizo: It's on the individual to put forth info that others think is wrong, people will believe what they want.
    - Rizo: respect for the other side.
    - Jacob: we need to have empathy - feeling what someone else feels.
  - Big Data as a Civil Right.

### Takeaways

- You have a large voice in the tech, and it matters.
- You have a lot power, you can build powerful things, which could be powerfully damaging.

- Riva: Is ego correlated with lesser empathy?
  - Jacob: narcissm is, ego is squishy.

## JAMStack technologies / Gatsby

- JSON / APIs / Markup
  - A new way that people are architecting their applications.
  - Conifurations with a JSON file
  - Data from third party APIs
  - Markup to dictate what is displayed.
  - Instead of everyrthing handled dynamically with JS, we diversify our application into these three layers.
- Become very because of the way we consume things on the internet
  - CMS: content management service, stores all content that we might pubish
    - configure CMS interaction with JSON
    - some API to handle contolling of the content
    - some markup to say how its' displayed.

### Gatsby

- Workflow management software for a JAMStack application.
- Theirs a lot config files, that try to answer the questions
  - Where is my data coming.
  - How should my data look.
  - How should I build all the statuc site files.
  - Build process gives us all our content up front, preconfigured for SEO, and ready to be deployed wherever.
  - These apps are not dynamic, content needs to be rebuilt when certain CRUD things happen.
    - This also allows for marginally increased performance.
