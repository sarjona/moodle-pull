const defaultConfig = [
  {
    "type": "pull",
    "title": "Merge",
    "command": "git fetch {{PULL_REPOSITORY}} {{PULL_BRANCH}} && git merge --no-ff --no-edit FETCH_HEAD"
  },
  {
    "type": "pull-only",
    "title": "Pull only (no checkout)",
    "command": "git pull --no-edit {{PULL_REPOSITORY}} {{PULL_BRANCH}}"
  },
  {
    "type": "fetch",
    "title": "Fetch",
    "command": "git fetch {{PULL_REPOSITORY}} {{PULL_BRANCH}}"
  },
  {
    "type": "repo-branch",
    "title": "Repo + branch only",
    "command": "{{PULL_REPOSITORY}} {{PULL_BRANCH}}"
  }
];
