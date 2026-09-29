# InformedCOOKIE

InformedCOOKIE is a small React demonstration service styled with GOV.UK
Frontend. It keeps a cookie-baking total in the browser and contains deliberate
coding exercises for practising investigation with OpenCode.

## Set up OpenCode on Ubuntu

> [!CAUTION]
> **DO NOT USE OPENCODE'S FREE MODELS ON ANY REAL STATEMENT OF WORK (SOW),
> CLIENT PROJECT, OR REPOSITORY CONTAINING SENSITIVE OR CONFIDENTIAL
> INFORMATION.** Muse Spark 1.3 Contributor Free may use your prompts and
> completions to train future Meta models. Use it only for this demonstration
> repository or other approved, non-sensitive practice work.

Install OpenCode using the easy installation command from the
[official OpenCode documentation](https://opencode.ai/docs/):

```bash
curl -fsSL https://opencode.ai/install | bash
```

Restart the terminal if the `opencode` command is not immediately available.
Then navigate to this repository and start OpenCode:

```bash
cd /path/to/informedCOOKIE
opencode
```

In OpenCode:

1. Enter `/models` to open the model selector.
2. Find the free OpenCode models.
3. Select **Muse Spark 1.3 Contributor Free**. Its full model ID is
   `opencode/muse-spark-1.3-contributor-free`.

The free model is available for a limited time and may be removed or renamed in
the future.

## Run the project

- `npm install` installs dependencies.
- `npm run dev` starts the development server.
- `npm run typecheck` checks the TypeScript code without producing a build.

## Project structure

- `src/main.tsx` starts React and loads the shared styles.
- `src/App.tsx` owns the cookie total and coordinates the page components.
- `src/cookieStorage.ts` reads and writes the total in browser storage.
- `src/components/CookieCounter.tsx` displays the total and bakery controls.
- `src/components/ServiceHeader.tsx` displays the service header.
- `src/components/PhaseBanner.tsx` displays the beta phase message.
- `src/components/ServiceFooter.tsx` displays support links and the disclaimer.
- `src/components/PlaceholderLink.tsx` provides shared behaviour for unfinished
  links.
- `src/styles.css` contains application-specific layout and presentation rules.

## Data flow

`App` loads the initial total from `cookieStorage`, owns that value as React
state, and passes it to `CookieCounter`. The counter reports user actions back
to `App`, which updates the state. A React effect then asks `cookieStorage` to
persist the latest value for the next page load.

## Coding challenges

This repository deliberately contains several defects and unfinished features.
Use OpenCode to investigate each report, make the smallest appropriate change,
and check that existing behaviour still works.

Run the application with `npm run dev`. After making changes, use
`npm run typecheck` to check the TypeScript code.

### 1. Baking produces the wrong quantity

#### Symptom

Selecting **Bake Cookie** once changes the total by more than one.

#### Acceptance criteria

- Each selection increases the displayed total by exactly one.
- Repeated selections continue to increase the total correctly.

### 2. The total is lost after a refresh

#### Reproduction

1. Bake several cookies.
2. Refresh the browser.

#### Acceptance criteria

- The total before the refresh is restored when the page reloads.
- A first-time visitor still starts with zero cookies.

### 3. The page overflows on mobile

#### Symptom

At narrow viewport widths, the page can be scrolled horizontally and some
content extends beyond the visible area.

#### Acceptance criteria

- The page has no horizontal overflow at a viewport width of 320 pixels.
- The cookie artwork and controls remain readable and usable.
- The desktop layout is unchanged.

### 4. Reset cookies is unfinished

#### Symptom

The **Reset cookies** button does not do anything.

#### Acceptance criteria

- Selecting the button resets the displayed total to zero.
- The reset value remains zero after refreshing the page.
- The button remains keyboard accessible.

### 5. Large totals are difficult to read

#### Task

Format the displayed cookie total with locale-aware thousands separators. You
can temporarily seed a large value while developing the change.

#### Acceptance criteria

- A total of 1,000 is displayed as `1,000` for the current locale.
- Formatting does not change the numeric value used for baking or persistence.
- Small totals continue to display normally.

### 6. Add your own idea

Once the first five challenges are complete, use the model to suggest new
functionality or improvements for InformedCOOKIE. Discuss the ideas with the
model, choose one that interests you, and ask it to help you implement the
change.

#### Acceptance criteria

- The new functionality has a clearly described purpose and expected behaviour.
- The implementation follows the existing project structure and GOV.UK styling.
- Existing functionality continues to work.
- `npm run typecheck` passes.
