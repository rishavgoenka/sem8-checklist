# Solved Previous-Year Papers — E-Commerce and ERP
### OEC-CS802A / OECIT802A · 2022-23, 2023-24, 2024-25
### Full Marks: 70 | Time: 3 Hours

> **How to read this:** Papers solved Group A → B → C. Marks badge on every question. **Part 4 = Pattern. Part 5 = Predictions.** For any "difference/compare" question → write a table. For any 15-mark question → use sub-headings, aim for 4–6 sections.

---

## ⚡ Quick Reference Cheat Sheet *(Memorise Before Anything Else)*

| Concept | One-Line Answer |
|---------|-----------------|
| **EOQ** | Economic Order Quantity — order size that minimises total inventory holding + ordering cost |
| **SET protocol** | Used for secure card payments online (Visa + Mastercard standard) |
| **EDI** | Electronic Data Interchange — computer-to-computer transfer of standard business documents |
| **VMI** | Vendor Managed Inventory — supplier manages buyer's stock |
| **VAN** | Value Added Network — private network for secure EDI transmission |
| **CGI** | Common Gateway Interface — protocol for web servers to run external programs |
| **CRL** | Certificate Revocation List — list of revoked digital certificates |
| **CPE** | Customer-Premises Equipment — hardware at customer's site (modem, router, phone) |
| **4 C's of E-Commerce** | Convergence, Collaborative Computing, Content Management, Call Center |
| **SCM 4 C's** | Collaboration, Co-operation, Co-ordination, **Communication** |
| **Stored-value card** | Pre-loaded card; value decreases with use (e.g., gift card) |
| **Debit card** | Amount immediately debited from buyer's account at purchase |
| **DES vs RSA** | DES = symmetric, fast, 56-bit. RSA = asymmetric, public/private key pair, used for signatures |
| **RSA in one line** | C = M^e mod n (encrypt) · M = C^d mod n (decrypt) |

---

# Paper 1 — 2022–2023
*CS/B.TECH(N)/EVEN/SEM-8/8261/2022-2023/I124*

## Group A — Very Short Answers [1 × 10 = 10]
*Answer any ten*

| # | Question | Answer |
|---|----------|--------|
| (i) | What is 'EOQ' in Inventory control? | Economic Order Quantity — the order quantity that minimises total cost of ordering + holding inventory. |
| (ii) | What is URL? | Uniform Resource Locator — the web address used to locate a resource (page, file) on the internet. |
| (iii) | Compared to B2C e-commerce, B2B e-commerce is ______. | **Larger in transaction value but fewer in number of transactions** (longer sales cycle, bulk orders). |
| (iv) | What is email marketing? | Using email (newsletters, promotions, cart reminders) to promote products/services and build customer relationships. |
| (v) | EDI stands for ______. | **Electronic Data Interchange**. |
| (vi) | VMI stands for ______. | **Vendor Managed Inventory** — supplier monitors and replenishes the buyer's stock automatically. |
| (vii) | What type of E-Commerce is tenders and submission of application? | **B2G (Business-to-Government) / E-Governance** type E-Commerce. |
| (viii) | What is called sale or purchase of items without physically visiting a shop? | **E-Commerce** (online shopping). |
| (ix) | What is E-Business? | The use of IT to conduct ALL business processes (transactions + internal operations like HR, manufacturing) digitally — broader than e-commerce. |
| (x) | Purchase of machinery/equipment/materials must go through the ______ department. | **Purchase / Procurement department**. |
| (xi) | What is a virtual storefront? | A website that simulates a physical retail store, displaying products in catalogue format for online browsing and purchase. |
| (xii) | SMTP refers to ______. | **Simple Mail Transfer Protocol** — the internet standard protocol for sending email. |

---

## Group B — Short Answers [5 × 3 = 15]
*Answer any three*

### Q2. What are the 4 C's of Digital Marketing? [5]
**Note:** Trap question — syllabus's "Four C's" (Unit 5) are Convergence, Collaborative Computing, Content Management, Call Center. If asked specifically about *Digital Marketing's* 4 C's (a different, generic marketing-theory concept), answer:

- **Customer** (not Product) — focus on customer needs, not just what is sold
- **Cost** (not Price) — total cost to the customer, not just sticker price
- **Convenience** (not Place) — ease of purchase across channels
- **Communication** (not Promotion) — two-way dialogue rather than one-way advertising

> If the paper means the syllabus's Four C's of E-Commerce instead, answer with Convergence, Collaborative Computing, Content Management, Call Center (see Unit 5 in notes.md) — read the question stem carefully in the exam hall.

---

### Q3. Explain Internet Marketing in detail. [5]
**Internet Marketing (E-Marketing):** Promoting products/services and building customer relationships using digital channels — websites, email, search engines, social media, and mobile apps.

**Key components:**
- **SEO/SEM** — improving visibility on search engines (organic + paid)
- **Social media marketing** — engagement via Instagram, Facebook, etc.
- **Email marketing** — newsletters, promotional campaigns, cart-recovery emails
- **Content marketing** — blogs/videos to attract and retain audience
- **Affiliate marketing** — partners promote products for commission

**Advantages over traditional marketing:** Global reach at low cost, precise measurability (CTR, conversions), personalisation based on user behaviour, real-time campaign adjustment, two-way interaction with customers.

---

### Q4. What are the features of E-commerce? [5]
- **Ubiquity** — accessible anywhere, anytime (not tied to a physical location)
- **Global reach** — crosses geographical and national boundaries
- **Universal standards** — uses common internet/web technology standards
- **Richness** — supports video, audio, text messages simultaneously for marketing
- **Interactivity** — two-way communication between buyer and seller
- **Information density** — large amounts of information available cheaply and accurately
- **Personalisation/Customisation** — tailored content/offers based on user data

---

### Q5. Discuss EDI architecture. [5]
**EDI (Electronic Data Interchange) Architecture/Communication Model:**

1. **Originating application** generates business data (e.g., a purchase order)
2. **EDI Translator software** converts internal data into a standard EDI format (ANSI X12 / EDIFACT)
3. **Communication/transmission** — sent via VAN (Value Added Network) or direct internet (AS2 protocol) to the trading partner
4. **Receiving EDI Translator** converts the standard format back into the partner's internal data format
5. **Receiving application** processes data automatically — no manual re-entry

```
Sender App → EDI Translator → VAN/Internet → EDI Translator → Receiver App
```

_📝 Draw this as a box-and-arrow flow diagram in the exam — scores extra marks._

---

### Q6. Explain the internet industry structure with diagram. [5]
The Internet industry is structured in layers:

1. **Backbone providers** — own and operate the high-capacity fibre infrastructure (Tier-1 ISPs) that forms the internet's core
2. **Internet Service Providers (ISPs)** — purchase backbone access and provide connectivity to businesses/consumers (Tier-2/Tier-3)
3. **Online service providers / Content providers** — offer content, applications, and services over the connectivity (e.g., Google, Netflix, e-commerce sites)
4. **End users** — businesses and consumers who access content through ISPs

```
[Backbone/Tier-1 Providers] → [ISPs (Tier-2/3)] → [Content/Application Providers] → [End Users]
```

_📝 EXAM TIP: This diagram with labelled layers is a guaranteed 1-2 extra marks over a plain paragraph answer._

---

## Group C — Long Answers [15 × 3 = 45]
*Answer any three*

### Q7. (a) Benefits of electronic web commerce [5] · (b) Internet vs Intranet [5] · (c) What is Firewall? [3] · (d) Electronic Marketers [2]

#### (a) Benefits of Electronic Web Commerce [5]
- **Global market reach** without geographical limitation
- **Lower operational costs** — no physical storefront, reduced staffing
- **24×7 availability** — business never closes
- **Faster transactions** — instant order processing and confirmation
- **Better customer data & personalisation** — enables targeted marketing
- **Wider product comparison** for customers, increasing trust and sales

#### (b) Internet vs Intranet [5]

| Dimension | Internet | Intranet |
|---|---|---|
| Access | Public, open to anyone worldwide | Private, restricted to an organisation's employees |
| Ownership | No single owner — decentralised | Owned/controlled by one organisation |
| Security | Lower — open access | High — protected by firewall, internal-only |
| Purpose | Global communication, e-commerce, public info | Internal communication, document sharing |
| Example | Browsing websites, online shopping | Company's internal HR portal |

#### (c) What is Firewall? [3]
A **Firewall** is a network security device/software that monitors and controls incoming/outgoing traffic based on predetermined rules, acting as a barrier between a trusted internal network and an untrusted external network (e.g., the internet). It filters traffic by IP address, port, and protocol to block unauthorised access.

#### (d) Electronic Marketers [2]
Electronic Marketers are businesses/individuals who use digital channels (websites, email, social media, search engines) to promote and sell products/services, replacing or supplementing traditional advertising and sales methods with online tools and data-driven targeting.

---

### Q8. (a) Explain any 5 types of Electronic Payment Systems [10] · (b) Impact of e-commerce on Marketing and Finance/Accounting [5]

#### (a) Five Types of Electronic Payment Systems [10]

1. **Credit Card** — customer borrows funds up to a limit from the issuing bank; payment settled later in the billing cycle. Most widely used online payment method.
2. **Debit Card** — amount is immediately deducted from the customer's bank account at the time of purchase, requiring sufficient balance.
3. **E-Cash (Digital Cash)** — a digital representation of currency stored on a device/wallet, transferred electronically; characteristics include monetary value, storability, security (cryptographic), and (in some forms) anonymity.
4. **E-Cheque** — electronic equivalent of a paper cheque; instructs a bank to transfer funds, signed and transmitted digitally, often via digital signatures for authentication.
5. **Smart Card / Stored-Value Card** — a card with an embedded microchip or pre-loaded value; stored-value cards (gift cards, transit cards) decrease in value with each use and are not linked to a bank account.
6. *(Bonus 6th if asked for more)* **Electronic Fund Transfer (EFT) / UPI** — direct bank-to-bank transfer using a unique identifier (account number, UPI ID) without physical card presentation.

For each: briefly explain (a) how it works, (b) one security feature, (c) one example/use case — that structure earns full marks per type.

#### (b) Impact of E-Commerce on Marketing and Finance/Accounting [5]

**Marketing impact:** Enables targeted, data-driven campaigns; reduces advertising cost compared to traditional media; allows real-time campaign performance tracking; supports personalisation at scale.

**Finance & Accounting impact:** Enables real-time transaction recording and reconciliation; reduces manual paperwork via automated invoicing; improves cash flow visibility; integrates with ERP systems for automated financial reporting; requires new controls for digital fraud/payment security.

---

### Q9. (a) Define Convergence, Collaborative Computing, Content Management & Call Center [10] · (b) How is e-mail useful for E-Commerce? Is it secure? [5]

#### (a) The Four C's — Definitions [10]

**Convergence:** The integration/merging of previously distinct technologies — computing, telecommunications, and media — into a single unified platform or device, enabling seamless delivery of voice, data, and video (e.g., a smartphone combining phone + camera + internet).

**Collaborative Computing:** Technology systems enabling multiple individuals/teams (often geographically dispersed) to work together on shared tasks, documents, or designs in real time or asynchronously (e.g., shared CAD design sessions, simultaneous engineering with version control and access security).

**Content Management:** The systematic creation, organisation, storage, and publishing of digital information (text, images, video, product descriptions) using authoring tools and Content Management Systems (CMS) — including content partnerships, repositories, and content marketing strategies.

**Call Center:** A centralised office/department that handles a large volume of customer interactions (phone, chat) for support, sales, or service — operating in inbound, outbound, blended, or virtual modes, using equipment like ACD, IVR, and CTI systems.

#### (b) E-mail's Usefulness for E-Commerce & Security [5]

**Usefulness:** Email enables order confirmations, customer support, promotional/cart-recovery campaigns, newsletters, and transactional notifications (shipping updates, invoices) — providing a low-cost, scalable, and trackable communication channel between business and customer.

**Is it secure?** Standard email (SMTP) is **NOT inherently secure** — it can be intercepted, spoofed, or phished. To transact securely via email-linked processes, businesses must layer additional security: TLS encryption in transit, SPF/DKIM/DMARC to prevent spoofing, and never request sensitive payment data directly via plain email — instead, redirect to secure (HTTPS/SSL) payment gateways.

