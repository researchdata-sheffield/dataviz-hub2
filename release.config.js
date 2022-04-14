module.exports = {
  defaultBranch: "master",
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: "./semantic-release-rules.js",
        parserOpts: {
          noteKeywords: [
            "BREAKING CHANGE",
            "BREAKING-CHANGE",
            "BREAKING CHANGES",
            "BREAKING-CHANGES"
          ]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        writerOpts: {
          commitsSort: ["subject", "scope"]
        },
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "✨ Features",
              hidden: false
            },
            {
              type: "fix",
              section: "🐛 Bug Fixes",
              hidden: false
            },
            {
              type: "docs",
              section: "📝 Documentation",
              hidden: false
            },
            {
              type: "style",
              section: "🎨 Styles",
              hidden: false
            },
            {
              type: "refactor",
              section: "♻️ Code Refactoring",
              hidden: false
            },
            {
              type: "perf",
              section: "⚡️ Performance Improvement",
              hidden: false
            },
            {
              type: "test",
              section: "✅ Testing",
              hidden: false
            },
            {
              type: "build",
              section: "🔨 Build/Dependencies",
              hidden: false
            },
            {
              type: "ci",
              section: "🔧 Continuous Integration",
              hidden: false
            },
            {
              type: "chore",
              hidden: true
            }
          ]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.mdx"
      }
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false
      }
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.mdx",
          "package.json",
          "package-lock.json",
          "npm-shrinkwrap.json"
        ]
      }
    ]
  ]
};
