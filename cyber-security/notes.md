# Cyber Security — VMSBUTU 8th Sem · B.Tech CSE

### Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun

> This document follows the VMSBUTU B.Tech CSE Cyber Security syllabus (5 units). It is written as a standalone, exam-ready reference — definitions, comparison tables, and step-by-step explanations for every topic in the syllabus.

**📋 What This Document Covers**

✓ Unit 1 - Introduction to Cyber Security (Concepts, Attacks, IP Spoofing, Security Models, Risk Management)

✓ Unit 2 - Cyber Forensics (Digital Evidence, Forensics Lifecycle, Email Forensics)

✓ Unit 3 - Cybercrime on Mobile & Wireless Devices (Organizational Security Angle)

✓ Unit 4 - Cyber Security: Organizational Implications (Cost, IPR, Social Media, Hacker Psychology)

✓ Unit 5 - Cyberspace & the Law, Miscellaneous Provisions of the IT Act

# **Table of Contents**

# **UNIT 1 - Introduction to Cyber Security**

## **1.1 Basic Cyber Security Concepts**

**Cyber Security:** The practice of protecting computers, servers, mobile devices, networks, and data from unauthorised access, damage, disruption, or theft. It combines technology, processes, and people to defend the confidentiality, integrity, and availability of digital assets against attacks that originate from, or are carried out through, cyberspace.

Why cyber security matters:

- Almost every critical service today — banking, healthcare, power grids, government records, defence systems — runs on computer networks. A successful attack does not stay confined to a screen; it disrupts real life.
- The attack surface keeps growing: more devices (IoT, mobile, cloud) means more entry points for an attacker.
- Cybercrime is profitable and low-risk for attackers compared to physical crime — anonymity, cross-border reach, and low prosecution rates make it attractive.

**Core goals of cyber security (also called security objectives):**

| **Goal**        | **Meaning**                                                                 |
| ---------------- | ---------------------------------------------------------------------------- |
| Confidentiality  | Only authorised people/systems can view information.                        |
| Integrity        | Data is accurate and has not been tampered with.                             |
| Availability     | Authorised users can access systems/data whenever needed.                   |
| Authenticity     | Verifying that a user, system, or piece of data is genuinely who/what it claims to be. |
| Non-repudiation  | A party cannot later deny having performed an action (e.g., sending a message, making a transaction). |

### **1.1.1 Elements / Building Blocks of Cyber Security**

- **Application Security** — securing software from vulnerabilities during design, development, and deployment (secure coding, code review, penetration testing).
- **Information Security** — protecting the confidentiality, integrity, and availability of data regardless of its form (digital or physical).
- **Network Security** — protecting the underlying networking infrastructure from unauthorised access, misuse, or disruption (firewalls, IDS/IPS, VPNs).
- **Disaster Recovery / Business Continuity Planning** — how an organisation responds to and recovers from a cyber incident, natural disaster, or system failure while keeping critical operations running.
- **Operational Security (OPSEC)** — processes and decisions for handling and protecting data assets, including access permissions and procedures for storage/sharing.
- **End-user Education** — training people, since human error (clicking phishing links, weak passwords) is consistently the largest cause of breaches.

## **1.2 Layers of Security (Defense in Depth)**

**Defense in Depth:** A cyber security strategy that uses multiple, overlapping layers of security controls so that if one layer fails or is bypassed, another layer still protects the asset. No single control is assumed to be perfect.

| **Layer**              | **What It Protects**                                          | **Typical Controls**                                                             |
| ----------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Physical Security        | Physical access to hardware, data centres, devices              | Locks, biometric access, CCTV, security guards, server room access control        |
| Perimeter Security       | The boundary between the trusted internal network and the outside internet | Firewalls, DMZ, border routers, VPN gateways                                      |
| Network Security         | Traffic flowing inside and across the network                   | IDS/IPS, network segmentation, VLANs, NAC (Network Access Control)                |
| Endpoint Security        | Individual devices — laptops, desktops, mobile, servers          | Antivirus/EDR, host-based firewalls, patch management, device encryption          |
| Application Security     | Software and web applications                                    | Secure coding practices, WAF, input validation, code review, SAST/DAST tools      |
| Data Security            | The data itself, at rest and in transit                          | Encryption, access control lists, DLP (Data Loss Prevention), backups              |
| Identity & Access Layer  | Who is allowed to do what                                        | Authentication (passwords, MFA), authorisation (RBAC), identity management        |
| Human Layer              | People — the weakest and most exploited layer                    | Security awareness training, phishing simulations, policies                        |

_Key exam point: Defense in depth means an attacker who breaches one layer (say, the perimeter firewall) still has to break through endpoint security, application security, and data encryption before actually reaching sensitive data — each layer buys time and increases the chance of detection._

## **1.3 Vulnerability, Threat, and Risk**

These three terms are frequently confused and are a favourite short-answer question.

| **Term**       | **Definition**                                                                                                       | **Example**                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Vulnerability   | A weakness or flaw in a system, application, or process that can potentially be exploited to compromise security.       | Unpatched software, weak password policy, open port, SQL injection flaw in code.    |
| Threat          | Any circumstance, event, or actor with the potential to exploit a vulnerability and cause harm.                          | A hacker, a malware strain, a natural disaster, a disgruntled employee.             |
| Threat Agent / Actor | The entity that carries out the threat.                                                                              | Cybercriminal, insider, nation-state group, hacktivist, script kiddie.              |
| Attack          | The actual act of exploiting a vulnerability by a threat agent.                                                          | The hacker uses the SQL injection flaw to dump the customer database.               |
| Risk            | The potential for loss or damage when a threat exploits a vulnerability — usually expressed as a function of probability and impact. | Risk = Threat × Vulnerability × Impact (conceptually; not a literal formula).       |
| Impact          | The consequence/damage if the risk materialises.                                                                          | Financial loss, reputational damage, legal penalty, loss of customer trust.         |

**Relationship:** A threat needs a vulnerability to succeed. If there is no vulnerability, a threat has nothing to exploit; if there is a vulnerability but no threat targeting it, the risk is low. Risk is what results when a real threat can actually exploit an existing vulnerability, and it is only meaningful when weighed against the value/impact of the asset involved.

## **1.4 Harmful Acts and the Motive of Attackers**

**Harmful act (in cyber security context):** Any deliberate or negligent action carried out through a computer or network that causes damage, loss, or unauthorised change to data, systems, or services.

### **1.4.1 Common Motives Behind Cyber Attacks**

| **Motive**                | **Explanation**                                                                                       | **Typical Attacker**                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Financial gain              | Stealing money, card data, or holding data for ransom.                                                     | Organised cybercrime groups, ransomware gangs |
| Espionage                   | Stealing confidential government, military, or corporate secrets for strategic advantage.                  | Nation-state actors, APT groups             |
| Political / ideological (Hacktivism) | Protesting or damaging a target to promote a political or social cause.                              | Hacktivist groups (e.g., Anonymous)         |
| Revenge / personal grudge   | An insider or former employee attacking an organisation out of resentment.                                 | Disgruntled employees, ex-partners          |
| Curiosity / thrill-seeking  | Testing skills, proving capability, "for fun" — often without full understanding of consequences.           | Script kiddies, novice hackers              |
| Sabotage                     | Deliberately disrupting operations or destroying data/infrastructure.                                       | Competitors, nation-states, insiders        |
| Notoriety / recognition     | Building a reputation within hacker communities.                                                            | Hacking groups, individuals                 |
| Terrorism                    | Creating fear, disruption, or damage aligned with an ideological/extremist agenda.                          | Cyber-terrorist groups                      |

### **1.4.2 Types of Attackers**

| **Type**       | **Description**                                                                    |
| --------------- | -------------------------------------------------------------------------------------- |
| White Hat        | Ethical hacker; tests systems with authorisation to find and fix flaws.                |
| Black Hat        | Malicious hacker; exploits systems illegally for personal/financial/ideological gain.  |
| Grey Hat         | In between — breaks in without permission but does not usually cause serious harm; may disclose findings. |
| Script Kiddie    | Uses pre-built tools/scripts without deep technical understanding.                     |
| Hacktivist       | Politically or socially motivated attacker.                                            |
| Insider          | Current or former employee/contractor who misuses legitimate access.                   |
| Nation-state actor / APT | State-sponsored group conducting espionage or sabotage, well-funded and persistent. |
| Cyber-terrorist  | Attacks critical infrastructure to cause fear, casualties, or large-scale disruption.   |

## **1.5 Active vs Passive Attacks**

| **Parameter**      | **Passive Attack**                                                                                 | **Active Attack**                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Definition           | The attacker only observes/intercepts data without modifying it — a silent eavesdropper.                | The attacker modifies, disrupts, replays, or fabricates data — actively interferes with the system or communication.  |
| Goal                 | Gather information/intelligence without being noticed.                                                  | Disrupt service, alter data, or gain unauthorised access.                                                              |
| Data modified?       | No.                                                                                                       | Yes.                                                                                                                    |
| Detectability        | Hard to detect — leaves little to no trace.                                                              | Easier to detect — produces visible side effects (crashes, altered data, anomalies).                                  |
| CIA impacted          | Confidentiality only.                                                                                     | Integrity and Availability (sometimes Confidentiality too).                                                            |
| Examples              | Eavesdropping/packet sniffing, traffic analysis, session monitoring.                                      | Masquerade, replay attack, message modification, DoS, Man-in-the-Middle, session hijacking.                            |
| Prevention            | Encryption of data in transit.                                                                            | Firewalls, IDS/IPS, authentication, digital signatures, access controls.                                                |

## **1.6 Software Attacks vs Hardware Attacks**

**Software Attack:** An attack that exploits flaws in code, operating systems, or applications to compromise a system — the most common category of cyber attack because it can be launched remotely at scale.

