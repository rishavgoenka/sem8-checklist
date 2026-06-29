# Solved Previous-Year Papers — Cyber Law and Ethics
### OEC-CS801B / OEC-CSCIT801B · 2022-23, 2023-24, 2024-25
### Full Marks: 70 | Time: 3 Hours

> **How to read this:** Papers solved Group A → B → C. Marks badge on every question. **Part 4 = Pattern. Part 5 = Predictions.** For any "difference/compare" question → write a table. For any 15-mark question → use sub-headings, aim for 5–6 sections.

---

## ⚡ IT Act Penalty Cheat Sheet *(Memorise Before Anything Else)*

| Section | Offence | Punishment |
|---------|---------|-----------|
| **43** | Unauthorised access / data damage | Compensation up to ₹1 crore *(civil, no jail)* |
| **65** | Tampering with source code | 3 yrs + ₹2L |
| **66** | Hacking / computer-related offences | **3 yrs + ₹5L** |
| **66B** | Receiving stolen computer resource | 3 yrs + ₹1L |
| **66C** | Identity theft | 3 yrs + ₹1L |
| **66D** | Cheating by impersonation online | 3 yrs + ₹1L |
| **66E** | Publishing private images without consent | 3 yrs + ₹2L |
| **66F** | **Cyber terrorism** | **Life imprisonment** |
| **67** | Publishing obscene material online | First: 3 yrs + ₹5L |
| **67A** | Sexually explicit material | First: 5 yrs + ₹10L |
| **67B** | Child sexual abuse material | First: **7 yrs + ₹10L** |
| **70** | Accessing protected systems | **10 yrs + ₹1 crore** |
| **72** | Breach of confidentiality by officials | 2 yrs + ₹1L |
| **79** | Intermediary safe harbour | — *(exemption, not penalty)* |

---

# Paper 1 — 2022–2023
*CS/B.TECH(N)/EVEN/SEM-8/8258/2022-2023/I124*

## Group A — Very Short Answers [1 × 10 = 10]
*Answer any ten*

| # | Question | Answer |
|---|----------|--------|
| (i) | Key elements of Cyber Security? | Confidentiality, Integrity, Availability — the **CIA Triad**. |
| (ii) | Which is NOT a type of cybercrime? | Authorised ethical hacking / legitimate software development. |
| (iii) | Federal Code for hacking that disrupts subway transit? | US: **18 U.S.C. § 1030** (CFAA). India equivalent: **Sec 66, IT Act 2000**. |
| (iv) | Classify cybercrime. | (1) Against Individuals (cyberstalking, phishing); (2) Against Property (hacking, piracy); (3) Against Government/Society (cyberterrorism). |
| (v) | Phishing vs Pharming? | *Phishing* = fake emails/links to steal credentials. *Pharming* = poisons DNS/hosts file to silently redirect users to fake sites — no click needed. |
| (vi) | Full form of ITA-2000? | **Information Technology Act, 2000** — India's primary cyber law. |
| (vii) | HIDS vs NIDS? | *HIDS* monitors a single host (files, logs, processes). *NIDS* monitors full network traffic for suspicious patterns. |
| (viii) | Reporting vulnerability is NOT done by cyber criminals — True/False? | **False** — criminals exploit vulnerabilities. Ethical hackers report them. |
| (ix) | Active vs Passive attack? | *Passive* = only monitors/intercepts, data unchanged (e.g., sniffing). *Active* = modifies/disrupts data (e.g., DoS, MITM). |
| (x) | MITM attack? | **Man-in-the-Middle**: attacker secretly intercepts communication between two parties who believe they're talking directly. |
| (xi) | What is phishing? | Social engineering via fake emails/websites that impersonate legitimate entities to steal credentials or financial data. |
| (xii) | What is a Trojan Horse? | Malware disguised as legitimate software. Creates backdoors/steals data. Does **NOT** self-replicate. |

---

## Group B — Short Answers [5 × 3 = 15]
*Answer any three*

### Q2. What is electronic evidence? Explain admissibility. [5]
**Electronic evidence** is any probative information stored or transmitted digitally — emails, log files, CCTV footage, metadata.

**Admissibility in India:**
- **Sec 65B, Indian Evidence Act**: Admissible if accompanied by a certificate from the responsible official confirming: lawful custody of the computer, proper operation during data entry, and no tampering with the record.
- **Sec 4, IT Act 2000**: Grants legal recognition to electronic records — treated as documentary evidence.
- Chain of custody must be maintained; digital forensics used for collection.

> **Write this as**: Definition (1 mark) → Nature/characteristics (1 mark) → Sec 65B conditions (2 marks) → Sec 4 IT Act (1 mark).

---

### Q3. Explain Cyber Terrorism with illustration. [5]
**Cyber Terrorism**: Use of computer systems/networks to attack critical infrastructure — power grids, water supply, banking, defence — to cause widespread panic, damage, or loss of life for political/ideological motives.

**Key features**: No physical weapon; motive is political/ideological (not financial); targets critical systems.

**Illustrations:**
- *Stuxnet (2010)*: Cyberweapon that sabotaged Iran's nuclear centrifuges via infected industrial control systems.
- *Hypothetical*: Hacker manipulates a city's water treatment plant SCADA system to release toxic chemicals.

**Indian Law**: **Section 66F, IT Act** → **Life Imprisonment**.

---

### Q4. What is cyber law? Advantages and disadvantages. [5]
**Cyber Law** is the legal framework governing internet use, e-commerce, and digital communications. In India: **IT Act, 2000**.

**Advantages**: Legalises e-contracts and digital signatures; defines and penalises cybercrimes; enables e-governance; builds consumer trust in online transactions; provides adjudication via Cyber Appellate Tribunal.

**Disadvantages**: Jurisdictional issues (cross-border crimes hard to prosecute); lags behind rapidly evolving technology (deepfakes, AI crimes not fully covered); complex digital evidence collection; surveillance provisions can be misused; low public awareness.

---

### Q5. Compare Indian vs International jurisdiction in cyberspace. [5]

| Basis | Indian | International |
|-------|--------|---------------|
| **Primary Law** | IT Act 2000, Sec 1(2) & **Sec 75** (extra-territorial) | Budapest Convention 2001 (India not a signatory) |
| **Reach** | Applies even if offence committed outside India, if Indian computer/network is involved | Handled via bilateral MLATs (Mutual Legal Assistance Treaties) |
| **Enforcement** | CERT-In, State Cyber Cells | Interpol/Europol — can coordinate, not compel |
| **Key Problem** | Attacker abroad is largely out of reach | No binding global treaty; "safe havens" in non-cooperative nations |

**Core challenge**: Internet is borderless; jurisdiction is territorial → gap exploited by cybercriminals.

---

### Q6. Steps to register a patent in India. [5]
1. **Patentability check**: Invention must be novel, non-obvious, and have industrial utility. *(Note: Software per se not patentable under Sec 3(k), but computer-implemented inventions with technical effect may qualify.)*
2. **Prior art search**: Search existing patents at `ipindia.gov.in`.
3. **Draft & file application**: Submit Forms 1, 2, 5 (Provisional or Complete Specification) at Indian Patent Office.
4. **Publication**: Published 18 months after filing date.
5. **Request Examination (RFE)**: File Form 18 within 48 months; examiner issues First Examination Report (FER).
6. **Clear objections**: Respond to FER within 6 months.
7. **Grant & Renewal**: Patent valid for **20 years** from filing; annual renewal fees required.

---

## Group C — Long Answers [15 × 3 = 45]
*Answer any three*

### Q7. Describe different types of cyber attacks. [15]

