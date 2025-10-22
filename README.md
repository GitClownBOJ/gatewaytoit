# Dev branch

This branch is used to test the code before merging it to main (production).

## Branching

For each feature we will work on we create a seperate branch with

```bash
git checkout -b <branch Name>
```

and when tested and finished we will merge it via Pull requests and someone else should review the code if possible. Difficult in a 2 people project maybe.

**PRs are always merged into develop**

and if it all works fine with the other code then we can merge it to main (production)

We will setup some workflows with checks to prevent the worst :smile:
