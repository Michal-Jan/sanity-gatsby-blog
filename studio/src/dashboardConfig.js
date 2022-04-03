export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6249bbd73a7b7f5316b79d89",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-678ijmrb",
                  apiId: "586d5bab-55f8-4109-bc33-da2dcb580120",
                },
                {
                  buildHookId: "6249bbd7efc61d50b487325d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3osmvc78",
                  apiId: "979f755a-4799-48f1-9660-f1ec84fc2222",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Michal-Jan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3osmvc78.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
