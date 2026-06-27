Date : 27-Jun-2026
------------------

Release PWMS v1.4UI Mobile CSS Foundation Framework & Text Sizes

v1.4UI
---------
• Standardized mobile-device based styling across PWMS.
• Increased mobile menu, button and form control sizes.
• Added mobile-friendly page titles, toolbars and search controls.
• Introduced responsive mobile table framework using table-container wrappers.
• Improved dashboard card readability on mobile.
• Standardized modal sizing and spacing for mobile devices.
• Established separate mobile UI patterns for Task Log (card-based) and Master/Review pages (table-based).
• Added table-container wrappers to Portfolio, Project, Milestone, Activity and Review pages.
• Increased text & button sizes sizes in Login Page.


---------
* Release PWMS v1.3cUI Filter Logic For Task Logs & Search Field Clear

v1.3cUI
---------

• Created centralized getFilteredTaskLogs() helper.
• Created centralized updateTaskLogSummary() helper.
• Fixed filters and totals for Task Log card layout.
• Converted search fields to type="search" for native clear (X) support.
• Standardized Task Log filtering across Grid and Card views.


------------------
Date : 26-Jun-2026
------------------
* Release PWMS v1.3bUI Touch-First Mobile CSS Optimization FONT

v1.3bUI
---------
Implemented:
• Device-based mobile detection
• Larger Card Text
• Larger touch targets
• Larger menu items
• Larger form controls
• Larger buttons
• Larger modal spacing
• Larger Task Card Text for Improved readability

Evaluated:
• Single-column mobile card layout

Outcome:
• Reverted single-column card layout due to inefficient space usage.
• Retained multi-column responsive layout with improved readability.


---------
* v1.3aUI Mobile Optimized Task Log Cards & Entry Modal

v1.3aUI
---------
• Responsive Task Log card layout with date grouping
• Compact Task Entry modal redesign
• Mobile optimized modal sizing and layout
• Auto-focus description field
• Collapsible Additional Details section
• Improved activity search/reset behavior


* Release PWMS v1.2bUI TASK LOG FEED & MODAL REDESIGN
* Release PWMS v1.2aUI TASK LOG FEED
* Release PWMS v1.1UI with UI Menu Hide & Time Fields Calculation & Row

Files changed
----------------
index.html

css/pwms.css
components/header.html
js/components.js
js/auth.js
js/config.js
js/task-log.js

pages/task-log.html



=== === === === === ===

=== === === === === ===

Release : PWMS v1.0 Stable with URL path Logic..

Date : 26-Jun-2026

Modules
--------
✔ Authentication
✔ Portfolio
✔ Project
✔ Milestone
✔ Activity
✔ Task Log
✔ Review

Backend
--------
Supabase

Authentication
--------------
Google OAuth
Allowed Email Validation

Deployment
----------
GitHub Pages


Deployment Notes
--------------------
Development
  IIS / localhost
  Site URL = localhost or LAN IP (eg. 192.168.1.8)

Production
  GitHub Pages
  Site URL = GitHub Pages URL 'https://abhishekn-pwms.github.io/PWMS2'
