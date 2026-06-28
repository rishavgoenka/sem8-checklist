MAKAUT 8th Semester - CSE

**Complete Study Notes**

**Cyber Law & Ethics (OEC-CS801B)**

Exam: 30 June 2026 | Target: 70-80% Coverage

**📋 What This Document Covers**

✓ Unit 1 - Introduction to Cybercrime (Definitions, Categories, Attack Types)

✓ Unit 2 - Cybercrime on Mobile & Wireless Devices (Bluetooth, Mobile Attacks)

✓ Unit 3 - Tools & Methods Used in Cybercrime (Trojans, DoS, SQL Injection)

✓ Unit 4 - Phishing, Identity Theft & Indian Cyber Law (IT Act 2000)

✓ Unit 4 - Digital Signatures & Public Key Infrastructure (PKI)

✓ Unit 4 - Cyber Ethics, Cyberspace & Related Concepts

✓ Master Acronym Table - All Short Forms Explained

✓ IT Act 2000 Complete Sections Reference Table

_PYQ Frequency: ★★★★★ topics marked throughout_

# **Table of Contents**

# **UNIT 1 - Introduction to Cybercrime**

_Priority: MUST DO | PYQ Frequency: ★★★★★ every year_

## **1.1 What is Cybercrime?**

**Definition:** Cybercrime refers to any criminal activity in which a computer or computer network is used as a tool, a target, or a place of criminal activity. The offences may be committed against individuals, organisations, or governments.

**Cybercrime (broad):** Any illegal act where a computer, network, or the internet is the tool, target, or medium of the criminal act.

### **1.1.1 Computer as a Tool vs Computer as a Target/Weapon**

This is the fundamental classification of cybercrime. Every exam has at least one question on this.

| **Dimension**    | **Computer as a Tool**                                                                              | **Computer as a Target / Weapon**                                          |
| ---------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Meaning          | The computer is used to commit a crime directed at someone or something outside the computer world. | The crime is aimed at the computer itself or its data / network.           |
| Victim           | A person, organisation, or government - not the computer itself.                                    | The computer, its data, software, or the network infrastructure.           |
| Examples         | Online fraud, phishing, sending spam, cyberstalking, copyright infringement.                        | Hacking, DoS/DDoS attacks, malware injection, data theft, system sabotage. |
| Analogy          | Using a gun (computer) to rob a bank (real-world crime).                                            | The gun (computer) itself is attacked and disabled.                        |
| IT Act reference | Sections 66C, 66D, 67, 72.                                                                          | Sections 43, 66, 70.                                                       |

### **1.1.2 Peer-to-Peer Cybercrime**

**Peer-to-Peer (P2P) Cybercrime:** Crimes committed directly between two individuals through the internet - one person targets another using electronic means without any institutional middleman.

Examples of P2P cybercrimes include:

- Online harassment and stalking - one individual repeatedly contacting, monitoring, or threatening another.
- Email spoofing - sending emails with a falsified sender address to deceive the recipient.
- Credit card fraud between individuals - stealing and misusing another person's card details.
- Sharing illegal content (e.g., pirated software, obscene material) directly with another user.
- Identity theft - impersonating an individual using their personal credentials.

### **1.1.3 Core Definitions - Forgery, Hacking, Piracy, Intrusion**

**Forgery:** The act of creating, altering, or using a false electronic document, digital record, signature, or identity with the intent to deceive another person or system. In cyberspace, forgery includes fake digital certificates, manipulated emails, and counterfeit electronic contracts. Punished under ITA-2000 Section 66.

**Hacking:** Unauthorised access to a computer system, network, or data without the permission of the owner. Hacking may be intentional (Black Hat) or done with permission for security testing (White Hat). The term comes from "to hack" meaning to cut through barriers. Punishable under Section 66 ITA-2000 (3 years + fine).

**Types of Hackers:**

| **Type**      | **Who They Are**                                                                         | **Intent**                                                       | **Legality**                                               |
| ------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------- |
| White Hat     | Ethical hackers, penetration testers hired by organisations.                             | Find and fix vulnerabilities before malicious actors do.         | Legal - done with permission.                              |
| Black Hat     | Malicious hackers exploiting systems for personal gain.                                  | Steal data, cause damage, demand ransom, sabotage systems.       | Illegal - punishable under ITA-2000.                       |
| Grey Hat      | Hackers who operate in between - break in without permission but don't cause major harm. | Often inform the victim after the fact; may demand a fee.        | Legally ambiguous - still unauthorised access.             |
| Script Kiddie | Unskilled individuals using pre-written tools/scripts.                                   | Show off or cause minor disruption - no real expertise.          | Illegal if causing damage or accessing without permission. |
| Hacktivist    | Hackers motivated by political or social causes.                                         | Protest against governments, corporations by disrupting systems. | Illegal - intent does not justify the act.                 |

**Software Piracy:** The unauthorised copying, distributing, selling, or using of copyrighted software without the licence holder's permission. This violates intellectual property laws and can lead to penalties under both ITA-2000 and the Copyright Act 1957. Forms include: end-user piracy, counterfeiting, hard-disk loading, online piracy (torrenting), and rental piracy.

**Computer Network Intrusion:** The unauthorised penetration into a computer network - gaining access to networked resources, files, databases, or systems without permission. Distinct from hacking a single machine: intrusion specifically refers to entering a network environment. Detected using HIDS (Host Intrusion Detection System) or NIDS (Network Intrusion Detection System).

|                  | **HIDS**                                                         | **NIDS**                                                  |
| ---------------- | ---------------------------------------------------------------- | --------------------------------------------------------- |
| Full Form        | Host Intrusion Detection System                                  | Network Intrusion Detection System                        |
| Where it runs    | On a specific host/machine                                       | On network devices (routers, switches, dedicated sensors) |
| What it monitors | Local system logs, file integrity, process activity on that host | All network traffic flowing through the network segment   |
| Scope            | Single machine                                                   | Entire network or subnet                                  |
| Can detect       | Local privilege escalation, file changes, suspicious processes   | Port scans, DoS traffic, suspicious network patterns      |
| Example          | OSSEC, Tripwire                                                  | Snort, Suricata                                           |
| Advantage        | High accuracy for local events                                   | Broad visibility across network                           |
| Disadvantage     | Can't see network-level attacks                                  | Can miss encrypted or local attacks                       |

## **1.2 CIA Triad - Key Elements of Cybersecurity**

The CIA Triad is the foundational framework for cybersecurity. Every security mechanism can be evaluated against these three principles.

| **Principle**   | **Definition**                                                                                                                              | **Goal**                                                | **Example Threat**                                  | **Example Control**                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Confidentiality | Ensuring that information is accessible only to those who are authorised to access it. Data must be protected from unauthorised disclosure. | Prevent information leakage to unauthorised parties.    | Eavesdropping, data theft, packet sniffing.         | Encryption, access controls, authentication.          |
| Integrity       | Ensuring that data is accurate, consistent, and unaltered by unauthorised parties. Data must be trustworthy throughout its lifecycle.       | Prevent unauthorised modification or tampering of data. | Man-in-the-Middle attacks, data tampering, malware. | Digital signatures, checksums, hashing, audit logs.   |
| Availability    | Ensuring that authorised users can access information and systems when needed. Systems must remain operational and accessible.              | Prevent disruption of services or access denial.        | DoS/DDoS attacks, ransomware, hardware failure.     | Redundancy, backups, failover systems, rate limiting. |

## **1.3 What is Cyberspace?**

**Cyberspace:** The virtual environment created by interconnected computer systems and networks - including the internet, intranets, databases, and all digital communication channels. It is a domain where electronic information is created, stored, transmitted, and manipulated. It has no physical boundaries and is not confined to any single country or jurisdiction.

Key characteristics of cyberspace:

- Borderless - crimes can be committed across international boundaries from any location.
- Non-physical - it exists in digital form; you cannot touch or see it physically.
- Always on - cyberspace is active 24/7 across time zones.
- Scalable - billions of users, devices, and transactions happen simultaneously.
- Jurisdiction challenge - determining which country's law applies is complex.

## **1.4 Categories of Cybercrime & How Criminals Plan Attacks**

### **1.4.1 The Five Stages of Attack Planning**

Criminals do not attack randomly. They follow a systematic methodology. Understanding this process is crucial for both defence and exam answers.

| **Stage** | **Name**                         | **What the Attacker Does**                                                                                                                                                          | **Tools/Techniques Used**                                                                          | **Defender's Response**                                                          |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1         | Reconnaissance (Footprinting)    | Passively gather as much information about the target as possible - IP addresses, domain info, employee details, network topology - WITHOUT directly touching the target system.    | WHOIS lookups, Google dorking, social media profiling, DNS queries, job listings analysis, Shodan. | Limit public information, monitor exposed data, use privacy guards on WHOIS.     |
| 2         | Scanning                         | Actively probe the target to find open ports, running services, OS versions, and vulnerabilities. The attacker directly contacts the target system.                                 | Nmap (port scanner), Nessus (vulnerability scanner), ping sweeps, OS fingerprinting.               | Firewall rules to block unauthorised probes, intrusion detection systems (NIDS). |
| 3         | Gaining Access (Exploitation)    | Use discovered vulnerabilities to break into the system. This is the actual "hack" - executing exploits, cracking passwords, injecting malicious code, or using social engineering. | Metasploit, SQL injection, buffer overflow exploits, phishing, brute force tools.                  | Patching, input validation, multi-factor authentication, WAF.                    |
| 4         | Maintaining Access (Persistence) | Ensure continued access even if the initial vulnerability is patched. Install backdoors, rootkits, or Trojans so the attacker can return anytime.                                   | Backdoor installation, rootkits, Trojans, creating new admin accounts, scheduled tasks.            | Integrity monitoring, regular audits, endpoint detection.                        |
| 5         | Covering Tracks                  | Erase all evidence of the intrusion - delete or modify log files, use steganography, tunnel traffic through proxies - to avoid detection and prosecution.                           | Log clearing, timestomping, steganography, using TOR/VPN/proxy chains.                             | Centralised log management (SIEM), write-protected logs, forensic monitoring.    |

_📝 EXAM TIP: Active vs Passive attacks appear as Group A fill-in EVERY year. Memorise the comparison table below cold._

### **1.4.2 Active vs Passive Attacks - ★★★★★ MUST KNOW**

This is the single most frequently tested topic in Cyber Law. It appears in Group A (1 mark), Group B (5 marks), and as part of Group C answers.

| **Parameter**     | **Passive Attack**                                                                                                                                                                                    | **Active Attack**                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definition        | The attacker OBSERVES and intercepts communication without modifying or disrupting the data. The attacker is a silent eavesdropper.                                                                   | The attacker MODIFIES, disrupts, replays, or fabricates data. The attacker actively interferes with communication.                                                                                                                                                                                                                                                                               |
| Goal              | Gather intelligence - steal information without being noticed.                                                                                                                                        | Disrupt services, modify data, gain unauthorised access, cause damage.                                                                                                                                                                                                                                                                                                                           |
| Data modification | No - data remains unchanged. The attacker only reads/copies.                                                                                                                                          | Yes - data is altered, deleted, replayed, or new data is injected.                                                                                                                                                                                                                                                                                                                               |
| Detectability     | Very HARD to detect - no trace left, normal network traffic continues.                                                                                                                                | Easier to detect - abnormal behaviour, altered files, system anomalies.                                                                                                                                                                                                                                                                                                                          |
| Prevention        | Encryption (so intercepted data is unreadable), secure channels.                                                                                                                                      | Firewalls, intrusion detection, authentication, digital signatures, access controls.                                                                                                                                                                                                                                                                                                             |
| Impact            | Privacy violation - confidentiality is breached.                                                                                                                                                      | Integrity and Availability breached - can cause system failure.                                                                                                                                                                                                                                                                                                                                  |
| Examples          | (1) Eavesdropping/Packet Sniffing - capturing network traffic. (2) Traffic Analysis - studying communication patterns even if encrypted. (3) Session Eavesdropping - listening to an ongoing session. | (1) Masquerade/Impersonation - pretending to be a legitimate user. (2) Replay Attack - capturing and re-sending valid data packets. (3) Message Modification - altering data in transit. (4) Denial of Service (DoS) - flooding target to deny access. (5) Man-in-the-Middle (MITM) - intercepting and altering data between two parties. (6) Session Hijacking - taking over an active session. |
| CIA impact        | Confidentiality only.                                                                                                                                                                                 | Integrity + Availability (and sometimes Confidentiality too).                                                                                                                                                                                                                                                                                                                                    |
| IT Act section    | Section 43 (if data accessed without permission).                                                                                                                                                     | Section 66 (hacking, computer-related offences).                                                                                                                                                                                                                                                                                                                                                 |

### **1.4.3 Cyberstalking**

**Cyberstalking:** The use of electronic communication (email, social media, chat, phone) to stalk, harass, threaten, or monitor a person repeatedly in a way that causes fear or distress to the victim. It is the digital equivalent of physical stalking.

