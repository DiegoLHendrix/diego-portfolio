# Version 0.2.0
Made changes to template base, landing page, and other site pages. Also added a footer and added features to the navbar.
## Template Base
### base.html
- Added font awesome css library.
- Commented out EVT link so only the link in the dropdown menu is used.
- Added dropdown menu with project links.
- GitHub and LinkedIn links on right side of navbar
- Log in button for users with admin access.
- Added a footer with name and GitHub, LinkedIn, and contact form links.
### site.css
- Created footer-content class styles.

## Landing
### landing.html
- Removed social links.
### landing.css
- Renamed home.css to landing.css

## EVT
### evt.html
- Change block title to be "EVT" instead of "Projects".
- Temporarily moved the cards div out of coment block due to conflicts with the footer.
    - Instead added buttons that link to the GitHub repo and LVSS page.
- Commented out "Relevant Projects" header element.
### evt.css
- Cleared the evt.css file because the site.css and base.html did all the template styling and the cards div was removed.

# Version 0.1.0
- Initial commit with generic django project.