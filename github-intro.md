# Alpha's First Repo

### We are learning GitHub for the first time.

### Important Commands
- $ `git status`
- $ `git add .`
- $ `git commit -m '<adds important information here>'`
- $ `git push origin main`

### Markdown Info
Markdown is a text-based language, file extension of `.md`
- README.md - special file on the front page of a GitHub repo that talk about what is in the repo
- Shortcut for opening the markdown preview in atom: `cont+shift+m`
- Shortcut for opening the markdown preview in VSCode: `shift+command+v`
- Ordered list uses numbers
- Code snippets can be wrapped in back ticks


### Vocabulary
- Local vs remote - local on your computer, remote is on GitHub
- Repo (repository) - folder on GitHub
- Clone - copying a repo from GitHub to your local

### Branching
- What is a branch? connection between local and remote
- $ `git branch` - informational command, list all the branches on your local
- Create a new branch (checkout a new branch) - $ `git checkout -b <descriptive-branch-name>`
- Move between existing branches - $ `git checkout <descriptive-branch-name>`

### Merging Branches on GitHub
- Look at all the branches on the drop down menu
- Select a branch and see the code associated with that branch
- Creating a Pull Request
- PR shows the diff between main and the other branch we are working on
- Merge Pull Request - takes the diff from the branch and adds it to the main (source of truth)
- Deleted the branch on GitHub

### Reconciling on Our Local
- Check what branch we are on
- Go back to the main branch - $ `git checkout main`
- $ `git pull origin main`
- Delete branch locally - $ `git branch -d <descriptive-branch-name>`
