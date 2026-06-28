# Software Engineering — OEC-AIML 801C
### MAKAUT 8th Sem · B.Tech CSE (AI & ML) · Full Marks: 70 · Time: 3 Hours

> **Exam pattern:** Group A — 10×1 = 10 marks (very short / MCQ) | Group B — 3×5 = 15 marks (short answers) | Group C — 3×15 = 45 marks (long answers with diagrams & numericals)

_Each topic below carries a **Likely Exam Question** + a **Model Answer** scaled to marks. Diagrams to practise freehand are noted. Part 2 has the 38 "difference between" comparison tables._

**📋 What This Document Covers**

✓ Unit 1 — System Analysis & Design, SDLC, Waterfall, Spiral, Feasibility, Cost-Benefit, COCOMO

✓ Unit 2 — System Design: Context diagram & DFD, Problem Partitioning, Top-Down/Bottom-Up, Decision tree/table, Structured English, Functional vs OO

✓ Unit 3 — Coding & Documentation, Structured & OO Programming, Information Hiding, Reuse; Testing levels, Integration testing, Test cases, V&V, Reliability, Metrics

✓ Unit 4 — Software Project Management: Scheduling, Staffing, SCM, Quality Assurance, Monitoring

✓ Unit 5 — Static/Dynamic models, UML diagrams: Class, Use case, Sequence, Collaboration, State chart, Activity

✓ Part 2 — 38 "Difference Between" comparison tables (5–6 marks each)

✓ Exam Strategy — how to score full marks on difference, diagram & numerical questions

# **UNIT 1 — System Analysis, Process Models & Estimation**

_Priority: MUST DO | PYQ Frequency: ★★★★★ every year_

## **1.1 Overview of System Analysis & Design and the Business System Concept**

**System analysis** is the study of an existing or proposed system to understand what it must do — gathering requirements, studying data flow and identifying problems. **System design** decides *how* the system will meet those requirements — its architecture, modules, data and interfaces. A **business system** is a set of interrelated components (people, data, processes, technology) working together to achieve a business goal; software engineering applies a disciplined, measurable approach to building such systems so they are delivered on time, within budget and of high quality.

> **✎ Likely Exam Question (5)** — What is software engineering? Distinguish system analysis from system design.

**Model Answer:** Software engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software (IEEE). It exists to manage complexity, cost and quality for large software.
System analysis studies *what* the system should do — requirement gathering, understanding existing processes, defining the problem and producing the requirements specification. System design determines *how* — converting requirements into architecture, modules, algorithms, data structures and interfaces. Analysis is problem-oriented; design is solution-oriented.

## **1.2 System Development Life Cycle (SDLC)**

The SDLC is the structured sequence of phases a software product passes through from conception to retirement: **Requirement analysis → Design → Implementation (coding) → Testing → Deployment → Maintenance**. Each phase has defined inputs, outputs (deliverables) and reviews, with feedback loops between phases.

> **✎ Likely Exam Question (5)** — What is SDLC? Explain its phases.

**Model Answer:** The Software Development Life Cycle is the series of well-defined phases used to develop software systematically.
**Phases:** (1) **Requirement analysis** — gather and document what the system must do. (2) **Design** — specify architecture, modules, data and interfaces. (3) **Implementation/Coding** — translate the design into source code. (4) **Testing** — verify and validate that the software meets requirements and is defect-free. (5) **Deployment** — install and release to users. (6) **Maintenance** — correct defects and adapt/enhance the software after release. Each phase produces deliverables and feeds the next; feedback loops allow earlier phases to be revisited.

## **1.3 Waterfall Model**

The Waterfall model is the classic **linear, sequential** process model: each phase must be completed (and its documents approved) before the next begins, and output flows downward like a cascade. Simple and well-documented, suited to projects with stable, well-understood requirements, but rigid — it does not handle requirement changes well and a working product appears only late.

_Diagram to draw: phases cascading downward — Requirements → Design → Coding → Testing → Deployment → Maintenance, with limited backward feedback arrows._

> **✎ Likely Exam Question (5)** — Explain the Waterfall model with its advantages and disadvantages.

**Model Answer:** The Waterfall model executes the SDLC phases in a strict linear sequence — Requirements → Design → Coding → Testing → Deployment → Maintenance — where each phase begins only after the previous one is fully completed and reviewed.
**Advantages:** simple and easy to manage; each phase has clear deliverables and milestones; heavy documentation; works well when requirements are fixed and clear.
**Disadvantages:** very rigid — cannot accommodate changing requirements; no working software until late; high risk for long/complex projects; errors found in testing are costly because they trace back to early phases. Best for small projects with stable requirements.

## **1.4 Spiral Model**

The Spiral model (Boehm) is a **risk-driven, iterative** process model that combines prototyping with the systematic waterfall. The project moves through repeated spirals, each with four quadrants: (1) determine objectives, (2) identify and resolve risks (its defining feature), (3) develop and verify, and (4) plan the next iteration. Each loop produces a more complete version. Suits large, high-risk projects but is costly and needs risk-analysis expertise.

_Diagram to draw: four quadrants — Determine objectives/alternatives/constraints · Evaluate alternatives, identify & resolve risks · Develop & verify next-level product · Plan the next phase; radius = accumulated cost._

> **✎ Likely Exam Question (5)** — Explain the Spiral model. Why is it called risk-driven?

**Model Answer:** The Spiral model is an iterative process model that develops software in successive spirals (loops), each refining the product. Every loop has four quadrants: (1) Determine objectives, alternatives and constraints; (2) Evaluate alternatives and identify & resolve risks (often via prototypes); (3) Develop and verify the next-level product; (4) Plan the next phase.
It is called **risk-driven** because explicit risk analysis is performed at the start of every loop — the biggest risks are identified and mitigated early, and the project only proceeds if risks are acceptable. This makes it ideal for large, complex, high-risk projects, though it is expensive and demands risk-assessment skill.

## **1.5 Feasibility Analysis (Technical, Economic, Operational)**

Feasibility analysis determines whether a proposed system is worth building before resources are committed. Main types: **Technical** — can it be built with available technology, hardware and skills? **Economic** — do the benefits outweigh the costs (via cost-benefit analysis)? **Operational** — will it work within the organisation and be accepted by users? (Schedule and legal feasibility are also considered.)

> **✎ Likely Exam Question (5)** — What is feasibility analysis? Describe its types.

**Model Answer:** Feasibility analysis is the study conducted early in a project to decide whether the proposed system is practical and beneficial to develop.
**Types:** (1) **Technical feasibility** — whether the required technology, hardware, tools and technical skills are available. (2) **Economic feasibility** — whether the expected benefits justify the development and operating costs, evaluated through a cost-benefit analysis (ROI, payback period). (3) **Operational feasibility** — whether the system will function effectively within the organisation and be accepted by users. (4) **Schedule feasibility** — whether it can be completed within the available time. (5) **Legal feasibility** — compliance with laws/regulations. The result is a feasibility report recommending whether to proceed (go / no-go).

## **1.6 Cost-Benefit Analysis & the COCOMO Model**

Cost-benefit analysis (CBA) compares the total expected **costs** of a system (development, hardware, operation) against its expected **benefits** (savings, revenue, productivity) to judge economic viability, using measures like net benefit, ROI and payback period. **COCOMO** (Constructive Cost Model, Boehm) estimates effort and time from the size of the software in **KLOC** (thousands of lines of code).

**Effort** E = a·(KLOC)^b person-months · **Time** D = c·(E)^d months

| Mode | a | b | c | d | Used for |
|------|---|---|---|---|----------|
| Organic | 2.4 | 1.05 | 2.5 | 0.38 | small, simple, experienced team |
| Semi-detached | 3.0 | 1.12 | 2.5 | 0.35 | medium size / complexity |
| Embedded | 3.6 | 1.20 | 2.5 | 0.32 | large, complex, tight constraints |

> **✎ Likely Exam Question (7)** — Explain the COCOMO model. For an organic project of 100 KLOC, estimate effort and time.

**Model Answer:** COCOMO (Constructive Cost Model) by Barry Boehm estimates software effort and development time from the estimated size in KLOC. Basic COCOMO uses E = a(KLOC)^b person-months and D = c(E)^d months, with constants depending on the project mode: Organic (small, familiar), Semi-detached (medium), Embedded (large, tightly constrained).
**Worked example (Organic, KLOC = 100, a=2.4, b=1.05, c=2.5, d=0.38):**
Effort E = 2.4 × 100^1.05 = **302 person-months**.
Time D = 2.5 × 302^0.38 = **21.9 months**.
Average staff = E / D = 302/21.9 ≈ **14 persons**.

# **UNIT 2 — System Design**

_Priority: MUST DO | PYQ Frequency: ★★★★★ — DFD & data dictionary appear every year_

## **2.1 Context Diagram and Data Flow Diagram (DFD)**

A DFD is a graphical tool that shows how data flows through a system — its processes, data stores, external entities and the data moving between them. **Four symbols:** external entity (rectangle), process (circle/bubble), data store (open rectangle) and data flow (arrow). The **context diagram (Level-0 DFD)** shows the entire system as a single process with its external entities — the highest-level view; lower levels (Level-1, Level-2…) progressively explode each process into sub-processes.

_Diagram to draw: a Level-0 DFD — e.g. Customer → order → [0 Order System] → invoice → Customer, with a D1 Orders DB data store._

> **✎ Likely Exam Question (5)** — What is a DFD? Explain its symbols and the difference between a context diagram and lower-level DFDs.

**Model Answer:** A Data Flow Diagram models a system by showing the flow of data among processes, data stores and external entities — it captures *what* the system does to data, not control logic.
**Symbols:** External entity (rectangle) = source/sink of data outside the system; Process (circle) = transformation of data; Data store (open rectangle) = where data is held; Data flow (labelled arrow) = movement of data.
**Context diagram (Level-0):** the whole system as one process interacting with external entities — the broadest view. **Lower levels (1, 2…):** decompose that single process into detailed sub-processes, showing internal data stores and flows. Decomposition must be **balanced** (flows in/out must match across levels).

**Essential DFD rules:** every process has ≥1 input and ≥1 output; data cannot move directly between two data stores or two external entities (must pass through a process); each process/flow gets a meaningful name; processes are numbered (0, 1, 1.1…).

## **2.2 Problem Partitioning**

Problem partitioning is **"divide and conquer"** in design: a large, complex problem is broken into smaller, independent, manageable sub-problems (modules) that can be solved separately then combined. It reduces complexity, enables parallel development, and makes the system easier to understand, test and maintain. Good partitioning aims for **high cohesion** within modules and **low coupling** between them.

> **✎ Likely Exam Question (5)** — Explain problem partitioning and its importance in design.

**Model Answer:** Problem partitioning applies divide-and-conquer to software design: a complex problem is divided into smaller sub-problems/modules that are individually simpler to design, code and test, then integrated.
**Importance:** reduces complexity (a human grasps limited detail at once); allows parallel development; improves understandability, testability and maintainability; and localises the effect of changes. Effective partitioning produces modules with high cohesion (each does one well-defined job) and low coupling (minimal interdependence).

## **2.3 Top-Down and Bottom-Up Design**

**Top-down design** starts from the overall system and decomposes it into successively smaller sub-modules (stepwise refinement), abstract to detailed. **Bottom-up design** starts by building small, reusable low-level components and composes them into larger modules up to the complete system. Top-down gives a clear overall structure early; bottom-up promotes reuse of tested components. In practice a hybrid (sandwich) approach is common.

> **✎ Likely Exam Question (5)** — Compare top-down and bottom-up design approaches.

**Model Answer:** Top-down design begins with a high-level view of the whole system and repeatedly breaks it into smaller sub-modules by stepwise refinement, general to specific. It gives an early, clear system structure but lower-level details (and reuse) come late, and stubs are needed to test partial systems.
Bottom-up design begins by designing and implementing small, well-tested low-level modules and then combines them into higher-level modules. It encourages reuse and early testing, but the overall architecture emerges late and integration drivers are needed. In practice a hybrid (sandwich) approach is used.

## **2.4 Decision Tree, Decision Table & Structured English**

