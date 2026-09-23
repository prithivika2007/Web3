# Web3, Explained — A Short Story of the Decentralized Web

A responsive, scroll-driven landing page that introduces beginners to Web3 through a five-chapter narrative, animated SVG diagrams, and a live MetaMask wallet connection.

**Live demo:** [add your deployment link here]

---

## About the Project

Instead of a generic wall of "Web3 fact cards," this page tells Web3 as a short story: it opens with the problem of centralized servers, walks through how blockchain solves it, introduces six core concepts, visualizes how a single transaction actually flows through the network, and ends with letting the visitor try a real wallet connection themselves.

Diagrams draw themselves in as you scroll to them (using `IntersectionObserver`), rather than animating everything on page load — keeping the motion purposeful instead of distracting.

## Features

- **Five-chapter scroll narrative** — Problem → Blockchain → Core Concepts → Transaction Flow → Try It Yourself
- **Animated SVG diagrams** — a centralized-server diagram, a block-linking chain, and a 5-step transaction flowchart, each drawing in on scroll
- **Scroll progress bar** and smooth in-page navigation
- **Fully responsive** — works down to mobile, with a collapsible nav menu
- **Live MetaMask wallet integration** — connects via `eth_requestAccounts` and displays the connected address
- **Reduced-motion support** — respects `prefers-reduced-motion` for accessibility

## Web3 Concepts Covered

| Concept | Where it's covered |
|---|---|
| Blockchain & decentralization | Chapters 1–2 |
| Cryptocurrency | Chapter 3 |
| Smart Contracts | Chapter 3 |
| NFTs | Chapter 3 |
| DAOs | Chapter 3 |
| Wallets & Gas Fees | Chapter 3 |
| Transaction lifecycle (sign → broadcast → verify → block → permanence) | Chapter 4 |
| Wallet connection (MetaMask) | Chapter 5 |

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid, `IntersectionObserver`-driven animations)
- Vanilla JavaScript (no frameworks/build tools)
- [MetaMask / `window.ethereum`](https://docs.metamask.io/wallet/reference/provider-api/) for wallet connection

## Project Structure

```
├── index.html      # Page structure and content
├── style.css        # Theme, layout, and animations
├── script.js         # Scroll reveal, SVG draw-in, wallet connect logic
└── README.md
```

## Running Locally

MetaMask needs a proper origin (not `file://`) to inject reliably, so serve the folder instead of opening the file directly:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser with the [MetaMask extension](https://metamask.io/) installed.

## Wallet Integration

Clicking **Connect Wallet** calls `window.ethereum.request({ method: 'eth_requestAccounts' })`, the standard MetaMask provider API. On approval, the connected address is displayed (shortened, e.g. `0x71C7...976F`). If no wallet extension is detected, the button gracefully falls back to a message prompting the user to install MetaMask.

## Author

**R Prithivika**
B.Tech CSE (AI/ML), SRMIST Ramapuram
[GitHub](https://github.com/prithivika2007) · [LinkedIn](https://www.linkedin.com/in/prithivika-r-1613b437b/)
