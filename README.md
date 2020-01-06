# Reflections Jewellery

![alt text](https://i.imgur.com/jEgUjbS.jpg "Reflections Jewellery website as seen on different devices")

Before beginning this course, a family friend said that when I'm finished they would be interested in commissioning a website from me for their new small business selling handmade jewellery.

So I saw our first milestone project as the perfect opportunity for starting this! Perhaps it will ultimately become my first professionally produced site as a software developer.

## UX

5 Planes?

My idea for the site was partly inspired by the whiskey walkthrough project we have previously completed on the course. I liked the way it showcased simplicity yet style.

The basic 'single page' approach seems like a very good fit for a small business which has really only just got up and running. There aren't many products to showcase yet, nor is there a significant amount of information to present.

Therefore a simple landing page with a call to action, a contact form, some 'About' information, product photos and social media links feels ideal.

The website is primarily intended to be a promotional tool for the business, with an opportunity for potential customers to enquire about placing an order or making a purchase.

### User Stories

* As the business owner, I want to be able to advertise my products, provide information about them and tell prospective customers about my design background. I want people to be able to easily contact me so that I can receive orders in a professional manner. 
* As a prospective customer, I want to be able to see example images of the product, find out more information about them and make an order enquiry.
* As an organiser of markets/fairs/shows, I want to be able to find local artisans who could exhibit at my events. I need to be able to see that they have a professional approach and provide quality products.

I used Balsamiq to create some basic wireframes for the project, they further illustrate the layout and content ideas which I outlined above.

![alt text](https://i.imgur.com/DCPpLzY.png "Reflections Jewellery wireframes")
![alt text](https://i.imgur.com/e10x0jY.png "Reflections Jewellery wireframes")
![alt text](https://i.imgur.com/TcNUdfq.png "Reflections Jewellery wireframes")

## Features

### Existing Features

* The navigation menu provides clear and simple links to the site's different content areas.
* The landing page features a 'call to action' button, while also informing the user what the product is and how they can make bespoke orders.
* The 'About' section details the who, where and what of the business; potential customers know the products come from a professional designer.
* The contact form allows users to easily submit an enquiry and provides some basic guidelines for their message.
* The Facebook embed is a cross-promotional tool for the business owner. It also provides regularly updated additional content, while users can like and message the page through the widget's built-in functionality.
* The 'Products' page provides sample images and details of the materials used.
* In the footer, users can click icons to be taken to the brand's social media pages, send an email or return to the top of the site.

### Features left to implement

* A showcase video of a piece of jewellery in production would allow users to see and hear more about the professional design process.
* A greater selection of images presented in a more stylish manner.
* Product prices, buy online, shopping cart, secure payment process, etc.
* Testimonials from customers and event organisers, plus some simple added functionality to 'book me for your jewellery fair'.

## Technologies

This project uses HTML and CSS, including the Bootstrap framework and library primarily for the grid system.

It also features an embedded Facebook widget, with reference to [FB's Page Plugin documentation](https://developers.facebook.com/docs/plugins/page-plugin/) and using [relevant code from Stack Overflow](https://stackoverflow.com/questions/34761500/how-to-make-facebook-social-plugin-fully-responsive).

## Testing

1. Navbar
    * Clicking on the site logo and 'Home' option both redirect correctly to /index.html.
    * Clicking on 'About' jumps the user down to the 'About' section
    * Clicking on 'Contact' jumps the user down to the 'Contact' section
    * Clicking on 'Products' jumps the user down to the 'Products' section
    * In mobile view, the burger icon correctly displays the dropdown menu. All the menu links behave in the expected way, as above
    
2. 'Get in touch' button
    * This has the desired animated hover effect on desktop. When clicked, it takes the user directly to the Contact form

3. Contact form
    * Click 'Submit' with no fields completed > 'Please fill out this field' error message appears for the 'Name' field
    * Click 'Submit' with only the 'Name' field completed > 'Please fill out this field' error message appears for the 'Email' field
    * Click 'Submit' with 'Name' field completed and incomplete email address > 'Please include an @ in the email address' error message appears for the 'Email' field
    * Click 'Submit' with 'Name' and 'Email' fields completed > 'Please fill out this field' error message appears for the 'Message' field
    * When user starts typing in the 'Message' field > Placeholder text disappears
    * When all fields are completed, the 'Submit' button can be successfully clicked on with no error messages appearing
    * 'Submit' button has the desired animated hover effect on desktop

4. Facebook widget
    * The Facebook embed has its own scrolling functionality
    * The page title, 'Like Page' and 'Share' buttons are all clickable and behave as expected

5. Footer
    * The Facebook link opens the correct page in a new tab
    * The LinkedIn link opens the correct page in a new tab
    * The email icon opens the user's default email client and the desired 'send to' email address is automatically populated
    * The 'back to top' link jumps the user back up to the landing page

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

Finally, I also ran my code through the W3C validator tools for HTML/CSS and corrected the small number of errors which appeared.

## Deployment

I went to Settings > GitHub Pages from my 'reflections-jewellery' GitHub repository.

Then I selected 'master branch' from the Source dropdown.

My site was then automatically published at https://digitalstuart.github.io/reflections-jewellery.

## Credits

### Content

* I used the header and fixed navbar from MDBoostrap - https://mdbootstrap.com/snippets/jquery/mdbootstrap/102551.
* The button animation for adding an arrow on hover was sourced from https://www.w3schools.com/howto/howto_css_animate_buttons.asp.
* The 'linear-gradient' CSS styling for better contrast between background images and headings/text came from https://teamtreehouse.com/community/black-transparent-overlay-on-cover-image.
* For icons replacing bullet points in a list, I used https://fontawesome.com/how-to-use/on-the-web/styling/icons-in-a-list.
* The 'grabber' in the bottom right corner of the Contact form's text area was disabled with help from the 'Styling Text areas' section here - https://www.w3schools.com/css/css_form.asp.
* Elements of the Contact form were given a 'max-width' value, with reference to https://stackoverflow.com/questions/39068128/how-can-i-make-a-textarea-that-fits-within-the-width-of-the-current-viewport.
* For maintaining the same height of parent divs when any of the Products picture caption text spread onto two lines, I sourced code from the 'Flexbox' answer at https://stackoverflow.com/questions/2997767/how-do-i-keep-two-side-by-side-divs-the-same-height.
* For the 'About' page, having the 'who/where/what' list vertically aligned next to the thumbnail image was achieved with code from https://css-tricks.com/almanac/properties/v/vertical-align.
* The basic formatting of social media links in the footer comes from the Rosie Odenkirk resume project in Code Institute's User Centric Frontend Development module.
* 'block-divider' and 'list-inline-item:not(:last-child)' both come from the whiskey walkthrough project as part of 'Bootstrapping Your Next Big Idea With Bootstrap 4' in the Code Institute course.
* For specifying the width of the Facebook embed according to different browser sizes, I used the 'data-width' method from http://jsfiddle.net/JamesKyle/8ntfZ.

### Media

The photos used in this site were provided by Marianne McGrath or sourced as copyright-free images from the internet.

### Acknowledgments

Thank you to Marianne McGrath for letting me run wild and free on the internet with her business! I also received inspiration for my site layout and theme from Matt Rudge's whiskey walkthrough project.