These three tools specify complex processing/decision logic. A **decision tree** shows conditions as branches leading to actions — easy to read for sequential decisions. A **decision table** is a tabular form listing all combinations of conditions (condition stub/entries) against the actions (action stub/entries) — ensures completeness. **Structured English** describes logic in restricted, structured natural language using sequence, selection (IF-THEN-ELSE) and iteration constructs.

_Diagram to draw: a decision tree — e.g. Order amount > 10000? → Yes: 10% discount; No → Member? → Yes: 5% discount, No: no discount._

> **✎ Likely Exam Question (5)** — Explain decision tree, decision table and structured English.

**Model Answer:** All three express procedural / decision logic in design:
**Decision tree:** a graphical tree where each branch represents a condition outcome and leaves represent actions. Intuitive and good when decisions are sequential, but grows large with many conditions.
**Decision table:** a table with a condition stub (conditions) and action stub (actions); each column (rule) gives a combination of condition values and the resulting actions. Guarantees all combinations are considered — good for complex, combinatorial logic.
**Structured English:** describes logic in a limited, precise subset of English using sequence, selection (IF–THEN–ELSE) and iteration (REPEAT/WHILE). Readable by non-programmers yet unambiguous — bridges requirements and code.

## **2.5 Functional vs. Object-Oriented Approach**

Two paradigms for analysis and design. The **functional (structured)** approach decomposes a system by its functions/processes, separating data (in DFDs/data stores) from operations; tools are DFDs and structure charts. The **object-oriented** approach models the system as interacting objects that bundle data and behaviour together, using classes, inheritance and polymorphism; tools are UML diagrams. OO gives better reusability and is closer to the real-world domain.

> **✎ Likely Exam Question (5)** — Differentiate the functional and object-oriented approaches to system design.

**Model Answer:** **Functional (structured) approach:** the system is decomposed by function/process using top-down refinement; data and functions are kept separate (data flows through processes). Modelled with DFDs and structure charts. Simpler for process-centric systems, but data is global-ish and changes ripple widely; reuse is limited.
**Object-oriented approach:** the system is modelled as interacting objects that encapsulate data and operations together, organised into classes related by inheritance, association and aggregation, using polymorphism. Modelled with UML. Maps naturally to the real world, localises changes (encapsulation), and offers strong reusability and maintainability — at the cost of a steeper learning curve.

# **UNIT 3 — Coding, Documentation & Testing**

_Priority: MUST DO | PYQ Frequency: ★★★★★ — Coupling/Cohesion, V&V, Testing levels are guaranteed_

## **3.1 Structured & Object-Oriented Programming**

**Structured programming** writes programs using only three control constructs — sequence, selection and iteration — avoiding `goto`, making code readable, testable and maintainable; it is procedure-oriented. **Object-oriented programming (OOP)** organises code around objects that combine data and methods, with four pillars: **encapsulation, inheritance, polymorphism and abstraction** — giving modularity and reuse.

> **✎ Likely Exam Question (5)** — What is structured programming? List the pillars of OOP.

**Model Answer:** Structured programming builds programs from three basic control structures — sequence, selection (if/switch) and iteration (loops) — and forbids unstructured jumps (`goto`). This produces clear, single-entry/single-exit logic that is easy to read, test and maintain. It is function-oriented (e.g. C, Pascal).
Object-oriented programming structures software around objects (instances of classes) that bundle data with behaviour. Four pillars: **Encapsulation** (hide internal data behind methods), **Abstraction** (expose only essentials), **Inheritance** (derive new classes from existing), **Polymorphism** (one interface, many forms). Examples: C++, Java.

## **3.2 Information Hiding, Reuse & System Documentation**

**Information hiding** (Parnas) conceals a module's internal data and implementation behind a well-defined interface, so other modules depend only on the interface — this localises change and reduces coupling. **Software reuse** is using existing components (functions, classes, libraries, patterns) to build new systems, cutting cost and improving reliability. **System documentation** is the set of written artefacts (SRS, design docs, code comments, user/operations manuals) describing the system. Types: **internal** (comments, self-documenting code) and **external** (technical/system docs for developers + user documentation for end users).

> **✎ Likely Exam Question (5)** — Explain information hiding and software reuse.

**Model Answer:** **Information hiding** is the principle that each module should hide its internal data structures and implementation, exposing only a stable interface. Other modules interact through that interface only, so changes to the hidden internals do not affect them — reducing coupling, improving maintainability and supporting modular design. It is the basis of encapsulation in OOP.
**Software reuse** is building new software from existing, tested artefacts — functions, classes, components, libraries, frameworks, design patterns. Benefits: lower cost/time, higher reliability (already tested), consistency. Challenges: finding suitable components, adaptation effort, maintaining a reusable library.

## **3.3 Levels of Testing**

Testing is organised into levels that mirror development phases (the **V-model**): **Unit testing** tests individual modules in isolation; **Integration testing** tests interfaces between combined modules; **System testing** tests the complete integrated system against requirements; **Acceptance testing** validates the system with the customer in their environment.

_Diagram to draw: V-model — left arm (Requirements → System Design → Architecture Design → Module Design → Coding) matched on the right by (Acceptance, System, Integration, Unit testing)._

> **✎ Likely Exam Question (5)** — Explain the levels of testing with the V-model.

**Model Answer:** Testing proceeds in levels aligned with development phases (V-model: left = development, right = testing):
(1) **Unit testing** — verifies each module in isolation (drivers and stubs); maps to module design. (2) **Integration testing** — checks interfaces between combined modules; maps to architecture design. (3) **System testing** — tests the complete system against functional and non-functional requirements; maps to system design. (4) **Acceptance testing** — the customer validates the system in a real environment; maps to requirements. Each phase's test plan is prepared in parallel with that phase.

## **3.4 Integration Testing**

Integration testing combines unit-tested modules and tests their interfaces. **Top-down** integration starts from the top module and adds lower modules, using **stubs** (dummy called-modules). **Bottom-up** integration starts from the lowest modules, using **drivers** (dummy calling-modules). **Big-bang** integrates everything at once (hard to isolate faults). **Sandwich** combines top-down and bottom-up.

> **✎ Likely Exam Question (5)** — What is integration testing? Explain its approaches with the role of drivers and stubs.

