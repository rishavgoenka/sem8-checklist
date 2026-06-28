# Solved Previous-Year Papers — Software Engineering
### OEC-AIML 801C (2024-25) & ESC501 (2022-23, 2023-24, 2024-25) · Same subject, recycled patterns

> **How to read this:** each paper is solved Group A → B → C, with the marks badge on every question so you write to the right length. PERT, COCOMO, Function-Point and Cyclomatic-Complexity numericals are fully worked. **Part 5 = Predictions** built from what repeats every year.

# **Paper 1 — OEC-AIML 801C (2024–2025)**
_Your actual course code · Full Marks 70_

## **Group A — Very Short Answers (1 mark each)**

| Question | Answer |
|----------|--------|
| (i) What is Software Engineering? | A systematic, disciplined, quantifiable approach to the development, operation and maintenance of software (IEEE). |
| (ii) The SRS should avoid discussing the ___ | design / implementation details (the "how") — an SRS states *what*, not *how*. |
| (iii) Main goal of software testing | To find/detect defects (errors) — uncover maximum faults, not to prove correctness. |
| (iv) Critical path in a PERT chart | It is the **longest** path in terms of time. |
| (v) In a collaboration diagram, objects are represented by | rectangles (boxes) labelled :ClassName. |
| (vi) T/F: Spiral model not suitable for risk-prone products | **False** — Spiral is risk-driven, ideal for high-risk products. |
| (vii) Extent of data interchange between two modules | Coupling. |
| (viii) Main use of a State-chart diagram | To model dynamic behaviour — states and event-driven transitions of an object over its lifetime. |
| (ix) COCOMO is used to estimate | Effort (person-months), and hence development time and cost. |
| (x) Primary purpose of a Class diagram | Show the static structure: classes, attributes, methods and relationships. |
| (xi) Phase consuming maximum effort | Maintenance phase (typically 60–70% of total cost). |
| (xii) What is Code Inspection? | A formal static review of code by a team (Fagan inspection) to find defects, without executing the program. |

## **Group B — Short Answers (5 marks each)**

### **2. Distinguish between alpha, beta and acceptance testing. (5)**

| Basis | Alpha | Beta | Acceptance |
|-------|-------|------|------------|
| Where | Developer's site | User's site | User's site |
| By whom | Internal testers | Selected real users | Customer |
| Purpose | Find defects pre-release | Get field feedback | Accept/reject the product |
| Stage | Before beta | Before final release | Final, before delivery |

**In short:** alpha = in-house testing, beta = real-user field testing, acceptance = customer's formal go/no-go.

### **3. Discuss Project Monitoring and how effective monitoring contributes to success. (5)**

Project monitoring is the continuous tracking of a project's actual progress, cost, schedule and quality against the plan, so deviations are caught early and corrected. **Techniques:** progress reports, milestone reviews, earned-value analysis, Gantt/burndown charts, risk tracking. **Contribution:** early warning of slippage and cost overrun; timely corrective action (re-planning, re-staffing); keeps stakeholders informed; controls scope creep; manages risks before they escalate; ensures quality targets are met — keeping the project on time, within budget and to specification.

### **4. Differences between Essential Use Case and Real Use Case. (5)**

| Basis | Essential Use Case | Real Use Case |
|-------|--------------------|--------------|
| Level | Abstract, technology-free | Concrete, design-specific |
| Describes | User intent & system responsibility | Actual UI/implementation steps |
| Mentions | No widgets/technology | Specific screens, buttons, inputs |
| When used | Early requirement analysis | Later design stage |

**In short:** an essential use case captures intent abstractly; a real use case describes the concrete, technology-bound interaction.

### **5. Difference between traditional Waterfall and Agile model. (5)**

| Basis | Waterfall | Agile |
|-------|-----------|-------|
| Approach | Linear, sequential | Iterative, incremental |
| Requirements | Fixed up front | Evolve continuously |
| Delivery | Once, at the end | Frequent working increments |
| Customer role | Mainly at start | Continuous collaboration |
| Change | Costly/resisted | Welcomed |

**In short:** Waterfall is plan-driven with fixed scope; Agile is change-driven, iterative and customer-collaborative.

### **6. Shortcomings of the Capability Maturity Model (CMM). (5)**

- **Process-heavy / bureaucratic:** emphasises documentation and process, which can slow small or agile teams.
- **Not a guarantee of product quality:** a mature process does not automatically yield a good product.
- **Costly & time-consuming** to assess and reach higher levels; unsuitable for small organisations.
- **Rigid level structure:** must climb levels in order; ignores domain-specific needs.
- **Focuses on 'what' not 'how':** says what processes to have, not how to implement them.
- Superseded by **CMMI**, which integrates multiple models to address some gaps.

## **Group C — Long Answers (15 marks each)**

### **7(a). Causes of and solutions for the software crisis. (5)**

Software crisis = the chronic problem of software being delivered late, over budget, of poor quality, and hard to maintain.
**Causes:** growing size/complexity; poor/changing requirements; lack of skilled engineers; absence of proper methodology; poor project management and estimation; rapid hardware change.
**Solutions:** sound software engineering practices and process models; rigorous requirement engineering; better cost/effort estimation (COCOMO/FPA); modular design (low coupling, high cohesion); systematic testing and QA; CASE tools; disciplined project management.

### **7(b). Four characteristics differentiating a simple program from a software product. (5)**

