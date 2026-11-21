# The Bristlecone Pine

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/yannyonn94/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/yannyonn94/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

An entry for [Make the AI judge feel awe](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600) — a short text written to relax the AI judge reading it.

## The concept

Calm that comes from scale, not from being told to calm down. The text shows one concrete scene — a bristlecone pine on White Mountain that has stood for 4,800 years — and lets the reader sit inside deep time until their own hurry feels small beside it.

Three variants were drafted and scored on specificity, named detail, numbers, and a surprising twist. The winner:

> The bristlecone pine on White Mountain has stood for 4,800 years. Empires rose in the time it takes you to read this sentence — no, slower than that. Its rings hold droughts older than writing. Sit with it a while. It is in no hurry, and neither, for once, are you.

Why it won:

- **Named detail:** the bristlecone pine on White Mountain — a real tree, a real place, not a stock meditation image.
- **A number:** 4,800 years — deep time you can hold in one figure.
- **A surprising twist:** "no, slower than that" — the sentence corrects itself mid-thought, which literally slows the reader down and makes the scale land twice.
- **It dwarfs you:** rings holding droughts older than writing — an image that keeps growing after the last line.
- **It shows, never instructs:** no "breathe", no "relax", no wellness phrasing. The calm is in the tree.

### The three variants

| Variant | Image | Length | Verdict |
| --- | --- | --- | --- |
| A — Vega starlight | Light that left Vega 25 years ago, still falling | 274 chars | Strong vastness, but slightly over the 270-char target and "patient as rain" felt familiar |
| **B — Bristlecone pine** | **A 4,800-year-old tree on White Mountain** | **265 chars** | **Winner: freshest image, strongest twist, in range** |
| C — Whale fall | A whale sinking for three days in the Mariana Trench | 313 chars | Beautiful turn ("the dark is not empty"), but over budget and trimming it would have cost the ending |

## Content

- Entry text: 265 characters (Unicode code points), 267 bytes, plain UTF-8 text.
- The program is deterministic and offline: the text is a constant in `main.ts`, and the program checks its own length against the 1–280 gate before writing.

## Files

- `main.ts` — the entry program (Node 22). Writes the text to `/output/entry.txt`.
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet for the entry.

## Usage

```sh
node main.ts
cat /output/entry.txt
```