#### A. Malware-Based Attacks
- **Virus**: Attaches to host files; requires human execution to spread; corrupts/deletes files.
- **Worm**: Self-propagating through networks without a host file; consumes bandwidth. *(Example: Conficker)*
- **Trojan Horse**: Disguised as safe software; creates backdoors; does NOT self-replicate.
- **Ransomware**: Encrypts victim files; demands cryptocurrency for decryption key. *(Example: WannaCry 2017)*
- **Spyware/Keylogger**: Monitors activities/keystrokes silently; sends data to attacker.
- **Rootkit**: Hides deep in OS; gives persistent privileged access.

#### B. Network-Based Attacks
- **DoS**: Single source floods target with traffic to exhaust resources.
- **DDoS**: Same objective but uses a botnet of thousands of compromised machines — far harder to block.
- **MITM**: Attacker intercepts live communication (ARP poisoning, SSL stripping).
- **DNS Spoofing/Pharming**: Corrupts DNS cache to redirect users to fake sites.

#### C. Social Engineering Attacks
- **Phishing**: Bulk fake emails mimicking trusted entities.
- **Spear Phishing**: Targeted phishing at a specific individual/organisation.
- **Vishing / Smishing**: Voice or SMS-based phishing.
- **Baiting**: Leaving infected USB drives in public to exploit curiosity.

#### D. Web Application Attacks
- **SQL Injection**: Injecting malicious SQL into input fields to manipulate or dump the database.
- **XSS (Cross-Site Scripting)**: Injecting malicious scripts into pages to steal session cookies.
- **Buffer Overflow**: Sending excess data to overwrite adjacent memory — can allow arbitrary code execution.

#### E. Advanced Attacks
- **APT (Advanced Persistent Threat)**: Long-term stealthy intrusion, often state-sponsored.
- **Salami Attack**: Microscopic, unnoticeable deductions from many accounts accumulate to significant fraud.
- **Zero-Day Exploit**: Exploits a vulnerability before any patch is available.

> **15-mark tip**: Use these 5 categories as sub-headings. Give 2–3 attacks per category with one-line examples. That's your full 15 marks.

---

### Q8. (a) Define Cybercrime + Types [6] · (b) Email Spoofing & Spamming [4] · (c) Reconnaissance [3] · (d) Salami Attack [2]

#### (a) Cybercrime [6]
**Cybercrime**: Any criminal activity where a computer/network is used as tool, target, or both.

**Classification:**
- *Against Individuals*: Cyberstalking, defamation, phishing, identity theft.
- *Against Property*: Hacking, software piracy, credit card fraud.
- *Against Government/Society*: Cyberterrorism, cyber warfare, spreading obscene content.

**IT Act coverage**: Sec 43 (access), Sec 66 (hacking), Sec 66C (identity theft), Sec 66F (terrorism), Sec 67 (obscenity).

#### (b) Email Spoofing vs Spamming [4]
- **Email Spoofing**: Forging the "From" header of an email to make it appear from a trusted sender. Used in phishing and business email compromise (BEC). *Detected via DMARC, SPF, DKIM protocols.*
- **Email Spamming**: Sending bulk unsolicited emails for advertising, phishing, or malware distribution.
- **Key difference**: Spoofing *impersonates* a sender; spamming *floods* recipients.

#### (c) Reconnaissance [3]
**Reconnaissance** = the first phase of hacking — information gathering before any attack.
- *Passive*: Public sources only — WHOIS, Google dorking, LinkedIn, Shodan. Hard to detect.
- *Active*: Direct interaction with target — port scanning (Nmap), banner grabbing. More info but detectable.

*Goal*: Identify open ports, OS, services, employee names, IP ranges — used to plan the actual attack.

#### (d) Salami Attack [2]
Making many microscopic, unnoticeable financial deductions (e.g., rounding down interest fractions to ₹0.002) that individually go undetected but collectively accumulate into large sums across millions of accounts. Also called "penny shaving."

---

### Q9. ISP Liability under IT Act 2000. [15]

**ISP = Intermediary** under IT Act. Their liability is primarily governed by **Section 79**.

#### Safe Harbour — When ISP is NOT Liable (Sec 79)
ISP is exempt from liability for third-party content if:
1. Their role is limited to providing network access (mere conduit — did not initiate, select receiver, or modify content).
2. They observed **due diligence** under the **Intermediary Guidelines and Digital Media Ethics Code, 2021**.

#### When Safe Harbour is LOST
- Received a government/court notice and **failed to remove illegal content within 36 hours**.
- Actively participated in or conspired with the illegal activity.
- Failed to appoint required officers (Grievance Officer for all platforms; Compliance Officer + Nodal Contact for Significant Social Media Intermediaries with 50L+ users).

#### Key Penalty Sections

| Section | Offence | Punishment |
|---------|---------|-----------|
| **Sec 69A** | Refusing to block websites on government order | Up to 7 years |
| **Sec 67B** | Knowingly hosting child sexual abuse material | Up to 7 years + ₹10L |
| **Sec 43** | Damage caused by ISP negligence | Compensation (civil) |

#### Intermediary Guidelines 2021 — Key Duties
- Publish T&C, privacy policy, and user grievance mechanism.
- Significant Social Media Intermediaries must additionally: enable traceability of first message originator (on court order) and publish monthly compliance reports.

#### Landmark Case
*Shreya Singhal v. Union of India (2015)*: SC ruled intermediaries must remove content only on actual court/government order — not on user complaints alone. Also struck down Sec 66A as unconstitutional.

---

### Q10. Public Key functioning and Electronic Signatures. [15]

#### Asymmetric Cryptography — The Core Concept
Two mathematically linked keys:
- **Public Key**: Shared openly. Encrypts data or verifies signatures.
- **Private Key**: Secret. Decrypts data or creates signatures.

*Rule*: What one key encrypts, only the other can decrypt.

#### Two Use Cases

**1. Encryption (Confidentiality)**
```
Alice → Encrypts with Bob's PUBLIC key → Bob decrypts with his PRIVATE key
```
Only Bob can read it — even Alice cannot decrypt after encrypting.

**2. Digital Signature (Authentication + Integrity)**
```
Signer → Hash(Document) → Encrypt hash with PRIVATE key = Signature
Verifier → Decrypt with signer's PUBLIC key → Hash1
         → Compute Hash2 from received document
         → Hash1 == Hash2 ? Valid : Tampered
```

#### Protections Provided

| Property | Meaning |
|----------|---------|
| **Authentication** | Confirms who signed — only holder of private key can sign |
| **Integrity** | Any change to document = hash mismatch = detected |
| **Non-repudiation** | Signer cannot deny — private key is uniquely theirs |
| **Confidentiality** | Only intended recipient (private key holder) can decrypt |

#### PKI — Public Key Infrastructure
Framework that manages key pairs and digital certificates.
- **CA (Certifying Authority)**: Issues Digital Certificates binding a public key to an identity.
- **Digital Certificate (X.509)**: Contains — holder's name, public key, CA's digital signature, validity period, serial number.
- **CRL (Certificate Revocation List)**: Published by CA; lists revoked certificates.
- **India**: Licensed CAs under IT Act — NIC, eMudhra, Safescrypt, (n)Code Solutions. All licensed by CCA (Controller of Certifying Authorities, MeitY).

#### Legal Framework (India)
- **Sec 3**: Legalises digital signatures using asymmetric cryptosystem + hash function.
- **Sec 5**: Digital signature = same legal validity as handwritten signature.
- **Sec 3A** *(added 2008)*: Expands to "Electronic Signatures" — includes OTP, biometrics.
- **Sec 35**: Licensing of CAs by CCA.