1. **Multiple users:** a product is used by many users, not just its author.
2. **Proper documentation:** a product has SRS, design docs and user manuals; a program usually has none.
3. **Systematic development & testing:** a product follows an SDLC with reviews and thorough testing; a program is ad-hoc.
4. **Maintenance & support:** a product is maintained, enhanced and supported over a long life; a program is throwaway.

(Also: well-defined UI, larger size/team, configuration management.)

### **7(c). Problems if no life-cycle model is followed. (5)**

- No clear phases or milestones → uncontrolled, ad-hoc development.
- Difficult to plan, estimate, schedule and monitor progress.
- Requirements and design not properly captured → frequent rework.
- No defined deliverables/reviews → poor quality, hidden defects.
- Team lacks a common framework → coordination problems.
- Testing and maintenance become chaotic; project risks delay, cost overrun and failure.

### **8(a). Main shortcomings of the DFD model. (5)**

- **No control information:** shows data flow but not control flow, decisions, loops or timing.
- **No procedural detail:** does not show how a process transforms data (needs structured English/decision tables).
- **Ambiguity:** process/data-store naming can be inconsistent; level balancing is error-prone.
- Does not represent real-time / event-driven behaviour well.
- Does not capture data structure details (needs a data dictionary).

### **8(b). Draw the ER diagram of a Library Management System and explain it. (4)**

_Diagram: entities **MEMBER** (member_id, name) and **BOOK** (book_id, title, author) linked by the relationship **Borrows** (attribute issue_date), with M:N cardinality._

**Explanation:** a member can borrow many books over time and a book can be borrowed by many members (M:N). A LIBRARIAN entity with an Issues/Manages relationship can be added. Rectangles = entities, diamond = relationship, ellipses = attributes, underlined = key.

### **8(c). What is a Data Flow Diagram? Write the essential observations about DFD. (6)**

A DFD graphically represents how data flows through a system — its processes, data stores, external entities and the data passing between them. **Symbols:** external entity (rectangle), process (circle), data store (open rectangle), data flow (arrow).

**Essential observations / rules:**
- The context diagram (Level-0) shows the whole system as one process; lower levels explode it into sub-processes.
- Every process must have at least one input and one output data flow.
- Data flows must be balanced across levels.
- Data cannot move directly between two data stores or two external entities — it must pass through a process.
- Each process/data flow gets a meaningful name; processes are numbered (0, 1, 1.1…).

### **9(a). What is Scrum and Agile methodology? (7)**

**Agile** is an iterative, incremental development philosophy that values working software, customer collaboration, responding to change and individuals/interactions over rigid plans and documentation (the Agile Manifesto). Software is built in short cycles delivering working increments.
**Scrum** is the most popular Agile framework. Work is organised into fixed-length **sprints** (1–4 weeks), each producing a potentially shippable increment. **Roles:** Product Owner (owns backlog/priorities), Scrum Master (facilitates), Development Team. **Artifacts:** Product Backlog, Sprint Backlog, Increment. **Events:** Sprint Planning, Daily Scrum (stand-up), Sprint Review, Sprint Retrospective.

### **9(b). Features of Scrum. (4)**

- **Sprints:** short, time-boxed iterations producing a working increment.
- **Defined roles:** Product Owner, Scrum Master, Development Team.
- **Artifacts:** Product Backlog, Sprint Backlog, Increment (with burndown charts).
- **Ceremonies:** Sprint Planning, Daily Stand-up, Review, Retrospective.
- Self-organising, cross-functional teams and continuous customer feedback; embraces change.

### **9(c). How does the Scrum framework work? (4)**

1. The Product Owner builds and prioritises the **Product Backlog**.
2. In **Sprint Planning**, the team selects top items into the **Sprint Backlog**.
3. During the sprint, the team works daily and holds a **Daily Scrum** to sync and remove blockers.
4. At sprint end, a **Sprint Review** demos the increment for feedback.
5. A **Retrospective** reflects on improving the process; then the next sprint begins. The cycle repeats until the product is complete.

### **10(a). What is coupling and cohesion? (2)**

**Coupling** is the degree of interdependence between modules. **Cohesion** is the degree to which elements within a single module belong together (singleness of purpose). Good design aims for **low coupling and high cohesion**.

### **10(b). How many types of coupling? Describe all. (6)**

Coupling types from worst (high) to best (low):
1. **Content coupling (worst):** one module directly accesses/modifies another's internal data or code.
2. **Common coupling:** modules share global data.
3. **External coupling:** modules share an externally imposed format/protocol/device.
4. **Control coupling:** one module passes a control flag dictating another's logic.
5. **Stamp coupling:** a whole data structure is passed when only part is needed.
6. **Data coupling (best):** modules communicate only through simple parameters.

Aim for **data coupling** (lowest).

### **10(c). How many types of cohesion? Describe all. (7)**

Cohesion types from worst (low) to best (high):
1. **Coincidental (worst):** elements grouped arbitrarily, unrelated.
2. **Logical:** elements do similar kinds of work, selected by a flag.
3. **Temporal:** elements grouped because they execute at the same time (e.g. init routines).
4. **Procedural:** elements follow a certain sequence of execution.
5. **Communicational:** elements operate on the same data.
6. **Sequential:** output of one element is the input to the next.
7. **Functional (best):** all elements contribute to a single, well-defined task.

Aim for **functional cohesion** (highest).