Key characteristics of cyberstalking:

- Repeated and persistent - not a one-off act; the stalker continues over time.
- Threatening or intimidating in nature - creates genuine fear in the victim.
- Can involve false accusations, defamation, identity theft, monitoring activity.
- May use GPS tracking apps, spyware, fake social media accounts, or email bombing.
- The stalker and victim may know each other (ex-partner, colleague) or be strangers.

**Legal Position in India:** Cyberstalking is addressed under Section 66A (communication of offensive messages - struck down by Supreme Court in 2015 in Shreya Singhal case), Section 67 (obscene material), and also IPC Sections 354D (stalking), 506 (criminal intimidation), and 509 (words intended to insult modesty of a woman). In 2025 exam it appeared as a 15-mark question.

### **1.4.4 Cyberbullying**

**Cyberbullying:** The use of digital technology - social media, messaging apps, online gaming platforms, or websites - to harass, humiliate, threaten, or harm another person, typically a minor. Unlike cyberstalking which often involves adults, cyberbullying primarily targets teenagers and children.

| **Aspect**      | **Cyberbullying**                                                              | **Cyberstalking**                                          |
| --------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Primary victims | Children, teenagers, students.                                                 | Adults (though can target anyone).                         |
| Relationship    | Often among peers - schoolmates, classmates.                                   | Can be ex-partners, strangers, acquaintances.              |
| Platform        | Social media, gaming, school group chats.                                      | Email, phone, social media, tracking apps.                 |
| Nature          | Humiliation, social exclusion, rumour-spreading, sharing embarrassing content. | Threats, surveillance, persistent following, intimidation. |
| Severity        | Psychological harm, depression, social isolation.                              | Fear for physical safety, psychological trauma.            |
| Legal remedy    | IT Act + POCSO Act for minors.                                                 | IT Act + IPC Sections 354D, 506, 509.                      |

### **1.4.5 Email Spoofing & Email Spamming**

**Email Spoofing:** A technique where an attacker falsifies the "From" email address in a message header to make it appear as if the email is coming from a trusted, legitimate source (e.g., your bank, a government agency, or a colleague). The recipient sees a familiar sender address but the email actually originates from the attacker's server.

**Email Spamming:** The mass sending of unsolicited, bulk email messages to a large number of recipients - typically for advertising, phishing, or spreading malware. Spam is not necessarily fraudulent (the sender address may be real) but is unsolicited and often harmful.

**Key Difference:** Spoofing is about FAKING identity (the From address is forged). Spamming is about VOLUME (sending bulk unsolicited email). A phishing attack often combines both - spam volume + spoofed sender address.

### **1.4.6 Salami Attack**

**Salami Attack:** A type of cybercrime where very small, almost unnoticeable amounts are repeatedly stolen from many accounts over a long period of time. Each individual slice (like a salami slice) is too small to be noticed, but the cumulative total is significant. Most famously associated with banking fraud where fractions of cents from rounding are siphoned off into a separate account.

Example: A bank employee programs the system to transfer 0.002 rupees from every transaction into a personal account. With millions of transactions daily, this amounts to crores of rupees over time - but no individual customer notices the tiny deduction.

## **1.5 Man-in-the-Middle (MITM) Attack**

**MITM Attack:** An attack where the attacker secretly intercepts and potentially alters the communication between two parties who believe they are communicating directly with each other. The attacker positions themselves "in the middle" of the conversation - reading, modifying, and relaying messages.

How MITM works - step by step:

- Alice wants to communicate securely with Bob.
- Attacker (Mallory) intercepts Alice's messages and impersonates Bob to Alice.
- Simultaneously, Mallory impersonates Alice to Bob.
- Both Alice and Bob believe they are talking to each other, but all traffic flows through Mallory.
- Mallory can read all messages (confidentiality breach) and modify them (integrity breach).

| **MITM Technique**  | **How It Works**                                                                                                                                                                             | **Target**                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| ARP Spoofing        | Attacker sends fake ARP (Address Resolution Protocol) replies on a local network, linking their MAC address to the victim's IP. All traffic meant for the victim flows through the attacker. | Local network - LAN environments.            |
| DNS Spoofing        | Attacker poisons the DNS cache with a fake IP address for a legitimate domain, redirecting victims to a malicious website.                                                                   | Network-wide - anyone using that DNS server. |
| SSL Stripping       | Attacker downgrades a HTTPS connection to HTTP by intercepting the initial request, stripping the encryption so traffic is transmitted in plaintext.                                         | Web browsing sessions.                       |
| Wi-Fi Eavesdropping | Attacker sets up a rogue Wi-Fi hotspot with the same name as a legitimate one. Victims connect and all their traffic passes through the attacker.                                            | Public Wi-Fi users.                          |

## **1.6 Hybrid Attacks**

**Hybrid Attack:** A combination of two or more attack techniques used together to achieve a goal that neither could accomplish alone. Most commonly refers to password cracking - combining a dictionary attack (using common words) with brute force (trying variations like appended numbers and symbols). Hybrid attacks are more effective than either method alone.

Example: A hybrid attack first checks "password", then tries "password1", "Password1", "P@ssword1", etc. - combining dictionary words with brute-force variations.

# **UNIT 2 - Cybercrime on Mobile & Wireless Devices**

_Priority: HIGH | Bluetooth was a 15-mark question in 2024 | Mobile security in Group A every year_

## **2.1 Security Challenges of Mobile Devices**

Mobile devices create unique security risks that wired computers do not face. Here are the core challenges - expect 4-5 of these in a Group A or short Group B question:

| **Challenge**            | **Explanation**                                                                                                                                                                                    | **Example Threat**                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| No fixed infrastructure  | Mobile phones rely on wireless networks (cellular, Wi-Fi, Bluetooth) which are easier to intercept than wired cables. Data travels through the air, making it vulnerable to eavesdropping.         | Wi-Fi sniffing, cellular IMSI catchers.                             |
| Lost or stolen devices   | Phones are small, portable, and frequently lost or stolen. A device without a strong lock screen or encryption can expose all stored data to the finder.                                           | Physical theft → access to email, banking apps, contacts.           |
| Third-party app risks    | Users install apps from unofficial stores or click "Allow" on excessive permissions without reading them. Malicious apps can run in the background, collecting data.                               | Spyware apps disguised as games or utilities.                       |
| Limited processing power | Historically, mobile processors were weaker - making it harder to run full-disk encryption, VPNs, or antivirus software in real time. Modern phones are better, but still constrained vs desktops. | Encryption overhead slowing performance, skipped security features. |
| Always-on connectivity   | Phones are connected 24/7 - cellular, Wi-Fi, Bluetooth, NFC simultaneously. Each open interface is a potential attack vector.                                                                      | Bluetooth attacks, NFC relay attacks, rogue cell towers.            |
| OS fragmentation         | Android especially has thousands of device models with different OS versions. Many older devices never receive security patches from manufacturers.                                                | Exploiting unpatched OS vulnerabilities (CVEs).                     |
| Phishing via SMS/calls   | Users are more likely to click links in SMS messages or respond to voice calls than on desktop email. Social engineering is easier via phone.                                                      | Smishing (SMS phishing), Vishing (voice phishing).                  |
| Cloud sync risks         | Phones automatically sync data to cloud services. If cloud credentials are compromised, all synced data (photos, messages, contacts) is exposed.                                                   | Credential theft → cloud account takeover.                          |

## **2.2 Cryptographic Security for Mobile Devices**

Mobile devices use several cryptographic protocols to protect data in transit and at rest:

| **Protocol** | **Full Form**            | **Purpose on Mobile**                                                            | **How It Works**                                                                                                    |
| ------------ | ------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| WPA2         | Wi-Fi Protected Access 2 | Encrypts Wi-Fi communication between phone and router.                           | Uses AES (Advanced Encryption Standard) with 128/256-bit keys. CCMP protocol for data integrity.                    |
| WPA3         | Wi-Fi Protected Access 3 | Stronger successor to WPA2 - protects against offline dictionary attacks.        | Uses SAE (Simultaneous Authentication of Equals) handshake instead of PSK. 192-bit encryption in enterprise mode.   |
| TLS          | Transport Layer Security | Encrypts app-to-server communications (HTTPS, banking apps, email).              | Public key cryptography for key exchange, symmetric encryption for data. TLS 1.3 is current standard.               |
| VPN          | Virtual Private Network  | Creates encrypted tunnel for all phone traffic - used in corporate environments. | IPSec or SSL/TLS-based tunnel. All traffic is encrypted and routed through a secure server.                         |
| MDM          | Mobile Device Management | Enterprise security - remotely manage and wipe corporate mobile devices.         | Software agent on device communicates with MDM server. Admins can enforce policies, lock, or wipe devices remotely. |

## **2.3 Bluetooth Attacks - ★★★★ (Full 15-mark question in 2024)**

Bluetooth is a short-range wireless technology (typically 10m, Class 1 up to 100m) that creates a Personal Area Network (PAN). Its convenience makes it a significant attack surface when left in "discoverable" mode.

| **Attack Name** | **Definition**                                                                                                                                                                                                                                 | **What the Attacker Does**                                                                                                                                              | **Data at Risk**                                                                                      | **How to Prevent**                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Bluejacking     | Sending unsolicited messages or business cards to nearby Bluetooth-enabled devices without the victim's consent. The attacker does NOT gain access to the device - they only send messages.                                                    | Broadcasts an unsolicited message (like a contact card or text) to discoverable devices nearby. Mostly harmless pranking - can be used for spam.                        | No data is stolen - it is a nuisance attack, not a data breach.                                       | Set Bluetooth to non-discoverable mode. Reject unknown connection requests.                                     |
| Bluesnarfing    | Unauthorised ACCESS to a victim's Bluetooth device and theft of data - contacts, messages, emails, calendar - without the victim knowing. More serious than Bluejacking.                                                                       | Exploits flaws in the OBEX (Object Exchange) protocol to connect to the device and pull data silently, without pairing notification in some older implementations.      | Contacts list, SMS messages, emails, photos, calendar entries - any data accessible via OBEX profile. | Keep Bluetooth off when not in use. Update firmware/OS. Use Bluetooth 2.1+ which fixed OBEX vulnerabilities.    |
| Bluebugging     | The most severe Bluetooth attack - full remote CONTROL of the victim's phone. The attacker can make calls, send SMS, read messages, intercept calls, and access the internet through the victim's device - all without the victim's knowledge. | Exploits AT command interface vulnerabilities. Attacker connects to the phone's serial communication interface, giving them control as if physically holding the phone. | Complete device control - call logs, SMS, internet access, microphone (in some cases).                | Update firmware regularly - most modern phones (post-2003) patched this. Disable Bluetooth discovery in public. |
| BlueSmack (DoS) | A Denial of Service attack against Bluetooth devices. The attacker sends an oversized L2CAP (Logical Link Control and Adaptation Protocol) echo request packet that overwhelms and crashes the target device.                                  | Like a Bluetooth-version of a Ping of Death attack - sends a packet larger than the L2CAP specification allows, causing the receiving device to crash or freeze.        | No data stolen - device becomes temporarily unavailable / crashes.                                    | Keep Bluetooth off in public. Use updated devices that validate packet sizes.                                   |

_📝 EXAM TIP: Bluesnarfing = Data THEFT (contacts, messages). Bluebugging = Remote CONTROL of device. Bluejacking = Harmless SPAM messages only. This distinction is a classic exam trap._

## **2.4 Attacks on Mobile/Cell Phones**

Mobile phones face a range of attacks beyond Bluetooth. Here is a comprehensive overview:

| **Attack Type**         | **How It Works**                                                                                                                                                                                                                                      | **Impact**                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Physical Theft          | The phone is physically stolen. If there is no screen lock, full disk encryption, or remote wipe capability, the attacker gets direct access to all data, apps, and accounts.                                                                         | Complete compromise of all stored data, accounts, banking apps.                                           |
| SIM Swapping            | Attacker convinces the telecom operator (via social engineering or insider bribery) to transfer the victim's phone number to a SIM card the attacker controls. All calls and SMS (including OTPs) now go to the attacker.                             | Takes over victim's number → bypasses SMS-based 2FA → gains access to bank accounts, email, social media. |
| IMSI Catcher (Stingray) | A device that mimics a legitimate cell tower. Phones automatically connect to the strongest tower. The IMSI catcher intercepts calls, SMS, and location data.                                                                                         | Real-time call/SMS interception, location tracking, IMSI (phone identity) collection.                     |
| SS7 Protocol Exploit    | SS7 (Signalling System 7) is the protocol used by telecom networks globally to route calls and SMS. It was designed in 1975 with no authentication. Attackers with access to SS7 (e.g., rogue telecom insiders) can intercept calls and SMS globally. | SMS interception anywhere in the world - defeating SMS-based 2FA globally.                                |
| Mobile Malware          | Malicious apps disguised as legitimate software. Once installed, they run in the background collecting data, recording calls, logging keystrokes, or sending premium SMS.                                                                             | Data theft, financial fraud, surveillance, ransomware.                                                    |
| Rogue Wi-Fi Hotspot     | Attacker creates a Wi-Fi access point with a name similar to a legitimate network (e.g., "Airport_Free_WiFi"). Victim connects and all traffic is intercepted.                                                                                        | MITM attack - credentials, banking sessions, messages intercepted.                                        |
| Clipboard Hijacking     | Malicious app monitors the clipboard. When victim copies a cryptocurrency address (to make a payment), the app silently replaces it with the attacker's address.                                                                                      | Financial theft - crypto sent to wrong address.                                                           |

