module.exports = [
  { breaking: true, release: "major" },
  { tag: 'Breaking', release: 'major' },
  { revert: true, release: "patch" },
  { type: "feat", release: "minor" },
  { type: "fix", release: "patch" },
  { type: "perf", release: "patch" },
  { type: "docs", scope: "new-*", release: "minor" },
  { type: "docs", release: "patch" },
  { type: "refactor", scope: "core-*", release: "minor" },
  { type: "refactor", release: "patch" },
  { type: "style", release: "patch" },
  { type: "test", release: "patch" },
  { type: "build", release: "patch" },
  { type: "ci", release: "patch" },
  { type: "chore", release: false },
  { scope: "no-release", release: false }
];