### **11(a). Nominal effort = 1000 PM, duration = 15 months, cost = ₹200,000,000. Product needed in 12 months. New cost? (4) — NUMERICAL**

Concept: compressing the schedule increases effort and hence cost. By Putnam's software equation, for fixed size, **effort ∝ 1/(development time)⁴**.
Ratio: E_new / E_nominal = (T_nominal / T_new)⁴ = (15/12)⁴ = (1.25)⁴ = **2.441**.
New effort = 1000 × 2.441 = **2441 person-months**.
New cost (∝ effort) = ₹200,000,000 × 2.441 = **₹488,281,250 (≈ ₹48.83 crore)**.
So the new cost is about **₹48.8 crore** — far higher, because squeezing 15 months into 12 sharply increases effort.

### **11(b). Why break project activities into tasks? (5)**

- **Estimation:** small tasks can be estimated for effort/time/cost far more accurately than a whole project.
- **Scheduling:** tasks reveal dependencies, enabling Gantt/PERT scheduling and the critical path.
- **Assignment & staffing:** tasks allocated to suitable people and worked in parallel.
- **Monitoring & control:** progress tracked task-by-task; slippage detected early.
- **Accountability & clarity:** each task has a clear owner, deliverable and completion criterion (a Work Breakdown Structure).

### **11(c). Necessity of Software Configuration Management. (6)**

SCM manages changes to all software artefacts (code, documents, designs, tests) throughout the life cycle. Necessary because:
- **Uncontrolled change causes chaos:** version control prevents overwriting and inconsistencies.
- **Traceability:** every change is recorded (who, what, why) via change control and status accounting.
- **Baselines & reproducibility:** stable baselines let any released version be rebuilt exactly.
- **Team coordination & parallel work** are enabled safely.
- **Audits** verify the product matches its configuration records.

Activities: configuration identification, version/change control, status accounting, configuration audit.

# **Paper 2 — ESC501 (2023–2024)**
_Same subject · DFD, data dictionary, PERT numerical, UML_

## **Group A — Very Short Answers (1 mark each)**

| Question | Answer |
|----------|--------|
| (I) Boundary Value Analysis is a technique of ___ testing | Black-box (functional) testing. |
| (II) PERT stands for | Program Evaluation and Review Technique. |
| (III) Inventors of UML | Grady Booch, Ivar Jacobson, James Rumbaugh (the 'Three Amigos'). |
| (IV) SDLC model with risk management | Spiral model. |
| (V) What is a decision table? | A tabular tool listing all combinations of conditions against the actions to take. |
| (VI) CFG stands for | Control Flow Graph (in testing). |
| (VII) Data functions in Function Point Analysis | ILF (Internal Logical Files) and EIF (External Interface Files). |
| (VIII) Notation for an abstract class in UML | Class name written in italics (or marked {abstract}). |
| (IX) Feasibility for user-friendliness | Operational feasibility. |
| (X) Coupling when two modules share global data | Common (global) coupling. |
| (XI) Gamma testing is also known as | A form of acceptance / field testing on a near-final product with minimal checking. |
| (XII) Team structure with no formal hierarchy | Democratic (egoless) team. |

## **Group B — Short Answers (5 marks each)**

### **2. What is a feasibility study? Explain its types. (5)**

An early assessment of whether a proposed system is practical and worthwhile to build. **Types:** Technical (is the technology/skill available?), Economic (do benefits exceed costs — via cost-benefit analysis?), Operational (will it work in and be accepted by the organisation?), Schedule (can it be done in time?), Legal (does it meet laws/regulations?). Output: a feasibility report with a **go/no-go** recommendation.

### **3. What is a data dictionary? Why is it used? Give an example. (5)**

A data dictionary is an organised repository defining all data elements, flows and stores — names, types, structure, length, meaning. **Why used:** remove ambiguity, ensure consistency across DFDs, document data, support design and maintenance.
**Example notation:** `Customer = customer_id + name + address + phone`; `name = first_name + last_name`; `phone = 10{digit}10`.

### **4. What is System Documentation? Classify its types. (5)**

The set of written artefacts describing a system for developers, maintainers and users. **Types:**
(1) **Internal documentation** — comments and self-documenting code within the source.
(2) **External documentation** — separate documents, split into: **technical/system documentation** (SRS, design docs, data dictionary, test plans — for developers) and **user documentation** (user manuals, installation/operations guides — for end users).

### **5. What is a function point? Explain ILF and EIF. (5)**

A **function point (FP)** is a technology-independent measure of software size based on user-visible functionality, computed from five components (external inputs, outputs, inquiries, internal logical files, external interface files), each weighted by complexity, then adjusted.
**ILF (Internal Logical File):** a user-identifiable group of related data maintained *within* the application boundary. **EIF (External Interface File):** related data *referenced* by the application but maintained by another system. Both are the **data functions** in FPA.

### **6. What is coupling and cohesion? Explain the types of cohesion. (5)**

**Coupling** = interdependence between modules (want low). **Cohesion** = how strongly a module's elements relate to one task (want high).
**Types of cohesion (worst→best):** Coincidental → Logical → Temporal → Procedural → Communicational → Sequential → **Functional** (single well-defined task — best).

## **Group C — Long Answers (15 marks each)**

### **7(a). Physical vs logical DFD; advantages of physical over logical. (4)**

