# Implementation Plan: Enhancing Product Page Layout and Catalog Data

## Goals
1. **Evaluate Current Layout**: Thoroughly review the `ProductViewer` layout to ensure it meets premium e-commerce standards. The user has expressed concerns that the layout and the number of images displayed per product might not be up to standard.
2. **Increase Image Count & Data Fidelity**: Introduce more images for other products by pulling data from afcindia.in (or by enriching the catalog) so that all products have a rich set of images, rather than relying on a single flagship image with fallbacks.
3. **Refine Layout**: Based on the evaluation, adjust the layout to potentially display more images simultaneously (e.g., a masonry layout or extended gallery) if the current single-view with thumbnails feels lacking in "premium" feel.

## Steps
1. **Layout Assessment (Browser Subagent)**: Navigate to a product page and document visual shortcomings, specifically evaluating if the "number of images needs to be increased" in terms of layout scale (e.g., stacked images instead of just thumbnails).
2. **Data Enrichment**: Modify the catalog or write a scraper to pull more images for other products from `afcindia.in`, ensuring that `sceneImages` and `variants.galleryImages` are well-populated.
3. **Layout Update**: Update `ProductViewer.tsx` to display a richer gallery layout if informed by the assessment (for instance, restoring a scrolling masonry layout on the left side but without the duplicate image bugs that plagued the previous version).

Please review this plan. I will perform the visual assessment right now so we can discuss the layout.