### **2.4.1 Notable Mobile Viruses**

| **Virus/Worm Name**  | **Platform** | **Spread Method**              | **What It Did**                                                                                                                                    |
| -------------------- | ------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cabir                | Symbian OS   | Bluetooth                      | First known mobile worm (2004). Spread via Bluetooth to nearby discoverable phones. Relatively harmless - drained battery by keeping Bluetooth on. |
| Comwar (CommWarrior) | Symbian OS   | MMS + Bluetooth                | Spread aggressively via MMS messages and Bluetooth simultaneously. Could send itself to all contacts in the phone's address book.                  |
| Skulls               | Symbian OS   | Third-party apps               | Replaced system icons with skull images and disabled phone functionality - apps would open but immediately close.                                  |
| Flexispy             | Android/iOS  | App installation (stalkerware) | Commercial spyware that records calls, tracks GPS, reads SMS - often used for surveillance without consent.                                        |
| Pegasus              | iOS/Android  | Zero-click exploits            | Sophisticated government-grade spyware. Could compromise a phone without the user clicking anything - by sending a specially crafted iMessage.     |

## **2.5 Credit Card Fraud in Mobile & Wireless Era**

**Credit Card Fraud (Mobile Context):** The unauthorised use of another person's credit or debit card details to make fraudulent purchases or withdrawals, enabled by mobile or wireless technology vulnerabilities.

Common methods of mobile credit card fraud:

- Phishing via SMS (Smishing) - fake bank messages with links to counterfeit payment pages.
- Rogue Wi-Fi - intercepting card details during online purchases on unsecured public Wi-Fi.
- NFC skimming - reading contactless card data using a rogue NFC reader in close proximity.
- Malware keyloggers on the phone capturing card details during online checkout.
- Fake banking apps that look identical to real ones but capture and transmit credentials.

#### **Prevention Mechanisms**

| **Technology**  | **Full Form**                                   | **How It Prevents Fraud**                                                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SET             | Secure Electronic Transaction                   | A protocol developed by Visa and Mastercard that uses digital certificates to authenticate both the customer and the merchant before a transaction is processed. Neither party sees the other's sensitive details - the card number goes encrypted directly to the bank. |
| OTP             | One-Time Password                               | A single-use password sent via SMS or authenticator app to verify the card holder's identity at the time of transaction. Even if the card number is stolen, the OTP cannot be used again.                                                                                |
| Tokenization    | -                                               | The actual card number is replaced with a random token during the transaction. The merchant and payment processor only see the token - the real card number is never transmitted or stored. Apple Pay and Google Pay use this.                                           |
| SSL/TLS         | Secure Sockets Layer / Transport Layer Security | Encrypts the communication channel between the phone's browser/app and the payment server, preventing interception of card data in transit.                                                                                                                              |
| 3D Secure (3DS) | Three-Domain Secure                             | An authentication protocol (Verified by Visa, Mastercard SecureCode) adding an extra authentication step - requires the card holder to authenticate directly with their bank during checkout.                                                                            |
| EMV Chip        | Europay, Mastercard, Visa                       | Chip-based cards generate a unique cryptogram for each transaction, making it impossible to clone the card from intercepted data (unlike magnetic stripe cards).                                                                                                         |

# **UNIT 3 - Tools & Methods Used in Cybercrime**

_Priority: HIGH | SQL Injection = 15-mark question 2024 | DoS/DDoS asked 2024 & 2025 Group A_

## **3.1 Proxy Servers in Cybercrime**