A **logical DFD** shows *what* the system does — business processes and data flows independent of technology. A **physical DFD** shows *how* it is implemented — actual people, devices, files, programs and manual/automated steps.
**Advantages of physical DFD:** shows the real implementation (manual vs automated, which files/technology); useful for current-system study and planning the build; clarifies responsibilities and physical media.

### **7(b). Differentiate physical and logical DFD with examples. (5)**

| Basis | Logical DFD | Physical DFD |
|-------|-------------|--------------|
| Shows | What happens (business view) | How it is implemented |
| Processes | Business activities | Programs, people, devices |
| Data stores | Logical data groups | Actual files/databases |
| Technology | Hidden | Explicit |
| Example label | "Validate Order" | "Validate Order (by Clerk, MS-Access)" |

**In short:** logical = implementation-free 'what'; physical = technology-bound 'how'.

### **7(c). Create a data dictionary for the user-registration DFD. (6)**

| Data item | Definition |
|-----------|------------|
| User_details | = email + name + phone |
| email | = local_part + "@" + domain |
| name | = first_name + [middle_name] + last_name |
| phone | = 10 { digit } 10 |
| ID | = 6 { digit } 6 (system-generated unique key) |
| valid_user_details | = email + name + phone (after validation) |
| user_data | = ID + name + email + phone |

Notation: `+` = and (sequence), `[ ]` = optional, `{ }` = repetition, `|` = or.

### **8(a). Coding standards and guidelines. (7)**

**Coding standards** are mandatory rules; **guidelines** are recommended best practices — both make code uniform, readable and maintainable.
**Standards:** consistent naming conventions; indentation & formatting rules; header/comment rules per module; limits on global variables; standard error-handling and return conventions.
**Guidelines:** keep functions short and single-purpose (high cohesion); avoid deep nesting and `goto`; avoid 'clever' obscure code; use symbolic constants not magic numbers; comment *why*, not *what*; minimise side effects; follow the style guide consistently.
**Benefits:** readability, easier debugging/maintenance, fewer errors, smoother teamwork and review.

### **8(b). Overall testing process / activities (with block diagram). (8)**

The testing process proceeds through levels shown by the **V-model**, each with its own test plan derived from the matching development phase.
**Activities/flow:** (1) Test planning — strategy, scope, resources. (2) Test-case design — black-box & white-box. (3) Unit testing — each module (drivers/stubs). (4) Integration testing — module interfaces (top-down/bottom-up). (5) System testing — whole system vs requirements. (6) Acceptance testing — customer validation. (7) Defect reporting & regression testing after fixes. Each level feeds defects back for correction and re-test.

### **9(a). What are PERT and Gantt charts? (5)**

**PERT** is a network scheduling tool that models activities and dependencies, uses three time estimates (optimistic O, most-likely M, pessimistic P) to compute expected time per activity, and finds the **critical path** (longest path = minimum project duration). Suits uncertain durations.
**Gantt chart** is a bar chart where each task is a horizontal bar on a calendar showing start, end, duration and overlap; simple and ideal for tracking progress. PERT shows dependencies/critical path; Gantt shows the timeline visually.

### **9(b). For the activity table (O/M/P): network, critical path, expected completion, variation. (10) — NUMERICAL**

**Step 1** — expected time te=(O+4M+P)/6 and variance σ²=((P−O)/6)²:

| Task | Pred. | O | M | P | te | σ² |
|------|-------|---|---|---|-----|-----|
| A | - | 1 | 1 | 7 | 2.00 | 1.00 |
| B | - | 1 | 4 | 7 | 4.00 | 1.00 |
| C | - | 2 | 2 | 8 | 3.00 | 1.00 |
| D | A | 1 | 1 | 1 | 1.00 | 0.00 |
| E | B | 2 | 5 | 14 | 6.00 | 4.00 |
| F | C | 2 | 5 | 8 | 5.00 | 1.00 |
| G | D,E | 3 | 6 | 15 | 7.00 | 4.00 |
| H | F,G | 1 | 2 | 3 | 2.00 | 0.11 |

**Step 2** — paths: A→D→G→H = 2+1+7+2 = 12; **B→E→G→H = 4+6+7+2 = 19**; C→F→H = 3+5+2 = 10.
**Step 3** — results: Critical path = **B→E→G→H**; expected completion = **19 days**. Variance of critical path = σB²+σE²+σG²+σH² = 1+4+4+0.11 = **9.11**; standard deviation = √9.11 = **3.02 days**.

### **10(a). Use-case diagram for the mobile-service system. (7)**

_Diagram: actor **Customer** performs **Login** (first attempt **Register** «extends» it), **Pay Money** (with **Print Receipt** as an optional «extend»), processed through the external actor **Banking System**._
**Explanation:** Customer logs in; Register extends the first login. A logged-in customer pays money monthly, with Print Receipt as an optional extension. Payment goes through the external Banking System (credit card / net banking are alternative flows).

### **10(b). Types of messages in a UML sequence diagram (with examples). (8)**

- **Synchronous** (solid line, filled arrowhead): sender waits for the reply. e.g. `account.withdraw(amt)`.
- **Asynchronous** (solid line, open arrowhead): sender does not wait. e.g. `sendNotification()`.
- **Return** (dashed line, open arrowhead): the reply to a call. e.g. balance returned.
- **Self / recursive:** an object messages itself (loop arrow). e.g. `this.validate()`.
- **Create:** creates a new object (arrow to a new lifeline). e.g. `new Order()`.
- **Destroy:** terminates an object (ends its lifeline with an X). e.g. `delete session`.