---

### Q10. (a) Distinguish between e-business and e-commerce [5] · (b) How E-Commerce is helpful to business success [5] · (c) Tangible and Intangible benefits of e-business [5]

#### (a) E-Business vs E-Commerce [5]

| Dimension | E-Commerce | E-Business |
|---|---|---|
| Scope | Narrower — buying/selling transactions online | Broader — ALL business processes via digital technology |
| Includes | Online transactions, payments, order processing | E-commerce + HR, supply chain, CRM, ERP, manufacturing |
| Relationship | A PART of E-Business | The SUPERSET |
| Example | Online shopping on Amazon | Amazon's entire digital operation including warehouse automation |

#### (b) How E-Commerce Helps Business Success [5]
- Expands market reach beyond local/regional boundaries to global customers
- Reduces operational costs (storefront, staffing, paper-based processes)
- Enables data-driven decision making via customer behaviour analytics
- Improves customer service through 24×7 availability and self-service options
- Increases competitiveness through faster response to market trends

#### (c) Tangible vs Intangible Benefits of E-Business [5]

| Type | Meaning | Examples |
|---|---|---|
| Tangible | Measurable, quantifiable, directly impacts cost/revenue | Reduced inventory cost, lower marketing cost, increased sales volume |
| Intangible | Non-measurable, improves quality/perception over time | Improved brand image, better customer satisfaction, competitive advantage |

---

### Q11. (a) Draw and explain the architecture of an online shopping e-commerce portal selling many types of goods [10] · (b) How E-Commerce is helpful to business success [5]

#### (a) Architecture of a Multi-Category Online Shopping Portal [10]

```
[Customer/Browser]
       ↓
[Web/Application Server] ←→ [Content/Product Catalogue Database]
       ↓
[Shopping Cart & Order Management Module]
       ↓
[Payment Gateway] ←→ [Bank/Card Network — SSL/SET secured]
       ↓
[Order Processing → Inventory/Warehouse Management System]
       ↓
[Logistics/Shipping & Delivery Tracking]
       ↓
[Customer Notification (Email/SMS) + Customer Support/Call Center]
```

**Explanation of each layer:**
- **Front-end (Presentation layer):** Website/app UI where customers browse categories, search products, view details
- **Product catalogue & database:** Stores product info, pricing, stock levels across categories (electronics, apparel, groceries, etc.)
- **Shopping cart & order management:** Tracks selected items, applies discounts/coupons, calculates totals
- **Payment gateway:** Securely processes payment via card/UPI/net-banking, often using SSL/SET protocols
- **Back-end/ERP integration:** Order triggers inventory deduction, warehouse picking, and accounting entries (links to Unit 12 ERP integration)
- **Logistics & fulfilment:** Coordinates with courier/delivery partners; provides tracking to customer
- **Customer support layer:** Call center/chatbot handles post-purchase queries, returns, complaints

_📝 EXAM TIP: Drawing this as labelled boxes with arrows showing data flow is explicitly requested ("Draw and explain") — a text-only answer loses marks even if correct._

#### (b) How E-Commerce is Helpful to Business Success [5]
*(Repeat structure from Q10b — global reach, cost reduction, data-driven decisions, 24×7 service, competitiveness.)*

---
---

# Paper 2 — 2023–2024
*CS/B.TECH(N)/EVEN/SEM-8/8261/2023-2024/I019*

## Group A — Very Short Answers [1 × 10 = 10]
*Answer any ten*

| # | Question | Answer |
|---|----------|--------|
| (i) | Name programming languages used to develop web applications. | HTML, CSS, JavaScript (front-end); PHP, Python, Java, Node.js, Ruby (back-end). |
| (ii) | Explain the meaning of E-procurement. | The business-to-business purchase and sale of supplies/services using the internet — automating purchase orders, approvals, and supplier transactions. |
| (iii) | Give an example where social media is used as a strategic tool for enhancing E-commerce business. | A brand running targeted Instagram/Facebook ad campaigns with direct "shop now" links, or using influencer partnerships to drive traffic to the online store. |
| (iv) | What do you mean by Collaborative Computing? | Technology systems enabling multiple geographically dispersed individuals/teams to jointly work on shared tasks/documents/designs (e.g., shared CAD sessions). |
| (v) | How do large companies monitor and track cargo deliveries to their customers? | Using GPS-based logistics tracking systems integrated with their supply chain/ERP systems, providing real-time shipment status updates to customers via tracking IDs. |
| (vi) | Give an idea about 'Stored-value card'. | A card pre-loaded with a fixed monetary value (not linked to a bank account); the value decreases as it is used (e.g., gift cards, metro/transit cards). |
| (vii) | What is the full form of VAN and what purpose is it used for? | **Value Added Network** — a private network used to securely transmit EDI documents between trading partners with added services like format translation and message tracking. |
| (viii) | Explain what do you mean by 'certificate revocation list (CRL)'. | A list maintained by a Certificate Authority (CA) of digital certificates that have been revoked before their expiry (e.g., due to key compromise) and should no longer be trusted. |
| (ix) | Give two applications of E-Commerce. | (1) Online retail shopping (Amazon, Flipkart); (2) Online banking/bill payment. |
| (x) | Give two applications of M-Commerce. | (1) Mobile banking/payment apps (UPI, wallets); (2) Location-based services like food delivery/ride-hailing apps. |
| (xi) | What according to you should be the ethical principles of E-Commerce? | Honesty in product representation, data privacy protection, fair pricing, transparency in terms/refund policy, and non-discrimination toward customers. |
| (xii) | Give an example in which an e-business focuses on brand identity as a strategy for their online business performance. | A company maintaining consistent logo, colour scheme, and tone of voice across its website, app, and social media to build brand recognition and trust (e.g., Nike's consistent branding across all digital touchpoints). |

---

## Group B — Short Answers [5 × 3 = 15]
*Answer any three*

### Q2. Explain with an example how cart reminders can be used for E-marketing. [5]
**Cart Reminders (Abandoned Cart Emails):** When a customer adds items to an online cart but leaves without completing the purchase, the e-commerce system automatically sends a follow-up email/notification reminding them of the items left behind.

**Example:** A customer adds a pair of shoes to their Myntra cart but closes the app. Within a few hours, they receive an email: "You left something behind!" showing the product image, often with a limited-time discount code to incentivise completing the purchase.

**Why it works:** Recovers potentially lost sales, re-engages the customer with minimal cost, and can be personalised/automated at scale using marketing automation tools.

---

### Q3. Identify the different steps in EDI implementation. [5]
1. **Identify business processes/documents** suitable for EDI (purchase orders, invoices)
2. **Select EDI standards** appropriate to industry/region (ANSI X12 for US, EDIFACT for international)
3. **Choose EDI software/translator** and communication method (VAN or AS2/internet)
4. **Set up trading partner agreements** and test data exchange formats
5. **Pilot test** with one trading partner before full rollout
6. **Go live and monitor** for errors/exceptions, with ongoing support

---

### Q4. Discuss the threats of E-Commerce. [5]
- **Phishing & social engineering** — tricking users into revealing credentials
- **Malware/ransomware** attacking servers or customer devices
- **DoS/DDoS attacks** — taking down e-commerce websites
- **Payment fraud** — stolen card details used for unauthorised purchases
- **SQL Injection** — stealing customer databases
- **Identity theft** — impersonation using stolen personal data
- **Insider threats** — employees misusing access to sensitive data

---

### Q5. Discuss the different ways by which the Internet helps E-Commerce. [5]
- **Global connectivity** — connects buyers and sellers worldwide, removing geographic barriers
- **Real-time communication** — instant order confirmation, live chat support
- **Information access** — enables product comparison, reviews, and price research
- **Payment processing** — supports secure online payment gateways
- **Marketing reach** — enables targeted digital advertising and social media promotion
- **Supply chain visibility** — supports real-time inventory and logistics tracking across partners

---

### Q6. Explain the meaning of Customer-premises equipment or customer-provided equipment (CPE). Give examples. [5]
**Customer-Premises Equipment (CPE):** Telecommunications/networking hardware located at the customer's (subscriber's) physical location rather than the service provider's premises, used to originate, route, or terminate communication.

