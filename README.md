# ARG-Website

## Rules
	If you want to make a change in website please.

	First, commit to your own branch with name "devel-(fullname)" and new a pull request. 
	Second, Tag Eric Lu in Slack or contact him for approving your pull request.

### How to create a new branch
	laptop$ git checkout -b "devel-(fullname)"
	laptop$ git branch
	(When first git push)
	laptop$ git push --set-upstream origin devel-(fullname)

	It will show your current branch.
	Make sure your change your code in your branch every time.

### What's the responsibility of a reviewer?
	We will assign reviewer(s) for each pull request.
	The reviewer should:
	* read the diff of what files are changed
	* git checkout devel-xxxxx # switch to the branch you are reviewing
	* open the html file in browser and make sure they are ok, this will apply to code review that you need to make sure the code could compile
	* approve the pull request

 