**Model Answer:** Integration testing tests groups of unit-tested modules together to find interface and interaction defects unit testing cannot.
**Approaches:** (1) **Big-bang** — integrate all at once; simple but fault localisation is hard. (2) **Top-down** — integrate from the top control module downward; missing lower modules replaced by **stubs**. (3) **Bottom-up** — integrate from the lowest modules upward; missing higher modules replaced by **drivers**. (4) **Sandwich** — combines both.
**Stub** = called dummy (top-down); **Driver** = calling dummy (bottom-up).

## **3.5 Test Case Specification, Verification & Validation, Reliability, Metrics**

A **test case specification** documents, for each test, the inputs, preconditions, execution steps and expected output so tests are repeatable. **Verification** asks "are we building the product right?" (conformance to spec — reviews, inspections); **Validation** asks "are we building the right product?" (meeting user needs — testing). **Reliability assessment** measures the probability of failure-free operation over time (e.g. MTBF). **Software metrics** quantify products/processes (size, complexity, defect density) to support monitoring and control.

> **✎ Likely Exam Question (5)** — Differentiate verification and validation. What is a test case specification?

**Model Answer:** **Verification** evaluates whether the software conforms to its specification at each stage — "are we building the product right?" Done without executing code, via reviews, walkthroughs and inspections.
**Validation** evaluates whether the finished software meets the user's actual needs — "are we building the right product?" Done by executing the software (testing) against requirements.
**Test case specification:** a documented test definition with a test ID, objective, preconditions, input data, execution steps, and expected result (plus actual result and pass/fail). It makes testing repeatable, objective and traceable to requirements.

# **UNIT 4 — Software Project Management**

_Priority: HIGH | PYQ Frequency: ★★★★ — SCM, PERT/Gantt, Monitoring_

## **4.1 Project Scheduling**

Project scheduling allocates the project's tasks to a timeline and to people/resources, defining task durations, dependencies and milestones. Tools include the **Gantt chart** (bars on a calendar showing task start/end and overlap) and network diagrams like **PERT/CPM** (showing dependencies and the **critical path** — the longest dependent chain that determines the minimum project duration).

_Diagram to draw: a Gantt chart — each task (Requirements, Design, Coding, Testing, Deployment) as a horizontal bar across weeks W0–W11._

> **✎ Likely Exam Question (5)** — What is project scheduling? Explain Gantt charts and the critical path.

**Model Answer:** Project scheduling divides the project into tasks/activities, estimates their durations, establishes dependencies, and assigns them to a timeline and resources so the project finishes on time.
**Gantt chart:** a bar chart where each task is a horizontal bar positioned by start and end dates; shows durations, overlaps and progress — easy to read for tracking.
**PERT/CPM & critical path:** a network of activities with dependencies; the **critical path** is the longest chain of dependent tasks — it determines the minimum possible project duration, and any delay on it delays the whole project. Tasks off the critical path have slack.

## **4.2 Staffing, SCM, Quality Assurance & Project Monitoring**

**Staffing** is selecting and assigning the right people to roles based on skills and project needs (often guided by COCOMO team-size estimates). **Software Configuration Management (SCM)** manages change to all software artefacts — version control, change control, configuration identification, status accounting and audits — keeping a consistent, traceable product. **Quality Assurance (QA)** is the set of planned, process-oriented activities (standards, reviews, audits) that ensure quality is built in. **Project monitoring** continuously tracks actual progress, cost and quality against the plan and applies corrective action.

> **✎ Likely Exam Question (5)** — What is Software Configuration Management? List its main activities.

**Model Answer:** SCM is the discipline of identifying, organising and controlling changes to software artefacts (code, documents, designs, tests) throughout the life cycle, so the product remains consistent and every change is traceable.
**Main activities:** (1) **Configuration identification** — identify the items/baselines to control. (2) **Version/Change control** — manage versions and authorise changes via a Change Control Board. (3) **Configuration status accounting** — record and report the state of items and changes. (4) **Configuration audit** — verify the product matches its configuration records. Benefits: avoids confusion from uncontrolled changes, supports team coordination and reproducibility.

> **✎ Likely Exam Question (5)** — Discuss Project Monitoring and how it contributes to success.

**Model Answer:** Project monitoring is the continuous tracking of actual progress, cost, schedule and quality against the plan, so deviations are caught early and corrected. Techniques: progress reports, milestone reviews, earned-value analysis, Gantt/burndown charts, risk tracking. It gives early warning of slippage/overrun, enables timely corrective action, keeps stakeholders informed, controls scope creep and manages risk — keeping the project on time, in budget and to spec.

# **UNIT 5 — Modeling & UML Diagrams**

_Priority: HIGH | PYQ Frequency: ★★★★ — draw use-case, class, sequence, state, activity_

## **5.1 Why Modeling? Static vs Dynamic Models**

A **model** is a simplified abstraction of a system. We model to visualise, specify, document and communicate a design before building it, manage complexity and detect errors early. **Static (structural)** models capture the fixed structure — classes, objects, relationships (class diagram). **Dynamic (behavioural)** models capture behaviour over time — interactions, state changes, control flow (sequence, state chart, activity diagrams).

> **✎ Likely Exam Question (5)** — Why do we model software? Differentiate static and dynamic models.

**Model Answer:** A model is an abstraction that lets us visualise the system, specify its structure/behaviour, provide a template to build from, and document decisions — before/while coding. Modelling manages complexity and exposes design flaws early and cheaply.
**Static (structural) model:** describes the time-independent structure — components and relationships (classes, attributes, associations). Example: class diagram, object diagram.
**Dynamic (behavioural) model:** describes how the system behaves and changes over time — message exchanges, states and flows. Examples: sequence, collaboration, state-chart and activity diagrams.

## **5.2 UML & the Class Diagram**

**UML (Unified Modeling Language)** is a standard graphical language for modelling object-oriented systems (invented by the "Three Amigos" — Booch, Jacobson, Rumbaugh). A **class diagram** is the core static diagram: each class is a box with three compartments — **name, attributes, operations** — and classes are linked by relationships: **association**, **aggregation** (hollow diamond, "has-a"), **composition** (filled diamond, strong ownership), **inheritance/generalization** (hollow triangle, "is-a"), with multiplicities (1, *, 0..1).

