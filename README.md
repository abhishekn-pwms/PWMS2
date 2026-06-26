Date : 26-Jun-2026
------------------
* v1.3bUI Touch-First Mobile CSS Optimization

v1.3bUI
---------
Implemented:
• Device-based mobile detection
• Larger touch targets
• Larger menu items
• Larger form controls
• Larger buttons
• Larger modal spacing
• Improved task card readability

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
