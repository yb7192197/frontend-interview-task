# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions

1. Given more time, what other changes you would have liked to make?
- Add tests.
- Extract currency and date format  to helper functions.
- Simplify account sections by combining some components or creating a specific section component that takes a title and content.
- Maybe not use the inline style when aligning the badge, however, I would follow the precedent set in the repo for this. An alternative would be to set the alignment in  `InfoRow` , but I chose to keep that styling more general so it could be used in the future.
- Maybe rework data fetching to have a loading state and fetch the data in the component. I opted for `getServerSideProps` because the page didn’t seem functional without that data so this would allow it to be pre-rendered. Although if done properly it should utilise the import the function to get data rather than calling the API route, as well as properly getting the `server` variable based on the environment.

2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.
- Darker colour for text on page to improve contrast.
- Mortgage section is clickable but has no indication of that.
- Fix width so page is more responsive on larger screens.
- Restyle the sections so they could work as more customised “cards”. As each section presents the data similarly, the change could would bring more customisation so each section is emphasised / de-emphasised based on how important the information is.  This would improve the styling on larger screens as they could be styled in a responsive grid or centred in the middle of the screen with a controlled `max-width`.
- Further emphasise the headings hierarchy. Add additional styles to the typography in order to make the information more discernible.
- Restyle the edit button to have a better contrast, as well as making it smaller. It could be moved to the top of the screen as it is the main action that can be taken on the page.
- Potentially add icons if consistent with overall website style.

----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it.

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