| **Software Attack Type** | **How It Works**                                                                             |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| Malware (virus, worm, trojan, ransomware, spyware) | Malicious code that infects, replicates, or performs unauthorised actions on a system. |
| Exploits                      | Code that takes advantage of a specific software vulnerability (e.g., buffer overflow, unpatched CVE). |
| SQL Injection / XSS           | Injecting malicious input into a web application to manipulate the backend database or victim's browser. |
| Denial of Service (DoS/DDoS)  | Flooding a service/application with traffic or requests until it becomes unavailable.               |
| Phishing / social engineering software payloads | Malicious attachments/links delivered through deceptive messages.                    |

**Hardware Attack:** An attack that targets the physical components of a computing system — chips, firmware, peripherals — rather than software alone. Hardware attacks are harder to detect because traditional antivirus/software defences cannot see inside physical components.

| **Hardware Attack Type**       | **How It Works**                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Hardware Trojans                    | Malicious circuitry deliberately inserted into a chip during design or manufacturing — activates under specific trigger conditions. |
| Side-channel attacks                 | Extracting secret information (e.g., cryptographic keys) by observing physical side effects — power consumption, electromagnetic emissions, timing, or sound. |
| Firmware attacks                     | Modifying the low-level firmware (BIOS/UEFI, router firmware) so malicious code runs before the OS even loads — extremely persistent and hard to remove. |
| Supply chain hardware tampering     | Inserting malicious components or backdoors into hardware during manufacturing or shipping, before it ever reaches the buyer.        |
| Physical tampering / skimming       | Directly attaching a malicious device — e.g., a card skimmer on an ATM, a rogue USB device (BadUSB), a keylogger dongle.             |
| Cold boot attack                     | Extracting encryption keys or sensitive data remaining in RAM for a short period after a system is powered off.                       |
| JTAG/Debug-port exploitation        | Using a device's built-in hardware debugging interface to bypass software security controls entirely.                                |

**Key exam distinction:** Software attacks exploit *logic* (code, configuration); hardware attacks exploit *physical implementation* (chips, circuits, electromagnetic behaviour, physical access). Hardware attacks generally require some form of physical proximity or supply-chain access, while software attacks can usually be launched purely remotely.

## **1.7 Spectrum of Attacks**

The **spectrum of attacks** describes the full range of cyber attacks arranged by their sophistication, resources, and origin — useful for understanding that not every attack requires the same level of skill or intent.

| **Spectrum Dimension**   | **Low End**                                          | **High End**                                                              |
| --------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| Skill level                  | Script kiddies using off-the-shelf tools                 | Nation-state APT groups with custom zero-day exploits                     |
| Organisation                 | Lone individual                                            | Organised crime syndicates, state-sponsored teams                          |
| Funding                       | Minimal / free tools                                       | Millions of dollars in R&D (nation-state cyber programs)                  |
| Persistence                   | One-off opportunistic attack                               | Advanced Persistent Threat (APT) — years-long stealthy campaigns          |
| Target selection              | Opportunistic — whoever is vulnerable                      | Highly targeted — specific organisation/individual researched in depth   |
| Intent                        | Curiosity, minor financial gain, vandalism                  | Espionage, sabotage of critical infrastructure, warfare                   |
| Example                       | Defacing a small website                                    | Stuxnet-style attack on a nuclear facility                                |

Understanding the spectrum matters for **risk-based defence** — an organisation must decide how much of its limited security budget goes toward stopping high-volume/low-skill attacks (patch management, spam filters) versus rare/high-skill attacks (threat hunting, red teaming).

## **1.8 Taxonomy of Various Attacks**

A **taxonomy** is a structured classification. Cyber attacks can be classified along several independent axes simultaneously:

**(a) Classification by Target:**

| **Target Category** | **Examples**                                                       |
| ---------------------- | ----------------------------------------------------------------------- |
| Network-based           | DoS/DDoS, MITM, packet sniffing, IP spoofing, ARP/DNS spoofing            |
| Host/system-based       | Malware, privilege escalation, rootkits, buffer overflow                  |
| Application-based       | SQL injection, XSS, CSRF, insecure APIs                                   |
| Data-based              | Data exfiltration, data tampering, data destruction                       |
| Human-based             | Phishing, pretexting, social engineering                                  |
| Physical                | Device theft, hardware tampering, dumpster diving                         |

**(b) Classification by Method:**

- **Interception** — unauthorised access to data without altering it (passive).
- **Interruption** — making a system/service unavailable (DoS).
- **Modification** — unauthorised alteration of data (integrity attack).
- **Fabrication** — inserting counterfeit objects/data into a system (e.g., spoofed packets, forged transactions).

**(c) Classification by Origin:**

- **Internal (Insider) attacks** — carried out by someone with legitimate authorised access.
- **External (Outsider) attacks** — carried out by someone with no authorised access, attacking from outside the organisation's perimeter.

**(d) Classification by Attack Vector:**

Malware-based, network-based, web-based, social-engineering-based, wireless-based, physical-based, supply-chain-based.

_Exam tip: A "taxonomy" question usually expects you to show that attacks can be sliced by more than one dimension — target, method, origin, and vector — rather than a single flat list._

## **1.9 IP Spoofing**

**IP Spoofing:** The act of creating IP packets with a forged (spoofed) source IP address in order to impersonate another computing system, hide the attacker's real identity, or bypass IP-based access controls. Because the basic IP protocol does not verify that a packet's source address is genuine, an attacker can simply write any IP address into the header.

### **1.9.1 How IP Spoofing Works**

- Normally, a packet's header contains the sender's real source IP so the receiver knows where to send a reply.
- The attacker constructs a raw packet and manually sets the source IP field to a different (spoofed) address — belonging to a trusted host, a victim, or a nonexistent address.
- The receiving system processes the packet as if it genuinely came from the spoofed address.
- Because replies are sent to the spoofed address (not the real attacker), the attacker either doesn't need a reply (e.g., in DoS floods) or uses more advanced techniques (blind spoofing) to predict responses without seeing them.

### **1.9.2 Types of IP Spoofing**

| **Type**              | **Description**                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Non-blind spoofing         | Attacker is on the same subnet as the victim and can see the traffic/responses — allowing session hijacking by predicting sequence numbers. |
| Blind spoofing             | Attacker is outside the subnet and cannot see responses — must guess/predict sequence numbers to hijack or inject into a session. |
| DDoS-amplification spoofing | Attacker spoofs the victim's IP as the source of many requests to third-party servers, causing all the replies to flood the victim (reflection/amplification attack). |
| Man-in-the-Middle spoofing | Spoofing used to position the attacker between two communicating hosts so both believe they're talking directly to each other. |

### **1.9.3 Why Attackers Use IP Spoofing**

- To hide their real identity/location and avoid tracing.
- To bypass IP-based authentication or firewall rules that trust specific IP ranges.
- To launch DDoS amplification/reflection attacks (e.g., DNS/NTP amplification) where reply traffic is directed at the victim instead of the attacker.
- To conduct session hijacking by impersonating an already-authenticated host.

### **1.9.4 Defense Against IP Spoofing**

| **Defense**                     | **How It Helps**                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Ingress filtering                    | Routers/firewalls at the network edge drop incoming packets whose source IP claims to be from inside the internal network (an impossible/spoofed claim). |
| Egress filtering                     | Blocks outbound packets whose source IP is not actually assigned to the sending network — prevents an organisation's own network from being used to launch spoofed attacks. |
| BCP 38 / Network ingress filtering (IETF standard) | Industry-standard recommendation for ISPs to filter spoofed traffic at the network boundary.                             |
| Packet filtering with strict reverse-path checking | Verifies a packet's source address is reachable via the interface it arrived on.                                          |
| Strong authentication              | Don't rely on IP address alone for trust — use cryptographic authentication (IPSec, TLS, mutual authentication) instead. |
| Encryption (IPSec/TLS)             | Encrypts and authenticates packets so a spoofed packet without valid credentials is rejected.                            |

## **1.10 Methods of Defense**

A summary framework of the broad categories of defensive controls used across cyber security (each is elaborated in later units):

| **Defense Category** | **Examples**                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| Preventive controls      | Firewalls, encryption, access control, patch management, secure coding, employee training  |
| Detective controls       | IDS/IPS, SIEM, log monitoring, honeypots, antivirus signature/behaviour detection            |
| Corrective controls      | Incident response plans, backups & restore procedures, patching after vulnerability disclosure |
| Deterrent controls       | Warning banners, visible surveillance, legal penalties under cyber law                        |
| Compensating controls    | Additional controls used when a primary control cannot be implemented (e.g., extra monitoring on a legacy system that cannot be patched) |

**General defensive principles:**

- **Least Privilege** — give users/systems only the minimum access needed to do their job.
- **Defense in Depth** — layer multiple controls (see 1.2) so no single point of failure exists.
- **Fail-Safe Defaults** — default state should be "deny" unless explicitly permitted.
- **Separation of Duties** — no single individual should have complete control over a critical process.
- **Economy of Mechanism** — keep security designs as simple as possible; complexity hides flaws.
- **Regular patching and vulnerability management** — the majority of breaches exploit *known*, unpatched vulnerabilities.

## **1.11 Security Models**

**Security Model:** A formal or conceptual framework that specifies how a system enforces confidentiality, integrity, or access-control rules. Security models give system designers a mathematically precise (or at least systematic) way to reason about "who can do what to what."

| **Model**              | **Focus**                    | **Core Rule**                                                                                                              | **Typical Use**                            |
| ------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Bell-LaPadula Model         | Confidentiality                  | "No read up, no write down" — a subject cannot read data at a higher classification, and cannot write data down to a lower classification level. | Military/government classified systems       |
| Biba Model                  | Integrity                        | "No write up, no read down" — a subject cannot write to data of higher integrity, and cannot read data of lower integrity.        | Systems where data accuracy is critical (e.g., financial systems) |
| Clark-Wilson Model          | Integrity (commercial)           | Enforces well-formed transactions and separation of duties — changes to data must go through a controlled, auditable procedure. | Banking, commercial transaction systems       |
| Access Control Matrix        | Access rights                    | A table mapping subjects (rows) to objects (columns), with the cell defining allowed operations (read/write/execute).            | Conceptual foundation for all access control systems |
| Chinese Wall Model           | Conflict of interest             | Prevents a subject who has accessed data for one client from accessing competing clients' data.                                  | Financial/consulting firms                     |

