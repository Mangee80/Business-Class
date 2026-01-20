# Premium Flight Booking Website - Implementation Plan

## Overview
Transform the existing React app into a premium flight booking platform for business/first-class travelers with a quiet luxury aesthetic.

## Tech Stack
- **Framework**: React 19 + React Router DOM 7 (existing)
- **Styling**: Styled Components (CSS-in-JS)
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Data**: Static mock flight data
- **Language**: JavaScript (no TypeScript)

---

## Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Ivory | `#FDFCF9` | Main background |
| Warm Beige | `#F5F1E8` | Secondary background, cards |
| Soft Gray | `#E8E6E1` | Borders, dividers |
| Medium Gray | `#C9C5BA` | Disabled states, subtle text |
| Charcoal | `#4A4A48` | Primary body text |
| Deep Navy | `#2B2D42` | Headings, emphasis |
| Muted Gold | `#B8A88A` | Hover states, accents |

### Typography
- **Headings**: Playfair Display, 400-500 weight
  - H1: 56px, H2: 40px, H3: 32px, H4: 24px
- **Body**: Inter, 400 weight
  - Large: 18px, Regular: 16px, Small: 14px, Caption: 12px uppercase
- **Buttons**: 15px, 500 weight, uppercase, letter-spaced

### Spacing
Base unit: 8px (xs: 8, sm: 16, md: 24, lg: 40, xl: 64, 2xl: 96)

---

## Folder Structure
```
src/
├── theme/
│   ├── theme.js              # Design tokens
│   └── GlobalStyles.js       # Global styles + font imports
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Select/
│   │   └── Container/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── PageLayout/
│   ├── home/
│   │   ├── Hero/
│   │   ├── SearchForm/
│   │   └── Home.jsx
│   └── flights/
│       ├── FlightCard/
│       ├── FlightList/
│       └── SearchResults.jsx
├── data/
│   └── mockFlights.js
├── hooks/
│   └── useFlightSearch.js
└── utils/
    └── formatters.js
```

---

## Implementation Phases

### Phase 1: Setup (Dependencies & Theme)
1. Install `styled-components`
2. Create `src/theme/theme.js` - design tokens (colors, typography, spacing)
3. Create `src/theme/GlobalStyles.js` - CSS reset, Google Fonts import, base styles
4. Update `src/index.jsx` - wrap app with ThemeProvider

### Phase 2: Layout Components
5. Create `Container` component - responsive max-width wrapper
6. Create `Header` component - logo + minimal nav (Search, About, Contact)
7. Create `Footer` component - understated links and copyright
8. Create `PageLayout` component - combines Header + main + Footer

### Phase 3: Common UI Components
9. Create `Button` component - primary/secondary/ghost variants
10. Create `Input` component - styled text input with focus states
11. Create `Select` component - custom dropdown styling

### Phase 4: Home Page
12. Create `src/data/mockFlights.js` - 7 sample premium flights
13. Create `Hero` component - headline, subheading, elegant background
14. Create `SearchForm` component - From, To, Date, Class fields
15. Update `Home.jsx` - compose Hero + SearchForm
16. Create `useFlightSearch.js` hook - search state and filtering

### Phase 5: Flight Results
17. Create `FlightCard` component - airline, route, time, price display
18. Create `FlightList` component - renders array of FlightCards
19. Create `SearchResults.jsx` page - search summary + FlightList
20. Add `/flights` route to App.jsx
21. Connect SearchForm to navigate with query params

### Phase 6: Polish
22. Create `utils/formatters.js` - date and price formatting
23. Add responsive styles (breakpoints: 1200px, 768px, 480px)
24. Refine hover/focus states and transitions

---

## Key Components Detail

### SearchForm Fields
- **From**: Text input with airport code autocomplete placeholder
- **To**: Text input with airport code autocomplete placeholder  
- **Date**: Date input (native or simple text for v1)
- **Class**: Radio/segmented control - "Business" / "First Class" only

### FlightCard Layout
```
┌─────────────────────────────────────────────────────────┐
│  [Airline]     [Departure] ────── [Arrival]    [$Price] │
│  British Airways   18:30 JFK      06:45 LHR    $4,250   │
│                    7h 15m • Business           [Select] │
└─────────────────────────────────────────────────────────┘
```

### Mock Flight Data Structure
```javascript
{
  id: "flight-001",
  airline: { code: "BA", name: "British Airways" },
  route: {
    from: { code: "JFK", city: "New York" },
    to: { code: "LHR", city: "London" }
  },
  departure: "2026-02-15T18:30:00Z",
  arrival: "2026-02-16T06:45:00Z",
  duration: "7h 15m",
  class: "business",
  price: { amount: 4250, currency: "USD" },
  amenities: ["Lie-flat seats", "Premium dining", "Lounge access"]
}
```

---

## Files to Modify
| File | Action |
|------|--------|
| `package.json` | Add styled-components dependency |
| `src/index.jsx` | Wrap with ThemeProvider |
| `src/App.jsx` | Add routes, use PageLayout |
| `src/components/Home.jsx` | Replace with new Home page |
| `public/index.html` | Add Google Fonts link |

## Files to Create
- `src/theme/theme.js`
- `src/theme/GlobalStyles.js`
- `src/components/common/Button/Button.jsx`
- `src/components/common/Input/Input.jsx`
- `src/components/common/Select/Select.jsx`
- `src/components/common/Container/Container.jsx`
- `src/components/layout/Header/Header.jsx`
- `src/components/layout/Footer/Footer.jsx`
- `src/components/layout/PageLayout/PageLayout.jsx`
- `src/components/home/Hero/Hero.jsx`
- `src/components/home/SearchForm/SearchForm.jsx`
- `src/components/flights/FlightCard/FlightCard.jsx`
- `src/components/flights/FlightList/FlightList.jsx`
- `src/components/flights/SearchResults.jsx`
- `src/data/mockFlights.js`
- `src/hooks/useFlightSearch.js`
- `src/utils/formatters.js`

---

## Verification
1. Run `npm install` to install styled-components
2. Run `npm start` to start dev server
3. Verify homepage loads with Hero and SearchForm
4. Test flight search - enter criteria and submit
5. Verify `/flights` route shows filtered results
6. Check responsive behavior at different viewport sizes
7. Verify color palette and typography match design system
8. Run `npm run build` to ensure production build succeeds

---

## Design Principles Checklist
- [ ] Generous whitespace (40px+ between sections)
- [ ] Muted, neutral color palette only
- [ ] No promotional banners or flashy animations
- [ ] Serif headings, clean sans-serif body
- [ ] Understated, confident language
- [ ] Time-efficient UX with minimal steps
- [ ] Feels like private banking, not travel aggregator