**Examples:** Telephones, modems, routers, set-top boxes, fax machines, VoIP adapters, and other customer-side networking equipment used to connect to a service provider's network.

---

## Group C — Long Answers [15 × 3 = 45]
*Answer any three*

### Q7. (a) E-Commerce business models based on transaction type [8] · (b) Examples of these models [4] · (c) Challenges of E-Governance in India [3]

#### (a) Business Models Based on Transaction Type [8]

This refers to classification by **WHO transacts with WHOM**:

| Model | Full Form | Definition |
|---|---|---|
| B2B | Business-to-Business | Transactions between two businesses (manufacturer to wholesaler) |
| B2C | Business-to-Consumer | Business selling directly to individual end consumers |
| C2B | Consumer-to-Business | Individual consumers offer products/services to businesses, or set their own price |
| C2C | Consumer-to-Consumer | Transactions directly between individual consumers via a platform |

Also mention models based on **transaction TYPE** (a separate classification axis): Brokerage Model (commission per transaction), Advertising Model (ad revenue), Subscription Model (recurring fee), Merchant Model (direct retail sale).

#### (b) Examples [4]
- **B2B:** IndiaMART, Alibaba — a steel manufacturer selling to a car company
- **B2C:** Amazon, Flipkart, Myntra
- **C2B:** Freelancing platforms (Upwork), "name your price" travel booking sites
- **C2C:** OLX, eBay peer listings, Facebook Marketplace

#### (c) Challenges of E-Governance in India [3]
- **Digital divide** — unequal internet/device access across rural and urban India
- **Digital literacy gaps** — many citizens lack skills to use e-governance portals
- **Infrastructure & connectivity gaps**, especially in remote regions
- *(also valid: cybersecurity/privacy concerns, language barriers, interoperability across departments)*

---

### Q8. (a) What is Supply Chain Management? [5] · (b) Merits of implementing ERP before Supply Chain [5] · (c) Benefits of integrating Supply Chain and ERP systems [5]

#### (a) Supply Chain Management [5]
**SCM** is the coordinated management of the flow of goods, information, and finances as they move from supplier to manufacturer to wholesaler to retailer to the final consumer — encompassing planning, sourcing, production, and delivery. It is vital for e-commerce because it ensures product availability, reduces costs, and enables faster, trackable delivery.

#### (b) Merits of Implementing ERP Before Supply Chain [5]
- ERP creates a **single integrated data foundation** (inventory, finance, orders) that supply chain systems can build upon, avoiding duplicate/conflicting data
- Ensures **standardised processes** across departments before adding the complexity of multi-partner supply chain coordination
- Reduces the risk of **costly rework** — implementing SCM on top of fragmented legacy systems often requires redoing the integration later anyway
- Provides **real-time visibility** into inventory/production data that supply chain planning tools depend on for accurate forecasting

#### (c) Benefits of Integrating Supply Chain and ERP Systems [5]
- **End-to-end visibility** — from raw material procurement to final delivery, all tracked in one system
- **Improved demand forecasting** — ERP's sales/order data feeds directly into SCM planning tools
- **Reduced inventory costs** — better coordination prevents overstocking/stockouts
- **Faster order-to-cash cycle** — automated handoff between order, fulfilment, and billing
- **Better supplier collaboration** — shared data visibility through portals improves coordination

---

### Q9. (a) Discuss the security issues related to E-payments [9] · (b) Discuss your ideas about cryptocurrency as an e-payment mechanism [6]

#### (a) Security Issues Related to E-Payments [9]

| Threat | Protection Mechanism |
|---|---|
| Card data theft/skimming | Encryption (SSL/TLS), tokenization of card numbers |
| Phishing for payment credentials | User awareness, OTP/email verification, anti-phishing filters |
| Man-in-the-Middle interception | End-to-end encryption, secure protocols (HTTPS, SET) |
| Identity fraud/fake transactions | Two-factor authentication (2FA), OTP verification |
| Replay attacks | Digital signatures, timestamps, transaction nonces |
| Insider fraud at payment processor | Access control, audit logging, segregation of duties |
| Chargebacks/disputes | Clear digital transaction records, dispute resolution policies |