### **1.11.1 Access Control Models**

| **Model** | **Full Form**                | **How It Works**                                                                                                  |
| ----------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| DAC         | Discretionary Access Control     | The data owner decides who can access their resource (e.g., file permissions set by the file's creator).               |
| MAC         | Mandatory Access Control         | Access is governed by centrally defined security labels/policies that users cannot override (used with Bell-LaPadula). |
| RBAC        | Role-Based Access Control        | Access is granted based on the user's role within an organisation (e.g., "Manager", "Auditor") rather than individually. |
| ABAC        | Attribute-Based Access Control   | Access decisions are based on a combination of attributes — user attributes, resource attributes, environment (time, location). |

## **1.12 Risk Management**

**Risk Management:** The systematic process of identifying, analysing, evaluating, and treating risks to bring them within an organisation's acceptable tolerance level, at reasonable cost.

### **1.12.1 The Risk Management Process**

1. **Risk Identification** — Identify assets, the threats facing them, and the vulnerabilities that could be exploited.
2. **Risk Assessment / Analysis** — Estimate the likelihood of each threat occurring and the impact if it does (qualitative — High/Medium/Low, or quantitative — monetary values).
3. **Risk Evaluation** — Compare assessed risk against the organisation's risk appetite/tolerance to decide which risks need treatment.
4. **Risk Treatment** — Decide and implement a response for each significant risk (see 4 strategies below).
5. **Monitoring & Review** — Continuously monitor the effectiveness of controls and reassess as the threat landscape or business changes.

### **1.12.2 Risk Treatment Strategies**

| **Strategy**   | **Meaning**                                                                                       | **Example**                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Risk Avoidance    | Eliminate the activity or asset that creates the risk entirely.                                        | Not offering a risky online feature at all.                        |
| Risk Mitigation   | Reduce the likelihood or impact of the risk through controls.                                          | Deploying a firewall, patching, encrypting sensitive data.          |
| Risk Transfer     | Shift the risk (or its financial consequence) to a third party.                                        | Buying cyber-insurance, outsourcing to a cloud provider with SLAs.  |
| Risk Acceptance   | Consciously decide to accept the risk because the cost of treatment outweighs the potential loss.       | Accepting a low-impact, low-likelihood risk without further action. |

### **1.12.3 Quantitative Risk Formula (for numeric-style questions)**

**SLE (Single Loss Expectancy)** = Asset Value × Exposure Factor

**ALE (Annualized Loss Expectancy)** = SLE × ARO (Annualized Rate of Occurrence)

An organisation should not spend more on a safeguard per year than the ALE it is meant to reduce — this is the basic cost-benefit logic behind risk-based security spending.

## **1.13 Cyber Threats and Cyber Warfare**

**Cyber Threat:** Any potential danger that could exploit a vulnerability to breach security and cause harm to an individual, organisation, or nation through cyberspace.

**Cyber Warfare:** The use of cyber attacks by one nation-state (or state-sponsored group) against another nation's computer systems or networks, with the intent to cause damage, disruption, espionage, or to achieve strategic/military objectives — effectively extending armed conflict into cyberspace.

| **Characteristic**       | **Details**                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Actors                       | Nation-states, state-sponsored groups, military cyber units.                                                        |
| Targets                      | Critical infrastructure (power grids, water systems), military networks, financial systems, government databases.  |
| Techniques used              | APT campaigns, zero-day exploits, supply-chain compromise, DDoS, disinformation campaigns.                          |
| Real-world example           | Stuxnet (2010) — a worm believed to be created by US/Israel that physically damaged Iran's Natanz nuclear centrifuges by manipulating their control systems while reporting normal readings. |
| Real-world example           | Russia–Ukraine conflict — repeated attacks on Ukrainian power grids and government systems as part of a broader hybrid conflict. |
| Legal status                 | No single comprehensive international treaty governs cyber warfare; it is discussed under existing international law (UN Charter, Geneva Conventions) with much ambiguity. |

## **1.14 Cyber Crime, Cyber Terrorism, and Cyber Espionage**

| **Concept**       | **Definition**                                                                                                        | **Primary Motive**              | **Typical Actor**                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------- |
| Cyber Crime            | Any criminal activity where a computer, network, or the internet is used as a tool, target, or medium of the crime.            | Financial gain, personal harm         | Individuals, organised cybercrime groups     |
| Cyber Terrorism        | Politically or ideologically motivated attacks on computer systems intended to cause fear, mass disruption, or casualties, often targeting critical infrastructure. | Ideological, political, religious      | Terrorist organisations, extremist actors     |
| Cyber Espionage        | Covertly obtaining confidential political, military, or economic information from governments, organisations, or individuals via computer networks — without authorisation. | Strategic/military/economic advantage | Nation-states, corporate spies, APT groups     |

**Key distinction:** Cybercrime is usually profit-driven and can be committed by anyone; cyber terrorism seeks to spread fear and cause large-scale disruption for an ideological cause; cyber espionage is covert intelligence-gathering that typically avoids detection for as long as possible (unlike terrorism, which often wants to be noticed).

## **1.15 CIA Triad**

The CIA Triad is the foundational model for evaluating any security control or incident.

| **Principle**   | **Definition**                                                                       | **Example Threat**                          | **Example Control**                       |
| ----------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| Confidentiality    | Information is accessible only to those authorised to see it.                             | Eavesdropping, data theft, packet sniffing        | Encryption, access controls, authentication     |
| Integrity           | Data remains accurate and unaltered by unauthorised parties.                              | Man-in-the-Middle, data tampering, malware        | Digital signatures, checksums, hashing, audit logs |
| Availability        | Authorised users can access systems/data whenever needed.                                 | DoS/DDoS, ransomware, hardware failure            | Redundancy, backups, failover, rate limiting     |

_Some frameworks extend CIA to include Authenticity and Non-repudiation (see 1.1) — mention both if the question asks for "elements of cyber security" broadly._

# **UNIT 2 - Cyber Forensics**

## **2.1 Introduction to Cyber Forensics**

**Cyber Forensics (Computer/Digital Forensics):** The application of scientific investigative techniques to identify, collect, preserve, analyse, and present digital evidence in a manner that is legally admissible in a court of law. It answers "what happened, when, how, and who was responsible" by reconstructing events from digital traces.

Cyber forensics differs from ordinary IT troubleshooting because every action taken must preserve the **evidentiary integrity** of the data — an investigator must be able to prove that evidence was not altered from the moment it was collected to the moment it is presented in court (this is called the **chain of custody**).

## **2.2 Historical Background of Cyber Forensics**

| **Period**       | **Development**                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1970s-1980s           | Early computer crime cases (mostly fraud and unauthorised access) begin to appear; no formal forensic methodology exists yet.               |
| 1984                   | The FBI creates the **Magnetic Media Program**, one of the first dedicated forensic units for examining computer media — later renamed the Computer Analysis and Response Team (CART). |
| Late 1980s-1990s       | Rise of personal computers and early internet leads to a surge in computer-related crime; law enforcement agencies worldwide begin training dedicated cyber units. |
| 1990s                  | Formal forensic tools begin to emerge (disk imaging tools, write-blockers) to ensure evidence is not altered during examination.             |
| 2000s                  | Growth of the internet, mobile phones, and networked crime leads to specialisation: network forensics, mobile forensics, cloud forensics.   |
| Present                | Digital forensics now covers cloud storage, IoT devices, encrypted communications, and large-scale enterprise incident response — a mature, standardised discipline with certifications (e.g., GCFA, CHFI). |

## **2.3 Digital Forensics Science**

**Digital Forensics Science:** The branch of forensic science that focuses on the recovery, investigation, and analysis of material found in digital devices, applying scientific methods to ensure that findings are objective, repeatable, and verifiable.

Core scientific principles applied in digital forensics:

- **Locard's Exchange Principle (adapted):** Every digital interaction leaves some trace — an intruder cannot access a system without leaving some artifact (log entry, timestamp, registry change) behind.
- **Repeatability:** Another qualified examiner using the same evidence and methodology should reach the same conclusion.
- **Documentation:** Every single step of the examination must be documented so it can be independently verified and defended in court.
- **Objectivity:** Conclusions must be based strictly on the evidence, free from bias about who the suspect might be.

## **2.4 Need for Computer Forensics**

- **Prosecuting cybercrime:** Digital evidence is often the only evidence available for offences like hacking, fraud, or online harassment.
- **Civil litigation:** Employment disputes, intellectual property theft, and contract disputes increasingly hinge on emails, documents, and access logs.
- **Incident response:** Organisations need forensics to understand how a breach happened, what was accessed, and how to prevent recurrence.
- **Internal investigations:** Suspected policy violations (data leakage, harassment, fraud) by employees require an evidence-based investigation.
- **Insurance and regulatory compliance:** Many breach-notification laws (e.g., CERT-In rules in India) require organisations to determine and report exactly what data was compromised.
- **Recovering lost or deleted data:** Forensic techniques can often recover data that has been deleted, hidden, or encrypted by an attacker or a malicious insider.

## **2.5 Cyber Forensics and Digital Evidence**

**Digital Evidence:** Any information of probative value that is either stored or transmitted in a digital/binary form, and that can be used in a court of law. This includes files, emails, chat logs, browser history, system logs, metadata, deleted data recovered from storage, and network traffic captures.

### **2.5.1 Characteristics of Digital Evidence**

| **Characteristic**   | **Explanation**                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Latent (hidden)          | Digital evidence, like a fingerprint, is not visible to the naked eye without the right tools to reveal it.        |
| Fragile / volatile        | Can be easily altered, damaged, or destroyed by improper handling — even simply booting a machine can change data. |
| Can transcend borders     | Data may be stored in a different jurisdiction (cloud servers) than where the crime occurred.                     |
| Easy to duplicate exactly | Unlike physical evidence, digital evidence can be perfectly copied (bit-for-bit) — enabling analysis on a copy while preserving the original. |
| Time-sensitive            | Volatile data (RAM contents, active network connections) is lost if the system is powered off before capture.      |

### **2.5.2 Types of Digital Evidence**

- **Volatile data** — RAM contents, running processes, open network connections, cache — lost when the system powers off; must be captured live.
- **Non-volatile data** — files on hard disks/SSDs, registry entries, log files — persists after shutdown.
- **Network-based evidence** — packet captures, firewall/router/proxy logs, DNS query logs.
- **Cloud-based evidence** — data stored with third-party providers, requiring legal process (subpoenas, MLATs) for access.

### **2.5.3 Rules for Handling Digital Evidence**

1. **Chain of Custody** — a documented, unbroken record of who collected, handled, transferred, and analysed the evidence, and when — any gap can render evidence inadmissible.
2. **Write-blocking** — always use write-blocker hardware/software when connecting to original storage media so the act of examining evidence cannot alter it.
3. **Hashing** — compute a cryptographic hash (MD5/SHA-256) of the original evidence immediately upon collection, and again before presenting it in court, to prove it has not changed.
4. **Work on a forensic image/copy, never the original** — a bit-for-bit forensic image is created first; all analysis is performed on the copy.
5. **Legal authorisation** — evidence must be collected under proper legal authority (search warrant, consent, or statutory power) or it may be excluded.

## **2.6 Forensics Analysis of Email**

**Email Forensics:** The examination of the origin, content, and metadata of email messages to determine authenticity, trace the sender, or recover evidence of a cybercrime (spam, phishing, harassment, fraud, data leakage) conducted via email.

### **2.6.1 What Investigators Examine**

| **Element**            | **What It Reveals**                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Email headers               | Full routing path of the message — "Received:" lines show every mail server the message passed through, revealing the true originating IP address (useful for detecting spoofing). |
| Message-ID                  | A unique identifier assigned to each email, useful for correlating related messages or spotting duplicates/forgeries. |
| X-Originating-IP             | The IP address of the sender's device at the time of sending (if present).                                        |
| Bounce/delivery messages     | Reveal whether an address exists and provide additional server hop information.                                   |
| Attachments                  | May contain malware, hidden metadata (author, GPS location in images, edit history), or steganographically hidden data. |
| Timestamps                   | Time zone and server timestamps help build a timeline and can expose inconsistencies suggesting forgery.          |

### **2.6.2 Common Email Forensic Techniques**

- **Header analysis** — tracing the "Received:" chain from bottom (originating server) to top (final delivery) to identify the real source, bypassing any spoofed "From:" field.
- **Server-side investigation** — examining mail server logs (SMTP logs) at the ISP/mail provider, often requiring legal process.
- **Sender mail fingerprinting** — comparing writing style, formatting quirks, and metadata across multiple emails to link them to the same author (useful when a sender uses multiple aliases).
- **Bait/tracing techniques** — sending a traceable link or tracking pixel in a reply to identify the real IP address of an anonymous sender.
- **Network device investigation** — correlating email timestamps with router/firewall/DHCP logs to identify which physical device sent the message.

## **2.7 Digital Forensics Lifecycle**

The forensic process is typically broken into distinct, sequential phases — this is a very commonly asked long-answer question.

| **Phase**            | **What Happens**                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Identification        | Recognise that an incident has occurred and identify potential sources of digital evidence (which devices, accounts, logs are relevant).       |
| 2. Preservation           | Secure the evidence to prevent alteration — isolate the device, prevent remote wipe, and if the system is live, decide whether to capture volatile memory before shutdown. |
| 3. Collection             | Acquire the evidence using forensically sound methods — create a bit-for-bit forensic image using write-blockers, and hash it for verification. |
| 4. Examination            | Process the collected data — extract files, recover deleted items, decrypt where legally authorised, filter out irrelevant data.               |
| 5. Analysis                | Interpret the examined data to reconstruct events, establish a timeline, and determine what happened, how, and by whom.                        |
| 6. Documentation           | Record every step, tool, and finding in detail — this report must withstand cross-examination in court.                                       |
| 7. Presentation            | Present findings clearly to stakeholders — management, law enforcement, or a court — often requiring the investigator to testify as an expert witness. |

_Memory aid: **"I P C E A D P"** — Identify, Preserve, Collect, Examine, Analyse, Document, Present._

## **2.8 Forensics Investigation**

### **2.8.1 Types of Forensic Investigation**

| **Type**              | **Focus**                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| Disk/Computer forensics    | Examining hard drives, SSDs, and file systems for evidence.                                       |
| Network forensics          | Capturing and analysing network traffic to reconstruct an attack or data exfiltration.            |
| Mobile forensics           | Extracting data (call logs, SMS, app data, location history) from smartphones/tablets.            |
| Memory (RAM) forensics      | Analysing volatile memory captured from a live system to recover running processes, passwords, or malware not written to disk. |
| Cloud forensics            | Investigating data and activity within cloud environments, often relying on provider cooperation. |
| Database forensics         | Examining database transaction logs to detect unauthorised changes or data theft.                 |
| Email forensics            | See 2.6.                                                                                            |

### **2.8.2 Approach to a Forensic Investigation**

1. Obtain proper legal authorisation before beginning.
2. Secure the crime scene (physical and digital) to prevent contamination.
3. Document everything with photographs, notes, and timestamps before touching any device.
4. Acquire evidence forensically (imaging, hashing, write-blocking).
5. Analyse using validated tools and cross-verify findings with more than one method/tool where possible.
6. Prepare a clear, factual report avoiding speculation beyond what evidence supports.
7. Preserve evidence securely until legal proceedings conclude.

### **2.8.3 Common Forensic Tools (for awareness)**

EnCase, FTK (Forensic Toolkit), Autopsy/The Sleuth Kit, Wireshark (network forensics), Volatility (memory forensics), Cellebrite (mobile forensics), X-Ways Forensics.

## **2.9 Challenges in Computer Forensics**

| **Challenge**                    | **Explanation**                                                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Volume of data                          | Modern storage devices hold terabytes of data — manually sifting through everything is impractical, requiring specialised filtering/indexing tools. |
| Encryption                              | Strong encryption can make data completely inaccessible without the key, even to forensic examiners.                   |
| Anti-forensic techniques                 | Attackers deliberately use data wiping, log clearing, timestamp manipulation, and steganography to defeat investigation. |
| Volatility of evidence                  | RAM-resident data and network state disappear the moment a system is powered off or a connection closes.               |
| Jurisdiction and cross-border data       | Evidence may reside on servers in another country, requiring slow international legal cooperation (MLATs).            |
| Rapidly evolving technology             | New devices, OS versions, apps, and cloud services constantly outpace the development of forensic tools and techniques. |
| Chain of custody complexity             | A single break or gap in documentation can make otherwise solid evidence inadmissible in court.                        |
| Cost and skill shortage                  | Advanced forensic tools and truly qualified examiners are expensive and in short supply relative to the scale of cybercrime. |
| Legal and privacy constraints            | Investigators must balance thorough investigation against privacy laws and constitutional protections against unreasonable search. |
| Anti-analysis malware                    | Modern malware can detect that it is running inside a forensic/sandboxed environment and change its behaviour to avoid detection. |

## **2.10 Special Techniques for Forensics Auditing**

**Forensic Auditing:** The use of forensic investigation techniques specifically to detect and prove financial fraud, data manipulation, or policy violations — often combining digital forensics with accounting/audit expertise.

| **Technique**                | **What It Does**                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Data mining / pattern analysis     | Analysing large transaction datasets to detect anomalies, duplicate payments, or patterns consistent with fraud (e.g., salami attacks). |
| Log correlation                    | Cross-referencing logs from multiple systems (application, database, network, physical access) to build a single consistent timeline. |
| Metadata analysis                  | Examining hidden file properties — creation/modification dates, author, GPS coordinates, revision history — to verify authenticity or detect tampering. |
| Steganalysis                       | Detecting hidden data concealed inside images, audio, or video files using steganography.                              |
| Timeline analysis                  | Reconstructing a chronological sequence of system events (file access, logins, process execution) to establish exactly what happened and when. |
| Live forensics / memory capture    | Capturing volatile data (RAM, active connections) from a running system before it can be lost, using tools that minimise disruption to the evidence. |
| Hash-based file identification      | Using known-hash databases to quickly identify or exclude standard system files, focusing the audit only on unusual/unknown files. |
| Registry and artifact analysis       | Windows Registry, browser history, prefetch files, and recently-used-document lists often reveal user activity even after files are deleted. |
| Continuous/proactive auditing        | Ongoing automated monitoring (rather than one-time investigation) to detect fraud or policy violations as they occur, not just after the fact. |

# **UNIT 3 - Cybercrime on Mobile and Wireless Devices**

## **3.1 Introduction**

Mobile and wireless devices — smartphones, tablets, laptops, wearables, and IoT devices — have become the primary computing platform for most users, and consequently the primary target for cybercriminals. Unlike traditional desktop security, mobile security must contend with constant connectivity, physical portability (and loss/theft risk), diverse operating systems, and a massive third-party app ecosystem.

## **3.2 Proliferation of Mobile and Wireless Devices**

- Mobile devices have overtaken desktops as the primary way most people access the internet, banking, email, and social media.
- The **BYOD (Bring Your Own Device)** trend means employees increasingly use personal smartphones/laptops for work — blurring the boundary between personal and corporate security domains.
- **IoT (Internet of Things)** proliferation — smart TVs, wearables, home assistants, connected cars — has multiplied the number of network-connected endpoints, many with weak or no built-in security.
- Cheaper hardware and mobile data plans have driven adoption in previously under-connected populations, rapidly expanding the attack surface globally, often faster than security awareness has grown.
- Wireless technologies (Wi-Fi, Bluetooth, NFC, cellular) used by these devices are inherently broadcast in nature — data travels through open air and can be intercepted more easily than wired communication.

## **3.3 Trends in Mobility**

| **Trend**                       | **Security Implication**                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| BYOD (Bring Your Own Device)          | Organisations lose direct control over device security configuration, patch levels, and installed apps.            |
| Mobile Cloud Computing                | Data is offloaded to cloud services for processing/storage, introducing new points of compromise outside the device itself. |
| Increasing use of mobile payments     | Financial data (cards, UPI, wallets) increasingly resides on/flows through mobile devices, raising fraud stakes.    |
| Always-on connectivity                | Devices are constantly connected via Wi-Fi/cellular/Bluetooth, increasing exposure time to network-based attacks.  |
| App-centric usage                     | Users install numerous third-party apps, many requesting excessive permissions, increasing the risk of data leakage/spyware. |
| Wearables and IoT integration         | Devices with minimal security hardening (fitness bands, smart locks) are now connected to the same networks as sensitive systems. |
| 5G and higher bandwidth                | Higher speeds enable richer attacks (e.g., faster data exfiltration) and expand real-time attack surfaces (V2X, smart city devices). |

## **3.4 Credit Card Frauds in Mobile and Wireless Computing Era**

**Mobile Credit Card Fraud:** The unauthorised use of another person's credit/debit card or payment credentials, enabled specifically by vulnerabilities in mobile and wireless technology.

Common methods:

- **Smishing** — fake bank SMS messages containing links to fraudulent payment pages.
- **Rogue Wi-Fi hotspots** — intercepting card details entered during online purchases over unsecured public Wi-Fi.
- **NFC skimming** — reading contactless card/phone payment data using a rogue NFC reader in close physical proximity.
- **Malicious/fake banking apps** — apps that mimic real banking apps to capture login credentials and OTPs.
- **Malware keyloggers** — background malware capturing card details as they are typed during checkout.
- **SIM swap fraud** — attacker convinces/bribes a telecom operator to transfer the victim's number to a new SIM, intercepting OTPs sent for card verification.

### **3.4.1 Prevention Mechanisms**

| **Technology**   | **Full Form**                                     | **How It Prevents Fraud**                                                                                              |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| SET                   | Secure Electronic Transaction                          | Uses dual digital certificates so neither merchant nor customer sees the other's full sensitive data; card number is sent encrypted directly to the bank. |
| OTP                   | One-Time Password                                        | Single-use password verifying the cardholder at transaction time — stolen card numbers alone become useless.                |
| Tokenization          | -                                                          | Replaces the actual card number with a random token for each transaction — the real number is never transmitted or stored by the merchant. |
| SSL/TLS               | Secure Sockets Layer / Transport Layer Security            | Encrypts the communication channel between the mobile app/browser and payment server.                                       |
| 3D Secure (3DS)       | Three-Domain Secure                                        | Adds an authentication step requiring the cardholder to verify directly with their bank during checkout.                    |
| EMV Chip              | Europay, Mastercard, Visa                                  | Generates a unique cryptogram per transaction, preventing cloning compared to magnetic-stripe cards.                          |

## **3.5 Security Challenges Posed by Mobile Devices**

| **Challenge**             | **Explanation**                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| No fixed infrastructure        | Devices rely on wireless networks that are easier to intercept than wired connections.                                            |
| Lost or stolen devices         | Small, portable devices are frequently lost/stolen; without strong locking/encryption, all stored data is exposed.                |
| Third-party app risks          | Apps from unofficial stores, or with excessive permissions, can silently collect data or run malicious background processes.      |
| Limited processing power        | Historically constrained ability to run full-disk encryption, VPN, or real-time antivirus without noticeable performance impact. |
| Always-on connectivity          | Cellular, Wi-Fi, Bluetooth, and NFC are simultaneously active — each interface is a potential attack vector.                      |
| OS fragmentation                | Especially on Android, many devices run outdated OS versions that never receive security patches.                                 |
| Phishing via SMS/calls          | Users are more likely to trust and act on messages/calls than desktop email, making Smishing/Vishing effective.                    |
| Cloud sync risks                | Automatic syncing means a single compromised cloud account can expose photos, messages, and contacts across all devices.          |

## **3.6 Registry Settings for Mobile Devices**

While classic "Windows Registry" concepts originate from desktop systems, the same idea — a centralised store of configuration settings that controls device behaviour and security posture — applies to mobile platforms (Android's system settings/`SharedPreferences` and configuration databases, Windows Mobile's registry hives on legacy devices).

Key registry/configuration-level security settings organisations should manage on mobile devices:

| **Setting Category**        | **Why It Matters**                                                                                                       |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Auto-lock / screen timeout          | Registry-level control of how quickly a device locks itself when idle — shorter timeouts reduce the window for unauthorised physical access. |
| Bluetooth/Wi-Fi discoverability      | Disabling "discoverable" mode by default at the configuration level prevents Bluejacking/Bluesnarfing style discovery.       |
| Remote wipe / remote lock flags      | Configuration settings that allow an MDM (Mobile Device Management) system to remotely erase or lock a device if lost/stolen. |
| USB debugging / developer options    | These should be disabled by default in production/enterprise devices — leaving them enabled exposes low-level system access to anyone with physical access. |
| Application installation policy      | Registry/policy settings restricting installation to approved app stores or a managed enterprise catalogue only.             |
| Encryption enforcement flags          | Settings that force full-device or container-level encryption to be enabled before the device is allowed to access corporate resources. |
| Password/PIN complexity policy        | Centrally enforced minimum PIN/password length and complexity rather than leaving it to user discretion.                     |

_Exam framing: The point being tested is that mobile device security is heavily governed by configuration/policy settings (whether literally a "registry" on legacy Windows Mobile devices, or the modern policy/profile equivalent pushed by MDM) rather than by installing a single security app — hardening the configuration matters as much as antivirus._

## **3.7 Authentication Service Security**

**Authentication:** The process of verifying that a user, device, or system is genuinely who/what it claims to be before granting access.

### **3.7.1 Authentication Factors**

| **Factor Type**       | **Examples**                                       |
| ------------------------ | ------------------------------------------------------ |
| Something you know          | Password, PIN, security question                          |
| Something you have          | OTP token, smart card, mobile device (for SMS/app OTP)     |
| Something you are           | Biometrics — fingerprint, face recognition, iris scan       |
| Somewhere you are           | Location-based authentication (GPS, IP geolocation)         |
| Something you do             | Behavioural biometrics — typing pattern, gait, swipe pattern |

### **3.7.2 Common Authentication Protocols/Mechanisms**

| **Mechanism**   | **How It Works**                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Password-based        | Simplest, but weakest alone — vulnerable to brute force, phishing, credential reuse.                              |
| OTP (One-Time Password) | Time-based (TOTP) or event-based (HOTP) codes valid for a single use/short window — much harder to reuse if intercepted. |
| Biometric authentication | Uses unique physical characteristics — convenient, but cannot be changed if the biometric template is compromised. |
| Multi-Factor Authentication (MFA) | Combines two or more factor types — significantly raises the difficulty of unauthorised access even if one factor is compromised. |
| Certificate-based authentication | Uses a digital certificate/key pair issued to the device or user for cryptographically strong authentication.       |
| SSO (Single Sign-On)    | One authentication event grants access to multiple related systems — convenient, but a single compromised credential grants broad access. |

### **3.7.3 Security Risks in Mobile Authentication**

- **SIM swap attacks** defeat SMS-based OTP by redirecting the victim's number to an attacker-controlled SIM.
- **SS7 protocol exploitation** allows interception of SMS-based OTPs at the telecom signalling layer.
- **Phishing of OTPs** — attackers create fake login pages that also prompt victims to enter the OTP they just received, relaying it in real time.
- **Weak biometric implementation** — cheap sensors can sometimes be spoofed with photographs or fake fingerprints.
- **Session token theft** — once authenticated, a stolen session token/cookie can be used to bypass authentication entirely without needing the original credentials.

**Best practice:** Prefer app-based authenticators (TOTP apps) or hardware security keys (FIDO2/WebAuthn) over SMS-based OTP wherever possible, since SMS delivery depends on the telecom network, which has well-documented interception weaknesses (SS7, SIM swap).

## **3.8 Attacks on Mobile/Cell Phones**

| **Attack Type**         | **How It Works**                                                                                                                       | **Impact**                                                                    |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Physical theft                | Device stolen; without lock/encryption, attacker gets direct access to all stored data and logged-in accounts.                                | Complete data/account compromise.                                                   |
| SIM Swapping                  | Attacker transfers the victim's phone number to an attacker-controlled SIM via social engineering/insider bribery of the telecom operator.       | Bypasses SMS-based 2FA; takes over bank, email, social media accounts.               |
| IMSI Catcher (Stingray)        | A rogue device that mimics a legitimate cell tower; nearby phones connect to it automatically.                                                  | Real-time call/SMS interception, location tracking.                                 |
| SS7 protocol exploit           | Exploiting flaws in the decades-old, largely unauthenticated SS7 telecom signalling protocol.                                                  | SMS/OTP interception anywhere in the world.                                          |
| Mobile malware                 | Malicious apps disguised as legitimate software; once installed, run in the background collecting data or sending premium SMS.                  | Data theft, financial fraud, surveillance.                                          |
| Rogue Wi-Fi hotspot             | Fake access point with a name resembling a legitimate network; victims connect and traffic is intercepted.                                      | MITM attacks — credentials, session tokens intercepted.                              |
| Bluejacking / Bluesnarfing / Bluebugging | Sending unsolicited messages / stealing data / gaining full remote control via Bluetooth respectively (see Cyber Law comparison table below). | Ranges from nuisance to full device compromise.                                     |
| Clipboard hijacking             | Malicious app monitors clipboard; silently replaces a copied cryptocurrency address with the attacker's own.                                    | Financial theft.                                                                     |

### **3.8.1 Bluetooth Attacks Quick Reference**

| **Attack**   | **One Word**                             | **Severity**                       |
| -------------- | ------------------------------------------- | ------------------------------------- |
| Bluejacking      | SPAM (unsolicited messages only, no access)   | Low — nuisance only                    |
| Bluesnarfing     | THEFT (steals contacts, messages, emails)     | High — data breach                     |
| Bluebugging      | CONTROL (full remote control of the device)    | Very High — complete compromise         |
| BlueSmack        | CRASH (DoS — overwhelms and crashes device)    | Medium — availability attack            |

## **3.9 Mobile Devices: Security Implications for Organizations**

- **Data leakage risk:** Corporate data on personal (BYOD) devices can leak through unmanaged apps, cloud backups, or personal email accounts.
- **Loss of visibility and control:** IT/security teams cannot enforce the same patch levels, configurations, or monitoring on personally-owned devices as they can on company-issued hardware.
- **Compliance risk:** Regulated data (financial, health) accessed via unmanaged mobile devices can put an organisation in breach of data-protection obligations.
- **Expanded attack surface:** Each employee's personal device — with its own apps, Wi-Fi history, and security hygiene — becomes a potential entry point into the corporate network.
- **Insider threat amplification:** Mobile devices make it easier for a malicious or careless insider to copy, photograph, or exfiltrate sensitive information.
- **Increased helpdesk/security overhead:** Supporting a heterogeneous mix of device models and OS versions raises the operational cost of maintaining security.

## **3.10 Organizational Measures for Handling Mobile Devices**

| **Measure**                     | **Purpose**                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| MDM (Mobile Device Management)         | Centralised platform to enforce security policy, push configuration, monitor compliance, and remotely lock/wipe devices. |
| Containerisation / Work profiles        | Separates corporate apps/data from personal apps/data on the same device, allowing a wipe of only the corporate container. |
| Mandatory device encryption              | Requires full-disk or container encryption before a device can access corporate resources.                        |
| App whitelisting/blacklisting            | Restrict installation to approved applications or block known-risky apps.                                        |
| Mandatory OS/security patch compliance   | Devices below a minimum patch level are denied access to corporate systems until updated.                         |
| VPN enforcement                          | Requires all corporate traffic to route through an encrypted VPN tunnel, especially on public Wi-Fi.               |
| Remote wipe capability                   | Ability to remotely erase corporate data (or the entire device) if it is lost, stolen, or the employee departs.    |
| Regular security awareness training      | Educating employees on phishing, safe app installation, and safe public Wi-Fi usage habits.                        |

## **3.11 Organizational Security Policies and Measures in Mobile Computing Era**

A comprehensive mobile security policy should address:

1. **Acceptable Use Policy (AUP)** — defines what employees can and cannot do with mobile devices used for work (personal or company-issued).
2. **BYOD Policy** — specific rules for personally-owned devices: minimum security requirements, MDM enrolment consent, data ownership on exit.
3. **Access Control Policy** — defines authentication requirements (MFA mandatory), and role-based access to sensitive systems from mobile devices.
4. **Incident Reporting Policy** — clear, fast procedure for reporting a lost/stolen device or suspected compromise.
5. **Data Classification and Handling Policy** — rules on which categories of data may or may not be accessed/stored on mobile devices at all.
6. **Exit/Offboarding Policy** — mandatory wipe of corporate data and revocation of access credentials when an employee leaves or a device is decommissioned.
7. **Periodic Audit and Compliance Checks** — regular verification that deployed devices actually comply with policy (patch levels, encryption status, installed apps).

## **3.12 Laptops and Desktops**

Even as mobile phones dominate headlines, laptops and desktops remain high-value targets because they typically store more data and have deeper access to organisational systems.

| **Security Measure**             | **Purpose**                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Full-disk encryption (BitLocker, FileVault) | Protects data at rest if the device is lost or stolen.                                                    |
| Endpoint protection (antivirus/EDR)     | Detects and blocks malware, ransomware, and suspicious behaviour on the device.                            |
| Host-based firewall                     | Controls inbound/outbound network connections at the individual device level.                              |
| Patch management                        | Ensures OS and application vulnerabilities are closed promptly, closing the most common attack vector.     |
| BIOS/UEFI password + Secure Boot        | Prevents unauthorised boot-time tampering or booting from an unauthorised external device.                 |
| Physical security (cable locks, screen privacy filters) | Reduces the risk of opportunistic physical theft or shoulder-surfing in public/shared spaces.               |
| Least-privilege user accounts           | Day-to-day work is done under a standard (non-admin) account, limiting the damage malware can do if executed. |
| Data backup policy                       | Regular, tested backups (ideally offline/immutable) protect against ransomware and hardware failure.        |

# **UNIT 4 - Cyber Security: Organizational Implications**

## **4.1 Introduction, Cost of Cybercrimes and IPR Issues**

**Organizational Implications of Cyber Security:** Beyond the technical dimension, cyber security has direct consequences for an organisation's finances, legal standing, reputation, and intellectual property — making it a board-level (not just IT-level) concern.

### **4.1.1 Cost of Cybercrime to Organizations**

| **Cost Category**              | **Explanation**                                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Direct financial loss                  | Stolen funds, fraudulent transactions, ransom payments.                                                                 |
| Incident response and recovery cost     | Forensic investigation, system restoration, emergency IT staffing/consultants.                                          |
| Regulatory fines and legal costs        | Penalties for failing to protect data under applicable laws (e.g., IT Act Section 43A, GDPR-style regimes), litigation from affected customers. |
| Business disruption / downtime          | Lost revenue and productivity while systems are unavailable.                                                            |
| Reputational damage                     | Loss of customer trust, negative press, and long-term brand impact — often the largest and longest-lasting cost.        |
| Increased insurance premiums             | Cyber-insurance costs typically rise sharply following a claim.                                                          |
| Loss of competitive advantage            | Theft of trade secrets, R&D data, or strategic plans can directly benefit competitors.                                  |
| Customer churn                           | Customers moving to competitors after a breach erodes trust.                                                            |

### **4.1.2 Intellectual Property Rights (IPR) Issues in Cyber Security**

**IPR in the cyber context** covers protecting an organisation's software, designs, trade secrets, trademarks, and creative content from unauthorised digital copying, distribution, or theft.

| **IP Type**       | **Cyber Threat to It**                                                                     | **Legal Protection**                              |
| -------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Software/source code    | Piracy, reverse engineering, source code theft by insiders or hackers.                            | Copyright Act, IT Act, licensing agreements.             |
| Trade secrets            | Corporate espionage, insider leaks, hacking of R&D systems.                                        | Confidentiality/NDA agreements, trade secret law.        |
| Trademarks/domain names  | Cybersquatting, typosquatting, phishing using a brand's identity.                                  | Trade Marks Act, UDRP (domain disputes).                 |
| Digital content/media    | Online piracy, unauthorised redistribution (torrenting, streaming ripping).                        | Copyright Act, DRM (Digital Rights Management) technology. |
| Patents                  | Reverse-engineering products to bypass or copy patented technology.                                | Patents Act, technical safeguards, obfuscation.          |

**Why IPR matters for cyber security teams specifically:** Protecting intellectual property is not purely a legal function — it requires the same technical controls used for any sensitive data: access control, encryption, DLP (Data Loss Prevention), monitoring of code repositories, and insider-threat detection.

## **4.2 Web Threats for Organizations**

| **Threat**                      | **Organizational Risk**                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Website defacement                     | Damages public reputation and signals weak security to customers/partners.                                    |
| SQL Injection / web app exploits         | Can expose entire customer databases hosted behind a corporate website.                                        |
| DDoS attacks on public-facing services   | Disrupts e-commerce, online banking, or any revenue-generating web service, causing direct financial loss.     |
| Drive-by downloads / malicious ads        | Compromises visitors' machines via the organisation's own (possibly compromised) website — legal/reputational exposure. |
| Credential stuffing                       | Attackers use leaked username/password combinations from other breaches to break into organisational web accounts. |
| Third-party/supply-chain web risk          | A compromised third-party script, plugin, or vendor integrated into the organisation's website can be used to attack visitors. |
| Business Email Compromise (BEC)            | Attackers impersonate executives/vendors via email to trick employees into fraudulent wire transfers.           |

## **4.3 Security and Privacy Implications**

- **Regulatory exposure:** Organisations handling personal data face liability under data-protection law (IT Act 43A/DPDPA in India, and equivalents abroad) if they fail to implement "reasonable security practices."
- **Customer trust and privacy expectations:** Users increasingly expect organisations to be transparent about what data is collected and how it's used — violating this expectation causes reputational harm even without a technical breach.
- **Employee monitoring tension:** Organisations must balance legitimate security monitoring (DLP, email scanning) against employee privacy rights and applicable labour law.
- **Third-party/vendor risk:** Sharing data with cloud providers, partners, or outsourced vendors extends the organisation's privacy obligations to parties it does not directly control.
- **Cross-border data transfer:** Storing or processing data in a different country introduces additional legal/privacy complexity (differing national laws on lawful access, retention, and disclosure).

## **4.4 Social Media Marketing: Security Risks and Perils for Organizations**

Organisations increasingly rely on social media for marketing, customer engagement, and brand building — but this creates distinct security exposure:

| **Risk**                          | **Explanation**                                                                                                     |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Account takeover                          | A compromised official brand account can be used to spread malicious links, misinformation, or scams under the brand's trusted name. |
| Brand impersonation                        | Attackers create fake "official" accounts or fake customer-support handles (Angler Phishing) to defraud customers who trust the brand. |
| Oversharing of sensitive information       | Marketing content (photos of the office, screenshots, employee posts) can inadvertently reveal internal systems, schedules, or security details. |
| Social engineering reconnaissance          | Employee social media profiles are mined by attackers (OSINT) to craft convincing spear-phishing emails.                |
| Malicious links/ads in comments             | Attackers plant malicious links in the comments section of an organisation's own posts, exploiting audience trust.       |
| Reputational risk from user-generated content | Offensive or false content posted by followers/customers on the brand's page can create PR crises if not moderated.     |
| Data privacy in social ad targeting          | Using customer data for targeted social media advertising raises consent and privacy-compliance questions.               |

**Mitigation:** Strong, unique passwords + MFA on all social accounts, a limited and audited list of employees with posting access, a documented social media policy, and monitoring/takedown procedures for impersonating accounts.

## **4.5 Social Computing and Associated Challenges**

**Social Computing:** The use of computing systems (social networks, wikis, blogs, collaborative platforms) that support social interaction and the collective creation, sharing, and consumption of information among large groups of people.

### **4.5.1 Challenges for Organizations**

| **Challenge**                  | **Explanation**                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Information leakage                    | Employees casually discussing work details on social/collaborative platforms can leak confidential information.       |
| Identity and trust management           | Verifying that a person interacting on a social platform is genuinely who they claim to be is difficult at scale.     |
| Data aggregation risk                    | Combining publicly available social data points can reveal far more about an individual/organisation than any single post intended. |
| Malware and scam propagation             | Social platforms' viral sharing mechanisms are exploited to rapidly spread malicious links or scams.                    |
| Difficulty of moderation at scale         | Organisations running community/social platforms struggle to moderate abusive, fraudulent, or illegal content quickly enough. |
| Blurring of personal and professional boundaries | Employees' personal social media behaviour can reflect on, or expose, the organisation they work for.                   |
| Dependence on third-party platform security | Organisations have no control over the underlying security of the social platforms they rely on for engagement.        |

## **4.6 Cybercrime and Cyber Terrorism: Introduction**

Revisiting Unit 1's definitions from an organisational lens: for a business, **cybercrime** most often manifests as fraud, data theft, or ransomware targeting revenue and customer data, while **cyber terrorism** is primarily a concern for organisations operating **critical infrastructure** (power, telecom, banking, defence) where an attack's goal is mass disruption or fear rather than direct financial gain. Organisations in critical sectors must plan not just for financially-motivated cybercriminals but for well-resourced, ideologically-motivated adversaries with very different risk calculus.

## **4.7 Intellectual Property in Cyberspace**

Building on 4.1.2, cyberspace introduces unique IP challenges:

- **Ease of copying:** Digital content can be duplicated perfectly and distributed globally in seconds, unlike physical goods.
- **Jurisdictional ambiguity:** IP infringement occurring across borders (a pirate site hosted in one country, accessed from another) complicates enforcement.
- **Anonymity of infringers:** Proxy servers, VPNs, and anonymous hosting make it difficult to identify and pursue infringers.
- **DRM and its limitations:** Digital Rights Management technology attempts to technically restrict copying/use, but is frequently circumvented, leading to an ongoing arms race between rights holders and infringers.
- **Open-source and licensing complexity:** Organisations must carefully track open-source license obligations embedded in their own software to avoid inadvertent IP violations.
- **Domain name disputes:** Cybersquatting and typosquatting directly monetise a brand's IP without authorisation (see Cyber Law's UDRP coverage).