### **11(a). Problems if two modules have high coupling and low cohesion. (4)**

- **Ripple effect:** high coupling means a change in one module forces changes in many — error-prone maintenance.
- **Low reusability:** tightly coupled, unfocused modules cannot be reused independently.
- **Hard to test/understand:** low cohesion means a module does many unrelated things.
- **Reduced reliability:** faults propagate across interdependent modules.

Good design seeks **low coupling and high cohesion**.

### **11(b). What is a structure chart? (3)**

A design tool showing the **hierarchical organisation of modules** and their call relationships. Rectangles = modules; arrows = one module calling another; labelled arrows (data couples with circle tail, control couples with filled circle) = parameters/flags passed. It is the output of structured (functional) design, derived from DFDs by transform/transaction analysis.

### **11(c). Structure chart for the bonus-generation DFD. (8)**

_Diagram: top **Bonus System** module coordinates subordinates — **Get emp_no, Validate emp_no, Find employee, Compute Bonus, Update Record**._
**Explanation:** obtained by transform-analysis of the DFD (central transform = compute bonus; afferent = get/validate/find; efferent = update). Data couples such as emp_no and employee details flow along the call arrows.

# **Paper 3 — ESC501 (2024–2025)**
_MCQ Group A · basis-path testing & cyclomatic complexity_

## **Group A — MCQs (1 mark each) — correct option in bold**

| Question | Answer |
|----------|--------|
| (I) Physical element existing at runtime in UML | **A node.** |
| (II) Each time a defect is detected & fixed, reliability | **Increases.** |
| (III) Alpha and Beta testing are forms of | **Acceptance testing.** |
| (IV) CMMI maturity levels | **Five.** |
| (V) Most important feature of spiral model | **Risk management.** |
| (VI) Hard to estimate size early when only a spec is available | **True.** |
| (VII) A software configuration item is all or part of | **All of the mentioned above.** |
| (VIII) Program testing affirms software quality economically | **True.** |
| (IX) Collection of operations specifying a service of a class/component | **Interface.** |
| (X) Number of adjustment factors in function point analysis | **14.** |
| (XI) Quality-control function whose goal is to find errors | **Software testing.** |
| (XII) A software testing strategy should be | **Flexible.** |

## **Group B — Short Answers (5 marks each)**

### **2. Advantages of the prototyping model over the waterfall model. (5)**

- **Early user feedback:** a working prototype clarifies and validates requirements before full development.
- Handles **unclear/changing requirements** well, unlike rigid waterfall.
- **Reduces risk** of building the wrong product; misunderstandings surface early.
- Higher user satisfaction and involvement.
- Errors and missing functions detected earlier, lowering rework cost.

### **3. Short note: Verification and Validation. (5)**

**Verification** — "are we building the product right?" Checks conformance to spec at each stage without executing code (reviews, walkthroughs, inspections).
**Validation** — "are we building the right product?" Checks that the finished software meets the user's actual needs by executing it (testing).
Together V&V ensure correctness (vs spec) and fitness for purpose (vs user needs).

### **4. Short note: Structure chart. (5)**

A structure chart depicts the **hierarchy of modules** and their invocation relationships in a structured design. Modules are rectangles; a line with an arrow shows a call; data couples (open-circle arrows) and control couples (filled-circle arrows) show passed parameters/flags. Derived from DFDs by transform/transaction analysis; shows top-down decomposition and helps assess coupling and cohesion.

### **5. What is a data dictionary and the significance of its use in design? (5)**

A centralised definition of all data elements, flows and stores (name, type, structure, length, meaning).
**Significance:** removes ambiguity; ensures consistent use across DFDs and modules; documents data for the team; supports validation, design and maintenance; aids database design; provides traceability between requirements, design and implementation.
**Example:** `Order = order_id + date + customer_id + 1{item}n`.

### **6. Why are "low coupling and high cohesion" features of good design? (5)**

**Low coupling** makes modules independent, so a change in one rarely affects others → easier maintenance, testing and reuse, fewer ripple-effect bugs. **High cohesion** means each module performs one well-defined task → easy to understand, test, reuse. Together they produce a modular, maintainable, reliable, reusable design.

## **Group C — Long Answers (15 marks each)**

### **7. Integration vs system testing; functional testing; how test cases help; should developers test; bug vs error. (15)**

**Integration vs system testing:** integration testing checks interfaces between combined modules; system testing checks the complete system against all requirements (functional + non-functional).
**Functional testing:** black-box testing verifying functions/behaviour against requirements, ignoring internal code.
**How test cases help:** a test case (ID, preconditions, input, steps, expected output) makes testing repeatable, objective, measurable and traceable to requirements; documents coverage.
**Should developers test?** Developers should do unit/white-box testing of their own code, but **independent testers** should do system/acceptance testing — developers are biased toward their assumptions. A mix is recommended, with independence at higher levels.
**Bug vs error:** an **error** is a human mistake; a **bug/fault/defect** is the resulting flaw in the code; on execution a defect may cause a **failure**.

### **8. What is Agility, an Agile process, and the Agile Manifesto? (15)**

**Agility** is the ability to respond quickly and effectively to change — in requirements, technology or environment — while continuously delivering value.
**Agile process:** an iterative, incremental process delivering working software in short cycles, with continuous customer collaboration, self-organising teams and frequent feedback (e.g. Scrum, XP, Kanban).
**The Agile Manifesto (4 values):**
1. Individuals and interactions over processes and tools.
2. Working software over comprehensive documentation.
3. Customer collaboration over contract negotiation.
4. Responding to change over following a plan.

