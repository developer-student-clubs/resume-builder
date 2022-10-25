  ## Contributing

  Hey there! We're glad to have you here for contributing in our project. Your help is essential to make our project more useful.

  Please note that we have some code of conducts, please follow these througout interaction with our project.

  ## Issues and PRs
  If you have any suggestion for improving this project or your want to report any bug present there please open issue! We are welcoming any contribution from you. If you have any kind of queries that we would love to address them. 

  If you're planning a huge PR, we recommend opening up an issue first. Over there we can talkabout it and discuss it first. If you're not sure how to open a PR, check out the below links.

  ## Pull Request
  1. Fork our repository. After that clone repository from your account.
  2. Configure and install the dependency if needed.
  3. Make sure project is running fine in your machine.
  4. Make your changes to the project.
  5. Test updated project in your machine.
  6. Commit changes and push to your fork branch.
  7. Request for pull and merge request.
  8. In few day, your request will be viewed and if it is appropriate then it will be merge to main branch. (Wait for that)

  ### Some point you have to take care of, for your request being accepted
  - Use standard syntax in codebase.
  - Do not change boilerplate which is given by us untill it is required.
  - Make changes as focus as possible.
  - Make separate pull request if multiple changes are independent of each other.
  - Don't make unnecessary changes to the project
  - Do not request for same changes. We will review your request so not need for requesting multiple times.
  - Please write `good commit messages`. It should reflect what changes have been made by you.

  <br/>

  Work in progress pull requests are also acceptable. If you are stuck any where feel free to contact us.

  ## Git and GitHub
  It is required to know differece between git and github. Git is `Version Control System` `(VCS)` which is helpful to store the history of source code. GitHub is the `hosting service` for git projects.

  We are hoping that you have an account on GitHub and also initialized Git on your system.

  Please run following command in git bash terminal.
  ```terminal
  $ git config --global user.name "YOUR NAME"
  $ git config --global user.email "YOUR EMAIL ADDRESS"
  ```

  This is an important step to mark your commits to your name and email.

  ### Fork a Project
  You can find the project on which you can work at https://github.com/explore as per your skill and interest. Once you are conviced with project to work then you can make the copy of that project in your github account. This process is called as forking the repository. On the top right side of project, you can see option for fork.
  
  <p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>

  You can click on fork button to create a separate copy of project for you to work on.

  <br/>
  
  ### Find Issue or Bug to work on
  In open source project, there will be some issue or problems on which you can contribute your work. You can see issue section to find something you can solve or report bug in project. The project managers always welcome new contributors and can guide you to solve the problem. You can find issues in the right section of project page

  <p align="center">  <img  src="https://i.imgur.com/czVjpS7.png">  </p>

  ### Clone the Forked Project
  To work on open source project, You need to fork that project on your github account. After that for working on it, you can clone this project to your local machine or development machine using Git. For that you need to use git command of clone.

  ```teminal
  git clone https://github.com/<your_username>/<project_name>.git
  ```

  Now you will have project ready on your local machine.

  <br/>

  ### Add Remote location to original Repository
  Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

  ```terminal
  cd <project-name>
  git remote add upstream https://github.com/<author-account-username>/<project-name>.git
  ```
  There will be benifits of adding remote upstream later.

  ### Synchronizing your Fork
  Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.
  ```terminal
  $ git checkout master
  $ git fetch upstream
  $ git merge upstream/master
  $ git push origin master
  ```
  The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

  ### Create your own branch
  Normally, all repositories have a master branch which is considered to remain stable and all new features should be made in a separate branch and after completion merged into master branch. So we should create a new branch for our feature or bugfix and start working on the issue. You can create branch with appropriate name.
  ```terminal
  git checkout -b <branch-name>
  ```
  This will create a new branch out of master branch. Now start working on the problem and commit your changes.
  You can add your changes, commit them with proper message.
  ```terminal
  git add .
  git commit -m "<commit-message>"
  ```
  You can use one command instead of both like `git commit -a -m "<commit-message>"`.

  Commit message should be proper formatted. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br/>

  ### Rebase your Feature Branch with Upstream
  It can happen that your feature takes time to complete and other contributors are constantly pushing code. After completing the feature your feature branch should be rebase on latest changes to upstream master branch.

  ```terminal
  $ git checkout <branch-name>
  $ git pull --rebase upstream master
  ```

  Now you get the latest commits from other contributors and check that your commits are compatible with the new commits. If there are any conflicts solve them.

  <br/>

  ### Squashing your Commits
  
  You have completed the feature, but you have made a number of commits which make less sense. You should squash your commits to make good commits.
  
  `git rebase -i HEAD~5`

  This will open an editor which will allow you to squash the commits.

  <br/>

  ### Push Code and Create a PR
  Till this point you have a new branch with the feature or bugfix you want in the project you had forked. Now push your new branch to your remote fork on github.
  ```terminal
  git push origin <branch-name>
  ```

  Now you are ready to help the project by opening a pull request means you now can tell the project managers to add the feature or bugfix to original repository. You can open a pull request by clicking on green icon -

  <p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

  Remember your upstream base branch should be master and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

  `Awesome😍! You have made your first contribution 🎉🎉`
  
  If you have any doubts please let me know in the comments. 

  Be Open!!!


  ## Code of Conduct
  Check the code of conduct [here](https://github.com/vivek201102/resume-builder).
  