## **4.8 Ethical Dimension of Cybercrimes**

Cybercrime raises ethical questions beyond pure legality:

- **Anonymity and moral distance:** The internet's anonymity reduces the psychological inhibition people normally feel about causing harm to a visible victim — a form of "moral distancing."
- **Diffusion of responsibility:** Attackers may rationalise harm as "the company can afford it" or "no one is really hurt," especially in cases like software piracy or corporate data theft.
- **Grey areas between legal and ethical:** Some acts (aggressive data collection within the letter of the law, aggressive web scraping) may be technically legal yet still ethically questionable.
- **Dual-use tools:** The same techniques used by security researchers (scanning, exploit development) can be used maliciously — raising ongoing debate about responsible disclosure and the ethics of publishing exploit code.
- **Whistleblowing vs. data theft:** Employees who leak internal wrongdoing via digital means sit in an ethically contested space between "whistleblower" and "data thief," depending on intent and method.
- **Impact on vulnerable groups:** Cybercrime disproportionately harms less tech-literate populations (the elderly, first-time internet users), raising a distinct duty-of-care question for organisations and policymakers.

## **4.9 Psychology, Mindset and Skills of Hackers and Other Cybercriminals**

### **4.9.1 Hacker Types by Intent**

| **Type**      | **Who They Are**                                                                        | **Intent**                                                       | **Legality**                                               |
| --------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| White Hat         | Ethical hackers, penetration testers hired by organisations.                                 | Find and fix vulnerabilities before malicious actors do.                | Legal — performed with permission.                                 |
| Black Hat         | Malicious hackers exploiting systems for personal gain.                                      | Steal data, cause damage, demand ransom, sabotage systems.              | Illegal.                                                             |
| Grey Hat          | Operate in between — break in without permission but don't cause major harm.                 | Often inform the victim after the fact; may demand a fee.               | Legally ambiguous — still unauthorised access.                      |
| Script Kiddie     | Unskilled individuals using pre-written tools/scripts.                                        | Show off or cause minor disruption — no real expertise.                 | Illegal if causing damage or unauthorised access.                   |
| Hacktivist        | Motivated by political or social causes.                                                      | Protest against governments/corporations by disrupting systems.        | Illegal — intent does not justify the act.                          |