_Diagram to draw: two classes (e.g. Customer with -name, +register(); Account with -balance, +deposit()) linked by an association "owns" with 1 — * multiplicities._

> **✎ Likely Exam Question (5)** — What is a class diagram? Explain its notation and relationships.

**Model Answer:** A class diagram is a static UML diagram showing the classes of a system, their internal structure and relationships.
**Notation:** each class is a rectangle with three compartments — class name, attributes (with visibility +public, −private, #protected and type), and operations/methods.
**Relationships:** **Association** (structural link, multiplicities 1, *, 0..1); **Aggregation** ("has-a" whole–part, hollow diamond, parts can exist independently); **Composition** (stronger whole–part, filled diamond, parts die with the whole); **Generalization/Inheritance** ("is-a", hollow triangle to the parent); **Dependency** (dashed arrow). It is the blueprint for implementing classes in code.

## **5.3 Use Case Diagram**

A **use case diagram** captures the functional requirements from the user's viewpoint. It shows **actors** (users/external systems, stick figures), **use cases** (functions, ellipses) inside a **system boundary**, and relationships: association, «include», «extend», generalization.

_Diagram to draw: an actor (Customer) connected to use cases (Login, Withdraw Cash, Check Balance, Transfer Funds) inside an "ATM System" boundary._

> **✎ Likely Exam Question (5)** — What is a use case diagram? Explain its components.

**Model Answer:** A use case diagram is a behavioural UML diagram that models the functionality of a system from the user's perspective — *what* the system does, not *how*.
**Components:** **Actor** — a role (person or external system) interacting with the system (stick figure). **Use case** — a unit of functionality (ellipse). **System boundary** — a box enclosing use cases. **Relationships:** association (actor–use case line), **«include»** (one use case always uses another), **«extend»** (optional/conditional extension), generalization. Used in requirement capture and stakeholder communication.

## **5.4 Interaction Diagrams: Sequence & Collaboration**

Interaction diagrams model how objects collaborate by exchanging messages (dynamic view). A **sequence diagram** emphasises **time ordering**: objects have vertical lifelines and messages are horizontal arrows ordered top-to-bottom, with activation bars and dashed return messages. A **collaboration (communication) diagram** emphasises the **structural organisation** of objects: objects are linked and messages are numbered (1, 2, 2.1) to show sequence. They are semantically equivalent — convertible into each other.

**Message types (sequence diagram):** Synchronous (solid line, filled arrowhead — sender waits); Asynchronous (solid line, open arrowhead — sender does not wait); Return (dashed line); Self/recursive (loop arrow to itself); Create (arrow to a new lifeline); Destroy (ends a lifeline with X).

_Diagram to draw: a sequence diagram — :Customer → :ATM → :Bank with insertCard(), verify(), valid (return), enterPIN(), withdraw()._

> **✎ Likely Exam Question (5)** — What are interaction diagrams? Differentiate sequence and collaboration diagrams.

**Model Answer:** Interaction diagrams are dynamic UML diagrams showing how objects interact by passing messages to realise a use case.
**Sequence diagram:** stresses the time order of messages. Each object has a vertical lifeline; messages are horizontal arrows read top to bottom; activation bars show when an object is active; dashed arrows show returns. Best for the order of events.
**Collaboration (communication) diagram:** stresses the structural relationships/links among objects in space; messages are written on the links and numbered (1, 2, 2.1) to indicate sequence. Best for which objects connect to which. Both convey the same information and are interconvertible.

## **5.5 State Chart & Activity Diagrams**

A **state chart diagram** models the life cycle of a single object — its states (rounded rectangles) and event-triggered transitions, with an initial state (filled circle) and final state (ringed circle). An **activity diagram** models the flow of control/work across a process or use case — activities, decisions (diamonds), forks/joins (parallelism) and start/end nodes — an object-oriented flowchart.

_Diagrams to draw: state chart — Idle → (start) → Active → (process) → Processing → (done); activity diagram — Receive Order → In stock? → No: Restock / Yes: Ship Order → Send Invoice._

> **✎ Likely Exam Question (5)** — Differentiate state chart and activity diagrams.

**Model Answer:** **State chart diagram:** shows the states a single object passes through and the event-triggered transitions between them (e.g. Idle → Active → Processing). State-focused — "what states can this object be in and what events change them?" Notation: rounded-rectangle states, initial (filled circle) and final (ringed) state, labelled transitions.
**Activity diagram:** shows the flow of activities/control in a process or use case — order of actions, decisions (diamonds), and concurrent flows (fork/join). Workflow-focused (an OO flowchart), can span many objects.
**Key difference:** state chart = states of one object driven by events; activity diagram = sequence/flow of actions in a process.

# **PART 2 — 38 "Difference Between" Questions (5–6 marks each)**

_Each answer gives a comparison table plus a one-line summary — the exact format that scores full marks for "differentiate / compare" questions._

## **D1. Waterfall Model vs Spiral Model**

| Basis | Waterfall | Spiral |
|-------|-----------|--------|
| Nature | Linear, sequential | Iterative, evolutionary |
| Risk handling | Not addressed | Explicit risk analysis each loop |
| Requirement changes | Hard to accommodate | Easily accommodated |
| Working product | Only at the end | After each spiral |
| Suited for | Small, stable-requirement projects | Large, high-risk projects |
| Cost | Low | High (risk analysis) |

**In short:** Waterfall is simple and rigid for stable small projects; Spiral is risk-driven and iterative for large, uncertain ones.

## **D2. Verification vs Validation**

| Basis | Verification | Validation |
|-------|--------------|------------|
| Question | Are we building the product right? | Are we building the right product? |
| Checks against | Specifications/design | User needs/requirements |
| Execution | Static (no code run) | Dynamic (run the software) |
| Techniques | Reviews, walkthroughs, inspections | Testing |
| Found by | Developers/QA | Testers/users |

**In short:** Verification = conformance to spec (build right); Validation = meeting user needs (build the right thing).

## **D3. Functional vs Object-Oriented Approach**

| Basis | Functional | Object-Oriented |
|-------|-----------|-----------------|
| Decomposition by | Functions/processes | Objects/classes |
| Data & functions | Kept separate | Bundled (encapsulation) |
| Main tool | DFD, structure chart | UML diagrams |
| Reusability | Limited | High (inheritance, classes) |
| Change impact | Ripples widely | Localised |

**In short:** Functional centres on processes with separate data; OO centres on objects that combine data and behaviour.

## **D4. Top-Down vs Bottom-Up Design**

| Basis | Top-Down | Bottom-Up |
|-------|----------|-----------|
| Starts from | Whole system (abstract) | Low-level components |
| Direction | Decompose into sub-modules | Compose into larger modules |
| Architecture clarity | Early | Late |
| Reuse | Lower | Higher |
| Test aid needed | Stubs | Drivers |

**In short:** Top-down refines the whole into parts; bottom-up builds parts up into the whole.

## **D5. Structured vs Object-Oriented Programming**

| Basis | Structured | OOP |
|-------|-----------|-----|
| Unit | Function/procedure | Object/class |
| Data | Separate, often global | Encapsulated in objects |
| Key ideas | Sequence/selection/iteration | Encapsulation, inheritance, polymorphism |
| Reuse | Functions | Classes (inheritance) |
| Examples | C, Pascal | C++, Java |

**In short:** Structured programming is function-oriented with separate data; OOP binds data and methods into objects.

## **D6. Decision Tree vs Decision Table**

| Basis | Decision Tree | Decision Table |
|-------|---------------|----------------|
| Form | Graphical (branches) | Tabular (rows/columns) |
| Readability | Easy for sequential decisions | Best for many condition combinations |
| Completeness | Can miss combinations | Forces all combinations |
| Size growth | Grows wide with conditions | Compact but columns grow |
| Best when | Few, ordered conditions | Many interacting conditions |

**In short:** Both specify decision logic; trees are visual and sequential, tables are exhaustive and combinatorial.

## **D7. Context Diagram vs Detailed DFD**

| Basis | Context (Level-0) | Lower-level DFD |
|-------|-------------------|-----------------|
| Processes shown | Single process (whole system) | Many sub-processes |
| Detail | Highest abstraction | Progressively detailed |
| Data stores | Usually hidden | Shown |
| Purpose | System scope & boundary | Internal data processing |

**In short:** The context diagram is the whole system as one bubble; lower-level DFDs explode it into sub-processes.

## **D8. Black-Box vs White-Box Testing**

| Basis | Black-Box | White-Box |
|-------|-----------|-----------|
| Basis | Requirements/behaviour | Internal code/logic |
| Knowledge of code | Not needed | Required |
| Tests | Inputs vs expected outputs | Paths, branches, statements |
| Done by | Testers | Developers |
| Techniques | Equivalence, boundary value | Statement/branch/path coverage |

**In short:** Black-box tests behaviour without seeing code; white-box tests internal logic and coverage.

## **D9. Alpha vs Beta Testing**

| Basis | Alpha Testing | Beta Testing |
|-------|---------------|--------------|
| Where | Developer's site | Customer/user site |
| Who tests | Internal users/testers | Real external users |
| Environment | Controlled | Real-world |
| Stage | Before beta | After alpha, before release |
| Goal | Find defects internally | Get user feedback in the field |

**In short:** Alpha is in-house pre-release testing; Beta is real-user testing in the live environment.

## **D10. Unit vs Integration Testing**

| Basis | Unit Testing | Integration Testing |
|-------|--------------|---------------------|
| Tests | Individual module in isolation | Interfaces between modules |
| Done by | Developer | Developer/tester |
| Needs | Drivers & stubs | Combined modules |
| Finds | Logic errors in a module | Interface/interaction errors |
| Order | First level | After unit testing |

**In short:** Unit testing checks a single module; integration testing checks how combined modules work together.

## **D11. Integration vs System Testing**

| Basis | Integration Testing | System Testing |
|-------|---------------------|----------------|
| Scope | Module interfaces | Complete integrated system |
| Checks | Interaction correctness | All requirements (functional + non-functional) |
| Environment | Partial build | Full system, near-production |
| Type | Mostly white/grey-box | Mostly black-box |

**In short:** Integration testing validates interfaces; system testing validates the whole system against requirements.

## **D12. System vs Acceptance Testing**

| Basis | System Testing | Acceptance Testing |
|-------|----------------|--------------------|
| Performed by | Developer/QA team | Customer/end user |
| Goal | Verify system meets spec | Validate system meets user needs |
| Environment | Test environment | User's real environment |
| Type | Verification | Validation |
| Outcome | Defect report | Accept / reject |

**In short:** System testing (by the team) verifies the spec; acceptance testing (by the user) validates fitness for use.

## **D13. Quality Assurance vs Quality Control**

| Basis | Quality Assurance (QA) | Quality Control (QC) |
|-------|------------------------|----------------------|
| Focus | Process | Product |
| Aim | Prevent defects | Detect/remove defects |
| Activities | Standards, audits, reviews | Testing, inspection |
| Nature | Proactive | Reactive |
| Responsibility | Whole team/process | Testing team |

**In short:** QA is process-oriented and prevents defects; QC is product-oriented and finds defects.

## **D14. Error vs Fault/Defect vs Failure**

| Basis | Error | Fault/Defect | Failure |
|-------|-------|--------------|---------|
| Meaning | Human mistake | Flaw in code/doc | Deviation from expected behaviour |
| When | During development | Resides in the product | During execution |
| Cause/effect | Causes a fault | Causes a failure | Observed by user |
| Example | Wrong logic in mind | Wrong line of code | Program crashes |

**In short:** A human Error introduces a Fault (defect) in the code, which on execution causes a Failure.

## **D15. Coupling vs Cohesion**

| Basis | Coupling | Cohesion |
|-------|----------|----------|
| Concerns | Between modules | Within a module |
| Measures | Interdependence | Singleness of purpose |
| Desired | Low | High |
| Good value means | Modules independent, easy to change | Module does one well-defined task |
| Examples | Data < stamp < control < common < content | Functional (best) … coincidental (worst) |

**In short:** Good design = LOW coupling (modules independent) and HIGH cohesion (each module focused).

## **D16. Aggregation vs Composition (UML)**

| Basis | Aggregation | Composition |
|-------|-------------|-------------|
| Relationship | Weak "has-a" | Strong "has-a" / owns |
| Part lifetime | Independent of whole | Bound to the whole |
| Notation | Hollow diamond | Filled diamond |
| Example | Team has-a Player | House has-a Room |

**In short:** Both are whole–part; in aggregation parts survive the whole, in composition they are destroyed with it.

## **D17. Sequence vs Collaboration Diagram**

| Basis | Sequence Diagram | Collaboration Diagram |
|-------|------------------|------------------------|
| Emphasis | Time ordering of messages | Structural organisation of objects |
| Layout | Vertical lifelines, top-to-bottom | Objects linked in 2-D space |
| Message order | By vertical position | By numbering (1, 2, 2.1) |
| Best for | Order of events | Which objects connect |
| Equivalence | Convertible to collaboration | Convertible to sequence |

**In short:** Both are interaction diagrams; sequence stresses time order, collaboration stresses object links.

## **D18. Static vs Dynamic Models**

| Basis | Static Model | Dynamic Model |
|-------|--------------|---------------|
| Captures | Structure (time-independent) | Behaviour over time |
| Shows | Classes, objects, relationships | Interactions, states, flow |
| UML examples | Class, object diagram | Sequence, state, activity diagram |
| Changes over time | No | Yes |

**In short:** Static models show fixed structure; dynamic models show behaviour and change over time.

## **D19. Activity vs State Chart Diagram**

| Basis | Activity Diagram | State Chart Diagram |
|-------|------------------|---------------------|
| Models | Flow of activities/control | States of one object |
| Driven by | Completion of activities | Events |
| Scope | Can span many objects/use case | Single object's life cycle |
| Nodes | Activities, decisions, fork/join | States, transitions |
| Analogy | OO flowchart | Object life-cycle |

**In short:** Activity diagram = workflow/control flow of a process; state chart = event-driven states of one object.

## **D20. Class Diagram vs Object Diagram**

| Basis | Class Diagram | Object Diagram |
|-------|---------------|----------------|
| Shows | Classes (blueprint) | Objects (instances) at a moment |
| Contents | Attributes, methods, relations | Concrete attribute values |
| Time | General, all instances | A specific snapshot |
| Stability | Stable structure | Changes at runtime |

**In short:** A class diagram is the blueprint of all instances; an object diagram is one runtime snapshot.

## **D21. Use Case Diagram vs Class Diagram**

| Basis | Use Case Diagram | Class Diagram |
|-------|------------------|---------------|
| View | Behavioural (functional) | Structural (static) |
| Shows | Actors and system functions | Classes and relationships |
| Audience | Users/requirements | Designers/developers |
| Used in | Requirement analysis | Design/implementation |

**In short:** Use case diagrams capture what the system does for users; class diagrams capture how it is structured.

## **D22. Functional vs Non-Functional Requirements**

| Basis | Functional | Non-Functional |
|-------|-----------|----------------|
| Define | What the system does | How well it does it (qualities) |
| Examples | Login, generate report | Performance, security, usability |
| Verified by | Functional testing | Performance/security testing |
| Effect if missing | System lacks a feature | System works but poorly |

**In short:** Functional requirements specify features/behaviour; non-functional requirements specify quality attributes.

## **D23. SCM vs Quality Assurance**

| Basis | SCM | QA |
|-------|-----|----|
| Goal | Control changes to artefacts | Ensure process produces quality |
| Manages | Versions, baselines, changes | Standards, reviews, audits |
| Concerned with | Consistency & traceability | Defect prevention |
| Key activities | Identification, version/change control, audit | Process audits, standards enforcement |

**In short:** SCM controls and tracks changes to the product; QA ensures the process builds quality in.

## **D24. Technical vs Economic Feasibility**

| Basis | Technical Feasibility | Economic Feasibility |
|-------|-----------------------|----------------------|
| Question | Can it be built? | Is it worth building? |
| Examines | Technology, hardware, skills | Costs vs benefits |
| Tools | Tech assessment | Cost-benefit analysis, ROI |
| Output | Technical viability | Financial viability |

**In short:** Technical feasibility checks if it can be built; economic feasibility checks if benefits exceed costs.

## **D25. Top-Down vs Bottom-Up Integration Testing**

| Basis | Top-Down Integration | Bottom-Up Integration |
|-------|----------------------|------------------------|
| Starts from | Top (main) module | Lowest modules |
| Dummy needed | Stubs (called modules) | Drivers (calling modules) |
| Major control logic | Tested early | Tested late |
| Lower modules | Tested late | Tested early |
| Fault localisation | Easier at top | Easier at bottom |

**In short:** Top-down integrates downward using stubs; bottom-up integrates upward using drivers.

## **D26. Driver vs Stub**

| Basis | Driver | Stub |
|-------|--------|------|
| Role | Calls the module under test | Is called by the module under test |
| Simulates | A higher-level (calling) module | A lower-level (called) module |
| Used in | Bottom-up integration | Top-down integration |
| Provides | Test inputs & collects results | Dummy return values |

**In short:** A driver is a dummy caller (bottom-up); a stub is a dummy callee (top-down).

## **D27. Regression Testing vs Re-Testing**

| Basis | Regression Testing | Re-Testing |
|-------|--------------------|------------|
| Purpose | Ensure new changes break nothing | Confirm a specific defect is fixed |
| Test cases | Existing/previous tests | The failed test(s) only |
| Trigger | Any code change | A reported fixed bug |
| Scope | Broad (whole/affected areas) | Narrow (the defect) |

**In short:** Re-testing re-runs the failed case to confirm a fix; regression re-runs other tests to ensure nothing else broke.

## **D28. Smoke vs Sanity Testing**

| Basis | Smoke Testing | Sanity Testing |
|-------|---------------|----------------|
| Checks | Basic critical functions of a new build | Specific functionality after minor change |
| Depth | Wide and shallow | Narrow and deeper |
| When | On every new build | After small fixes |
| Documentation | Usually scripted | Often unscripted |

**In short:** Smoke testing checks the build is stable enough to test; sanity testing checks a specific area after a change.

## **D29. COCOMO Modes: Organic vs Semi-Detached vs Embedded**

| Basis | Organic | Semi-Detached | Embedded |
|-------|---------|---------------|----------|
| Size | Small (<50 KLOC) | Medium | Large |
| Complexity | Low | Medium | High |
| Team experience | High, familiar | Mixed | Varied, rigid constraints |
| Constraints | Few | Moderate | Tight (hardware/regulatory) |
| Effort coeff. (a, b) | 2.4, 1.05 | 3.0, 1.12 | 3.6, 1.20 |

**In short:** Organic = small/simple/experienced, Semi-detached = medium, Embedded = large/complex/constrained (highest effort).

## **D30. Basic vs Intermediate vs Detailed COCOMO**

| Basis | Basic | Intermediate | Detailed |
|-------|-------|--------------|----------|
| Input | Size (KLOC) only | Size + 15 cost drivers | Size + drivers per phase |
| Accuracy | Rough | Better | Best |
| Cost drivers | Ignored | Effort multipliers applied | Applied phase-wise |
| Use | Early quick estimate | More realistic estimate | Detailed planning |

**In short:** Basic uses size only; Intermediate adds cost drivers; Detailed applies them phase-by-phase for highest accuracy.

## **D31. Corrective vs Adaptive vs Perfective Maintenance**

| Basis | Corrective | Adaptive | Perfective |
|-------|-----------|----------|------------|
| Purpose | Fix defects/errors | Adapt to new environment | Improve/enhance features |
| Trigger | Reported bug/failure | OS/hardware/law change | User requests, performance |
| Example | Patch a crash | Port to new OS | Add a feature, speed up |

**In short:** Corrective fixes faults, adaptive copes with environment changes, perfective enhances the working system.

## **D32. Information Hiding vs Encapsulation**

| Basis | Information Hiding | Encapsulation |
|-------|-------------------|---------------|
| Idea | Hide design decisions/internals | Bundle data + methods together |
| Level | Design principle | Language mechanism (OOP) |
| Goal | Reduce coupling, localise change | Protect data, expose interface |
| Relation | Achieved partly via encapsulation | One way to implement hiding |

**In short:** Information hiding is the design principle; encapsulation is the OOP mechanism that helps achieve it.

## **D33. Forward vs Reverse Engineering**

| Basis | Forward Engineering | Reverse Engineering |
|-------|---------------------|---------------------|
| Direction | Requirements/design → code | Code → design/requirements |
| Goal | Build new system | Understand/recover existing system |
| Input | Specifications | Existing code/product |
| Used in | New development | Maintenance, re-engineering |

**In short:** Forward engineering builds code from design; reverse engineering recovers design from existing code.

## **D34. DFD vs Flowchart**

| Basis | DFD | Flowchart |
|-------|-----|-----------|
| Shows | Flow of data | Flow of control/logic |
| Focus | What data moves where | Step-by-step procedure |
| Control/decisions | Not shown | Shown (loops, decisions) |
| Level | System/analysis view | Program/algorithm view |

**In short:** A DFD shows data movement (analysis); a flowchart shows control flow and decisions (algorithm).

## **D35. Reliability vs Availability**

| Basis | Reliability | Availability |
|-------|-------------|--------------|
| Definition | Probability of failure-free operation over time | Proportion of time system is operational |
| Measure | MTBF, failure rate | Uptime / (uptime + downtime) |
| Concerns | How long until failure | Is it up when needed |
| Affected by | Faults | Faults + repair time |

**In short:** Reliability is about not failing over time; availability is about being up and ready when needed.

## **D36. Project Scheduling vs Project Monitoring**

| Basis | Project Scheduling | Project Monitoring |
|-------|--------------------|--------------------|
| When | Planning (before/early) | During execution |
| Purpose | Plan tasks, time, resources | Track actual vs planned |
| Output | Gantt/PERT, timeline | Status reports, corrective action |
| Nature | Predictive | Controlling |

**In short:** Scheduling plans the timeline up front; monitoring tracks progress against that plan and corrects deviations.

## **D37. Cost-Benefit Analysis vs Feasibility Analysis**

| Basis | Cost-Benefit Analysis | Feasibility Analysis |
|-------|-----------------------|----------------------|
| Scope | Economic comparison only | Overall viability (technical, economic, operational) |
| Question | Do benefits exceed costs? | Should/can we build it at all? |
| Part of | Economic feasibility | Whole feasibility study |
| Output | ROI, payback, net benefit | Go / no-go recommendation |

**In short:** Cost-benefit analysis is the economic part; feasibility analysis is the broader study that contains it.

## **D38. Agile vs Waterfall**

| Basis | Agile | Waterfall |
|-------|-------|-----------|
| Approach | Iterative, incremental | Linear, sequential |
| Requirements | Evolve continuously | Fixed up front |
| Delivery | Working increments frequently | One delivery at the end |
| Customer involvement | Continuous | Mainly at start |
| Change | Welcomed | Costly/resisted |
| Documentation | Light | Heavy |

**In short:** Waterfall is plan-driven with fixed requirements; Agile is change-driven, iterative and customer-collaborative.

# **Exam Strategy & Last-Minute Revision**

**For a "difference between" question:** always draw a **comparison table** (4–5 points of difference) and finish with a **one-line summary** — that structure gets full marks fast.

**For diagram questions** (UML, DFD, V-model, spiral): **draw the diagram first**, then explain its parts.

**Master the 4 numericals** — they are guaranteed fast marks:
- **COCOMO:** E = a(KLOC)^b, D = c(E)^d. Schedule compression cost ∝ 1/T⁴ (e.g. 15→12 months ⇒ ×2.44).
- **Function Point:** UFP = Σ(count × weight) for EI/EO/EQ/ILF/EIF; FP = UFP × (0.65 + 0.01 × ΣFi).
- **PERT:** te = (O + 4M + P)/6, σ² = ((P−O)/6)²; critical path = longest path; project variance = Σ of critical activities' variances.
- **Cyclomatic complexity:** V(G) = E − N + 2 = P + 1 = regions + 1; gives the number of independent paths/test cases.

**High-frequency descriptive topics:** Coupling/Cohesion types · V&V · Testing levels & types · DFD (levels, physical/logical, data dictionary) · Spiral/risk model · Agile/Scrum · CMM/CMMI · SCM · "Software doesn't wear out" / IEEE definition.

**Practise drawing freehand:** use case, class, sequence, state chart, activity, structure chart, DFD, V-model, spiral.