---

### Q11. Digital Signature — Process, Legal Basis, Applications. [15]

#### Definition
A Digital Signature is a cryptographic mechanism that proves the authenticity and integrity of a digital message. It cannot be forged without the signer's private key.

**Sec 2(p), IT Act**: Authentication of an electronic record by a subscriber via asymmetric cryptosystem and hash function.

#### Step-by-Step Process

| Step | Action |
|------|--------|
| **1. Hash** | Document passed through SHA-256 → produces fixed-size message digest |
| **2. Sign** | Digest encrypted with signer's **private key** → this is the digital signature |
| **3. Transmit** | Document + digital signature sent to recipient |
| **4. Verify** | Recipient decrypts signature using signer's **public key** → gets Hash1. Independently hashes received document → gets Hash2. If Hash1 = Hash2 → **Valid**. |

#### Properties
- **Authentication**: Confirms signer's identity.
- **Integrity**: Detects any modification (hash mismatch).
- **Non-repudiation**: Signer cannot deny — only their private key could generate the signature.

#### Legal Framework

| Section | Purpose |
|---------|---------|
| Sec 3 | Legal basis for digital signature using asymmetric crypto + hash |
| Sec 5 | Digital signature = legally equivalent to handwritten signature |
| Sec 35 | CA licensing by CCA |
| Sec 73-74 | Punishment for publishing false DSCs — up to 2 years + ₹1L |

#### Digital Signature Certificate (DSC) in India
- Issued by licensed CAs (NIC, eMudhra, etc.) on USB dongle.
- **Classes**: Class 1 (email validation), Class 2 (identity verified), Class 3 (in-person — mandatory for e-tendering, MCA filings).

#### Applications
Income Tax/GST e-filing · MCA21 corporate filings · e-Court submissions · e-procurement/tendering · Aadhaar-based eSign · Secure email (S/MIME) · Code signing.

#### Digital Signature vs Handwritten Signature

| Basis | Digital | Handwritten |
|-------|---------|-------------|
| Forgery | Computationally infeasible (with secure keys) | Can be forged by skilled forgers |
| Verification | Automatic, mathematical | Requires human comparison |
| Document binding | Unique per document (hash-based) | Same regardless of document |
| Legal basis | IT Act 2000 | Indian Contract Act 1872 |

---
---

# Paper 2 — 2023–2024
*CS/B.TECH(N)/EVEN/SEM-8/8258/2023-2024/I019*

## Group A — Very Short Answers [1 × 10 = 10]

| # | Question | Answer |
|---|----------|--------|
| (i) | Who are White Hat Hackers? | Ethical hackers who identify vulnerabilities **with permission** to help secure systems. |
| (ii) | Ways to reset BIOS password? | Remove CMOS battery (~30s); use motherboard CLR_CMOS jumper; manufacturer master bypass password. |
| (iii) | How to prevent identity theft? | Strong unique passwords + MFA; never share OTPs; avoid public Wi-Fi for banking; monitor credit reports. |
| (iv) | ______ = person licensed to issue electronic signature certificate. | **Certifying Authority (CA)** — licensed by CCA under Sec 24, IT Act 2000. |
| (v) | Cognitive Cybersecurity? | Applying AI/ML (e.g., IBM Watson for Cybersecurity) to analyze threat patterns, learn from data, and detect sophisticated attacks autonomously. |
| (vi) | Common cyber attacks? | Phishing, ransomware, DDoS, SQL injection, MITM, brute force, XSS. |
| (vii) | Data leakage? | Unauthorised transmission of sensitive data from inside an organisation to an external destination — intentional or accidental. |
| (viii) | Data theft includes? | Unauthorised copying/transfer of personal info, financial data, IP, source code, credentials. |
| (ix) | Brute Force Attack + Prevention? | Systematically tries all possible password combinations. *Prevent*: account lockout, CAPTCHA, MFA, rate limiting, strong passwords. |
| (x) | "DoS and DDoS use the same strategy" — justify. | **True (partially)**: both exhaust target resources to deny service. Difference: DoS = single source; DDoS = distributed botnet → far harder to block. Same goal, vastly different scale. |
| (xi) | Sec 70 IT Act — punishment? | Accessing a protected government system → up to **10 years imprisonment + ₹1 crore fine**. |
| (xii) | DSC is _____ requirement? | **Mandatory** — for MCA company filings, GST registration, Income Tax (corporates), e-tendering, court e-filings. |

---

## Group B — Short Answers [5 × 3 = 15]

### Q2. Difference between Virus and Worm. [5]

| Basis | Virus | Worm |
|-------|-------|------|
| **Host needed** | Yes — attaches to a file | No — self-contained |
| **Spreading** | Requires human execution (opening infected file) | Auto-propagates through network vulnerabilities |
| **Speed** | Slower (depends on human action) | Extremely fast |
| **Target** | Files, programs, boot sector | Network bandwidth, memory, multiple machines |
| **Example** | ILOVEYOU, Melissa | Conficker, Morris Worm, Blaster |

**In one line**: A virus needs a host and human trigger to spread; a worm spreads by itself across networks.

---

### Q3. Explain IT Act 2000 in brief. [5]
India's primary legislation for e-commerce and cybercrime, enacted **17 October 2000**.

**Objectives**: Legal recognition for electronic records/digital signatures; enable e-commerce and e-governance; penalise cybercrime; regulate Certifying Authorities.

**Key Sections** *(cite at least 4 for full marks)*:

| Section | What it covers |
|---------|----------------|
| Sec 3–5 | Digital signatures — legal basis and equivalence |
| **Sec 43** | Unauthorised access/damage → compensation (civil) |
| **Sec 66** | Hacking → 3 yrs + ₹5L |
| **Sec 66F** | Cyber terrorism → Life imprisonment |
| **Sec 70** | Protected systems → 10 yrs + ₹1 crore |
| **Sec 79** | Intermediary safe harbour |

**IT Amendment Act 2008** significantly expanded it — added Sections 66C, 66D, 66E, 66F, 67A, 67B, 43A, 69A, and broadened digital signatures to electronic signatures.

---

### Q4. Explain cyberspace, cyber ethics, and cybercrime. [5]
- **Cyberspace**: Virtual, borderless environment of interconnected computer networks. Coined by William Gibson (*Neuromancer*, 1984). Has no physical boundaries — a global commons.
- **Cyber Ethics**: Moral principles governing responsible behaviour in cyberspace — respecting privacy, intellectual property, truthfulness, and avoiding harm. Enforced partly by law (IT Act) and partly by professional codes (ACM Code of Ethics).
- **Cybercrime**: Criminal activity where a computer/network is a tool, target, or both. Three categories: against individuals, property, and government/society.

---

### Q5. Bluetooth vulnerabilities and attacks. [5]
**Why vulnerable**: Leaving Bluetooth active and discoverable exposes devices to nearby attackers within ~10m range.

**Attacks:**

| Attack | What it does |
|--------|-------------|
| **Bluejacking** | Sends unsolicited messages — annoying but harmless |
| **Bluesnarfing** | Steals data (contacts, messages, emails) without authorisation |
| **Bluebugging** | Full remote control of device (calls, SMS, internet) |
| **BlueBorne (2017)** | Critical — takes over devices without pairing; affected 5B+ devices |

**Prevention**: Turn off Bluetooth when not in use; use non-discoverable mode; update firmware; reject unknown pairing requests.

---

### Q6. Explain computer network intrusion with example. [5]
**Network Intrusion**: Unauthorised access to a system/network — violates CIA triad.