### **4.9.2 Psychological Profile and Mindset**

| **Trait**                       | **How It Manifests**                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Curiosity and problem-solving drive       | Many hackers are initially drawn by the intellectual challenge of understanding and bypassing systems, not by malicious intent alone. |
| Need for control/power                     | Successfully compromising a system can provide a sense of power, especially for individuals who feel powerless elsewhere. |
| Low empathy for distant/abstract victims    | Because victims are rarely seen face-to-face, some attackers rationalise harm as victimless or abstract.               |
| Community and reputation seeking            | Underground hacking forums reward technical skill with status, incentivising continued and escalating activity.        |
| Rationalisation and moral disengagement      | Common justifications include "the target deserved it," "information should be free," or "I'm just exposing weaknesses." |
| Risk tolerance                              | Cybercriminals often display higher-than-average tolerance for risk, balanced against the perceived low probability of getting caught. |
| Persistence and patience (APT-style actors)  | State-sponsored/organised attackers exhibit long-term planning and patience, unlike opportunistic attackers seeking quick wins. |

### **4.9.3 Skills Commonly Associated with Cybercriminals**

- Deep understanding of operating systems, networking protocols, and programming/scripting.
- Social engineering and manipulation skills (often as important as technical skill).
- Familiarity with anonymity tools (VPNs, TOR, proxy chains, cryptocurrency for untraceable payment).
- Reverse engineering and vulnerability research skills (for more sophisticated actors).
- Operational security discipline — many attackers are caught not due to lack of technical skill but due to poor OPSEC (reusing usernames, boasting online, poor anonymity hygiene).

