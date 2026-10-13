# CISO Connect redesign

A responsive, multi-page Spanish website concept. Open `index.html` locally or upload the whole folder to a static web host. The main navigation opens separate HTML files for the association, activities, membership, FAQs, and contact. Legal notice and privacy also have their own pages. Shared styling, JavaScript, photography, and favicon are in `assets/`. No build step or third-party runtime is needed.

## Contact form

The form validates its fields and opens the visitor's email application with a prepared message to `contact@cisoconnect.io`. The visitor must review and send it. A static HTML page cannot submit email by itself. Before publishing a form that sends directly from the page, connect it to a server-side endpoint or a form provider approved by the association, and update the privacy information accordingly.

The "Solicita unirte" button links to the contact page and preselects the membership topic. Cargo and organización become required for that topic. With JavaScript disabled, the form falls back to a `mailto:` action.

## Publication checks

- Confirm that this visual identity and CSS logo are acceptable for the association. Replace with the official logo if one exists.
- The physical address supplied for this revision is **Camino de Ronda 10, Talamanca de Jarama (Madrid)**. It appears on the contact and legal pages and in every footer. Confirm whether it is also the registered domicile before labeling it as such.
- Review the legal and privacy text with the association, especially if the form delivery mechanism changes.
- Test the contact flow on the actual hosting environment and across common email clients. A server-backed form is more reliable than the email-client version included here.

## Photography

The photos are illustrative stock photography. They do not show CISO Connect members or events.

- `assets/roundtable.jpg`: [Christina @ wocintechchat / Unsplash](https://unsplash.com/photos/peope-sitting-around-table-0Nfqp0WiJqc)
- `assets/collaboration.jpg`: [Headway / Unsplash](https://unsplash.com/photos/person-gesturing-during-meeting-with-laptop-5QgIuuBxKwM)

Both are used under the [Unsplash License](https://unsplash.com/license), which permits free use. Photographer credit is appreciated and provided here.

Content is based on the public CISO Connect website as reviewed on 12 October 2026. No member counts, testimonials, event dates or endorsements were invented.
