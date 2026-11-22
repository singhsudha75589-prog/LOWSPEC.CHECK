# LowSpecCheck — PC Hardware Comparison & Game FPS Bottleneck Analyzer

**Live Web Tool:** [https://lowspeccheck.vercel.app](https://lowspeccheck.vercel.app)

**LowSpecCheck** is a fast, lightweight hardware compatibility and benchmark comparison web application built to help PC gamers—especially those running budget, legacy, or integrated graphics setups—check game playability, analyze CPU/GPU bottlenecks, and compare processor and graphics card architectures side-by-side.

---

## Key Features

- **Can My PC Run This? (CPU + GPU + Game Analysis):** Pair any processor and graphics card with a specific game to view estimated real-world FPS, frame-time budgets, VRAM/RAM constraints, and bottleneck breakdowns across 1080p, 1440p, and 4K presets.
- **Side-by-Side GPU Comparisons:** Compare rasterization performance, ray-tracing capability, clock speeds, memory bandwidth, TDP, and architectural specs across modern and legacy GPUs.
- **Side-by-Side CPU Comparisons:** Evaluate single-core gaming speed, multi-core workloads, boost clocks, L3 cache sizes, and socket/platform differences.
- **Low-Spec & Budget Hardware Focus:** Covers entry-level discrete cards, older desktop chips, and laptop integrated graphics alongside modern mid-range and flagship components.

---

## Example Comparisons

- [RTX 4060 8GB + i5-12400F in Grand Theft Auto VI](https://lowspeccheck.vercel.app)
- [AMD Radeon RX 6600 8GB vs NVIDIA GeForce RTX 3050 8GB](https://lowspeccheck.vercel.app/?tab=gpu&gpu1=rx-6600&gpu2=rtx-3050-8gb)
- [Ryzen 7 7800X3D vs Ryzen 7 9800X3D](https://lowspeccheck.vercel.app)
- [Ryzen 7 5700X3D vs Ryzen 5 7500F](https://lowspeccheck.vercel.app)

---

## Project Structure

```text
├── index.html          # Main application UI & hardware comparison engine
├── middleware.js       # Dynamic routing & SEO metadata handling
├── sitemap.xml         # Programmatic hardware & game combination URLs
├── sw.js               # Service worker for fast asset caching
├── logo.png            # Site branding asset
└── README.md