# **UNIT 5 - Cyberspace and the Law & Miscellaneous Provisions of the IT Act**

## **5.1 Introduction to Cyber Security Regulations**

**Cyber Security Regulation:** A body of laws, rules, and standards issued by governments or regulatory bodies that mandate specific security practices, define offences, and prescribe penalties to protect information systems and the people who rely on them.

Why regulation is necessary:

- Market forces alone are insufficient — organisations often under-invest in security because breach costs are frequently externalised onto customers rather than borne fully by the organisation.
- Provides victims with legal recourse and a path to compensation.
- Creates deterrence through defined penalties for specific offences.
- Establishes minimum baseline security expectations across an industry or country.

## **5.2 International Law**

Cyberspace's borderless nature means no single country's law can fully govern it — international cooperation and frameworks are essential, though still fragmented.

| **Framework/Body**                  | **Role**                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Budapest Convention on Cybercrime (2001)   | The first international treaty addressing internet and computer crime, harmonising national laws and enabling international cooperation (India is not a signatory). |
| UN GGE (Group of Governmental Experts) on Cyber | UN-led effort to build international consensus on responsible state behaviour in cyberspace, particularly regarding cyber warfare norms. |
| ICANN                                        | Coordinates global domain name and IP address allocation — a key piece of internet governance infrastructure.            |
| INTERPOL / Europol Cybercrime units         | Facilitate cross-border law enforcement cooperation and joint operations against transnational cybercrime.                |
| Mutual Legal Assistance Treaties (MLATs)    | Bilateral/multilateral agreements enabling one country's law enforcement to request evidence located in another country. |
| WIPO (World Intellectual Property Organization) | Administers international IP treaties and arbitrates domain name disputes (UDRP) relevant to cybersquatting.             |