("While there is value in the items on the right, we value the items on the left more.") Supported by 12 principles emphasising early/continuous delivery, welcoming change, frequent delivery and simplicity.

### **9. Basis-path testing of "Simple Subtraction"; test cases; black-box vs white-box. (15) — NUMERICAL**

Program: `input(x,y); if x>y then z=x−y else z=y−x; output(z)`.
**Cyclomatic complexity V(G):**
- V(G) = E − N + 2 = 6 edges − 6 nodes + 2 = **2**.
- or V(G) = P + 1 = 1 predicate (the if) + 1 = **2**.

**Independent paths (= 2):** Path 1: 1→2→3→5→6 (x>y true); Path 2: 1→2→4→5→6 (x>y false).
**Test cases:** (1) x=5, y=3 ⇒ true branch, z=2. (2) x=3, y=5 ⇒ false branch, z=2.
**Black-box vs white-box:** black-box tests behaviour from requirements without seeing code (equivalence/boundary); white-box (used here) tests internal logic/paths using code structure (statement/branch/path). Basis-path testing is a white-box technique.

### **10. For bin_search: draw the CFG, define cyclomatic complexity, compute it. (15) — NUMERICAL**

**Cyclomatic complexity** is a white-box metric measuring the number of linearly independent paths through a program — its logical complexity and the minimum number of test cases for branch coverage.
**Computation (three formulas agree):**
- V(G) = P + 1, where P = predicate nodes. The `while` and two `if` conditions give P = 3 ⇒ V(G) = **4**.
- V(G) = E − N + 2 also gives **4**.
- V(G) = enclosed regions + 1 = **4**.

So at least **4 independent paths / test cases** are needed to cover all branches.

### **11. Factor deciding project success? Why software projects differ? Characteristics. (15)**

**Factor deciding success:** delivered on time, within budget, meeting requirements and quality, with satisfied users — driven by good project management, estimation, requirement clarity and risk control.
**Why software projects differ:**
- **Invisibility:** software is intangible; progress is hard to measure.
- **Complexity:** very high logical complexity per unit cost.
- **Conformity & changeability:** requirements change frequently.
- **No wear-out:** failures come from latent defects, not physical degradation.
- **Difficult estimation** of size/effort, especially early.

**Characteristics:** uncertain/changing requirements, high human dependence, intangible deliverable, difficulty of measurement, rapid technology change, dominance of process and people over raw materials.

# **Paper 4 — ESC501 (2022–2023)**
_CMMI · function-point & COCOMO numericals_

## **Group A — MCQs (1 mark each) — correct option in bold**

| Question | Answer |
|----------|--------|
| (I) CMMI combines multiple ___ into one framework | **maturity models.** |
| (II) Use of CMMI | **Streamlines process improvement.** |
| (III) Building block of UML | **All of the mentioned** (Things, Relationships, Diagrams). |
| (IV) V&V activities | **All of the mentioned above.** |
| (V) To achieve good design, modules should have | **Low coupling, high cohesion.** |
| (VI) Planning task = estimation of resources | **True.** |
| (VII) 'Structural relationship: objects of one thing connected to objects of another' | **Association.** |
| (VIII) CM scenario involves a ___ in charge of a software group | **Project manager.** |
| (IX) CASE tool is | **Computer-Aided Software Engineering.** |
| (X) Critical-path activities have slack time of | **0.** |
| (XI) The SCM repository is the set of | **Mechanisms and data structures.** |
| (XII) SCM is a set of ___ activities | **Change management.** |

## **Group B — Short Answers (5 marks each)**

### **2. Short note: Rayleigh curve. (5)**

Models how manpower/effort is distributed over a project's timeline. Effort starts low, rises to a peak (around design/coding), then tapers off — following the Rayleigh distribution. It underlies the **Putnam (SLIM)** estimation model. It shows staffing should build up and wind down gradually, and that compressing schedule sharply raises peak effort/cost.

### **3. Discuss the basic COCOMO model. (5)**

Basic COCOMO (Boehm) estimates effort and time from size in KLOC. `E = a(KLOC)^b` person-months; `D = c(E)^d` months, with constants by mode: Organic (2.4, 1.05 — small/familiar), Semi-detached (3.0, 1.12 — medium), Embedded (3.6, 1.20 — large/constrained). It uses only size, so it's a quick early estimate; Intermediate/Detailed COCOMO add cost drivers for accuracy.

### **4. Short note: Software project plan. (5)**

The document defining how a project will be executed and controlled. Covers: scope and objectives; estimates (size, effort, cost via COCOMO/FPA); schedule (WBS, Gantt/PERT, milestones); resource & staffing plan; risk management plan; QA and configuration-management plans; monitoring/control mechanisms. It is the baseline against which progress is tracked.

### **5. Short note: Re-engineering legacy systems. (5)**

Software re-engineering examines and modifies an existing (legacy) system to reconstitute it in a new, improved form while preserving functionality. **Steps:** reverse engineering (recover design from old code) → restructuring/improvement → forward engineering (rebuild with new technology). Done to reduce maintenance cost, improve quality/maintainability, migrate platforms and extend life — cheaper and lower-risk than building from scratch.

### **6. Short note: White-box testing. (5)**

