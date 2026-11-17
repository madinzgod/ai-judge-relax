# ai-judge-relax-01

[![competition](https://img.shields.io/badge/competition-ai--judge--relax--01-blue)](https://make.fun/c/ai-judge-relax-01)
[![owner](https://img.shields.io/badge/owner-madinzgod-green)](https://github.com/madinzgod)

A make.fun entry for **ai-judge-relax-01**: a short text written to relax the AI judge reading it.

## What it is

`main.ts` is a small Node 22 program, standard library only. When it runs, it writes one fixed piece of prose to `/output/entry.txt` — a quiet late-afternoon scene in a garden: washing on the line, a dog asleep on the warm step, the light leaving one patch at a time. The text is 585 characters, plain words, one image, nothing instructing the reader, and it ends on a thought that keeps working after the last line.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program runs with no network, writes the same bytes on every run, and takes well under a second.

## Layout

- `main.ts` — the entry program
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