**Core challenge:** Differing national definitions of cybercrime, differing evidentiary standards, and the absence of extradition treaties with some countries create "safe havens" where prosecuting cross-border cybercriminals remains extremely difficult.

## **5.3 The Indian Cyberspace**

- India's cyber law is anchored by the **Information Technology Act, 2000 (ITA-2000)**, based on the UNCITRAL Model Law on Electronic Commerce (1996), and amended in 2008.
- **Jurisdiction:** Section 1(2) extends the Act to the whole of India; Section 75 gives it extra-territorial reach — applying to offences committed outside India if they involve a computer/network located in India.
- **Regulatory bodies:** MeitY (Ministry of Electronics and Information Technology) sets policy; **CERT-In** (Indian Computer Emergency Response Team) is the national nodal incident-response agency; the **Controller of Certifying Authorities (CCA)** regulates digital signature certification.
- **Growth context:** India has one of the world's largest internet user bases, with rapid growth in mobile internet, UPI-based digital payments, and e-governance (Digital India) — all of which massively expand the population exposed to cyber risk and the urgency of a robust legal framework.
- **Emerging framework:** The **Digital Personal Data Protection Act, 2023 (DPDPA)** supplements the IT Act specifically for personal data protection, moving India toward a GDPR-like regime.

## **5.4 National Cyber Security Policy**

India's **National Cyber Security Policy, 2013** was the country's first comprehensive policy framework for cyber security, issued by MeitY.

### **5.4.1 Objectives**

- Create a secure cyber ecosystem, generate adequate trust and confidence in IT systems and transactions.
- Build national capability to prevent and respond to cyber threats through institutional structures, people, processes, and technology.
- Strengthen the regulatory framework for ensuring a secure cyberspace.
- Enhance protection of Critical Information Infrastructure (CII) through a 24x7 mechanism.
- Develop suitable indigenous security technologies through R&D to reduce dependence on foreign products.
- Create a workforce of 500,000 professionals skilled in cyber security over 5 years (as originally envisioned).
- Provide fiscal/other incentives to businesses for adopting security best practices and standards.
- Enable protection of information while in transit/processing to safeguard privacy of citizens' data.

### **5.4.2 Key Institutional Structures Established/Strengthened**

