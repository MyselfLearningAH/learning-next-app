export const navText = ['theme-light', 'theme-dark', 'theme-blue-classic']

export const contents = [
    [
        {
            type : "title",
            value : "Getting Started with Redux"
        },
        {
            type : "text",
            value : "Redux is a JS library for predictable and maintainable global state management."
        },
        {
            type : "text",
            value : "It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."
        },
        {
            type : "text",
            value : "You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available."
        },
        {
            type : "text",
            value : "Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."
        },
        {
            type : "text",
            value : "RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire \"slices\" of state at once."
        },
        {
            type : "text",
            value : "Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better."
        }
    ], 
    [
        {
            type : "title",
            value : "Installation"
        },
        {
            type : "subtitle",
            value : "Redux Toolkit"
        },
        {
            type : "text",
            value : "Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect)."
        },
        {
            type : "subtitle",
            value : "Complementary Packages"
        },
        {
            type : "section",
            value : "React-Redux"
        },
        {
            type : "text",
            value : "Redux Toolkit's configureStore automatically sets up integration with the Redux DevTools."
        },
        {
            type : "subtitle",
            value : "Create a React Redux App"
        },
        {
            type : "text",
            value : "The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template."
        },
    ],
    [
        {
            type : "title",
            value : "Redux Overview and Concepts"
        },
        {
            type : "subtitle",
            value : "Introduction"
        },
        {
            type : "text",
            value : "Welcome to the Redux Essentials tutorial! This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here."
        },
        {
            type : "subtitle",
            value : "How to Read This Tutorial"
        },
        {
            type : "text",
            value : "This page will focus on showing you how to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly."
        },
        {
            type : "text",
            value : "If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux. We'll be here when you're ready!"
        },
        {
            type : "subtitle",
            value : "What is Redux?"
        },
        {
            type : "text",
            value : "It helps to understand what this \"Redux\" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?"
        },
    ],
    [
        {
            type : "title",
            value : "Usage Guides"
        },
        {
            type : "text",
            value : "The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications, including project setup and architecture, patterns, practices, and techniques."
        },
        {
            type : "subtitle",
            value : "Setup and Organization"
        },
        {
            type : "text",
            value : "This section covers information on how to set up and organize Redux-based projects. 1.Configuring Your Store, 2.Code Splitting, 3. Server Rendering, 4.Isolating Redux Sub-Apps"
        },
        {
            type : "subtitle",
            value : "Code Quality"
        },
        {
            type : "text",
            value : "This section provides information on tools and techniques used to improve the quality of your Redux code. 1. Usage with TypeScript, 2. Writing Tests, 3. Troubleshooting"
        },
        {
            type : "subtitle",
            value : "Redux Logic and Patterns"
        },
        {
            type : "text",
            value : "This section provides information about typical Redux patterns and approaches for writing different kinds of Redux logic. 1. Structuring Reducers, 2. Reducing Boilerplate, 3. Deriving Data with Selectors, 4. Implementing Undo History"
        },
    ],
    [
        {
            type : "title",
            value : "API Reference"
        },
        {
            type : "text",
            value : "This section documents the original Redux core API. The Redux core is small - it defines a set of contracts for you to implement (such as reducers) and provides a few helper functions to tie these contracts together."
        },
        {
            type : "text",
            value : "In practice, you won't use the Redux core directly. Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. Additionally, React-Redux lets your React components talk to the Redux store."
        },
    ],
    [
        {
            type : "title",
            value : "Redux FAQ"
        },
        {
            type : "subtitle",
            value : "Table of Contents"
        },
        {
            type : "text",
            value : "copy and paste in new link https://redux.js.org/faq"
        },
    ],
    [
        {
            type : "title",
            value : "Redux Style Guide"
        },
        {
            type : "subtitle",
            value : "Introduction"
        },
        {
            type : "text",
            value : "This is the official style guide for writing Redux code. It lists our recommended patterns, best practices, and suggested approaches for writing Redux applications."
        },
        {
            type : "text",
            value : "Both the Redux core library and most of the Redux documentation are unopinionated. There are many ways to use Redux, and much of the time there is no single \"right\" way to do things."
        },
    ],
    [
        {
            type : "title",
            value : "Github"
        },
        {
            type : "subtitle",
            value : "Try it out"
        },
    ],
    [
        {
            type : "title",
            value : "Help and Discussion"
        },
        {
            type : "text",
            value : "The #redux channel of the Reactiflux Discord community is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!"
        },
        {
            type : "subtitle",
            value : "Should You Use Redux?"
        },
        {
            type : "text",
            value : "Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it."
        },
    ]
];