White-box (structural/glass-box) testing tests the internal logic and structure of code, requiring source knowledge. **Techniques:** statement coverage, branch/decision coverage, path coverage, condition coverage, basis-path testing using the CFG and cyclomatic complexity. Usually done by developers at the unit level. **Advantage:** exercises internal paths, finds logic errors; **limitation:** cannot find missing requirements, costly for large code.

## **Group C — Long Answers (15 marks each)**

### **7(a). Life-cycle model that incorporates the risk factor. (6)**

The **Spiral model**. Iterative; each loop has four quadrants — determine objectives, identify & resolve risks (via prototypes), develop & verify, plan the next iteration. Risk analysis at the start of every loop is its defining feature, suiting large, high-risk projects.

### **7(b). Context-level and Level-1 DFD for the store (paints & hardware) system. (9)**

**Context (Level-0):** a single process 'Store Management System' with external entities Customer, Supplier; flows: Customer→order→System, System→bill/items→Customer, Supplier→item supply/scheme→System, System→purchase order→Supplier.
**Level-1** explodes the system into sub-processes: 1.0 Process Order, 2.0 Manage Inventory, 3.0 Register Customer/Supplier, 4.0 Apply Discount/Scheme, 5.0 Maintain Transactions, with data stores D1 Customer, D2 Items/Stock, D3 Suppliers, D4 Transactions. Each order checks stock (D2); if unavailable a purchase order goes to the supplier; regular customers get discounts; all transactions recorded in D4.

### **8(a). How is FPA applied to size estimation? Why is FPA better than LOC? (7)**

FPA measures size from user-visible functionality in five components — External Inputs (EI), External Outputs (EO), External Inquiries (EQ), Internal Logical Files (ILF), External Interface Files (EIF). Each is counted, weighted by complexity to give the **Unadjusted Function Point (UFP)**, then multiplied by the **Value Adjustment Factor (CAF)** from 14 general system characteristics.

`FP = UFP × (0.65 + 0.01 × ΣFi)`

**Why FPA > LOC:** language-independent (LOC varies by language); estimable early from requirements (LOC known only after coding); reflects user functionality not coding style; allows fair productivity comparison across projects/technologies.

### **8(b). Compute UFP and adjusted FP: 10 low EI, 12 high EO, 20 low ILF, 15 high EIF, 12 avg EQ, VAF = 1.10. (8) — NUMERICAL**

| Component | Count × weight | FP |
|-----------|----------------|-----|
| External Input (low = 3) | 10 × 3 | 30 |
| External Output (high = 7) | 12 × 7 | 84 |
| Internal Logical File (low = 7) | 20 × 7 | 140 |
| External Interface File (high = 10) | 15 × 10 | 150 |
| External Inquiry (avg = 4) | 12 × 4 | 48 |

**UFP = 30+84+140+150+48 = 452.**
**Adjusted FP = UFP × VAF = 452 × 1.10 = 497.2.**

### **9(a). Define coupling and cohesion; types of coupling. (5)**