Structure your answer as: list 4-5 threats, pair each with ONE specific protection mechanism — that earns full marks systematically.

#### (b) Cryptocurrency as an E-Payment Mechanism [6]
**Advantages:** Decentralised — no central authority/bank needed; lower transaction fees especially for cross-border payments; blockchain immutability resists tampering/fraud; fast settlement compared to traditional banking rails.

**Concerns/Disadvantages:** High price volatility makes it risky as a stable payment medium; regulatory uncertainty (legal status varies by country, RBI caution in India); used in illicit transactions due to pseudonymity; lacks widespread merchant acceptance; energy-intensive mining (for proof-of-work coins).

**Balanced view:** Cryptocurrency shows promise for cross-border B2B payments and as a hedge asset, but for everyday consumer e-commerce, traditional card/UPI systems remain more practical due to stability and regulatory clarity.

---

### Q10. (a) Discuss different E-Commerce marketing strategies [6] · (b) Explain in detail how you will do E-marketing for your online bookstore [9]

#### (a) E-Commerce Marketing Strategies [6]
- **SEO/SEM** — improving organic and paid search visibility
- **Social media marketing** — engagement and ads on Instagram/Facebook/Twitter
- **Content marketing** — blogs, videos, guides to attract and retain audience
- **Affiliate marketing** — partners promote products for commission
- **Email marketing** — newsletters, promotions, cart-recovery campaigns
- **Influencer marketing** — leveraging social media personalities for brand reach

#### (b) E-Marketing Plan for an Online Bookstore [9]
1. **Target audience identification** — define segments (students, fiction readers, professionals) [1]
2. **SEO** — optimise book listing pages for search terms like "buy [genre] books online" [1]
3. **Content marketing** — book review blog, author interviews, reading lists to build authority [2]
4. **Social media campaigns** — Instagram posts featuring new releases, reader testimonials, giveaways [2]
5. **Email marketing** — welcome series, personalised recommendations based on browsing history, cart-recovery emails [2]
6. **Affiliate/influencer partnerships** — book bloggers/Bookstagrammers promoting titles for commission [1]
7. **Performance tracking** — monitor conversion rate, cart abandonment rate, email open rates to refine strategy

---

### Q11. (a) Differentiate between public key and private key cryptography [5] · (b) Outline the different services provided by SSL [5] · (c) Write the algorithm of RSA [5]

#### (a) Public Key vs Private Key Cryptography [5]

| Dimension | Private Key (Symmetric) | Public Key (Asymmetric) |
|---|---|---|
| Number of keys | One shared secret key | A key pair — public + private |
| Key secrecy | Both parties must keep the key secret | Public key shared freely; only private key secret |
| Speed | Faster | Slower |
| Example algorithm | DES, AES | RSA |
| Main use | Bulk data encryption | Digital signatures, key exchange, authentication |

#### (b) Services Provided by SSL [5]
- **Encryption** — scrambles data so it cannot be read if intercepted
- **Authentication** — verifies the server's (and optionally client's) identity using digital certificates
- **Data integrity** — ensures data is not tampered with during transmission, via message authentication codes
- *(also valid: establishes a secure handshake/session key exchange before data transfer begins)*

#### (c) RSA Algorithm [5]
1. Choose two large prime numbers **p** and **q**
2. Compute **n = p × q**
3. Compute Euler's totient: **φ(n) = (p−1)(q−1)**
4. Choose public exponent **e** such that 1 < e < φ(n) and gcd(e, φ(n)) = 1
5. Compute private exponent **d** such that (d × e) mod φ(n) = 1
6. **Public Key = (e, n)**; **Private Key = (d, n)**
7. **Encryption:** C = M^e mod n
8. **Decryption:** M = C^d mod n

---
---

# Paper 3 — 2024–2025
*CS/B.TECH(N)/EVEN/SEM-8/8261/2024-2025/I130*

## Group A — Very Short Answers [1 × 10 = 10]
*Answer any ten*

| # | Question | Answer |
|---|----------|--------|
| (i) | SET protocol is used for ______. | **Securing card payment transactions online** (Secure Electronic Transaction, by Visa + Mastercard). |
| (ii) | Card which can be used by buyers and the amount is immediately debited from buyer's account? | **Debit Card**. |
| (iii) | What type of ad appears on top of a web page? | **Banner ad** (top-of-page leaderboard ad). |
| (iv) | Name for direct computer-to-computer transfer of transaction information in standard business documents? | **EDI (Electronic Data Interchange)**. |
| (v) | What is e-business? | The use of IT to conduct all business processes (transactions + internal operations) digitally — broader than e-commerce. |
| (vi) | OLX is an example of ______ E-commerce segment. | **C2C (Consumer-to-Consumer)**. |
| (vii) | ______ type of E-Commerce has trade and transaction dealings between business establishments. | **B2B (Business-to-Business)**. |
| (viii) | SCM is a game of 4 C's = Collaboration, Co-operation, Co-ordination and ______. | **Communication**. |
| (ix) | What is the full form of CGI? | **Common Gateway Interface**. |
| (x) | What is the purpose of supply chain management? | To coordinate the flow of goods, information, and finances from supplier to consumer — ensuring efficient procurement, production, and delivery. |
| (xi) | What are the characteristics of Digital Cash? | Monetary value, interoperability, storability/retrievability, security (cryptographic), and (in some forms) anonymity. |
| (xii) | What is virtual store front? | A website that simulates a physical retail store, displaying products for online browsing and purchase. |

---

## Group B — Short Answers [5 × 3 = 15]
*Answer any three*

### Q2. What are digital signatures? How do they differ from digital certificates? [5]
**Digital Signature:** A cryptographic mechanism verifying the authenticity and integrity of a specific message/document — created by encrypting a hash of the message with the sender's PRIVATE key; verified using the sender's PUBLIC key.

**Digital Certificate:** An electronic credential issued by a trusted Certificate Authority (CA) that binds a public key to the identity of an individual/organisation — proving the public key genuinely belongs to that owner.

