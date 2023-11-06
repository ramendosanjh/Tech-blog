# 14 Model-View-Controller (MVC): Tech Blog

## Description

This project is a CMS-style blog site that allows developers to publish articles, blog posts, and their thoughts and opinions about various tech-related topics. It follows the Model-View-Controller (MVC) architectural pattern and incorporates technologies like Handlebars.js, Sequelize (as the Object-Relational Mapping tool), and express-session for authentication. The application allows users to create accounts, publish blog posts, comment on existing posts, and manage their posts through a dashboard.

![Application Screenshot](./assets/screenshot.png)

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Questions](#questions)

## User Story

As a developer who writes about tech,
I want a CMS-style blog site
so that I can publish articles, blog posts, and my thoughts and opinions.

## Acceptance Criteria

- When visiting the site for the first time, users are presented with the homepage, which includes existing blog posts (if any).
- Users can navigate between the homepage and the dashboard, and have the option to log in.
- Users are prompted to sign up or sign in when clicking on other navigation links.
- Signing up requires creating a username and password.
- After signing up, user credentials are saved, and they are logged into the site.
- Users can view existing blog posts on the homepage, along with post titles and creation dates.
- Clicking on an existing blog post reveals the post's title, contents, the creator's username, and its creation date.
- Users can leave comments on existing blog posts.
- When a comment is submitted, it's saved, and the post is updated to display the comment, the comment creator's username, and the date created.
- Users can access their dashboard, where they can manage their existing blog posts and create new ones.
- Creating a new blog post requires a title and contents.
- After creating a new blog post, users are taken back to an updated dashboard with the new post.
- Users can edit or delete their existing blog posts from the dashboard.
- Users can log out of the site.
- If users are idle on the site for a set time, they are prompted to log in again before adding, updating, or deleting posts.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