**5 Stages:**
```
Reconnaissance → Scanning → Gaining Access → Maintaining Access → Covering Tracks
```
1. *Reconnaissance*: Gather info (WHOIS, Nmap, LinkedIn).
2. *Scanning*: Identify open ports, services, vulnerabilities.
3. *Gaining Access*: Exploit vulnerability (buffer overflow, stolen credentials).
4. *Maintaining Access*: Install backdoor/rootkit, create hidden admin accounts.
5. *Covering Tracks*: Delete logs, modify timestamps.

**Example**: Attacker scans a university server running outdated Apache → exploits a known CVE → installs rootkit → exfiltrates student database → deletes all logs.

**Detection**: NIDS (network-level, e.g., Snort) + HIDS (host-level, e.g., OSSEC).

---

## Group C — Long Answers [15 × 3 = 45]

### Q7. Objectives of IT Legislation in India + IT Amendment Act 2008. [15]

#### Objectives of IT Act 2000
1. **Legal recognition** for electronic records and digital signatures (Sec 3–8).
2. **Enable e-commerce**: Electronic contracts, digital payments legally valid.
3. **E-governance**: Government departments accept/issue documents electronically.
4. **Penalise cybercrime**: Define offences; prescribe punishments (Sec 65–74).
5. **Regulate CAs**: Licensing framework for Certifying Authorities (Sec 17–34).
6. **Protect intermediaries**: Safe harbour (Sec 79).
7. **National security**: Lawful interception powers (Sec 69).
8. **Protect critical infrastructure**: Protected Systems (Sec 70).

#### IT Amendment Act 2008 — Key Changes

**New Offences:**

| Section | New offence | Punishment |
|---------|------------|-----------|
| 66C | Identity theft | 3 yrs + ₹1L |
| 66D | Cheating by impersonation online | 3 yrs + ₹1L |
| 66E | Publishing private images without consent | 3 yrs + ₹2L |
| **66F** | **Cyber Terrorism** *(new)* | **Life imprisonment** |
| 67A | Sexually explicit material | 5 yrs + ₹10L |
| 67B | Child sexual abuse material | 7 yrs + ₹10L |

**Other Major Changes:**
- **Sec 43A**: Corporate negligence in protecting sensitive personal data → compensation (no upper limit).
- **Sec 3A**: Expanded from "Digital Signature" to "Electronic Signature" — includes OTP, biometrics, smart cards.
- **Sec 69A**: Government power to block websites (used in 2020 to block TikTok, 200+ Chinese apps).
- **Sec 79 (revised)**: Strengthened intermediary liability framework → led to Intermediary Guidelines 2021.
- **Sec 84B/84C**: Abetment and attempts to commit offences also punishable.

---

### Q8. (a) Traffic Flooding [9] · (b) Forgery [6]

#### (a) Traffic Flooding [9]
Overwhelming a network/server with excessive traffic to cause a **Denial of Service**.

**Types:**

| Type | Mechanism | Defence |
|------|-----------|---------|
| **SYN Flood** | Exploits TCP 3-way handshake — sends thousands of SYN packets with spoofed IPs; server allocates half-open connections; connection table fills; crashes. | SYN cookies; firewall rate limiting |
| **ICMP Flood** | Floods with ping packets; server must reply to each → bandwidth exhausted. | Rate-limit ICMP at perimeter |
| **UDP Flood** | Floods random ports with UDP; server sends "Destination Unreachable" for each. | UDP rate limiting; firewall rules |
| **HTTP Flood** | Floods with legitimate-looking GET/POST requests — bypasses Layer 3/4 defences; targets application layer. | WAF; CAPTCHA; rate limiting per IP |

**DDoS amplification** (e.g., DNS/NTP amplification): Attacker sends small queries with victim's spoofed IP → servers send large responses to victim (amplification factor up to 556x for NTP).

**General Mitigation**: CDN + traffic scrubbing (Cloudflare, Akamai); blackhole routing; anycast diffusion; over-provisioned capacity.

#### (b) Forgery [6]
Creating, altering, or using false digital documents/identities with intent to deceive.

**Types:**
- *Document forgery*: Fake degree certificates, fake financial statements using image editors.
- *Email spoofing*: Forged SMTP headers to impersonate a trusted sender.
- *Website forgery*: Fake login pages mimicking banks/government portals.
- *Identity forgery*: Using stolen PII to create fake digital identities — open bank accounts, apply for loans.

**Laws:**
- *Sec 463/465 IPC*: Forgery — up to 2 years.
- *Sec 468 IPC*: Forgery for cheating — up to 7 years.
- *Sec 66/66C IT Act*: Hacking / identity theft — up to 3 years.

---

### Q9. (a) Attacks on Mobile Phones [8] · (b) Securing data after theft/loss [7]

#### (a) Attacks on Mobile Phones [8]

**Attack Vectors:**
- **Malicious Apps**: Fake/trojanised apps from third-party stores carry spyware, ransomware, or banking trojans.
- **Smishing/Vishing**: SMS with malicious links ("Your account is blocked: fakebank.in") or fraudulent phone calls impersonating banks.
- **Rogue Wi-Fi / Evil Twin**: Fake public hotspot captures all traffic; MITM position.
- **Bluetooth attacks**: Bluesnarfing, Bluebugging, BlueBorne (see Q5 Group B).
- **SIM Swap**: Attacker convinces telecom provider to transfer victim's number to their SIM → receives all OTPs → takes over banking/email accounts.
- **IMSI Catcher (Stingray)**: Device mimics cell tower; nearby phones connect → calls/SMS intercepted.
- **OS Vulnerabilities**: Unpatched Android/iOS flaws exploited by targeted spyware (e.g., Pegasus — zero-click exploit via WhatsApp).
- **Physical Theft + PIN Brute Force**: Stolen unlocked phone gives immediate access.

#### (b) Securing Mobile Data After Theft/Loss [7]

**Immediate steps (after theft):**
1. Remotely **lock and wipe** via Find My Device (Android) / Find My (iOS).
2. **Change all critical passwords** (email first — used for password resets elsewhere).
3. **Contact bank** — freeze mobile banking, block transactions from that device.
4. **Block SIM** via telecom provider (prevents SIM misuse).
5. **Report to police** + **block IMEI** via CEIR portal (`ceir.gov.in`).
6. Revoke trusted device status from all accounts (Google, Apple ID).