| Dimension | Digital Signature | Digital Certificate |
|---|---|---|
| Purpose | Verifies authenticity/integrity of a specific message | Verifies the IDENTITY of a key owner |
| Created by | Sender, using their private key, per message | A trusted CA, issued to the key owner |
| Analogy | A handwritten signature on a letter | An ID card/passport |

---

### Q3. What are the main disadvantages of E-Commerce? [5]
- **Security concerns** — risk of fraud, hacking, data breaches
- **Lack of personal touch** — no physical inspection of goods before purchase
- **Technology dependency** — requires internet access/digital literacy; excludes the digitally underserved
- **Trust issues** — customers may distrust unfamiliar sellers
- **High initial setup cost** for secure infrastructure and payment gateways
- *(also valid: legal/jurisdictional complications, delivery/logistics delays)*

---

### Q4. Compare and contrast Extranet and Intranet. [5]

| Dimension | Intranet | Extranet |
|---|---|---|
| Access | Restricted to organisation's employees only | Restricted to authorised external users (partners, vendors) via login |
| Ownership | Owned/controlled by one organisation | Shared control — organisation + external partners |
| Security | High — internal only, protected by firewall | Medium-High — firewall + authentication for external access |
| Purpose | Internal communication, document sharing | B2B collaboration, supply chain coordination |
| Example | Company's internal HR portal | Supplier portal for placing/tracking orders |

---

### Q5. Describe the advantages and disadvantages of E-marketing over normal marketing. [5]
**Advantages:** Wider/global reach at lower cost; highly measurable (CTR, conversions); personalisation based on user behaviour; faster campaign launch and real-time adjustment; two-way interaction.

**Disadvantages:** Requires internet access (excludes offline populations); high competition/ad clutter; vulnerable to click/ad fraud; privacy concerns may deter targeted marketing; dependent on platform algorithm changes/server uptime.

---

### Q6. What are the key technologies of B2B E-Commerce? Explain the architectural model of B2B E-Commerce. [5]
**Key technologies:** EDI (Electronic Data Interchange) for automated document exchange; Extranets for secure partner access; ERP system integration for order-to-cash automation; digital catalogues/marketplaces for procurement.

**Architectural model:** A buyer's procurement system connects via EDI/Extranet to the seller's order management system, with a payment/settlement layer and logistics tracking integrated through APIs or VANs (Value Added Networks) — enabling automated, high-volume trading without manual re-entry of data.

---

## Group C — Long Answers [15 × 3 = 45]
*Answer any three*

### Q7. (a) Supply chain of E-Commerce [2] · (b) Why is SCM vital for E-commerce? [3] · (c) Role of E-supply chain planning tools [5] · (d) How do supply chain management portals help E-Commerce? [5]

#### (a) Supply Chain of E-Commerce [2]
The supply chain of e-commerce refers to how an online business manages procurement, inventory, warehousing, and last-mile delivery to fulfil orders placed digitally — connecting suppliers, warehouses, and customers through coordinated logistics.

#### (b) Why SCM is Vital for E-commerce [3]
- Ensures products are available when customers order (avoiding stockouts)
- Enables faster, trackable delivery — a key competitive differentiator
- Reduces operational costs through optimised inventory and logistics coordination

#### (c) Role of E-Supply Chain Planning Tools [5]
**Supply Chain Planning (SCP) tools** assist in demand forecasting, inventory optimisation, and production scheduling — they analyse historical sales data and market trends to predict future demand, allowing the business to plan procurement and stocking levels in advance rather than reacting to shortages or excess inventory. They reduce uncertainty and improve resource allocation across the supply network.

#### (d) How Supply Chain Management Portals Help E-Commerce [5]
- Provide all stakeholders (suppliers, warehouses, retailers) real-time visibility into stock levels and order status
- Enable faster decision-making by reducing communication delays via email/phone
- Allow automated alerts for low stock or delayed shipments
- Centralise documentation (POs, invoices, shipping notices) for easier auditing and dispute resolution

---

### Q8. (a) Define firewall and state its functions in e-commerce [5] · (b) Working principle of RSA algorithm [5] · (c) What is e-cash? Explain with example how online banking works [5]

#### (a) Firewall — Definition and Functions [5]
**Firewall:** A network security device/software that monitors and controls incoming/outgoing traffic based on predetermined security rules, acting as a barrier between a trusted internal network and untrusted external networks.

**Functions:** Filters traffic by IP address, port, and protocol; blocks unauthorised access attempts; permits legitimate traffic while denying suspicious connections; logs traffic for monitoring/auditing; advanced firewalls perform deep packet inspection for application-layer threats.

#### (b) Working Principle of RSA Algorithm [5]
RSA is an **asymmetric (public-key) encryption** algorithm based on the mathematical difficulty of factoring the product of two large prime numbers.

1. Two large primes **p, q** are chosen and multiplied to get **n = p × q**
2. The totient **φ(n) = (p−1)(q−1)** is computed
3. A public exponent **e** (coprime to φ(n)) forms the **Public Key (e, n)**
4. A private exponent **d**, satisfying (d×e) mod φ(n) = 1, forms the **Private Key (d, n)**
5. **Encryption:** anyone can encrypt a message using the recipient's public key: C = M^e mod n
6. **Decryption:** only the recipient, holding the private key, can decrypt: M = C^d mod n
7. Security relies on the fact that factoring **n** back into p and q is computationally infeasible for large enough primes

#### (c) E-cash and How Online Banking Works [5]
**E-cash (Digital Cash):** A digital representation of currency that can be transferred electronically for purchases — stored as value on a device/wallet rather than physical notes/coins, with cryptographic security to prevent forgery/double-spending.

**Example — Online banking transaction:** A customer initiates a payment through their bank's app; the bank authenticates the user (password + OTP); the requested amount is electronically debited from the customer's account and credited to the merchant's account via the bank's secure servers; both parties receive an instant digital transaction record — functioning as a digital substitute for handing over physical cash.

---

### Q9. (a) What is ERP? Why is BPR required prior to ERP implementation? [4] · (b) Reasons for growth of ERP market [5] · (c) Advantages of ERP system [6]

