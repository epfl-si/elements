/* globals $, introJs */

export default () => {
  if ($('#tour-lab').length > 0) {
    const startIntro = () => {
      const intro = introJs();
      intro.setOptions({
        buttonClass: 'btn btn-secondary btn-sm mt-4',
        tooltipPosition: 'auto',
        positionPrecedence: ['bottom', 'top', 'right', 'left'],
        scrollTo: 'tooltip',
        scrollToElement: true,
        steps: [
          {
            intro:
              "This is the laboratory's homepage. <b>It serves to guide the visitors to the different sub-contents</b>. The main contents are projects and publications. Here is the hierarchical order that we are proposing.",
          },
          {
            element: '#tour-hero',
            intro:
              'Define the <b>laboratory title</b> and a <b>cover image</b> using the <a href="#/organisms/hero" target="_blank">hero</a> component or only <b>a title</b>, if there is no cover, using the following step structure.',
          },
          {
            element: '#tour-intro',
            intro:
              'Type a <b>succinct introduction paragraph</b> wrapped inside a <code>.container-grid</code> (the title can also be added here)',
          },
          {
            element: '#tour-projects',
            intro: `
              The main objective of a laboratory is to show the projects that are carried out there. In this section, you can use the <a href="#/content-types/research-project" target="_blank">Research project</a> content types to show them. We advise you to put a <b>maximum of 3 projects</b> on the lab’s homepage and then put a link to the page that lists all the projects.
            `,
          },
          {
            element: '#tour-publications',
            intro: `
              Laboratories also produce publications. You can list <b>up to 5</b> here with the <a href="#/content-types/publication" target="_blank">Publication</a> component and add a link to the page that lists all the publications.
            `,
          },
          {
            element: '#tour-news',
            intro: `
              If you have some news about your laboratory, you can list the latest at this location. We advise you not to list too much (maximum 2) and use the component <a href="#/content-types/news" target="_blank">News</a> content-types (<b>Basic teaser</b>) and add a link to all news page.
            `,
          },
          {
            element: '#tour-partof',
            intro: `
            <p>
              This section is intended to <b>provide the context of the laboratory</b>. It is possible for a laboratory to belong to several institutes and/or faculties. If this is the case, we advise you to use a teaser that brings the visitor to a listing page, rather than putting them all on the lab’s homepage. Laboratories can have themes that categorize them. It is recommended to use component “tag” to list them.
            </p>
            <p>
              For this part, you can use some of the <a href="#/content-types/school" target="_blank">School</a> and <a href="#/content-types/institute" target="_blank">Institute</a> content types. The themes are based on the <a href="#/atoms/tag" target="_blank">tag</a> component.
            </p>
            `,
          },
          {
            element: '#tour-contact',
            intro: `
              <b>Several people may want to contact</b> the laboratory: press, potential collaborators, people interested in your work or simply people who want to know where you are located. That’s why we recommend using the <a href="#/organisms/contact" target="_blank">Contact</a> component (<b>Banner</b>) that gives all this information.
            `,
          },
          {
            element: '#tour-team',
            intro: `
              Some visitors may want to ask you questions or <b>see who composes the laboratory's team</b>. It is possible to link to the team page using the <a href="#/content-types/basic-page" target="_blank">Teaser basic page</a> component.
            `,
          },
          {
            element: '#tour-sponsors',
            intro: `
              It is possible that you have sponsors. On a second column, you can list them thanks to the <a href="#/molecules/sponsor" target="_blank">Sponsor</a> component.
            `,
          },
        ],
      });
      intro.start();
    };

    $('#tour-start').click(() => startIntro());
  }
};