**Pre-measures (should already be in place):**
- Strong screen lock (PIN/biometric) + full device encryption.
- Enable Find My Device with location access.
- Regular cloud backups.
- App-level PINs on banking apps.
- MFA using authenticator app (not SMS — SIM swap risk).
- Note IMEI number (*#06#) — needed for blocking.

---

### Q10. SQL Injection — Attack and Prevention. [15]

#### What is SQL Injection?
Attacker inserts malicious SQL code into an unsanitised input field (login form, URL parameter, search bar). The database server executes it — bypassing authentication, dumping data, or destroying tables.

**#1 web application vulnerability** — OWASP Top 10 consistently.

#### How It Works

**Normal login query:**
```sql
SELECT * FROM users WHERE username='alice' AND password='secret';
```

**Attack — input:** `username = admin' --`
```sql
SELECT * FROM users WHERE username='admin' --' AND password='anything';
-- The -- comments out the password check → logs in as admin without password
```

**Attack — UNION (data extraction):**
```sql
' UNION SELECT username, password FROM users --
-- Returns all usernames and passwords from the database
```

**Attack — Destructive:**
```sql
'; DROP TABLE users; --    ← destroys entire users table
```

#### Types
- **In-band SQLi**: Results returned directly in application response (most common).
- **Blind SQLi**: No direct result — infer from True/False behaviour or time delays (`SLEEP(5)`).
- **Out-of-band SQLi**: Data exfiltrated via DNS/HTTP requests.

#### Prevention Techniques

| Method | How it works |
|--------|-------------|
| **Parameterised Queries** *(#1 solution)* | Query structure is fixed; user input treated as data only, never executable SQL. |
| **Stored Procedures** | SQL logic encapsulated in database; app only calls procedure with parameters. |
| **Input Validation** | Whitelist allowed characters; reject/escape special chars (`' " ; --`). |
| **Least Privilege** | DB account used by web app gets only SELECT access — can't DROP tables or access other DBs. |
| **WAF** | Web Application Firewall detects/blocks known SQLi patterns (ModSecurity, Cloudflare WAF). |
| **Hide Error Messages** | Never show raw database errors to users — reveals table/column names to attacker. |
| **ORM** | ORMs (Django, Hibernate) auto-parameterise queries. |

---

### Q11. Credit Card Fraud in Mobile/Wireless Computing. [15]

#### Attack Methods
- **Skimming**: Physical device on ATM/POS reads card's magnetic stripe.
- **E-Skimming (Magecart)**: Malicious JS injected into checkout pages sends card data to attacker in real-time.
- **Phishing/Smishing**: Fake SMS/email tricks user into entering card details on a spoofed site.
- **SIM Swap**: Attacker takes over phone number → receives OTPs → authorises fraudulent transactions.
- **MITM on Public Wi-Fi**: Captures card details entered during online shopping on unencrypted connections.
- **Malicious Apps**: Fake banking app steals card details; or overlay malware captures keystrokes on legitimate app.
- **NFC Skimming**: Modified NFC readers in close proximity can read contactless card number/expiry.
- **Data Breach + Carding**: Stolen card databases sold on dark web; used for online purchases on sites lacking 3D Secure.

#### Prevention

| For Users | For Banks/Merchants |
|-----------|---------------------|
| Use virtual/one-time card numbers | Implement 3D Secure (OTP verification) |
| Enable SMS/email alerts for every transaction | ML-based fraud detection — flag unusual patterns |
| Prefer UPI/tokenised wallets (Apple Pay, Google Pay) | Tokenisation — replace real card number with unique token |
| Avoid public Wi-Fi for transactions; use VPN | EMV chip cards (hard to clone vs magnetic stripe) |
| Never share OTP with anyone | Real-time transaction monitoring + auto-block |
| Lock card via app when not in use | PCI-DSS compliance for all merchants |

---
---

# Paper 3 — 2024–2025
*CS/B.TECH(N)/EVEN/SEM-8/8258/2024-2025/I010*

## Group A — Very Short Answers [1 × 10 = 10]

| # | Question | Answer |
|---|----------|--------|
| (i) | What are hybrid attacks? | Combines dictionary attack (wordlist) + brute force — tries dictionary words with appended numbers/symbols. *E.g., "password" → "Password1!", "passw0rd@"*. Faster than pure brute force. |
| (ii) | Updated version of IT Act 2000? | **IT (Amendment) Act, 2008** — effective 27 October 2009. *(A new Digital India Act is also being drafted as of 2025.)* |
| (iii) | Sec 66 IT Act — offence and punishment? | **Sec 66 — Hacking**: Dishonestly/fraudulently damaging computer resources. Punishment: **3 years + ₹5 lakh**. |
| (iv) | What is Cybercrime + examples? | Criminal activity using computer/network as tool, target, or both. *Examples*: hacking, phishing, ransomware, identity theft, cyberstalking, cyber terrorism. |
| (v) | Name of IT law in Indian legislature? | **The Information Technology Act, 2000** (IT Act 2000). |
| (vi) | Technology to hide info inside a picture? | **Steganography** — conceals a message/file *inside* another file. Differs from encryption (hides content) — steganography hides the *existence* of the message. |
| (vii) | Example of peer-to-peer cybercrime? | Sharing pirated movies/software via BitTorrent/P2P networks; spreading malware through P2P shared files. |
| (viii) | Example of "computer as weapon" cybercrime? | DDoS attack, cyberstalking, sending threatening emails, distributing ransomware — using the computer to harm others. *(Contrast: "computer as target" = hacking into it.)* |
| (ix) | Full form of SSL? | **Secure Sockets Layer** — now superseded by **TLS (Transport Layer Security)**, though "SSL" is still used colloquially. |
| (x) | Security challenges by mobile devices? | Device theft/loss; insecure Wi-Fi/Bluetooth; malicious apps; weak screen lock; OS fragmentation (delayed Android updates); SIM swap; smishing. |
| (xi) | What is a Cookie? | Small text file stored on a user's browser by a website to remember session state, preferences, login status. *Security risks*: cookie theft (session hijacking), stolen via XSS attacks. |
| (xii) | Identity Theft w.r.t. cybercrime? | Fraudulently acquiring and using another person's PII (Aadhaar, PAN, passwords) to impersonate them for financial gain. **Sec 66C, IT Act → 3 years + ₹1 lakh**. |

---

## Group B — Short Answers [5 × 3 = 15]

### Q2. Various penalties under IT Act. [5]
*(Refer to the cheat sheet at the top. For a 5-mark answer, cover 6–8 sections with section number + offence + punishment.)*

**Must include**: Sec 43, Sec 65, Sec 66, Sec 66C, Sec 66F, Sec 67B, Sec 70, Sec 79.

---

### Q3. Various jurisdictional issues in Cyber Space. [5]
**Core problem**: Internet is borderless; jurisdiction is territorial.

**Key Issues:**
1. **Borderless nature**: Attacker in Country A, server in B, victim in C — which law applies?
2. **Conflicting laws**: What's legal in one country may be criminal in another (encryption limits, hate speech, gambling).
3. **No global enforcement**: No single body with enforcement authority. Interpol coordinates but cannot compel.
4. **Anonymity**: VPNs, Tor, cryptocurrency make attribution near-impossible.
5. **Evidence collection across borders**: Slow MLAT process (months to years); evidence often gone by then.

**Indian Position:**
- **Sec 1(2)**: IT Act applies to India.
- **Sec 75**: Extra-territorial — IT Act applies to offences outside India if they involve Indian computers/networks.
- India uses bilateral MLATs; **not a signatory to Budapest Convention**.

---

### Q4. Explain powers of Cyber Appellate Tribunal. [5]
**Established under**: Sec 48, IT Act 2000.
**Purpose**: Hear appeals against orders of Adjudicating Officers (who adjudicate civil claims under Sec 46) and Controller of Certifying Authorities.

**Powers:**
- Hear appeals against Adjudicating Officer orders.
- Powers of a Civil Court (Sec 58): summon witnesses, require document production, receive affidavit evidence.
- Confirm, modify, set aside, or remand lower orders.
- Enhance or reduce penalties.
- Grant interim stay of orders under challenge.
- Award costs.

**Further appeal**: Lies to the **High Court** (Sec 62).
*Note: As of 2025, CAT has been largely non-functional; pending cases move to High Courts.*

---

### Q5. Cyber Squatting + Consumer Protection. [5]
**Cyber Squatting**: Registering a domain name identical/similar to a famous trademark in bad faith — to sell it back at a premium or mislead users. *Example*: Registering `apple-pay.in` before Apple could.

**Consumer Harms**: Users may land on fake sites → buy counterfeit goods, or have financial data stolen.

**Protection Available:**
- **UDRP (ICANN/WIPO)**: Complaint-based — complainant proves (a) domain confusingly similar to their trademark; (b) registrant has no legitimate interest; (c) registered in bad faith. Remedy: transfer or cancellation. Fast (~45 days).
- **INDRP**: For `.in` domains — administered by NIXI.
- **India**: No standalone anti-cybersquatting law. Use Trademark Act 1999 (passing off) + IT Act 2000 (fraud/deception).
- **Best practice for companies**: Defensively register common typos and variants of their domain proactively.

---

### Q6. How does cyber security become an integral part of a person's life? [5]
- **Financial security**: UPI, net banking, e-wallets are daily essentials — 2FA and encryption protect savings.
- **Personal data**: Smartphones hold medical records, personal photos, financial info — all targets.
- **Social media & privacy**: Personal info shared online can be mined for social engineering; cyberbullying affects mental health.
- **Professional life**: Remote work extended corporate attack surfaces into homes — employees must practice cyber hygiene.
- **Smart home/IoT**: CCTV cameras, smart locks, Alexa — all entry points if network is insecure.
- **Children's safety**: Cyberbullying, predators, inappropriate content — cyber safety is part of modern parenting.
- **Conclusion**: From banking to healthcare to social life — cybersecurity is as essential as physical safety. Requires awareness, good habits (strong passwords, MFA, updates), and knowledge of IT Act rights.

---

## Group C — Long Answers [15 × 3 = 45]

### Q7. (a) Cyberstalking [6] · (b) Passive vs Active attacks [4] · (c) Attacks with attack vectors [3] · (d) Cyberbullying [2]

#### (a) Cyberstalking [6]
**Definition**: Repeated use of electronic communications — email, social media, tracking apps — to harass, threaten, or monitor an individual, causing fear or distress.

**How it works:**
1. *Info gathering*: Stalker tracks victim via social media geotags (Instagram, Snapchat Map), public profiles, mutual contacts.
2. *Harassment*: Sends threatening/obscene messages; creates fake profiles; doxxes victim (publishes personal info publicly).
3. *Escalation*: Signs victim up for unwanted services; contacts victim's employer or family; may escalate to physical stalking.

**Tools used**: Stalkerware apps (mSpy, FlexiSPY); IP logging via email links; fake profiles; social media's own location features.

**Laws (India)**:
- **Sec 354D, IPC**: Stalking including online → 1–3 years.
- **Sec 66E, IT Act**: Privacy violation.
- **Sec 67, IT Act**: Publishing obscene material targeting victim.

#### (b) Passive vs Active Attacks [4]

| Basis | Passive | Active |
|-------|---------|--------|
| **Goal** | Gather information | Disrupt, destroy, or impersonate |
| **Data** | Unchanged | Modified or fabricated |
| **Detection** | Very difficult | Easier — anomalies are visible |
| **Prevention** | Encryption (intercepted data is useless) | Firewalls, IDS, authentication |
| **Examples** | Eavesdropping, sniffing, traffic analysis | DoS, MITM, replay attack, IP spoofing |

#### (c) Attacks with Attack Vectors [3]
An **attack vector** is the path/means an attacker uses to reach the target.

| Vector | Associated Attacks |
|--------|-------------------|
| **Email** | Phishing, spear phishing, malware attachments, BEC |
| **Web/Browser** | SQL injection, XSS, drive-by downloads |
| **Network** | DoS/DDoS, MITM, packet sniffing |
| **Wireless** | Rogue Wi-Fi, Bluetooth attacks, IMSI catcher |
| **Physical** | USB drop (Rubber Ducky), shoulder surfing, tailgating |
| **Human (Social Eng.)** | Pretexting, baiting, vishing |

#### (d) Cyberbullying [2]
Use of digital technologies to repeatedly harm, harass, or humiliate another person — primarily among minors. Occurs on social media, messaging apps, gaming platforms.

*Forms*: Threatening messages; spreading rumours; posting embarrassing content; creating impersonation accounts; excluding from online groups.

*India*: No standalone law. Covered under Sec 66E/67 IT Act, Sec 354D IPC, and POCSO Act for minors.

---

### Q8. (a) Public Key Certificate [5] · (b) Advantages and Limitations [10]

#### (a) What is a Public Key Certificate? [5]
An electronic document (**X.509 standard**) issued by a trusted **Certifying Authority (CA)** that *binds a public key to the identity of its owner*.

Without certificates, you can't trust whose public key you're actually using — PKI's entire trust model depends on them.

**Contents of a Digital Certificate:**
- Subject name (owner)
- Subject's public key
- Issuer (CA name)
- Serial number
- Validity period (Not Before / Not After)
- CA's digital signature *(seals the certificate — verifiable with CA's public key)*
- Key usage flags

**Trust Chain**: Root CA (pre-installed in OS/browser) → signs Intermediate CA certificate → signs End-Entity certificate.

**India**: Licensed CAs — NIC, eMudhra, Safescrypt, (n)Code Solutions — licensed by CCA under IT Act.

#### (b) Advantages and Limitations [10]

**Advantages:**
1. **Identity verification**: Trusted, verifiable proof of who owns a public key — essential for HTTPS, e-government, code signing.
2. **Enables HTTPS**: SSL/TLS certificates protect all web traffic from MITM attacks (the browser padlock).
3. **Non-repudiation**: CA-signed certificate + digital signature creates legally admissible proof.
4. **Scalable trust**: Trust a few Root CAs → certificates extend that trust to millions of entities automatically.
5. **Revocation mechanism**: Compromised certificates can be revoked (CRL/OCSP) — limits exposure window.
6. **Standard-based interoperability**: X.509 is universally accepted — works globally.
7. **Legal validity in India**: DSCs issued by licensed CAs are mandatory for MCA filings, GST, Income Tax returns (for companies).

**Limitations:**
1. **CA compromise = catastrophic**: If a Root CA is hacked (e.g., DigiNotar 2011), all certificates it issued become untrusted. Entire CA was shut down.
2. **Phishing sites can get valid SSL too**: Let's Encrypt gives free certs automatically — HTTPS padlock no longer guarantees a site is legitimate.
3. **Revocation infrastructure is weak**: OCSP is often not properly checked in practice; CRL lists are large and slow.
4. **Key management is user's burden**: If private key is lost/stolen — certificate must be revoked, new one issued; no recovery.
5. **Expiry overhead**: Certificates expire (SSL certs: max 13 months) — operational burden; many major outages caused by expired certificates.
6. **Quantum computing threat**: RSA/ECC underlying PKI is vulnerable to Shor's Algorithm on quantum computers — post-quantum migration underway but not complete.
7. **Cost**: Commercially validated certificates from top CAs can be expensive (though Let's Encrypt solved this for basic SSL).

---

### Q9. (a) Cyber Ethics [5] · (b) 4 Ethical Issues [4] · (c) Why practise cyber ethics [6]

#### (a) Cyber Ethics [5]
**Cyber Ethics** is the branch of applied ethics that defines morally right and wrong behaviour in cyberspace — how individuals and organisations should use computers, the internet, and digital communications responsibly.

**Foundations**: Traditional values (privacy, honesty, fairness, respect) applied to the unique digital environment — where anonymity is easy, copying is free, actions have global reach, and data persists indefinitely.

**The "10 Commandments of Computer Ethics" (Computer Ethics Institute)** — key ones:
- Do not use a computer to harm others.
- Do not snoop in others' files without permission.
- Do not steal (including software piracy).
- Do not copy software for which you haven't paid.
- Consider the social consequences of programs you write.

**Professional codes**: ACM Code of Ethics; IEEE Code of Ethics — both mandate avoiding harm, respecting privacy, and being honest.

#### (b) 4 Ethical Issues [4]

Using the **PAPA Framework** (Mason, 1986):

| Issue | Meaning | Example violation |
|-------|---------|------------------|
| **Privacy** | Right to control one's personal data | Surveillance without consent; selling user data without disclosure |
| **Accuracy** | Integrity and truthfulness of digital information | Spreading deepfakes/misinformation; altering records |
| **Property** | Respecting intellectual property rights | Software piracy; music/movie torrenting |
| **Accessibility** | Equal and fair access to information/technology | Digital divide — wealthy nations vs. developing nations |

#### (c) Why is it Necessary to Practise Cyber Ethics? [6]
1. **Prevention of harm**: Hacking, identity theft, and cyberbullying cause real, measurable harm. Ethics sets the moral floor that law cannot always enforce.
2. **Trust in digital systems**: E-commerce, banking, and e-governance only work if users trust the digital ecosystem. Widespread unethical behaviour erodes this trust.
3. **Law lags technology**: Many harmful digital behaviours are in legal grey areas — ethics fills the gap. *"Legal doesn't always mean right."*
4. **Professional responsibility**: IT professionals have disproportionate power (access to sensitive data, code affecting millions). Ethics ensures this power is used responsibly.
5. **Protecting vulnerable groups**: Children cannot protect themselves from cyberbullying, predators, and inappropriate content — ethical norms and parental guidance are the first line of defence.
6. **Global interconnectedness**: Cyberspace is borderless — a lack of shared ethical standards makes the internet exploitable by the worst actors worldwide. Ethics creates a de facto standard even where law doesn't reach.

---

### Q10. (a) Internet Protocol Service [7] · (b) IP in Cybercrime Investigation [8]

#### (a) Internet Protocol (IP) Service [7]
**IP** is the fundamental communication protocol of the internet — defines packet format and the addressing system that routes data from source to destination.

**Key characteristics:**
- **Connectionless**: Each packet routed independently; no pre-established path.
- **Best-effort**: No delivery, ordering, or error guarantee (TCP handles this at the layer above).
- **Hierarchical addressing**: Every internet-connected device has an IP address (logical, not physical).

**IPv4 vs IPv6:**

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address size | 32-bit | 128-bit |
| Example | 192.168.1.1 | 2001:db8::1 |
| Address space | ~4.3 billion | 3.4 × 10³⁸ |
| Status | Exhausted (NAT used) | Gradual global adoption |
| IPSec | Optional | Mandatory |

**Key IP concepts:**
- **NAT**: Maps multiple private IPs to one public IP — conserves IPv4 addresses.
- **DHCP**: Dynamically assigns IP addresses to devices.
- **IPSec**: Encryption + authentication at network layer; used in VPNs.
- **TTL**: Prevents infinite routing loops; decremented by each router.

#### (b) IP in Cybercrime Investigation [8]

**Why IP addresses matter**: Every internet device uses an IP — it's the most fundamental piece of digital evidence. The digital equivalent of a return address.

**Investigation techniques:**

| Technique | How it's used |
|-----------|--------------|
| **IP Address Logs** | Web/email servers log all connection IPs. Court orders served to obtain them. |
| **IP Geolocation** | Maps IP to approximate city/ISP using databases (MaxMind, ARIN/RIPE). |
| **WHOIS / ISP Lookup** | Identifies which ISP/org owns the IP block; ISP then queried for subscriber identity. |
| **ISP Subscriber Records** | ISPs log dynamic IP assignments to customer accounts (India: TRAI requires 1-year retention). |
| **Email Header Analysis** | `Received:` headers trace the email's routing path; original sender IP often embedded. |
| **VoIP/WhatsApp Logs** | SIP logs and provider records identify call/message origin. |

**Challenges:**
- **VPN / Proxy**: Hides real IP — investigators see VPN server's IP. Must subpoena VPN provider (many log nothing, or are in non-cooperative jurisdictions).
- **Tor**: Encrypts traffic through 3+ nodes — near-total anonymity. Near-impossible to trace without compromising a node.
- **Dynamic IP + NAT**: Multiple users share one public IP; port number + exact timestamp required to identify the specific user.
- **IP Spoofing**: Forged source IPs in DDoS — unreliable for attribution.
- **Jurisdictional barriers**: Foreign servers require slow MLAT process (months to years).

**Indian Legal Framework:**
- **Sec 65B, Evidence Act**: Logs admitted with certificate.
- **Sec 69, IT Act**: Government can order ISPs to monitor/intercept.
- **Sec 91, CrPC**: Courts can compel ISPs to produce records.
- **CERT-In**: Coordinates incident response; interfaces with international CERTs.

---

### Q11. (a) What is cybercrime + example [8] · (b) Cybercrime with hacking elaborated [7]

#### (a) Cybercrime with Example [8]
**Definition**: Criminal activity where a computer/network is used as a tool, target, or both.

**Classification:**
- *Computer as target*: Hacking into servers, ransomware on hospital systems, DDoS on government websites.
- *Computer as tool*: Online fraud, cyberstalking, planning terrorism, money laundering via crypto.
- *Computer as incidental*: Drug trafficking communication via encrypted messaging apps.

**Comprehensive Example — Ransomware Attack:**

*Step 1 — Phishing*: Hospital employee receives email with attachment "Lab_Results.pdf" — contains malicious macro.
*Step 2 — Infection*: Macro downloads ransomware (e.g., LockBit) via PowerShell.
*Step 3 — Lateral movement*: Ransomware exploits unpatched SMB vulnerability to spread to 200 machines including ICU monitors.
*Step 4 — Encryption*: All files encrypted with AES-256; ransom note demands ₹2 crore in Bitcoin within 72 hours.
*Step 5 — Impact*: Surgeries cancelled; ICU monitoring on manual fallback; lives endangered.
*Step 6 — Legal*: Charged under Sec 66 (hacking), Sec 43 (damage), Sec 66F (cyber terrorism — lives endangered), Sec 384 IPC (extortion).

#### (b) Cybercrime with Hacking Elaborated [7]

**Types of Hackers:**

| Type | Description |
|------|-------------|
| **White Hat** | Ethical — authorized penetration testing; bug bounty programs |
| **Black Hat** | Malicious — unauthorized intrusion for personal gain |
| **Grey Hat** | Hacks without permission but discloses findings rather than exploiting |
| **Script Kiddie** | Uses ready-made tools without understanding the technique |
| **Hacktivist** | Ideological/political motive (e.g., Anonymous) |
| **State-Sponsored** | Government-employed; cyber espionage or sabotage |

**5-Phase Hacking Lifecycle:**

| Phase | Actions | Tools |
|-------|---------|-------|
| **1. Reconnaissance** | Gather target info (WHOIS, Shodan, LinkedIn, Google dorking) | theHarvester, Maltego |
| **2. Scanning** | Identify open ports, services, OS, vulnerabilities | Nmap, Nessus, OpenVAS |
| **3. Gaining Access** | Exploit vulnerability (buffer overflow, stolen creds, phishing) | Metasploit, Burp Suite, SQLmap |
| **4. Maintaining Access** | Install backdoor/rootkit; create hidden admin accounts; escalate privileges | Netcat, Meterpreter |
| **5. Covering Tracks** | Delete logs, modify timestamps, anti-forensics | Timestomp, log wipers |

**Law**: **Sec 66, IT Act 2000** — hacking → up to **3 years + ₹5 lakh**. All 5 phases that involve accessing or damaging systems without authorisation fall under Sec 43 (civil) and Sec 66 (criminal).

---
---

# Part 4 — Pattern Analysis (3 Years)

## Frequency Matrix

| Topic | 2022-23 | 2023-24 | 2024-25 | Frequency |
|-------|---------|---------|---------|-----------|
| IT Act sections/penalties | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Digital Signature / PKI / Public Key | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Types of cyber attacks (general) | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Hacking (types, lifecycle) | ✓ | ✓ | ✓ | **3/3 ★★★** |
| DoS / DDoS / Traffic Flooding | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Phishing / Identity Theft | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Mobile / Bluetooth security | – | ✓ | ✓ | **2/3 ★★** |
| Cyber Ethics (PAPA / necessity) | – | ✓ | ✓ | **2/3 ★★** |
| Jurisdiction in cyberspace | ✓ | – | ✓ | **2/3 ★★** |
| Passive vs Active attacks | ✓ | ✓ | ✓ | **3/3 ★★★** |
| SQL Injection | ✓ | ✓ | ✓ | **3/3 ★★★** |
| Cyber Terrorism (Sec 66F) | ✓ | – | – | 1/3 |
| ISP Liability (Sec 79) | ✓ | – | – | 1/3 |
| IT Amendment Act 2008 | – | ✓ | – | 1/3 |
| Forgery | – | ✓ | – | 1/3 |
| Credit card / financial fraud | – | ✓ | – | 1/3 |
| Cyber Squatting | – | – | ✓ | 1/3 |
| Cyber Appellate Tribunal | – | – | ✓ | 1/3 |
| IP address in investigation | – | – | ✓ | 1/3 |

## Exam Structure (Consistent All 3 Years)
- **Group A**: 12 Qs → answer 10 × 1 mark = **10 marks** *(definitions, fill-in-blank, true/false)*
- **Group B**: 5 Qs → answer 3 × 5 marks = **15 marks** *(comparisons, short explanations)*
- **Group C**: 5 Qs → answer 3 × 15 marks = **45 marks** *(multi-part long answers)*

---

# Part 5 — Predicted Questions for 2025–2026
*Topics appearing 3/3 years are near-certain; 2/3 are very likely. 0–1/3 topics that are significant are due for a return.*

---

### P1. ★★★ IT Act Sections and Penalties
*Asked every single year in Group A and/or B.*

**Predicted form**: "Mention the various penalties under the IT Act" (Group B, 5 marks) OR "Explain Sec 65, 66, 67 of IT Act" (Group C, 15 marks).
→ **Use the cheat sheet at the top of this file. Memorise it cold.**

---

### P2. ★★★ Digital Signature — Full 15-marker
*Appeared as a standalone 15-mark question in Paper 1; as sub-parts in Papers 2 and 3.*

**Predicted form**: "Explain the working of Digital Signatures with signing and verification steps. Discuss legal framework and applications." (Group C, 15 marks).

**Model structure** (15 marks):
1. Definition + Sec 2(p) [2]
2. Step-by-step process: Hash → Sign → Transmit → Verify [5]
3. Three properties: Authentication, Integrity, Non-repudiation [2]
4. PKI and Digital Certificate (X.509, CA, CCA) [3]
5. Legal framework: Sec 3, 5, 35 [2]
6. Applications [1]

---

### P3. ★★★ SQL Injection — Attack + Prevention
*Appeared in Papers 1 and 2 as full Group C question; Paper 3 had it as Group A + B.*

**Predicted form**: Either a full 15-mark question OR a 5-mark Group B question focused on working + parameterised query fix.

**Must show**: vulnerable query → injected query (with `--` or UNION) → parameterised query as fix. That alone is 8–10 marks.

---

### P4. ★★★ Types of Cyber Attacks — Comprehensive
*Some form of this appears in every paper.*

**Predicted form**: "Describe different types of cyber attacks with examples." (Group C, 15 marks).

→ Use the 5-category structure from Paper 1 Q7 above: Malware / Network / Social Engineering / Web-based / Advanced.

---

### P5. ★★★ Hacking — Types + Lifecycle
*Core topic; appears in every paper in some form.*

**Predicted form**: As a 15-mark sub-part OR "Explain cybercrime with the concept of hacking elaborately."

→ Know White/Black/Grey hat definitions + the 5-phase lifecycle table with tools per phase.

---

### P6. ★★ Cyber Ethics — PAPA + Necessity
*Appeared in Papers 2 and 3; growing emphasis.*

**Predicted form**: "Explain cyber ethics. List 4 ethical issues. Why is it necessary to practise cyber ethics?" (Group C, 3-part, 15 marks).

→ PAPA Framework (Privacy, Accuracy, Property, Accessibility) is the safe structure to use.

---

### P7. ★★ Mobile/Bluetooth Security
*Papers 2 and 3 both had this.*

**Predicted form**: "Explain security challenges posted by mobile devices" OR "Elaborate how devices with active Bluetooth are vulnerable to attack" (Group B, 5 marks).

→ Know the 4 Bluetooth attacks: Bluejacking, Bluesnarfing, Bluebugging, BlueBorne.

---

### P8. ★★ IT Amendment Act 2008
*Appeared in Paper 2 as a 15-marker sub-part. Not in Paper 3 — due for return.*

**Predicted form**: "What are the objectives of IT legislation in India? Explain the major amendments introduced in 2008." (Group C, 15 marks).

→ Know the new sections: 66C, 66D, 66E, 66F, 67A, 67B, 43A, 69A, 3A. Know what each adds.

---

### P9. ★ ISP Liability — Sec 79 Safe Harbour
*Full 15-mark question in Paper 1. Skipped Papers 2 and 3 — likely to return.*

**Predicted form**: "Describe the safe harbour provisions for intermediaries under Sec 79 and when this protection is lost." (Group C, 15 marks).

→ Three conditions for safe harbour; when it's lost (36-hour rule, active participation); Intermediary Guidelines 2021; Shreya Singhal case.

---

### P10. ★ Phishing — Methods, Types, Prevention
*Present in all 3 papers in Group A; likely to appear as Group B 5-marker.*

**Predicted form**: "Explain phishing methods and how to prevent phishing attacks." (Group B, 5 marks).

→ Cover: Spear phishing, Pharming, Vishing, Smishing, Clone phishing. Prevention: verify URLs, MFA, email filters, DMARC/SPF.

---

## 🎯 Night-Before Priority

> Ranked by **marks × probability**.

**Tier 1 — Guaranteed (Know Cold)**
1. **IT Act penalties table** — Sec 43, 65, 66, 66C, 66F, 67B, 70, 79 *(asked every year in Group A + B)*
2. **Digital Signature process** — 4 steps: Hash → Private key sign → Send → Public key verify *(15-marker every year)*
3. **Passive vs Active attacks** — always a table question
4. **SQL Injection** — vulnerable query + injected query + parameterised fix

**Tier 2 — Very Likely**
5. **Types of cyber attacks** — 5 categories, 3 attacks each with examples
6. **Hacking lifecycle** — 5 phases + tools + White/Black/Grey hat
7. **Bluetooth attacks** — 4 types (Bluejacking, Bluesnarfing, Bluebugging, BlueBorne)
8. **Cyber Ethics** — PAPA framework + why necessary

**Tier 3 — Prepare Briefly**
9. **ISP Liability Sec 79** — safe harbour conditions + Intermediary Guidelines 2021
10. **IT Amendment Act 2008** — new sections added and what they cover
11. **PKI / Public Key Certificate** — X.509 contents, CA/CRL, advantages/limitations
12. **DoS/DDoS** — SYN flood mechanism, mitigation (CDN, rate limiting)

---

> **Section number citation = bonus marks every time.** Never write "the hacking section" — write "Section 66 of the IT Act 2000."
> **Comparison questions = always write a table.** Saves time, looks structured, scores full marks.
> **15-mark questions = minimum 5 sub-headings**, roughly 1 paragraph each.

---