#### (a) ERP Definition + Why BPR is Required [4]
**ERP (Enterprise Resource Planning):** An integrated software system that manages and automates core business processes (finance, manufacturing, HR, sales, inventory) by consolidating them into a single unified database, enabling real-time information flow across departments.

**Why BPR (Business Process Re-engineering) is required first:** ERP imposes standardised, best-practice workflows; without BPR, organisations merely "automate the mess" of inefficient legacy processes, leading to costly customisation and reduced ERP benefits. BPR aligns processes with what the ERP software is designed to support.

#### (b) Reasons for Growth of ERP Market [5]
- Increasing need to integrate fragmented legacy systems
- Globalisation requiring standardised processes across countries/currencies
- Growing supply chain complexity demanding real-time visibility
- Regulatory compliance requirements needing accurate, centralised data
- Cloud computing/SaaS ERP making implementation more affordable for smaller businesses

#### (c) Advantages of ERP System [6]
- Improved efficiency through process automation, reduced manual data entry
- Single source of truth — consistent, accurate data across all departments
- Better decision-making through real-time, integrated reporting
- Enhanced collaboration between departments due to shared data visibility
- Reduced operational costs over time by eliminating redundant systems
- Improved regulatory compliance and audit readiness

---

### Q10. (a) What is call center? Discuss call center equipment [7] · (b) Modes of operation of call center [3] · (c) What is CPE? What is meant by Denial of Service attacks? [5]

#### (a) Call Center + Equipment [7]
**Call Center:** A centralised office/department handling a large volume of customer interactions (telephone, chat) for support, sales, or service purposes — providing a single point of contact for customer queries.

**Call center equipment:**
- **ACD (Automatic Call Distributor)** — routes incoming calls to available agents
- **IVR (Interactive Voice Response)** — automated menu-based call handling
- **Headsets and telephony hardware** for agents
- **CTI (Computer Telephony Integration)** — links phone systems with customer databases
- **CRM software** for tracking customer interaction history

#### (b) Modes of Operation of Call Center [3]
- **Inbound mode** — agents receive calls from customers (support/queries)
- **Outbound mode** — agents make calls to customers (sales/surveys)
- **Blended/Virtual mode** — combination of inbound+outbound, or agents working remotely via cloud/VoIP systems

#### (c) CPE and Denial of Service Attacks [5]
**CPE (Customer-Premises Equipment):** Telecommunications/networking hardware located at the customer's site (modems, routers, phones) used to connect to a service provider's network.

**Denial of Service (DoS) attack:** An attack that floods a target server/network with excessive traffic or requests, overwhelming its capacity and making the service unavailable to legitimate users. A firewall combined with traffic filtering/rate-limiting is a basic defence; large-scale attacks (DDoS) often need dedicated mitigation services.

---

### Q11. (a) What is EDI? [1] · (b) Basic components of EDI [4] · (c) Role in E-commerce [4] · (d) Explain EDIFACT [4] · (e) Benefits of EDI [2]

#### (a) What is EDI? [1]
EDI (Electronic Data Interchange) is the direct, computer-to-computer exchange of standard business documents between trading partners, without manual re-entry or paper.

#### (b) Basic Components of EDI [4]
- **Standard document format** — structured data standards (ANSI X12, EDIFACT)
- **Translation software** — converts internal data into EDI format and vice versa
- **Communication network/method** — VAN, internet/AS2, or FTP
- **Trading partner agreement** — defines how the two parties exchange/process EDI documents

#### (c) Role of EDI in E-Commerce [4]
EDI forms the backbone of **B2B e-commerce** by enabling automated, paperless transaction processing between businesses — supporting high-volume trading relationships with speed and accuracy manual processes cannot match. It directly supports Supply Chain Management by enabling real-time data flow for procurement and inventory decisions.

#### (d) Explain EDIFACT [4]
**UN/EDIFACT** (United Nations EDI for Administration, Commerce and Transport) is an international EDI standard developed by the United Nations, used predominantly in Europe and for cross-border trade. It provides a flexible, internationally standardised segment/message structure — contrasted with ANSI X12, which is the US-developed domestic standard using numbered transaction sets (e.g., 850 = Purchase Order).

#### (e) Benefits of EDI [2]
Faster transaction processing (minutes instead of days), improved accuracy (eliminates manual entry errors), reduced costs (paper, postage, labour savings), and improved trading partner relationships through reliable data exchange.

---
---

# Part 4 — Pattern Analysis (3 Years)

## Frequency Matrix

| Topic | 2022-23 | 2023-24 | 2024-25 | Frequency |
|-------|---------|---------|---------|-----------|
| Firewall (definition/functions) | ✓ | – | ✓ | **2/3 ★★★** |
| EDI (architecture/components/role/implementation) | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Internet vs Intranet vs Extranet | ✓ | – | ✓ | **2/3 ★★★** |
| E-Business vs E-Commerce / Tangible-Intangible benefits | ✓ | – | – | 1/3 (but recurring style) |
| B2B vs B2C / Business models by transaction party | – | ✓ | ✓ | **2/3 ★★★** |
| RSA algorithm / Public-Private key crypto | – | ✓ | ✓ | **2/3 ★★★** |
| Digital Signature vs Digital Certificate | – | – | ✓ | 1/3 |
| Call Center + CPE (combined) | – | ✓ | ✓ | **2/3 ★★★** |
| Supply Chain Management (SCM/SCP/SCE) | ✓ | ✓ | ✓ | **3/3 ★★★** |
| ERP (definition, BPR, modules, advantages) | – | ✓ | ✓ | **2/3 ★★★** |
| E-Payment systems / threats | ✓ | ✓ | ✓ | **3/3 ★★★** |
| E-Marketing strategies / cart reminders | – | ✓ | ✓ | **2/3 ★★★** |
| E-Governance challenges | – | ✓ | – | 1/3 |
| SSL services | – | ✓ | – | 1/3 |
| Threats of E-Commerce | ✓ | ✓ | – | 2/3 |
| Architecture of e-commerce portal (draw + explain) | ✓ | – | – | 1/3 (due for return) |
| Cryptocurrency as e-payment | – | ✓ | – | 1/3 |
| E-cash / online banking | – | – | ✓ | 1/3 |