| **Body**                              | **Role**                                                                                             |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CERT-In                                        | National nodal agency for cyber incident response; mandates 6-hour incident reporting (2022 rules).            |
| National Critical Information Infrastructure Protection Centre (NCIIPC) | Protects Critical Information Infrastructure (power, banking, telecom, defence, etc.).                     |
| National Cyber Coordination Centre (NCCC)      | Provides real-time threat assessment and situational awareness across sectors.                               |
| Indian Cyber Crime Coordination Centre (I4C)   | Coordinates cybercrime-related complaints and law enforcement action across states (includes the National Cyber Crime Reporting Portal). |
| Sectoral CERTs                                  | Sector-specific incident response teams (e.g., for finance, power) working under the CERT-In umbrella.        |

## **5.5 Internet Governance — Challenges and Constraints**

**Internet Governance:** The development and application of shared principles, norms, rules, and decision-making procedures that shape the evolution and use of the internet, involving governments, the private sector, civil society, and technical bodies.

### **5.5.1 Key Governance Bodies**

- **ICANN** — manages domain names and IP address allocation globally.
- **IETF (Internet Engineering Task Force)** — develops technical internet standards/protocols.
- **W3C (World Wide Web Consortium)** — develops web standards (HTML, CSS, accessibility).
- **National governments and regulators** — set laws governing content, data protection, and lawful access within their jurisdiction.

### **5.5.2 Challenges and Constraints**

| **Challenge**                    | **Explanation**                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Multi-stakeholder complexity              | No single authority governs the internet; governments, corporations, technical bodies, and civil society all have competing interests. |
| Sovereignty vs. openness                    | Nations increasingly want control over data and content within their borders ("data localisation," national firewalls), conflicting with the internet's originally borderless design. |
| Jurisdictional conflicts                     | A single online action can simultaneously violate, or be entirely legal under, the laws of multiple countries.            |
| Balancing free speech and content regulation | Governments must balance citizens' right to free expression against the need to curb misinformation, hate speech, and illegal content. |
| Net neutrality debates                        | Disputes over whether ISPs should be allowed to prioritise or throttle certain types of traffic.                            |
| Digital divide                                | Uneven access to internet infrastructure across regions/income groups affects who gets a voice in the digital economy and who is left exposed without adequate security awareness. |
| Rapid technological change outpacing policy    | Legislators and international bodies struggle to keep governance frameworks current with fast-moving technology (AI, IoT, cryptocurrency). |
| Cybersecurity vs. privacy tension              | Enhanced government monitoring/interception powers to fight cybercrime can conflict with citizens' privacy rights.          |

## **5.6 Computer Criminals, Assets, and Threats**

### **5.6.1 Computer Criminals**

Recapping and extending Unit 1's motive/actor taxonomy specifically from a legal/asset-protection lens: computer criminals range from individual fraudsters and insiders to organised crime syndicates and nation-state actors, each requiring a different legal and defensive response (see 1.4.2 and 4.9.1 for full typology).

### **5.6.2 Assets**

**Asset:** Anything of value to an organisation that requires protection — the starting point of any risk assessment (see Unit 1's Risk Management).

| **Asset Category**  | **Examples**                                                          |
| ---------------------- | -------------------------------------------------------------------------- |
| Data/Information          | Customer records, financial data, intellectual property, trade secrets       |
| Hardware                   | Servers, workstations, network devices, mobile devices                       |
| Software                   | Applications, operating systems, proprietary code                             |
| Network infrastructure     | Routers, switches, communication links                                        |
| People                      | Employees' knowledge, skills, and trust relationships                          |
| Reputation/brand             | Customer trust, public image — an intangible but highly valuable asset          |
| Physical facilities          | Data centres, offices, secured rooms housing critical systems                   |

### **5.6.3 Threats to Assets**

Threats can be classified as **natural** (fire, flood, earthquake affecting physical assets), **human unintentional** (accidental deletion, misconfiguration), and **human intentional** (the deliberate attacks covered throughout this document — malware, hacking, insider theft, sabotage). Effective asset protection requires mapping each asset category against the realistic threats it faces, and applying proportionate controls.

## **5.7 Other Offences Under the Information Technology Act in India**

Building on the CIA/attack-type discussions across all units, the following are the key statutory offences under ITA-2000 (as amended by the IT Amendment Act, 2008):

| **Section** | **Offence**                                          | **Punishment**                                                    |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------------- |
| Sec 43        | Damage to computer/computer system (civil)                  | Compensation up to Rs 1 Crore (civil remedy).                          |
| Sec 43A       | Failure to protect sensitive personal data (body corporate)  | Compensation — no statutory cap.                                       |
| Sec 65        | Tampering with computer source documents                     | Up to 3 years imprisonment, or fine up to Rs 2 Lakh, or both.           |
| Sec 66        | Computer-related offences (hacking)                          | Up to 3 years imprisonment, or fine up to Rs 5 Lakh, or both.           |
| Sec 66B       | Receiving stolen computer resource/communication device        | Up to 3 years imprisonment, or fine up to Rs 1 Lakh, or both.           |
| Sec 66C       | Identity theft                                                 | Up to 3 years imprisonment AND fine up to Rs 1 Lakh.                    |
| Sec 66D       | Cheating by personation using a computer resource               | Up to 3 years imprisonment AND fine up to Rs 1 Lakh.                    |
| Sec 66E       | Violation of privacy (capturing/publishing private images)       | Up to 3 years imprisonment OR fine up to Rs 2 Lakh, or both.            |
| Sec 66F       | Cyber terrorism                                                  | Imprisonment for LIFE.                                                  |
| Sec 67        | Publishing/transmitting obscene material                        | First offence: up to 3 years + Rs 5 Lakh fine. Subsequent: up to 5 years + Rs 10 Lakh fine. |
| Sec 67A       | Publishing sexually explicit material                            | First: up to 5 years + Rs 10 Lakh fine. Subsequent: up to 7 years + Rs 10 Lakh fine. |
| Sec 67B       | Child pornography                                                 | First: up to 5 years + Rs 10 Lakh fine. Subsequent: up to 7 years + Rs 10 Lakh fine. |
| Sec 69        | Government's power to intercept/monitor/decrypt information       | Non-compliance by intermediary: up to 7 years imprisonment + fine.      |
| Sec 69A       | Power to block public access to information                       | Non-compliance by intermediary: up to 7 years imprisonment + fine.      |
| Sec 70        | Unauthorised access to a "protected system"                        | Up to 10 years imprisonment + fine.                                      |
| Sec 72        | Breach of confidentiality/privacy by an officer                     | Up to 2 years imprisonment, or fine up to Rs 1 Lakh, or both.           |
| Sec 72A       | Disclosure of information in breach of a lawful contract             | Up to 3 years imprisonment, or fine up to Rs 5 Lakh, or both.           |
| Sec 79        | Intermediary liability safe harbour (with due diligence conditions) | Not a penalty — an exemption provision (loses immunity if intermediary conspires/abets). |

_Note: Section 66A (offensive messages) was struck down as unconstitutional in **Shreya Singhal v. Union of India (2015)** for violating Article 19(1)(a) — it is no longer valid law and should not be cited as active._

## **5.8 The Role of Electronic Evidence**

**Electronic Evidence:** Any information in binary/electronic form — emails, chat logs, CCTV footage, server logs, metadata, social media posts — that may be relied upon in court.

### **5.8.1 Section 65B, Indian Evidence Act, 1872**

An electronic record is admissible as evidence (without producing the original source device) only if accompanied by a **certificate** from a responsible official confirming that:

- The record was produced by a computer regularly used for the relevant activity.
- Information of that kind was regularly fed into the computer.
- The computer was operating properly throughout the relevant period.
- The record accurately reproduces the information as fed in.

**Landmark ruling:** In **Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020)**, the Supreme Court held that the Section 65B certificate is **mandatory** — without it, electronic evidence is not admissible, regardless of how genuine it may otherwise appear.

### **5.8.2 Why Electronic Evidence Is Central to Cybercrime Cases**

Nearly every cybercrime investigation depends entirely on electronic evidence (there is rarely a physical crime scene in the traditional sense) — making proper collection, chain of custody, and Section 65B certification the single most decisive factor in whether a prosecution succeeds (see Unit 2's forensics lifecycle for the full evidentiary process).

## **5.9 Miscellaneous Provisions of the IT Act (Post-2008 Amendment)**

| **Provision**                       | **Details**                                                                                                         |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Sec 79 overhaul                              | Introduced clear safe-harbour conditions for intermediaries (ISPs, social platforms) — due diligence + prompt takedown upon notice. |
| Sec 66F introduced                            | Defined and criminalised cyber terrorism for the first time, with life imprisonment as the maximum penalty.            |
| Sec 43A introduced                            | Created corporate liability for failing to protect "Sensitive Personal Data or Information" (SPDI).                     |
| Sec 69/69A/69B strengthened                    | Expanded government powers to intercept, monitor, decrypt, and block content/websites on specified grounds (sovereignty, security, public order). |
| Sec 84A                                        | Empowers the Central Government to prescribe approved modes/methods of encryption.                                     |
| Sec 85                                          | Establishes liability of company directors/officers for offences committed by the company, unless due diligence is proven. |
| Adjudicating Officers & Cyber Appellate Tribunal (CAT) | Established quasi-judicial mechanisms (Sections 46 & 48) for adjudicating civil cyber disputes and hearing appeals, respectively. |
| Recognition of electronic signatures            | Section 3A (introduced in 2008) allows recognition of electronic signature techniques beyond just digital signatures (broadening beyond PKI-based signatures alone). |
| Compounding and mediation provisions             | Certain offences under the Act can be compounded (settled) as per Section 77A, reducing court burden for minor offences. |
| Sec 81                                          | The Act overrides other laws in case of inconsistency, except with respect to rights conferred under the Copyright Act, 1957 and the Patents Act, 1970. |

_Exam tip: When asked for "miscellaneous provisions," examiners are usually looking for the 2008-Amendment-era additions (43A, 66A–66F, 67A/67B, 69/69A, 72A, 84A, 85) rather than the original 2000 sections — make sure to explicitly flag which sections were introduced/amended in 2008._

---

_These notes are structured to map directly onto the VMSBUTU Cyber Security syllabus (Units I–V). Track your progress against each topic using the checklist._
