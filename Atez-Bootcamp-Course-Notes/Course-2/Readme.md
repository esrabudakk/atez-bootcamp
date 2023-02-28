
**BRANCH:**

`git branch` *That is used to manage branches in a Git repository. By creating a branch, you can diverge from the main line of development and work on new features or fixes without affecting the main codebase.*

* **git branch**  --> List all the branches in the repository.
* **git branch <branch_name>**  --> Create a new branch
* **git branch -d <branch_name>**  --> Delete a branch
* **git branch -m <old_branch_name> <new_branch_name>**  --> Rename a branch
* **git log <branch_name>**  -->  View the commit history of a branch

**CHECKOUT:**

**`git checkout`** *That is used to switch between different branches or commits in a Git repository. Git updates your working directory to match the contents of the specified branch or commit. This means that the files in your working directory will be replaced with the contents of the branch or commit that you have checked out.*

* **git checkout  <branch_name> or git switch <branch_name>**  --> Switch to a different branch
* **git checkout -b <branch_name> or git switch -c <branch_name>**  --> Create and switch to a new branch at the same time
* **git checkout <commit_hash>**  --> Detach HEAD from the current branch and check out a specific commit
* **git checkout -- <file_name>** --> Discard changes in a file in the working directory
* **git checkout .**  --> Discard changes in all files in the working directory

**STASH:**

`git stash` *That is used to temporarily save changes in your working directory that are not ready to be committed.Sometimes, when working on a project, you may need to switch to a different branch or commit to work on a different task, but you have made changes to the current working directory that you don't want to commit yet.*
E
**Other Common Commands:**
* **git push --set origin feature/B1**
* **git merge bug/B1**
* **git log**
* **git reset --hard**
* **git diff** 