## Exam Structure (Consistent All 3 Years)
- **Group A**: 12 Qs → answer 10 × 1 mark = **10 marks** *(definitions, fill-in-blank, one-liners)*
- **Group B**: 5/6 Qs → answer 3 × 5 marks = **15 marks** *(comparisons, short explanations)*
- **Group C**: 5 Qs → answer 3 × 15 marks = **45 marks** *(multi-part long answers, often split a+b+c+d)*

**Observation:** Group C questions are almost always **multi-part** (a, b, c, sometimes d/e) rather than single 15-mark essays — prepare topics in modular 4-6 mark chunks that can be combined flexibly.

---

# Part 5 — Predicted Questions for 2025–2026

*Topics appearing 3/3 years are near-certain; 2/3 are very likely. 1/3 topics with strong syllabus weight are due for a return.*

---

### P1. ★★★ EDI — Architecture, Components, Implementation, Role in E-Commerce
*Appeared in ALL 3 years, different angle each time — this is the single highest-yield topic in the syllabus.*

**Predicted form:** A multi-part Group C question combining "What is EDI + basic components + EDIFACT/ANSI X12 + benefits" (similar structure to 2025 Q11).
→ **Use Unit 10 in notes.md.** Draw the communication flow diagram for guaranteed extra marks.

---

### P2. ★★★ Supply Chain Management (SCP vs SCE, Portals, E-logistics)
*Appeared every year — sometimes as Group B short answer, sometimes full Group C multi-part.*

**Predicted form:** "What is SCM? Why vital for e-commerce? Role of SCP tools / SCM portals." (Group C, 15 marks, multi-part).
→ Master the SCP vs SCE table (Unit 7.4) — this is the syllabus's explicit distinction and is exam-favourite.

---

### P3. ★★★ E-Payment Systems and Security
*Appeared every year in some form — types of payment systems, threats, or e-cash specifically.*

**Predicted form:** "Explain 5 types of E-Payment systems" OR "Discuss security issues in e-payments + protections" (Group C, 10-15 marks).
→ Cover Card/E-cheque/E-cash/Stored-value/SET in one structured list (Unit 8).

---

### P4. ★★★ Firewall, Cryptography & RSA
*Firewall appeared 2/3 years directly; RSA/public-private key appeared 2/3 years — these are almost always paired in the same question.*

**Predicted form:** "Define firewall + state functions" (5 marks) PLUS "RSA algorithm/working principle" or "Public vs Private key cryptography" (5-10 marks) — likely combined into one Group C question.
→ Memorise the 8-step RSA algorithm (Unit 10.8) cold — it is asked almost verbatim every time it appears.

---

### P5. ★★★ ERP — Definition, BPR, Modules, Advantages, Market
*Appeared 2/3 years with high syllabus weight (10 lecture hours — largest unit). Strong candidate for a full 15-mark question.*

**Predicted form:** "What is ERP? Why is BPR required? Discuss ERP modules / advantages / market vendors." (Group C, 15 marks, multi-part).
→ Use Unit 12 — especially the BPR rationale and the 7 ERP business modules table.

---

### P6. ★★★ B2B vs B2C / Business Models by Transaction Party
*Appeared 2/3 years; core syllabus content (Unit 3) likely to recur given its centrality.*

**Predicted form:** "Discuss B2B, B2C, C2B, C2C with examples + key technologies of B2B" (Group C, 8-15 marks) OR Group A fill-in-the-blank style.
→ Master Unit 3.2 comparison table; OLX/eBay = C2C is a recurring fill-in-the-blank trap.

---

### P7. ★★★ Call Center + Customer Premises Equipment (CPE)
*Appeared together as a combined question 2/3 years (2024, 2025) — syllabus pairs them in Unit 5.*

**Predicted form:** "What is call center? Discuss equipment + modes of operation + CPE meaning" (Group C, 15 marks multi-part).
→ Unit 5.4 — equipment list (ACD, IVR, CTI), modes (inbound/outbound/blended/virtual), CPE examples.

---

### P8. ★★ Internet vs Intranet vs Extranet
*Appeared 2/3 years — always as a direct comparison question.*

**Predicted form:** "Compare/distinguish Internet, Intranet, and Extranet" (Group B, 5 marks) — possible 3-way comparison instead of just 2-way this time.
→ Unit 2.2 — the 3-way table covering access, ownership, security, purpose, examples.

---

### P9. ★★ E-Marketing Strategies, Cart Reminders, E-mail Marketing
*Appeared 2/3 years; growing emphasis on practical application (e.g., "design an e-marketing plan for X business").*

**Predicted form:** "Discuss e-marketing strategies + design an e-marketing plan for [a hypothetical business]" (Group C, 9-15 marks) similar to the 2024 "online bookstore" question.
→ Be ready to apply the strategy list (Unit 9.2) to ANY hypothetical business — practice the structure, not just memorised facts.

---

### P10. ★★ Architecture of an E-Commerce Portal (Draw & Explain)
*Appeared in 2023 (10 marks) — explicitly asks for a diagram; due for return given high mark value and visual nature.*

**Predicted form:** "Draw and explain the architecture of an e-commerce website/portal selling [some category of goods]." (Group C, 10-15 marks).
→ Practice drawing the flow: Browser → Web/App Server → Catalogue DB → Cart → Payment Gateway → Order/Inventory (ERP) → Logistics → Customer Notification. See Paper 1 Q11(a) above as the model answer.

---

### P11. ★★ Digital Signature vs Digital Certificate
*Appeared once (2025) but is a classic "differentiate" trap question style consistent with the cyber law paper's pattern of confusion-pairs.*

**Predicted form:** "What are digital signatures? How do they differ from digital certificates?" (Group B, 5 marks).
→ Unit 11.8.1 — signature verifies a MESSAGE, certificate verifies an IDENTITY.

---

### P12. ★ E-Governance Challenges in India
*Appeared once (2023) but is explicitly named in the syllabus (Unit 3) — could resurface, especially given growing real-world relevance of Digital India initiatives.*

**Predicted form:** "What is E-Governance? Discuss its challenges in India." (Group C sub-part, 3-5 marks).
→ Unit 3.3 — digital divide, literacy, infrastructure, cybersecurity, language, interoperability.

---