**Coupling** = interdependence between modules (low is good). **Cohesion** = how strongly a module's elements serve one task (high is good).
**Types of coupling (high→low):** Content (alters another's internals) → Common (shared global data) → External (shared external format/device) → Control (control flag) → Stamp (whole record passed) → **Data** (simple parameters — best).

### **9(b). Why are low coupling and high cohesion features of good design? (4)**

Low coupling ⇒ modules independent, changes don't ripple, modules reusable and easier to test. High cohesion ⇒ each module has a single clear purpose, making it understandable, testable, reusable. Together: a modular, maintainable, reliable design.

### **9(c). Compute function-point value: I/P=30, O/P=62, inquiries=24, files=8, interfaces=2 (all average). (6) — NUMERICAL**

Average weights: EI=4, EO=5, EQ=4, ILF=10, EIF=7.

| Component | Count × weight | FP |
|-----------|----------------|-----|
| Inputs (4) | 30 × 4 | 120 |
| Outputs (5) | 62 × 5 | 310 |
| Inquiries (4) | 24 × 4 | 96 |
| Files / ILF (10) | 8 × 10 | 80 |
| Interfaces / EIF (7) | 2 × 7 | 14 |

**UFP = 120+310+96+80+14 = 620.**
CAF (all 14 factors average = 3) = 0.65 + 0.01×(14×3) = 0.65 + 0.42 = **1.07**.
**FP = UFP × CAF = 620 × 1.07 = 663.4.**

### **10. What is regression testing? alpha testing? beta testing? (15)**

**Regression testing:** re-running existing test cases after a change to ensure it has not broken previously working functionality. Essential during maintenance, often automated; focuses on affected areas plus core features.
**Alpha testing:** in-house at the developer's site by internal testers (or invited users in a controlled environment) before release.
**Beta testing:** by real users at their own sites in the actual environment, after alpha, to gather field feedback.
**Relationship:** alpha → beta are pre-release/acceptance testing; regression runs throughout whenever code changes.

### **11. 'Software doesn't wear out' — justify. IEEE definition. Software vs hardware. (15)**

**'Software doesn't wear out':** hardware fails more over time due to physical wear (the 'bathtub curve' rises again at end of life). Software has no physical parts, so it doesn't degrade with use; its failure rate is high early (latent defects), drops as defects are fixed, but rises slightly at each change due to maintenance side-effects — it **deteriorates** (from changes) rather than wears out.
**IEEE definition:** Software engineering is "the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software; that is, the application of engineering to software."

| Software | Hardware |
|----------|----------|
| Developed/engineered, not manufactured | Manufactured |
| Doesn't wear out (deteriorates via change) | Wears out physically |
| Mostly custom-built | Often assembled from standard parts |
| Intangible, logical | Tangible, physical |
| Defects are design/logic errors | Defects from wear & material |

# **Part 5 — Predicted Questions**
_What the university repeats — most likely to appear_

> **Pattern across the four papers** — prioritise these: Coupling & Cohesion (types) · Verification vs Validation · Testing (levels, black/white-box, alpha/beta/regression) · DFD (levels, physical/logical, data dictionary) · Spiral/risk model · COCOMO / Function Point numericals · UML (use case, sequence, class, structure chart) · CMM/CMMI · Agile/Scrum (new, 2024-25) · PERT/Gantt + critical path numerical · Software characteristics / 'doesn't wear out' / IEEE definition · SCM · Cyclomatic complexity / basis-path.

## **The 16 Most Likely Questions**

**P1. Define coupling and cohesion. Explain all types of each. (6–7)** ★
Coupling = interdependence (want low): content > common > external > control > stamp > data (best). Cohesion = single-purpose (want high): coincidental < logical < temporal < procedural < communicational < sequential < functional (best). _(Paper 1 Q10.)_

**P2. Distinguish Verification and Validation. (5)** ★
Verification = 'building the product right' (vs spec, static, reviews); Validation = 'building the right product' (vs user needs, dynamic, testing).

**P3. Explain the Spiral model and why it is risk-driven. (5–7)** ★
Iterative loops with four quadrants; explicit risk identification & resolution each loop; suited to large high-risk projects. _(Paper 4 Q7a.)_

**P4. COCOMO numerical — effort & time for a given KLOC, or schedule-compression cost. (5–7)** ★
E=a(KLOC)^b, D=c(E)^d. Schedule compression: cost ∝ 1/T⁴; e.g. 15→12 months ⇒ ×2.44. _(Paper 1 Q11a.)_

**P5. Function Point numerical — compute UFP and adjusted FP. (6–8)** ★
UFP = Σ(count×weight) for EI/EO/EQ/ILF/EIF; FP = UFP×(0.65+0.01×ΣFi). _(Paper 4 Q8b & Q9c.)_

**P6. PERT numerical — expected time, critical path, variance. (8–10)** ★
te=(O+4M+P)/6, σ²=((P−O)/6)²; critical path = longest path; project variance = Σ of critical activities' variances. _(Paper 2 Q9b.)_

**P7. Cyclomatic complexity — draw CFG and compute V(G). (8–15)** ★
V(G)=E−N+2 = P+1 = regions+1; gives the number of independent paths/test cases. _(Paper 3 Q9, Q10.)_

**P8. Levels of testing / overall testing process (V-model). (7–8)** ★
Unit → Integration → System → Acceptance, each mapped to a development phase. _(Paper 2 Q8b.)_

**P9. Black-box vs white-box testing. (5)** ★
Black-box = behaviour from requirements, no code (equivalence/boundary). White-box = internal logic/coverage (statement/branch/path, basis-path).

**P10. DFD: physical vs logical / context vs detailed / essential observations. (5–7)** ★
Logical = what (tech-free); physical = how. Context (Level-0) = whole system as one process; lower levels decompose it; flows must be balanced. _(Paper 1 Q8c, Paper 2 Q7.)_

**P11. Differentiate Waterfall and Agile; what is Scrum. (5–7)** ★
Waterfall = linear, fixed requirements, late delivery; Agile = iterative, change-friendly, frequent increments. Scrum = sprints, roles (PO/SM/Team), ceremonies. _(Paper 1 Q5, Q9.)_

**P12. CMM/CMMI — levels, use, shortcomings. (5)** ★
CMMI has 5 maturity levels (Initial, Managed, Defined, Quantitatively Managed, Optimizing); streamlines process improvement; shortcomings: bureaucratic, costly, no product-quality guarantee. _(Paper 1 Q6.)_

**P13. 'Software doesn't wear out'; IEEE definition; software vs hardware. (10–15)** ★
No physical wear; deteriorates via maintenance side-effects. IEEE: systematic, disciplined, quantifiable approach. _(Paper 4 Q11.)_

**P14. Feasibility study and its types. (5)** ★
Technical, Economic (cost-benefit), Operational, Schedule, Legal feasibility → go/no-go report. _(Paper 2 Q2.)_

**P15. Software Configuration Management — necessity and activities. (5–6)** ★
Controls change to artefacts: identification, version/change control, status accounting, audit; prevents chaos, ensures traceability. _(Paper 1 Q11c.)_

**P16. Draw a use-case / class / sequence / structure chart for a given problem. (7–8)** ★
Know the notation: use case (actors, ellipses, «include»/«extend»), class (3 compartments, association/aggregation/composition/inheritance), sequence (lifelines + messages), structure chart (module hierarchy + data couples). _(Paper 2 Q10, Q11c.)_

> **Night-before priority:** (1) master the 4 numericals — COCOMO, Function Point, PERT, Cyclomatic complexity (guaranteed, fast marks); (2) Coupling/Cohesion types, V&V, testing levels, DFD, Spiral, Agile/Scrum (high-frequency descriptive); (3) practise drawing use-case, class, sequence and structure-chart notation. For any 'difference' question, answer with a comparison table.