**Proxy Server:** An intermediary server that sits between a client (the attacker's computer) and the target server. When an attacker uses a proxy, requests appear to come from the proxy's IP address rather than the attacker's real IP. This provides anonymity and is used extensively to hide the source of attacks.

How attackers abuse proxy servers:

- Chaining multiple proxies across different countries - making it nearly impossible to trace back to the real attacker.
- Using free public proxies or TOR (The Onion Router) network to anonymise traffic.
- Proxy servers can also bypass geolocation restrictions and content filters.
- Some attackers set up their own proxy on a compromised machine, using it as a "stepping stone" - the compromised machine takes the legal risk.

_For the exam, a proxy server is primarily important as an anonymity tool. You do not need to explain its technical internals. One-liner: "A proxy server hides the attacker's IP by acting as an intermediary."_

## **3.2 Trojan Horses**

**Trojan Horse:** A type of malware that disguises itself as legitimate, useful software but secretly performs malicious actions in the background. Named after the Greek myth of the wooden horse used to sneak soldiers into Troy. Unlike viruses and worms, Trojans do NOT self-replicate - they rely on user deception to install themselves.

| **Aspect**                  | **Details**                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How it spreads              | Through deception - user must be tricked into downloading and running it. Common vectors: fake software downloads, email attachments, pirated games, bundled installers.                                                                                                                                                              |
| What it does once installed | Creates a backdoor for remote access, steals data, installs ransomware, logs keystrokes, activates webcam/microphone, joins device to botnet, downloads additional malware.                                                                                                                                                           |
| Does it self-replicate?     | NO - this is the critical distinction from viruses and worms. A Trojan needs the user to install it; it does not copy itself automatically.                                                                                                                                                                                           |
| Types of Trojans            | (1) Remote Access Trojan (RAT) - gives attacker full remote control. (2) Banking Trojan - intercepts banking sessions, steals credentials. (3) Downloader Trojan - downloads and installs other malware. (4) Rootkit Trojan - hides itself and other malware from the OS. (5) Ransomware Trojan - encrypts files and demands payment. |
| Famous examples             | Zeus (banking Trojan), DarkComet (RAT), Emotet (downloader), NjRAT, AsyncRAT.                                                                                                                                                                                                                                                         |
| Detection                   | Antivirus with behavioural analysis, sandboxed execution, integrity monitoring, network traffic anomaly detection.                                                                                                                                                                                                                    |
| Prevention                  | Never download software from unofficial sources. Verify file hashes. Use antivirus. Keep OS patched. Email filtering.                                                                                                                                                                                                                 |
| IT Act (India)              | Deploying a Trojan is an offence under Section 66 (computer-related offences) - up to 3 years imprisonment.                                                                                                                                                                                                                           |

## **3.3 Backdoors**

**Backdoor:** A hidden access mechanism built into or installed on a computer system that allows unauthorised access at a later time, bypassing normal authentication and security checks. Backdoors can be intentionally placed by developers (for maintenance - sometimes called "maintenance hooks") or maliciously installed by an attacker after gaining initial access.

Types of backdoors:

- Intentional (developer) - legitimate back doors for remote administration (sometimes abused). Example: hardcoded admin passwords in routers.
- Malicious (post-exploitation) - installed by an attacker to maintain persistent access even after the original vulnerability is patched.
- Supply chain backdoors - inserted during software development or manufacturing (most dangerous type - device is compromised before the victim even buys it).

_Key distinction: A Trojan creates a backdoor. A backdoor is the mechanism itself. An attacker may install a backdoor using a Trojan, a vulnerability exploit, or by physically accessing the machine._

## **3.4 DoS and DDoS Attacks - ★★★★★**

### **3.4.1 Denial of Service (DoS)**

**Denial of Service (DoS):** An attack in which a single attacker attempts to make a machine or network resource unavailable to its intended users by overwhelming it with a flood of illegitimate requests or traffic, exhausting the target's resources (CPU, memory, bandwidth, connection pool) so it cannot serve legitimate users.

How DoS works:

- The target server or network device has a finite capacity - it can only handle a certain number of requests per second.
- The attacker generates traffic far exceeding this capacity - from a single machine.
- Legitimate users cannot get responses because all resources are consumed by fake requests.
- The attack is temporary - it ends when the attacker stops or is blocked.

Common DoS attack techniques:

| **Technique**           | **How It Works**                                                                                                                                                                                                                                             | **Target Resource**                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| SYN Flood               | Attacker sends thousands of TCP SYN (connection initiation) packets with forged source IP addresses. Server allocates memory for each half-open connection waiting for ACK that never comes. Connection table fills up - no new connections can be accepted. | Connection table (TCP state memory). |
| ICMP Flood (Ping Flood) | Attacker sends massive numbers of ICMP echo request (ping) packets to overwhelm the target's network interface. Simple but effective on older systems.                                                                                                       | Network bandwidth + CPU.             |
| UDP Flood               | Attacker sends large numbers of UDP packets to random ports. Target checks each port, finds no listener, sends back ICMP "Destination Unreachable" packets - consuming resources in both directions.                                                         | CPU + bandwidth.                     |
| HTTP Flood              | Attacker sends seemingly legitimate HTTP GET or POST requests at a massive rate. Harder to block because each request looks valid.                                                                                                                           | Web server CPU + connection pool.    |
| Ping of Death           | Sending an oversized (> 65,535 bytes) IP packet that causes buffer overflow and crash when received by older systems.                                                                                                                                        | Memory buffer - causes crash.        |

### **3.4.2 Distributed Denial of Service (DDoS)**

**Distributed Denial of Service (DDoS):** An evolved, more powerful form of DoS where thousands or millions of compromised computers (a "botnet") simultaneously attack a single target. Because traffic comes from many different IP addresses worldwide, it is vastly harder to block than a DoS from a single source.

Understanding Botnets:

- Botnet = Network of BOTs (roBOTs) - computers infected with malware that allows the attacker to control them remotely.
- Each infected machine in the botnet is called a "zombie" or "bot".
- The attacker controls the botnet via a Command and Control (C&C or C2) server.
- The device owners are unaware their machines are part of a botnet.
- Botnets can contain thousands to millions of devices - including computers, routers, IoT devices, smart cameras.

| **Parameter**         | **DoS**                                    | **DDoS**                                                                                   |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Attack source         | Single machine / single IP address         | Multiple machines (hundreds to millions) across many IPs worldwide                         |
| Traffic volume        | Limited by one machine's bandwidth         | Aggregated bandwidth of entire botnet - can reach Tbps                                     |
| Traceability          | Easier to trace - single IP to block       | Very hard to trace - traffic from thousands of IPs globally                                |
| Mitigation            | Block the attacking IP - relatively simple | Requires DDoS mitigation services (Cloudflare, Akamai), traffic scrubbing, anycast routing |
| Infrastructure needed | One computer and an internet connection    | A botnet - requires prior malware campaign to build it                                     |
| Attack cost           | Minimal                                    | Significant (botnet infrastructure) - often rented as a service ("DDoS-for-hire")          |
| IT Act section        | Section 66 - computer-related offences     | Section 66 + 66F (cyberterrorism if targeting critical infrastructure)                     |

## **3.5 SQL Injection - ★★★★★ (15-mark question 2024)**

**SQL Injection (SQLi):** A web application attack where the attacker inserts or "injects" malicious SQL (Structured Query Language) code into an input field (such as a login form, search box, or URL parameter) that is then passed to a backend database. If the application does not properly validate or sanitise the input, the database executes the injected SQL as a legitimate command, potentially exposing, modifying, or destroying data.

#### **How SQL Injection Works - Step by Step**

Assume a login form with username and password fields. The backend code constructs this query:

SELECT \* FROM users WHERE username = '\[input\]' AND password = '\[input\]'

Normal legitimate input: username = admin, password = secret123

The query becomes: SELECT \* FROM users WHERE username = 'admin' AND password = 'secret123'

Attacker's input: username = admin'-- , password = anything

The query becomes: SELECT \* FROM users WHERE username = 'admin'-- ' AND password = 'anything'

The -- is a SQL comment character. Everything after it is ignored. The query becomes just:

SELECT \* FROM users WHERE username = 'admin'

Result: The attacker logs in as 'admin' without knowing the password. The password check is completely bypassed.

| **SQLi Type**           | **How It Works**                                                                                                                                                          | **What the Attacker Achieves**                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| In-band SQLi (Classic)  | The result of the injected query is returned directly in the application's HTTP response. The attacker can read it immediately.                                           | Dumps database tables, reads user credentials, views sensitive data.            |
| Error-based SQLi        | Attacker deliberately causes SQL errors that reveal database structure information in the error messages shown by the application.                                        | Discovers table names, column names, database type/version from error messages. |
| UNION-based SQLi        | Uses the SQL UNION operator to combine the results of the original query with a malicious query, appending the attacker's data to legitimate output.                      | Extracts data from other tables beyond what the original query accessed.        |
| Blind SQLi (Boolean)    | The application doesn't return data but behaves differently based on whether a SQL condition is true or false. Attacker asks yes/no questions to extract data bit by bit. | Extracts data very slowly but reliably even when no output is shown.            |
| Blind SQLi (Time-based) | Uses SQL functions like SLEEP() or WAITFOR DELAY to make the database pause for a specific time. If the page loads slowly, the injected condition was true.               | Same as boolean blind but uses timing instead of content differences.           |
| Out-of-band SQLi        | Attacker causes the database to send data to an external server they control (via DNS or HTTP requests from the DB server itself).                                        | Data exfiltration even when the web app shows nothing.                          |

#### **SQL Injection Prevention**

| **Prevention Method**                       | **How It Works**                                                                                                                                                                                                   | **Effectiveness**                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Parameterised Queries (Prepared Statements) | The query structure is defined first with placeholders (?). User input is then passed as a parameter - NEVER inserted directly into the query string. The database treats input purely as data, never as SQL code. | BEST - completely prevents SQL injection when implemented correctly. Use this always.                                            |
| Stored Procedures                           | SQL logic is stored on the database server as a procedure. The application calls the procedure name + passes parameters. Input cannot alter the SQL structure.                                                     | Very effective if the stored procedure itself doesn't use dynamic SQL internally.                                                |
| Input Validation & Sanitisation             | Validate that input matches expected format (e.g., email must match regex, age must be a number). Strip or escape dangerous characters like '", --, ;, UNION, SELECT.                                              | Good as a defence-in-depth layer but NOT sufficient alone - attackers find ways around blacklists.                               |
| Web Application Firewall (WAF)              | A security layer that inspects HTTP requests and blocks those containing known SQL injection patterns before they reach the application.                                                                           | Good at blocking known attacks but can be bypassed by advanced techniques. Use alongside, not instead of, parameterised queries. |
| Least Privilege Principle                   | The database user account used by the application should have ONLY the minimum permissions needed - e.g., SELECT only if no writes are needed. No DROP, no admin access.                                           | Limits damage if injection does occur - attacker gets only limited DB access.                                                    |
| Error Handling                              | Show generic error messages to users. Never display raw SQL error messages - they reveal database structure.                                                                                                       | Limits information leakage - makes blind SQLi harder.                                                                            |

## **3.6 Malware - Viruses, Worms & Variants - ★★★★**

### **3.6.1 Computer Virus**

**Computer Virus:** A self-replicating program that attaches itself to a legitimate host file (executable, document, boot sector) and spreads when the infected file is shared or executed. Like a biological virus, it needs a "host" to replicate and spread. When activated, it can corrupt files, steal data, display messages, or crash systems.

Key characteristic: A virus NEEDS a host file. It cannot spread on its own - it must piggyback on an existing file.

| **Virus Type**      | **Where It Infects**                                                                                                                                | **How It Spreads**                                                     | **Example**                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------- |
| Boot Sector Virus   | Infects the Master Boot Record (MBR) or Boot Sector of storage media - floppy disks (historical), USB drives, hard disks.                           | Spreads when an infected bootable device is used to start a computer.  | Stoned, Michelangelo virus. |
| File Infector Virus | Attaches to executable files (.exe, .com, .dll). Activates when the infected program is run.                                                        | Spreads when infected executable files are shared (email, USB, P2P).   | Jerusalem virus, Sasser.    |
| Macro Virus         | Infects documents that support macros - Microsoft Office files (Word .doc, Excel .xls). Macros are scripts that automate tasks.                     | Spreads via infected Office documents shared by email or file sharing. | Concept virus, Melissa.     |
| Polymorphic Virus   | Can infect any file type but changes its own code signature every time it replicates, making it very hard to detect with signature-based antivirus. | Various - same as the file type it infects.                            | Storm, Virut, CryptoWall.   |
| Resident Virus      | Hides in the computer's RAM (memory) and infects files as they are accessed, even if the original infected file is removed.                         | Active as long as the computer is running.                             | CMJ, Meve.                  |
| Multipartite Virus  | Simultaneously infects both the boot sector AND executable files - a combined attack.                                                               | Both boot and file-sharing vectors.                                    | Ghost, Invader.             |

### **3.6.2 Computer Worm**

**Computer Worm:** A standalone self-replicating program that spreads through networks WITHOUT needing a host file. Unlike a virus, a worm is a complete, independent program - it copies itself across networks automatically by exploiting vulnerabilities in operating systems or network protocols.

Key characteristic: A worm does NOT need a host file. It is self-contained and self-spreading.

| **Parameter**         | **Virus**                                               | **Worm**                                                                                         |
| --------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Needs host file?      | YES - must attach to an existing file.                  | NO - is a standalone program.                                                                    |
| Self-replication      | Yes - but only when infected host file is executed.     | Yes - continuously and automatically without user action.                                        |
| Spread method         | File sharing, email attachments, removable media.       | Network connections, email (automatically, no user click needed), exploiting OS vulnerabilities. |
| Primary damage        | File corruption, data theft, system instability.        | Network bandwidth consumption, system slowdown, can carry payloads.                              |
| User action required? | Yes - user must run the infected file.                  | Often NO - spreads automatically by exploiting vulnerabilities.                                  |
| Detection difficulty  | Moderate - signature-based AV can detect known viruses. | Hard - spreads before detection; polymorphic worms especially hard.                              |
| Famous examples       | ILOVEYOU, Melissa, Conficker (worm-like), Sasser.       | Morris Worm (1988 - first internet worm), Code Red, Slammer, WannaCry.                           |

### **3.6.3 Trojan vs Virus vs Worm - Quick One-Liners**

| **Malware Type** | **One-Line Definition**                                                               | **Self-Replicates?** | **Needs Host?**         | **Spreads How?**                              |
| ---------------- | ------------------------------------------------------------------------------------- | -------------------- | ----------------------- | --------------------------------------------- |
| Virus            | Attaches to host files; activates when the host file is executed.                     | Yes (via host)       | YES                     | File sharing, email attachments.              |
| Worm             | Standalone self-replicating program that spreads through networks automatically.      | Yes (independently)  | NO                      | Network vulnerabilities, email (auto).        |
| Trojan           | Disguised as legitimate software; creates backdoor or performs malicious action.      | NO                   | NO (is itself the file) | User deception - must be installed by victim. |
| Rootkit          | Hides malware and attacker activity from the operating system and security tools.     | No                   | NO                      | Often delivered by Trojans or exploits.       |
| Ransomware       | Encrypts victim's files and demands payment for decryption key.                       | Some variants        | NO                      | Phishing, exploit kits, RDP brute force.      |
| Spyware          | Secretly monitors user activity, keystrokes, and sends data to attacker.              | No                   | NO                      | Bundled with freeware, Trojans.               |
| Adware           | Displays unwanted advertisements; often bundled with legitimate software.             | No                   | NO                      | Software bundles, downloads.                  |
| Keylogger        | Records every keystroke typed by the user - passwords, messages, credit card numbers. | No                   | NO                      | Trojans, physical installation, phishing.     |

## **3.7 Buffer Overflow (Definition Only - No Deep Dive Needed)**

**Buffer Overflow:** A vulnerability that occurs when a program writes more data to a fixed-size memory buffer than it was designed to hold. The excess data "overflows" into adjacent memory regions, potentially overwriting other data or executable code. An attacker can carefully craft the overflow to overwrite the return address of a function, redirecting program execution to malicious code.

For exam purposes, know:

- Buffer = a fixed-size block of memory allocated for temporary data storage.
- Overflow = writing beyond the buffer's boundary into adjacent memory.
- Impact = crash the program, or execute attacker-controlled code (arbitrary code execution).
- Prevention = input length validation, safe coding functions (strcpy → strncpy), ASLR, stack canaries, DEP.

_The exam only asks for the definition and prevention concepts - never asks for code or detailed exploitation. One paragraph is sufficient._

## **3.8 Brute Force & Dictionary Attacks**

**Brute Force Attack:** A trial-and-error method where the attacker systematically tries every possible combination of characters (passwords, encryption keys) until the correct one is found. Given enough time and computing power, brute force will always succeed - the question is whether it is computationally feasible.

**Dictionary Attack:** A more efficient form of brute force where the attacker tries passwords from a pre-compiled list of commonly used passwords, words from the dictionary, and known password patterns - rather than trying every possible combination.

**Rainbow Table Attack:** An attack using a pre-computed table of password hashes. Instead of hashing passwords one at a time, the attacker looks up the hash in the table to find the plaintext password instantly. Very fast but requires huge storage.

| **Prevention Method**             | **How It Works**                                                                                                                                                                  |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account Lockout                   | Temporarily lock or disable an account after a set number of failed login attempts (e.g., 5 attempts). Forces the attacker to either slow down or face a lockout.                 |
| CAPTCHA                           | Completely Automated Public Turing test to tell Computers and Humans Apart - presents a challenge humans can solve but automated bots cannot (distorted text, image recognition). |
| Rate Limiting                     | Limit the number of login attempts per time window (e.g., max 10 attempts per minute per IP address). Slows brute force to a crawl.                                               |
| Strong Password Policy            | Enforce minimum length (12+ chars), complexity (upper, lower, numbers, symbols), and prohibit common passwords. Exponentially increases brute force time.                         |
| Password Hashing (bcrypt, Argon2) | Store passwords as salted hashes using slow hashing algorithms. bcrypt is intentionally slow - making brute force computationally expensive even with powerful hardware.          |
| Salting                           | Add a random unique value (salt) to each password before hashing. Prevents rainbow table attacks - even if two users have the same password, their hashes will be different.      |
| Multi-Factor Authentication (MFA) | Even if a password is cracked, the attacker still needs a second factor (OTP, hardware token, biometric). Brute forcing the password alone is not enough.                         |

# **UNIT 4A - Phishing & Identity Theft**

_Priority: MUST DO | ★★★★★ | Appears every year in Group A and often in long answers_

## **4.1 Phishing - Complete Coverage**

**Phishing:** A social engineering cyberattack in which an attacker impersonates a trusted entity (bank, government agency, popular website) through deceptive electronic communication - typically email - to trick victims into revealing sensitive information (passwords, credit card numbers, Social Security numbers) or installing malware. The term "phishing" is derived from "fishing" - the attacker baits the victim.

How a typical phishing attack works:

- Attacker crafts a convincing email that appears to come from a trusted sender (bank, PayPal, Amazon, government).
- The email creates urgency: "Your account will be suspended in 24 hours", "Unusual activity detected - verify now".
- Email contains a link to a fake website that looks identical to the legitimate one.
- Victim enters credentials on the fake site - attacker captures them in real time.
- Attacker uses stolen credentials to access the victim's real account.

### **4.1.1 Types of Phishing - Detailed**

| **Phishing Type** | **Definition**                                                                                                                                                                                              | **How It's Different**                                                                                                                                   | **Example**                                                                                                                           | **Target**                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Generic Phishing  | Mass email sent to thousands of random recipients impersonating a popular service. No personalisation - a numbers game.                                                                                     | Broad, untargeted, low success rate per victim but high total volume.                                                                                    | "Dear Customer, your PayPal account has been limited. Click here to restore access."                                                  | Anyone with the email address.                                |
| Spear Phishing    | Highly targeted phishing directed at a specific individual or organisation, using personal details gathered through research (social media, company website, LinkedIn) to make the email highly convincing. | Personalised - uses victim's name, job title, colleagues' names, current projects. Much higher success rate.                                             | "Hi John, this is Sarah from HR. Please review the attached updated salary structure for Q3."                                         | Specific individual, usually in a targeted organisation.      |
| Whaling           | A form of spear phishing targeting high-value "big fish" - C-suite executives (CEO, CFO, CTO). The attacker impersonates legal, regulatory, or executive authority.                                         | Even more personalised. Targets those with the most access and authority - one successful attack can compromise entire organisations.                    | Fake legal notice to the CFO: "Urgent: You are required to transfer funds to settle the following litigation..."                      | CEO, CFO, CTO, board members.                                 |
| Pharming          | Redirecting victims from a legitimate website URL to a fraudulent one WITHOUT the victim clicking a malicious link - instead by poisoning DNS cache or modifying the hosts file.                            | Even if the user types the correct URL in the browser, they land on the fake site. This is what makes Pharming far more dangerous than regular phishing. | User types "www.mybank.com" but is redirected to "www.mybank-fake.com" due to DNS cache poisoning.                                    | Anyone using a compromised DNS server or router.              |
| Vishing           | Voice Phishing - using telephone calls (not email) to trick victims into revealing personal information. Attacker impersonates bank security, IRS/IT department, tech support.                              | No email involved - all via phone. Harder for victims to verify caller identity in real time. Uses psychological pressure.                               | "This is Microsoft Support. Your computer is sending virus alerts to our servers. I need to remotely access your computer to fix it." | Anyone with a phone - elderly population especially targeted. |
| Smishing          | SMS Phishing - phishing attacks delivered via text messages. Short URLs are common to hide destination. Mobile users are more likely to click links in SMS.                                                 | Uses mobile's smaller screen (full URL not visible), trust in SMS medium, and urgency of text messages.                                                  | "HDFC Bank: Your account is on hold. Verify: \[short URL\]"                                                                           | Mobile phone users.                                           |
| Clone Phishing    | Attacker creates a nearly identical copy of a legitimate email (that the victim actually received before) with the link replaced by a malicious one. Claims to be a "resend" due to broken link.            | Highly convincing because the format, content, and sender address look exactly like a real email the victim has received.                                | Victim received a delivery notification email → attacker clones it exactly but replaces the tracking link with malware.               | Victims of previous legitimate communications.                |
| Angler Phishing   | Phishing via social media - attacker creates fake customer service accounts for popular brands. When victims complain publicly on social media, the fake account "helps" them and asks for credentials.     | Exploits the expectation that brands monitor social media. Victim approaches the attacker thinking they found legitimate support.                        | Customer tweets "@AmazonHelp my order is wrong". Fake @AmazonHelp1 account replies: "Please DM us your account details to resolve."   | Social media users seeking customer support.                  |

_📝 EXAM TIP: PHISHING vs PHARMING distinction is a classic exam trap. Key difference: Phishing requires the victim to click a link and be DECEIVED. Pharming redirects automatically at the DNS level - victim can type the correct URL and STILL land on the fake site. No click required in pharming._

## **4.2 Identity Theft**

**Identity Theft:** The fraudulent acquisition and use of another person's private identifying information - such as name, Social Security/Aadhaar number, bank account details, credit card numbers, date of birth, or digital credentials - without their consent, typically for financial gain or to commit fraud in the victim's name.

### **4.2.1 Methods Used by Identity Thieves**

| **Method**               | **How It Works**                                                                                                                                  | **Prevention**                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Phishing                 | Deceptive emails/websites trick victims into entering credentials.                                                                                | Verify sender, check URL, never click unsolicited links.                                           |
| Data Breaches            | Attackers hack companies' databases to steal millions of users' personal records at once.                                                         | Use different passwords per site, enable breach alerts (HaveIBeenPwned).                           |
| Dumpster Diving          | Physically searching trash bins for discarded bank statements, credit card bills, medical records, tax documents.                                 | Shred all documents containing personal information before discarding.                             |
| Social Engineering       | Manipulating people through deception - impersonating HR, IT support, government officials - to get them to reveal information voluntarily.       | Verify identity of anyone requesting personal information. Never give data over unsolicited calls. |
| Skimming                 | Attaching a physical device (skimmer) to ATMs or payment terminals that reads magnetic stripe card data when cards are swiped.                    | Use chip cards, cover PIN pad, check ATMs for tampering.                                           |
| Malware/Keyloggers       | Installed software records everything typed - including passwords, card numbers, SSN.                                                             | Use antivirus, update OS, avoid suspicious downloads.                                              |
| Mail Theft               | Physically stealing mail containing credit card statements, bank documents, new credit cards.                                                     | Use a locked mailbox, opt for electronic statements.                                               |
| Account Takeover         | Using stolen credentials to access and take over existing accounts - then changing contact details so the victim can't recover access.            | Enable 2FA, use unique passwords, monitor account activity.                                        |
| Synthetic Identity Theft | Creating a new false identity by combining real and fabricated information (e.g., real SSN with a fake name) - the most difficult type to detect. | Monitor credit reports for unknown accounts.                                                       |

### **4.2.2 Online Identity - What Comprises Your Digital Identity**

| **Identifier**       | **What It Is**                                                                                                             | **Risk if Stolen**                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| IP Address           | Numerical label assigned to your device on the internet - used for routing and can reveal approximate geographic location. | Location disclosure, can be used to impersonate or frame you in online activities.        |
| Cookies              | Small text files stored by websites on your browser to remember your session, preferences, and track behaviour.            | Session cookies: hijacked for account takeover. Tracking cookies: reveal browsing habits. |
| Email ID             | Your unique email address - used as primary identifier for most online accounts.                                           | Password reset attacks (attacker controls email → resets all linked accounts).            |
| Social Media Profile | Public (or semi-public) digital representation of your identity - name, photos, connections, activity.                     | Social engineering, impersonation, targeted phishing using personal details.              |
| Biometric Data       | Fingerprints, facial geometry, iris patterns - increasingly used for authentication.                                       | Cannot be changed if stolen - permanent compromise of that authentication method.         |
| Device IMEI/MAC      | Hardware identifiers for mobile devices (IMEI) and network interfaces (MAC address).                                       | Device cloning, location tracking, network access control bypass.                         |

# **UNIT 4B - Indian IT Act 2000 & Legal Framework**

_Priority: MUST DO | ★★★★★ | IT Act sections appear in EVERY year in multiple questions. This unit alone can give you 30+ marks._

## **4.3 Information Technology Act 2000 (ITA-2000)**

**Background:** The Information Technology Act, 2000 (ITA-2000) is the primary legislation in India governing electronic commerce, digital signatures, and cybercrime. It was enacted on 17 October 2000 and is based on the UNCITRAL (United Nations Commission on International Trade Law) Model Law on Electronic Commerce (1996). The Act gives legal recognition to electronic transactions and documents, and defines offences relating to computers and the internet.

### **4.3.1 Objectives of ITA-2000**

- Grant legal recognition to electronic records and digital signatures - making them legally equivalent to paper documents and handwritten signatures.
- Facilitate electronic filing of documents with government agencies and departments.
- Promote e-governance and e-commerce by creating a legal framework for digital transactions.
- Define, prohibit, and punish cybercrime - hacking, data theft, online fraud, obscene content.
- Establish the Cyber Appellate Tribunal for adjudication of cybercrime cases.
- Define the powers of law enforcement to investigate cybercrime (search, seizure, access to encrypted data).
- Address the issue of jurisdiction for offences committed using electronic means across geographical boundaries.

### **4.3.2 Scope of ITA-2000**

- Extends to the whole of India and applies to any offence committed outside India involving a computer located in India.
- Governs all electronic records, digital signatures, electronic governance, computer-related offences.
- Applies to all entities - individuals, companies, government bodies - dealing with electronic records.
- Does NOT apply to: negotiable instruments (cheques, promissory notes), power of attorney, trusts, wills, and contracts for sale of immovable property (these require physical signatures under existing law).

## **4.4 IT Act 2000 - Complete Sections Reference Table**

_Prepare this table for your exam. Examiners love questions that say "Name any two offences under IT Act and their penalties" - this table covers everything._

| **Section** | **Title / Subject Matter**                               | **What It Covers (Detail)**                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Penalty / Punishment**                                                                                                                                                                 |
| ----------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sec 43      | Damage to Computer, Computer System                      | Civil liability for unauthorised access to, downloading from, introducing a computer contaminant (virus) into, damaging, disrupting, or denying access to a computer system or network. Applies even if no criminal intent - covers negligent acts too.                                                                                                                                                                                                     | Compensation up to Rs 1 Crore to the affected person (civil remedy - not criminal imprisonment). Filed with the Adjudicating Officer.                                                    |
| Sec 43A     | Failure to Protect Data (Body Corporate)                 | Corporate entities that possess, deal, or handle "sensitive personal data or information" (SPDI) - e.g., financial data, health data - must implement reasonable security practices. Failure causing wrongful loss or gain to any person attracts liability.                                                                                                                                                                                                | Compensation - no cap specified in the Act (unlimited civil liability). Cases to be adjudicated by the Adjudicating Officer.                                                             |
| Sec 44      | Failure to Furnish Information / Document                | Failure to furnish any document, return, or report to the Controller or Certifying Authority as required by the Act, or to maintain books of account or records.                                                                                                                                                                                                                                                                                            | Penalty up to Rs 1.5 Lakh (for failure) or Rs 25,000 per day for continued failure.                                                                                                      |
| Sec 65      | Tampering with Computer Source Documents                 | Knowingly or intentionally concealing, destroying, altering, or causing another to conceal/destroy/alter the computer source code (source code, programs, computer commands) when it is required to be kept or maintained by law.                                                                                                                                                                                                                           | Imprisonment up to 3 years, or fine up to Rs 2 Lakh, or both.                                                                                                                            |
| Sec 66      | Computer-Related Offences (Hacking)                      | Any dishonest or fraudulent act in relation to any computer, computer system, or computer network - including: unauthorised access, introducing virus/malware, causing damage, disrupting services, denying access. Essentially the criminal version of Sec 43 (requires dishonest/fraudulent intent).                                                                                                                                                      | Imprisonment up to 3 years, or fine up to Rs 5 Lakh, or both. Cognisable and bailable offence.                                                                                           |
| Sec 66A     | Offensive Messages (Struck Down)                         | Sending grossly offensive, menacing, or false messages for annoyance/inconvenience electronically. NOTE: This section was struck down as unconstitutional by the Supreme Court in Shreya Singhal v. Union of India (2015) - it violated Article 19(1)(a) freedom of speech.                                                                                                                                                                                 | STRUCK DOWN - no longer valid law. Cannot be used to prosecute anyone.                                                                                                                   |
| Sec 66B     | Receiving Stolen Computer Resources                      | Dishonestly receiving or retaining any stolen computer resource or communication device knowing or having reason to believe it is stolen - equivalent of receiving stolen property for digital assets.                                                                                                                                                                                                                                                      | Imprisonment up to 3 years, or fine up to Rs 1 Lakh, or both.                                                                                                                            |
| Sec 66C     | Identity Theft                                           | Fraudulently or dishonestly making use of the electronic signature, password, or any other unique identification feature of any other person. This is the primary identity theft provision in Indian cyber law.                                                                                                                                                                                                                                             | Imprisonment up to 3 years AND fine up to Rs 1 Lakh (both mandatory).                                                                                                                    |
| Sec 66D     | Cheating by Personation Using Computer                   | Cheating someone by impersonating another person using a computer resource or communication device - creating a fake online identity to deceive.                                                                                                                                                                                                                                                                                                            | Imprisonment up to 3 years AND fine up to Rs 1 Lakh (both mandatory).                                                                                                                    |
| Sec 66E     | Violation of Privacy                                     | Intentionally capturing, publishing, or transmitting images of a person's private areas without their consent under circumstances violating privacy.                                                                                                                                                                                                                                                                                                        | Imprisonment up to 3 years OR fine up to Rs 2 Lakh, or both.                                                                                                                             |
| Sec 66F     | Cyber Terrorism                                          | Intentional acts that threaten the unity, integrity, security, or sovereignty of India by denying access to authorised personnel, or attempting to penetrate critical information infrastructure (power grids, banks, defence systems), or introducing contaminants with intent to cause deaths, injury, or destruction.                                                                                                                                    | Imprisonment for life. This is the most severe penalty in the IT Act.                                                                                                                    |
| Sec 67      | Publishing Obscene Material                              | Publishing or transmitting any material in electronic form which is lascivious or which appeals to prurient interest or if its effect tends to deprave and corrupt persons who are likely to read, see, or hear the matter.                                                                                                                                                                                                                                 | First conviction: imprisonment up to 3 years + fine up to Rs 5 Lakh. Subsequent conviction: imprisonment up to 5 years + fine up to Rs 10 Lakh.                                          |
| Sec 67A     | Publishing Sexually Explicit Material                    | Publishing or transmitting material containing sexually explicit acts or conduct in electronic form.                                                                                                                                                                                                                                                                                                                                                        | First conviction: imprisonment up to 5 years + fine up to Rs 10 Lakh. Subsequent: imprisonment up to 7 years + fine up to Rs 10 Lakh.                                                    |
| Sec 67B     | Child Pornography                                        | Publishing, transmitting, or browsing material depicting children in sexually explicit situations in electronic form. Also includes inducing children into online relationships for sexual purposes.                                                                                                                                                                                                                                                        | First conviction: imprisonment up to 5 years + fine up to Rs 10 Lakh. Subsequent: imprisonment up to 7 years + fine up to Rs 10 Lakh. Very serious - POCSO Act may also apply.           |
| Sec 69      | Power of Government to Issue Directions for Interception | Central/State Government may direct any government agency to intercept, monitor, or decrypt any information transmitted through any computer resource - in the interest of sovereignty, integrity, security of India, friendly relations, public order, or preventing incitement of cognisable offences.                                                                                                                                                    | Failure to comply by intermediary: imprisonment up to 7 years AND fine.                                                                                                                  |
| Sec 69A     | Power to Block Public Access to Information              | Central Government can direct intermediaries to block access to any information in the interest of sovereignty, security, public order, decency, morality, or to prevent incitement. (Used for blocking websites, social media content).                                                                                                                                                                                                                    | Non-compliance by intermediary: imprisonment up to 7 years AND fine.                                                                                                                     |
| Sec 70      | Protected Systems                                        | The Government may declare certain computer systems as "Protected Systems" (power plants, banks, defence networks, government databases). Unauthorised access to or attempted access to a protected system is a very serious offence.                                                                                                                                                                                                                       | Imprisonment up to 10 years AND fine. One of the most severe penalties in ITA-2000.                                                                                                      |
| Sec 72      | Breach of Confidentiality and Privacy by Officers        | Any person who - having secured access to electronic records, books, registers, documents under any power conferred by the Act - discloses that information to any other person without the consent of the person concerned.                                                                                                                                                                                                                                | Imprisonment up to 2 years, or fine up to Rs 1 Lakh, or both.                                                                                                                            |
| Sec 72A     | Disclosure in Breach of Lawful Contract                  | Any person including an intermediary who, while providing services under a lawful contract, discloses (without consent or in breach of contract) personal information of another person with the intent to cause wrongful loss or gain.                                                                                                                                                                                                                     | Imprisonment up to 3 years, or fine up to Rs 5 Lakh, or both.                                                                                                                            |
| Sec 79      | Intermediary Liability Safe Harbour                      | An intermediary (ISP, web host, search engine, social media platform) shall NOT be held liable for any third-party information hosted on its platform IF: (1) its role is only technical/automatic/passive - it does not initiate transmission or select receiver or modify data; AND (2) it observes due diligence and follows Government guidelines; AND (3) upon actual knowledge or government notification, it expeditiously removes unlawful content. | This is a safe harbour / exemption provision. Loss of immunity if the intermediary conspires, aids, or abets the offence. Applies to companies like Google, Facebook, WhatsApp in India. |
| Sec 80      | Police Power to Enter and Search                         | Any police officer (not below rank of Inspector) or other officer authorised by Central/State Government may enter, search, arrest without a warrant any person reasonably suspected of committing or about to commit an offence under the IT Act.                                                                                                                                                                                                          | Not a penalty section - grants investigative power to police for cybercrime.                                                                                                             |
| Sec 84A     | Encryption Standards                                     | Central Government shall prescribe the modes or methods of encryption for the electronic world - to ensure standardised, approved encryption for protecting information.                                                                                                                                                                                                                                                                                    | Not a penalty section - regulatory provision.                                                                                                                                            |
| Sec 85      | Offences by Companies                                    | Where an offence is committed by a company, the person responsible for the conduct of the business (Director, Manager, Secretary) at the time of the offence shall be deemed guilty and liable, unless they prove the offence was without their knowledge or they exercised due diligence.                                                                                                                                                                  | Same punishment as for the individual offence.                                                                                                                                           |

## **4.5 IT Amendment Act 2008 - Key Changes**

**Background:** The IT (Amendment) Act 2008 was passed in December 2008, just weeks after the Mumbai 26/11 terrorist attacks - which had demonstrated the need for stronger cyber law provisions, particularly around cyberterrorism and interception. It came into force on 27 October 2009.

| **What Changed**          | **Old Position (2000)**                                    | **New Position After Amendment (2008)**                                                                                                                            |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cyberterrorism            | Not defined or specifically addressed.                     | Section 66F added - defines and criminalises cyberterrorism with punishment of imprisonment for life.                                                              |
| Data Protection           | No corporate data protection liability.                    | Section 43A added - body corporates liable for failure to protect sensitive personal data.                                                                         |
| Privacy                   | Limited provisions.                                        | Sections 66E (violation of privacy - image capture) and 72A (disclosure in breach of contract) added.                                                              |
| Blocking Powers           | Limited government power.                                  | Section 69A strengthened - Central Government can order blocking of websites/content for broad grounds.                                                            |
| Interception Powers       | Section 69 existed but limited.                            | Sections 69, 69B strengthened - monitoring of traffic data in addition to content.                                                                                 |
| Intermediary Liability    | Not clearly defined.                                       | Section 79 overhauled - safe harbour protection for intermediaries with clear conditions and due diligence requirements.                                           |
| New offences              | Covered mainly hacking and fraud.                          | Added 66B (receiving stolen devices), 66C (identity theft), 66D (cheating by impersonation), 66F (cyberterrorism), 67A, 67B (child pornography).                   |
| Controller role           | Controller of Certifying Authorities had wide powers.      | Role of Controller reduced; much authority shifted to CERT-In (Indian Computer Emergency Response Team).                                                           |
| Adjudication              | Adjudicating Officers could handle cases up to Rs 5 Crore. | Jurisdiction expanded; cases above Rs 5 Crore sent to High Court.                                                                                                  |
| Body corporate definition | Not defined.                                               | Explicitly defined as "any company and includes a firm, sole proprietorship or other association of individuals engaged in commercial or professional activities." |

## **4.6 Cyber Appellate Tribunal (CAT)**

**Cyber Appellate Tribunal (CAT):** A quasi-judicial body established under Section 48 of the IT Act 2000 to hear appeals against orders made by the Adjudicating Officers appointed under the Act. It functions as a specialist court for cybercrime civil matters.

| **Aspect**                      | **Details**                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Established under               | Section 48, IT Act 2000                                                                                                                                  |
| Constitution                    | Presiding Officer + two other members appointed by Central Government.                                                                                   |
| Presiding Officer qualification | A person who is or has been a High Court Judge, or a person with a judicial background appointed by Central Government.                                  |
| Jurisdiction                    | Appeals against orders of Adjudicating Officers under the IT Act. Civil matters involving compensation claims, licence revocations.                      |
| Powers                          | Same powers as a Civil Court under CPC (Code of Civil Procedure) - summoning witnesses, receiving evidence, issuing commissions. Can award compensation. |
| Appeals against CAT             | A High Court.                                                                                                                                            |
| Time limit for filing appeal    | 45 days from the date of Adjudicating Officer's order (extendable for sufficient cause).                                                                 |
| Procedure                       | No specific procedure - Tribunal determines its own procedure within framework of the Act.                                                               |

## **4.7 Jurisdiction in Cyberspace**

**Jurisdiction:** The legal authority of a court or state to hear and decide a case. In traditional law, jurisdiction is territorial. In cyberspace, it becomes extremely complex because crimes can be committed from one country, through servers in a second country, against victims in a third country.

### **4.7.1 Indian Jurisdiction (IT Act Section 1(2) & 75)**

- The IT Act applies to the whole of India.
- Section 75: The Act also applies to any offence or contravention committed OUTSIDE India by any person IF the act involves a computer, computer system, or computer network located in India.
- This is extra-territorial jurisdiction - India can prosecute a foreign citizen who hacks an Indian server even if they are physically in another country.

### **4.7.2 International Jurisdiction Challenges**

| **Challenge**          | **Explanation**                                                                                                                                | **Example**                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Multiple jurisdictions | A crime may satisfy the definition of a criminal act in several countries simultaneously - each country may claim jurisdiction.                | Attacker in Russia hacks a US company's server hosted in Singapore, targeting an Indian customer. |
| No jurisdiction        | Some countries have no cybercrime laws - providing a "safe haven" for attackers.                                                               | Attacker operates from a country with no extradition treaty and no cybercrime law.                |
| Conflict of laws       | What is legal in one country may be illegal in another - e.g., content regulation varies widely.                                               | Content legal in the US may violate obscenity laws in India.                                      |
| Evidence collection    | Digital evidence is volatile and may be stored on servers in foreign countries - requiring mutual legal assistance treaties (MLATs) to access. | Logs proving a crime are stored on a server in the EU - Indian police need MLAT to obtain them.   |
| Extradition gaps       | If a cybercriminal is in a country with no extradition treaty with India, prosecution is practically impossible.                               | Major cybercriminals have historically operated from countries without extradition arrangements.  |

# **UNIT 4C - Digital Signatures & Public Key Infrastructure (PKI)**

_Priority: MUST DO | ★★★★★ | Full 15-mark questions in 2023 and 2025. Diagram alone = 7-10 marks._

## **4.8 Asymmetric Cryptography - The Foundation**

**Asymmetric Cryptography (Public Key Cryptography):** A cryptographic system that uses a mathematically linked pair of keys - a Public Key and a Private Key. Data encrypted with one key can ONLY be decrypted with the other key of the same pair. The public key is shared openly; the private key is kept secret by its owner.

| **Concept**             | **Encryption**                                                                    | **Digital Signature**                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Purpose                 | Ensure CONFIDENTIALITY - only the intended recipient can read the message.        | Ensure AUTHENTICATION + INTEGRITY - prove who sent the message and that it was not altered. |
| Sender uses             | Recipient's PUBLIC key to encrypt.                                                | Own PRIVATE key to sign.                                                                    |
| Recipient uses          | Own PRIVATE key to decrypt.                                                       | Sender's PUBLIC key to verify.                                                              |
| Who can encrypt?        | Anyone with the recipient's public key.                                           | Only the sender (who has their own private key).                                            |
| Who can decrypt/verify? | Only the recipient (with their private key).                                      | Anyone (with the sender's public key).                                                      |
| Key principle           | Only the private key holder can decrypt what was encrypted with their public key. | Only the private key holder could have created the signature - so it proves identity.       |

## **4.9 Digital Signatures - Complete Understanding**

**Digital Signature:** An electronic equivalent of a handwritten signature or a seal - it mathematically binds a document to the identity of the signer and provides proof that the document has not been altered since it was signed. In India, digital signatures are legally recognised under Section 3 of the IT Act 2000.

### **4.9.1 How Digital Signatures Work - Step by Step**

SIGNING PROCESS (Sender side):

- Step 1: Sender has the original message/document they want to sign.
- Step 2: A HASH function (e.g., SHA-256) is applied to the entire message. This produces a fixed-length "message digest" - a unique fingerprint of the document. Any change to even one character changes the hash completely.
- Step 3: The sender encrypts the hash using their own PRIVATE KEY. This encrypted hash is the Digital Signature.
- Step 4: Sender transmits: Original Message + Digital Signature (+ optionally, their Digital Certificate).

VERIFICATION PROCESS (Receiver side):

- Step 5: Receiver gets the message + digital signature.
- Step 6: Receiver applies the SAME hash function to the received message → produces a new hash.
- Step 7: Receiver decrypts the Digital Signature using the Sender's PUBLIC KEY → this reveals the original hash that the sender computed.
- Step 8: Receiver COMPARES the two hashes: (a) hash they computed from the received message, and (b) hash extracted from the signature. If they MATCH → signature is valid - message is authentic and unaltered. If they DON'T MATCH → message was tampered with, or the signature is forged.

| **Property Guaranteed**          | **How Digital Signatures Provide It**                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication                   | Only the holder of the private key can create the signature - so a valid signature proves the message came from that specific sender.                      |
| Integrity                        | The hash function detects any modification to the message - even a single bit change produces a completely different hash, invalidating the signature.     |
| Non-repudiation                  | The sender cannot later deny sending the message - because only they have the private key that created the signature. This is a legally binding guarantee. |
| Does NOT provide Confidentiality | Digital signatures do not encrypt the message itself - anyone can read the original message. For confidentiality, use encryption separately.               |

**Non-repudiation:** A security property that prevents a party from denying a previous action or commitment. In digital signatures: the sender cannot deny having sent the message because the signature was created with their private key - which only they possess. This is critical in e-commerce contracts and electronic transactions.

## **4.10 Digital Certificates & Certificate Authorities**

**Digital Certificate (Public Key Certificate):** An electronic credential issued by a trusted third party (Certificate Authority) that binds a person's or organisation's identity to their public key. It serves as a digital "passport" - providing assurance that the public key truly belongs to the stated identity.

### **4.10.1 Contents of a Digital Certificate (X.509 Standard)**

| **Field**               | **What It Contains**                                                                                                                              | **Purpose**                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Version                 | X.509 version number (currently v3).                                                                                                              | Identifies the certificate format.                                                            |
| Serial Number           | Unique number assigned by the CA to this specific certificate.                                                                                    | Used for identification and revocation tracking.                                              |
| Signature Algorithm     | Algorithm used by the CA to sign the certificate (e.g., SHA256WithRSA).                                                                           | Tells recipient how to verify the CA's signature.                                             |
| Issuer                  | Distinguished name of the Certificate Authority that issued the certificate.                                                                      | Identifies who vouches for this certificate.                                                  |
| Validity Period         | Not Before date + Not After date - the period during which the certificate is valid.                                                              | Certificate is only trusted within this time window.                                          |
| Subject                 | Distinguished name of the entity (person, server, organisation) the certificate belongs to.                                                       | Identifies who this certificate represents.                                                   |
| Subject Public Key Info | The actual public key belonging to the subject + algorithm used.                                                                                  | The core information - the public key users will use to verify signatures or encrypt.         |
| Extensions (v3)         | Key Usage (sign, encrypt, certify), Subject Alternative Names (SANs - other names/domains), Basic Constraints (is this a CA cert or end-entity?). | Fine-grained control over how the certificate may be used.                                    |
| CA's Digital Signature  | The CA's own signature over all the above fields - created with the CA's private key.                                                             | Proves authenticity - anyone with the CA's public key can verify this certificate is genuine. |

### **4.10.2 Certificate Authority (CA)**

**Certificate Authority (CA):** A trusted third-party organisation that verifies the identity of entities (individuals, servers, organisations) and issues digital certificates binding their identity to their public key. The CA is the "trust anchor" of the PKI system - its trustworthiness is what makes the entire system work.

How CA issuance works:

- Step 1: Applicant generates their public-private key pair locally. Private key NEVER leaves their system.
- Step 2: Applicant creates a Certificate Signing Request (CSR) containing their public key and identity information, signed with their private key.
- Step 3: Applicant submits CSR to the CA.
- Step 4: CA verifies the applicant's identity (methods vary: domain validation, organisation validation, extended validation).
- Step 5: CA signs the certificate with its own private key - binding the applicant's public key to their verified identity.
- Step 6: CA issues the signed digital certificate to the applicant.

| **CA Type**                 | **Validation Level** | **What is Verified**                                                                  | **Use Case**                                                                             |
| --------------------------- | -------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Domain Validated (DV)       | Basic                | Only that the applicant controls the domain name. No identity verification.           | Basic HTTPS for personal websites, blogs.                                                |
| Organisation Validated (OV) | Medium               | Domain control + legal existence of the organisation.                                 | Business websites, corporate servers.                                                    |
| Extended Validation (EV)    | Highest              | Domain control + detailed verification of legal, physical, and operational existence. | Banking, e-commerce, high-trust websites - shown with green bar/company name in browser. |

**Indian CAs under ITA-2000:** The Controller of Certifying Authorities (CCA) is the root CA in India, established under Section 17 of the IT Act. Licensed CAs in India include: National Informatics Centre (NIC), IDRBT (RBI), SafeScrypt (Sify), TCS CA, MTNL Trust Line, Code Solutions, e-Mudhra.

### **4.10.3 Certificate Revocation List (CRL)**

**Certificate Revocation List (CRL):** A list maintained and periodically published by a Certificate Authority that identifies all digital certificates that have been revoked (invalidated) before their scheduled expiry date. Anyone relying on a digital certificate must check the CRL to ensure the certificate has not been revoked.

Why certificates are revoked (before expiry):

- Private key compromise - if the private key is stolen or leaked, the certificate is immediately useless for trust.
- Change of affiliation - employee leaves the organisation; the certificate tied to their role must be revoked.
- CA compromise - if the CA itself is hacked, all certificates it issued may need revocation.
- Incorrect information - if the certificate contained wrong details (wrong name, wrong key).
- Superseded - replaced by a newer certificate with better key length.

_Modern alternative to CRL: OCSP (Online Certificate Status Protocol) - allows real-time, on-demand checking of a single certificate's status rather than downloading the entire CRL list. Faster and more current._

## **4.11 Public Key Infrastructure (PKI)**

**Public Key Infrastructure (PKI):** A comprehensive framework of hardware, software, people, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. PKI is the backbone that makes secure internet communication (HTTPS, email encryption, digital signatures) work at scale.

### **4.11.1 PKI Components**

| **Component**                     | **Role**                                                                                                                                                                                                       | **Analogy**                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Root CA (Certification Authority) | The top-level, ultimate trust anchor. Issues certificates to Intermediate CAs. Its own certificate is self-signed. Typically kept offline for security.                                                        | The government - the source of all authority.                              |
| Intermediate CA (Subordinate CA)  | Intermediate layer of trust between Root CA and end-users. Issues certificates to Registration Authorities and end-entities. If compromised, only its sub-certificates need revocation - root CA is protected. | A licensed notary office authorised by the government.                     |
| Registration Authority (RA)       | Verifies the identity of certificate applicants on behalf of the CA. Forwards validated requests to the CA for certificate issuance. Does NOT issue certificates directly.                                     | The clerk who checks your ID documents before forwarding to the authority. |
| Certificate Repository            | A publicly accessible database/directory (e.g., LDAP) where issued certificates are stored and can be retrieved by anyone wanting to verify a signature.                                                       | The public phone book - anyone can look up your entry.                     |
| Certificate Revocation List (CRL) | Published list of revoked certificates. Checked during certificate verification.                                                                                                                               | Blacklist of revoked driving licences.                                     |
| End Entity (Subscriber)           | The final user of the certificate - the individual, server, or device whose identity the certificate vouches for.                                                                                              | The person or business with the identity document.                         |
| Relying Party                     | Any person or system that uses a certificate (and trusts the CA) to verify a signature or encrypt data.                                                                                                        | A shopkeeper who verifies the customer's ID.                               |

### **4.11.2 Advantages of Digital Certificates**

- Authentication: Provides cryptographically strong proof of identity - cannot be forged without the CA's private key.
- Non-repudiation: Signer cannot deny having signed - creating accountability in digital transactions.
- Integrity: Any tampering with a signed document invalidates the signature - detected immediately.
- Trust scalability: The CA model allows millions of entities to establish trust without having to meet each other personally.
- Legal recognition: In India, digital signatures are legally valid under IT Act 2000 - equivalent to handwritten signatures.
- Efficiency: Eliminates the need for physical document signing, courier, and notarisation for many business processes.

### **4.11.3 Limitations of Digital Certificates**

- Depends on CA trustworthiness: If a CA is compromised or corrupt, all certificates it issues are untrustworthy. DigiNotar (2011) is a famous example - a CA was hacked and issued fraudulent Google certificates, eventually leading to its collapse.
- Key management burden: Private keys must be kept absolutely secret. If lost or stolen, the certificate is useless. Key backup and recovery adds complexity.
- Certificate management overhead: Certificates expire and must be renewed; revocation must be checked; CRL/OCSP infrastructure must be maintained.
- Cost: Certificates (especially OV and EV) cost money - creating a barrier for small entities, though DV certificates are now free (Let's Encrypt).
- Complexity: PKI is a complex system - improper implementation defeats all security guarantees.
- No protection against compromised endpoints: If the recipient's device is infected with malware, the attacker can read decrypted data before encryption or after decryption - PKI doesn't help here.

# **UNIT 4D - Cyber Ethics, Cyberspace & Related Concepts**

_Priority: HIGH (2025 introduced full 15-mark cluster) | ★★★ - High repeat chance in 2026_

## **4.12 Cyber Ethics**

**Cyber Ethics:** A branch of ethics that addresses the moral issues, standards of behaviour, and codes of conduct related to the use of computers, the internet, and digital technology. It asks: "What is right and wrong behaviour in cyberspace?" - going beyond what is merely legal to what is morally responsible.

Cyber ethics covers the responsibilities of:

- Individual users - how they treat others online, respect for privacy, intellectual property.
- Software developers - security, privacy by design, responsible disclosure of vulnerabilities.
- Organisations - data protection, employee monitoring, corporate cybersecurity responsibility.
- Governments - surveillance, censorship, cyber warfare norms.

### **4.12.1 The Four Ethical Issues - PAPA Framework**

The PAPA framework (proposed by Richard O. Mason, 1986) identifies four core ethical issues in the information age:

| **Issue** | **Full Concept** | **Definition**                                                                                                                                                                   | **Examples of Ethical Violations**                                                                                                                                 | **Cyber Ethics Principle**                                                                                 |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| P         | Privacy          | The right of individuals to control information about themselves - what information is collected, how it is stored, who can access it, and how it is used.                       | Collecting user data without consent (Cambridge Analytica scandal). Tracking location without knowledge. Selling personal data to advertisers.                     | Collect only necessary data. Be transparent. Obtain informed consent. Protect stored personal information. |
| A         | Accuracy         | The responsibility to ensure that information is correct, reliable, and accessible to those who need it - and that those affected by incorrect information have recourse.        | Spreading misinformation/fake news online. Providing inaccurate medical information. Credit agencies with incorrect records affecting loan applications.           | Verify information before sharing. Correct errors promptly. Attribute information to accurate sources.     |
| P         | Property         | Respect for intellectual property rights - who owns digital information, who can access it, who can profit from it, and what is fair use.                                        | Software piracy - copying software without licence. Plagiarising content from websites. Illegally distributing copyrighted music, movies, books.                   | Respect copyright, licences, and fair use. Credit creators. Do not pirate software or media.               |
| A         | Accessibility    | The right of every person to access information and digital technology - addressing the digital divide and ensuring information systems are not used to discriminate or exclude. | Building apps inaccessible to persons with disabilities. Restricting internet access to silence political opposition. Paywalling essential government information. | Design inclusive technology. Promote digital literacy. Do not use technology to discriminate or exclude.   |

### **4.12.2 Why It Is Necessary to Practice Cyber Ethics**

Cyber ethics is not just a theoretical concept - it has real-world impact:

| **Reason**                                             | **Explanation**                                                                                                                                                                                                                                           |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technology amplifies harm                              | One unethical act online can harm millions in seconds - misinformation spreads virally, a single data breach exposes millions of records, a malware campaign can cripple global infrastructure. The scale of digital harm far exceeds traditional crimes. |
| Anonymity tempts unethical behaviour                   | The internet provides a degree of anonymity that people exploit to behave in ways they never would in person - trolling, harassment, piracy, fraud. Cyber ethics creates self-governance norms.                                                           |
| Law cannot cover everything                            | Laws lag behind technology. Behaviour that is legal but unethical (like invasive data collection within GDPR loopholes) requires ethical frameworks to guide conduct where law is silent.                                                                 |
| Protects vulnerable populations                        | Children, elderly, and digitally illiterate people are disproportionately targeted. Cyber ethics creates community obligations to protect the vulnerable.                                                                                                 |
| Enables trust in digital systems                       | E-commerce, e-governance, digital banking - all depend on user trust. Ethical behaviour by individuals and organisations is what makes this trust possible. Without ethics, digital society collapses into paranoia.                                      |
| Professional responsibility                            | IT professionals have access to sensitive systems, data, and infrastructure. Unethical use of this access - even if not illegal - can cause massive harm. Professional codes of ethics (ACM Code, IEEE) set standards.                                    |
| Global interconnection creates global responsibilities | An action taken in one country affects users globally. Cyber ethics provides a universal framework for responsibility that transcends national laws.                                                                                                      |

## **4.13 Cyberspace vs Cyber Ethics vs Cybercrime - Distinguish All Three**

| **Concept**  | **Definition**                                                                                                                                                 | **Scope**                                                                                                      | **Governed By**                                                                                                       | **Example**                                                                                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cyberspace   | The virtual environment created by interconnected computer networks and the internet - the "space" in which digital communication, commerce, and crime occurs. | Neutral - the domain/medium itself. Neither good nor bad - just the environment.                               | Technical standards (TCP/IP, IANA, ICANN). No single governing authority - distributed governance.                    | The internet itself. Every time you browse, send email, or make an online payment, you are operating in cyberspace.                                                                                     |
| Cyber Ethics | Moral principles and codes of responsible behaviour in cyberspace - defining right and wrong conduct beyond what is merely legal.                              | Normative - concerned with SHOULD and SHOULD NOT. Broader than law - covers legal but unethical behaviour too. | No enforcement mechanism - voluntary adherence. Professional codes (ACM, IEEE). Social norms and community standards. | Not sharing someone's private photos even if they sent them to you privately. Giving credit for online content you use. Disclosing a security vulnerability to the developer rather than exploiting it. |
| Cybercrime   | Criminal activity where a computer or network is used as a tool, target, or place of crime - acts that violate cybercrime laws.                                | Punitive - concerned with IS and IS NOT legal. Narrow - only covers acts defined as crimes in law.             | IT Act 2000 (India), IPC, POCSO, Copyright Act. Enforced by police, courts, and cybercrime cells.                     | Hacking into a bank's server. Sending ransomware. Posting child pornography online. Identity theft.                                                                                                     |

**Key Relationship:** Cyberspace is the MEDIUM. Cyber Ethics defines the right BEHAVIOUR within it. Cybercrime is the LEGAL VIOLATION that occurs when conduct crosses beyond unethical into criminal. All cybercrimes are cyber ethics violations, but not all cyber ethics violations are cybercrimes.

## **4.14 Cybersecurity as Integral to Personal Daily Life**

Cybersecurity is no longer just a corporate IT concern - every individual faces cyber risks in daily life:

| **Daily Activity**          | **Cyber Risk**                                            | **Personal Cybersecurity Measure**                                                                        |
| --------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Online banking and payments | Credential phishing, session hijacking, card skimming.    | Use official bank app only, enable 2FA, check for HTTPS, use virtual card numbers for online shopping.    |
| Social media                | Privacy leakage, account takeover, social engineering.    | Strong unique password, 2FA, review app permissions, adjust privacy settings.                             |
| Email                       | Phishing, malware attachments, business email compromise. | Don't click unexpected links, verify sender, use spam filters, report phishing.                           |
| Public Wi-Fi usage          | MITM attacks, packet sniffing, rogue hotspots.            | Use VPN on public Wi-Fi, avoid accessing sensitive accounts, verify hotspot name.                         |
| Mobile apps                 | Excessive permissions, spyware, data harvesting.          | Install from official stores only, review permissions, keep OS updated.                                   |
| Online shopping             | Fake websites, card fraud, counterfeit products.          | Buy only from known/reputable sites, look for HTTPS + padlock, use credit card (better fraud protection). |
| Cloud storage               | Data breach, account compromise.                          | Strong password, 2FA, don't store sensitive unencrypted data in cloud.                                    |

## **4.15 Cyber Squatting**

**Cyber Squatting (Domain Squatting):** The practice of registering, trafficking in, or using a domain name with the bad-faith intent to profit from the goodwill of a trademark or famous brand belonging to someone else. The cybersquatter registers a domain that a company or person would logically want (e.g., amazonshop.com) and then extorts money to transfer it, or uses it for phishing.

Types of cybersquatting:

- Classic squatting: Registering the exact name of a famous brand - hoping the brand will pay for it.
- Typosquatting: Registering common misspellings (googel.com, amzon.com) to capture traffic from typos.
- Look-alike squatting: Domains visually similar to targets (using alternative TLDs - amazon.net vs amazon.com).
- Reverse cybersquatting: A large company falsely claiming a legitimate domain owner is cybersquatting to steal their domain.

**UDRP (Uniform Domain-Name Dispute-Resolution Policy):** An ICANN-administered international process for resolving domain name disputes. A trademark owner can file a complaint against a domain name registrant if: (1) the domain is identical/confusingly similar to their mark; (2) the registrant has no legitimate rights to the name; and (3) the domain was registered in bad faith. Disputes are resolved by WIPO (World Intellectual Property Organization) arbitration panels.

**Indian legal position:** Cybersquatting can be addressed under the Trade Marks Act 1999 (trademark infringement), the IT Act 2000 (if used for fraudulent purposes), and ICANN's UDRP. Indian courts have awarded domain transfers in favour of trademark owners - e.g., Yahoo! Inc. v. Akash Arora & Anr. (1999) - first Indian cybersquatting case.

## **4.16 Electronic Evidence**

**Electronic Evidence:** Any information stored or transmitted in binary/electronic form that may be relied on in court as evidence. This includes emails, text messages, CCTV footage, server logs, social media posts, deleted files recovered by forensics, metadata, and any other data generated by electronic devices.

### **4.16.1 Section 65B - Admissibility of Electronic Evidence**

**Section 65B, Indian Evidence Act 1872** (as amended) provides the conditions under which electronic records are admissible in court. An electronic record produced from a computer is admissible as evidence (without calling the original source) IF a certificate is provided by a responsible official certifying that:

- The electronic record was produced by a computer that was in regular use for lawful activities.
- Information of the kind contained in the record was regularly fed into the computer.
- The computer was operating properly throughout the relevant period.
- The electronic record reproduces the content derived from the information fed into the computer.

_The Supreme Court in Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) ruled that the Section 65B certificate is mandatory for admissibility of electronic evidence - no certificate = evidence not admissible._

## **4.17 Cyber Terrorism**

**Cyber Terrorism:** The use of computer systems and the internet to conduct attacks against critical national infrastructure, government systems, financial systems, or to create widespread fear or disruption for ideological, political, or religious motivations. It is the digital equivalent of physical terrorism.

Cyber terrorism under Indian Law - Section 66F ITA-2000:

- Denying access to authorised personnel to critical information systems.
- Attempting to penetrate government or critical infrastructure systems with intent to cause fear or disruption.
- Introducing malware into critical systems.
- Stealing classified information for use against India.

**Punishment:** Imprisonment for LIFE - the most severe penalty in the IT Act.

| **Real-World Examples**          | **Country Targeted** | **What Happened**                                                                                                                                                                                          |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stuxnet (2010)                   | Iran                 | A sophisticated worm (widely attributed to US/Israel) destroyed approximately 1,000 centrifuges at Iran's Natanz nuclear facility by making them spin at abnormal speeds while reporting normal operation. |
| Ukraine Power Grid Attack (2015) | Ukraine              | Russian hackers (BlackEnergy group) caused a power blackout affecting 230,000 customers in Ukraine - first confirmed cyberattack to cause a power outage.                                                  |
| Bangladesh Bank Heist (2016)     | Bangladesh           | Hackers compromised Bangladesh Bank's SWIFT credentials and attempted to steal \$951 million from the Federal Reserve Bank of New York. \$81 million was successfully stolen.                              |
| WannaCry (2017)                  | Global               | North Korea-linked ransomware attacked 200,000+ systems in 150 countries, crippling UK's NHS, Spanish Telefonica, and many others.                                                                         |

# **Master Acronym Reference - Cyber Law & Ethics**

_All short forms from the subject - sorted alphabetically. Use this for Group A fill-in-the-blank questions._

| **Acronym** | **Full Form**                                         | **One-Line Definition**                                                                                                         |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 2FA / MFA   | Two-Factor / Multi-Factor Authentication              | Requires two or more verification factors to authenticate - reduces risk even if password is stolen.                            |
| AES         | Advanced Encryption Standard                          | Current industry-standard symmetric block cipher - uses 128, 192, or 256-bit keys. Replaced DES.                                |
| BIOS        | Basic Input/Output System                             | Firmware embedded in a motherboard that initialises hardware components during the boot sequence.                               |
| CA          | Certificate Authority (Certifying Authority in India) | Trusted third party that issues and manages digital certificates, binding identities to public keys.                            |
| CAT         | Cyber Appellate Tribunal                              | Quasi-judicial body under IT Act 2000 that hears appeals against Adjudicating Officers' orders.                                 |
| CERT-In     | Indian Computer Emergency Response Team               | National nodal agency for responding to cybersecurity incidents in India. Operates under MeitY.                                 |
| CRL         | Certificate Revocation List                           | Published list of digital certificates revoked by a CA before their expiry date.                                                |
| CSR         | Certificate Signing Request                           | A message sent to a CA to apply for a digital certificate - contains the applicant's public key and identity.                   |
| DDoS        | Distributed Denial of Service                         | A DoS attack launched from thousands of compromised machines (botnet) simultaneously against one target.                        |
| DES         | Data Encryption Standard                              | Legacy symmetric-key block cipher using a 56-bit key - now considered insecure; replaced by AES.                                |
| DNS         | Domain Name System                                    | Translates human-readable domain names (google.com) into machine-readable IP addresses.                                         |
| DoS         | Denial of Service                                     | Attack that overwhelms a target with traffic from a single source - denying legitimate users access.                            |
| HIDS        | Host Intrusion Detection System                       | Security tool that monitors a specific host machine's logs, processes, and file integrity for intrusion signs.                  |
| IPC         | Indian Penal Code                                     | India's primary criminal code - applies alongside IT Act for many cybercrimes (fraud, stalking, defamation).                    |
| ITA-2000    | Information Technology Act, 2000                      | India's primary cyber law governing electronic commerce, digital signatures, and cybercrime penalties.                          |
| MDM         | Mobile Device Management                              | Enterprise software to manage, monitor, and remotely wipe corporate mobile devices.                                             |
| MITM        | Man-in-the-Middle Attack                              | Attacker secretly intercepts and potentially alters communication between two parties who think they're communicating directly. |
| NIDS        | Network Intrusion Detection System                    | Security tool that inspects network traffic across an entire network segment to detect malicious behaviour.                     |
| OCSP        | Online Certificate Status Protocol                    | Real-time protocol for checking a specific certificate's revocation status - more efficient than downloading the full CRL.      |
| OTP         | One-Time Password                                     | A single-use temporary password valid for one transaction or login session - used for 2FA.                                      |
| P2P         | Peer-to-Peer                                          | Direct communication/transaction between two individuals without an institutional intermediary.                                 |
| PAPA        | Privacy, Accuracy, Property, Accessibility            | Richard Mason's four ethical issues framework for information ethics.                                                           |
| PKI         | Public Key Infrastructure                             | Complete framework of hardware, software, people, policies for creating, managing, and revoking digital certificates.           |
| RA          | Registration Authority                                | Entity that verifies applicant identity on behalf of a CA before certificate issuance.                                          |
| RSA         | Rivest-Shamir-Adleman                                 | Widely used asymmetric cryptographic algorithm based on the difficulty of factoring large prime numbers.                        |
| SET         | Secure Electronic Transaction                         | Legacy protocol for securing credit card payments - uses digital certificates to authenticate all parties.                      |
| SHA         | Secure Hash Algorithm                                 | Cryptographic hash function family (SHA-1, SHA-256, SHA-3) used for digital signatures and integrity verification.              |
| SPDI        | Sensitive Personal Data or Information                | Category under IT Act 43A - includes financial data, health info, passwords, biometrics - requiring stronger protection.        |
| SQL         | Structured Query Language                             | Standard language for managing and querying relational databases. Target of SQL injection attacks.                              |
| SQLi        | SQL Injection                                         | Web attack inserting malicious SQL code into input fields to manipulate backend database.                                       |
| SSL         | Secure Sockets Layer                                  | Cryptographic protocol for encrypted client-server communication - predecessor to TLS. Often used interchangeably.              |
| TLS         | Transport Layer Security                              | Modern, more secure successor to SSL - current standard for encrypted internet communication (TLS 1.3).                         |
| UDRP        | Uniform Domain-Name Dispute-Resolution Policy         | ICANN process for resolving cybersquatting disputes between trademark owners and domain registrants.                            |
| URL         | Uniform Resource Locator                              | The web address format used to locate resources on the internet (e.g., <https://www.example.com/page>).                         |
| VPN         | Virtual Private Network                               | Creates an encrypted tunnel over the public internet for secure private communication.                                          |
| WAF         | Web Application Firewall                              | Security tool that filters HTTP traffic and blocks application-layer attacks like SQL injection and XSS.                        |
| WHOIS       | Who Is                                                | Internet protocol query and response protocol for querying databases that store domain registration information.                |
| XSS         | Cross-Site Scripting                                  | Web vulnerability where attacker injects malicious scripts into web pages viewed by other users.                                |

# **Quick Revision - Key Points Per Topic**

_Read this on the day before the exam. Every item is exam-ready._

## **Active vs Passive - Quick Memory Aid**

**Passive =** PEEKS (only looks - eavesdropping, traffic analysis). No data change. Hard to detect.

**Active =** ACTS (modifies, replays, DoS, MITM, Session Hijack). Data changed. Easier to detect.

## **5 Stages of Attack - Memory Trick**

**"Really Skilled Geeks Make Criminals"** \= Reconnaissance → Scanning → Gaining Access → Maintaining Access → Covering Tracks

## **Bluetooth Attacks - Quick Recall**

| **Attack**   | **One Word**                                | **Severity**                       |
| ------------ | ------------------------------------------- | ---------------------------------- |
| Bluejacking  | SPAM (sends unsolicited messages only)      | Low - nuisance only, no data theft |
| Bluesnarfing | THEFT (steals contacts, messages, emails)   | High - data breach                 |
| Bluebugging  | CONTROL (full remote control of device)     | Very High - complete compromise    |
| BlueSmack    | CRASH (DoS - overwhelms and crashes device) | Medium - availability attack       |

## **IT Act Penalty Quick Reference**

| **Section** | **Crime**                            | **Max Punishment**              |
| ----------- | ------------------------------------ | ------------------------------- |
| 43          | Unauthorised access / damage         | Rs 1 Crore compensation (civil) |
| 66          | Hacking / computer-related offences  | 3 years OR Rs 5 Lakh fine       |
| 66C         | Identity theft                       | 3 years + Rs 1 Lakh fine (both) |
| 66D         | Cheating by impersonation            | 3 years + Rs 1 Lakh fine (both) |
| 66E         | Privacy violation (images)           | 3 years OR Rs 2 Lakh fine       |
| 66F         | Cyber terrorism                      | LIFE imprisonment               |
| 67          | Obscene material (1st offence)       | 3 years + Rs 5 Lakh fine        |
| 70          | Accessing protected system           | 10 years + fine                 |
| 72          | Breach of confidentiality by officer | 2 years OR Rs 1 Lakh fine       |
| 79          | ISP/Intermediary safe harbour        | Exemption (conditions apply)    |

## **Digital Signature - Memory Sequence**

**SIGN:** Message → HASH → Encrypt hash with PRIVATE KEY = Digital Signature.

**VERIFY:** Decrypt signature with sender's PUBLIC KEY → compare with hash of received message. Match = Valid.

## **Phishing vs Pharming - The Key Distinction**

**Phishing:** Victim CLICKS a fake link and is DECEIVED into entering credentials.

**Pharming:** Victim types the CORRECT URL but DNS is poisoned → redirected to fake site automatically. No click needed.

## **PAPA Framework - Cyber Ethics**

**P** \= Privacy | **A** \= Accuracy | **P** \= Property | **A** \= Accessibility

## **Virus vs Worm vs Trojan - The Three Musketeers**

| **Malware** | **Needs host?** | **Self-replicates?** | **User installs?**   | **Key word** |
| ----------- | --------------- | -------------------- | -------------------- | ------------ |
| Virus       | YES             | YES (via host)       | YES (runs host file) | ATTACHES     |
| Worm        | NO              | YES (independently)  | NO (exploits vuln)   | SPREADS      |
| Trojan      | NO              | NO                   | YES (deceived)       | DISGUISES    |