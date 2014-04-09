---
title: Search for "todo" to receive a great awakening
layout: post
---

At work, i'm in the process of [systematizing my project's javascript code](http://flightjs.github.io) so that it will be easier for my co-workers, whenever they bother to read it, and i to understand all the different parts and pieces that make things happen. To do this i'm starting to package together lots of libraries via [bower](http://bower.io).

While working on this stuff, i decided to put in a few `TODO` items to come back to later. After a couple hours, i decided i would check up on my todos just to make sure i didn't have that many of them. So i ran quick search to see what i'd get:

**Q**: What did i get back?

**A**: A large wall of text

:astonished:

First, i'd like to say that i stand on the shoulders of giants. Also, those giants' todo items *are (most likely) not* bugs AND considering the amount of javascript in the `node_modules` folder, there aren't *that* many todos.

That said, it's a stark reminder that i'm building on top of a large amount of stuff piled together, *all of it in various stages of process*. It's a good reminder that i have a lot of work to do and that there's a lot of great projects that might appreciate some help.

---

## PS

Here's my quick search method. Searching in windows explorer is just as good.

```powershell
ls -Recurse -Path *.js | Get-Content | Select-String -pattern 'todo'
```

(Don't judge, i work at a Windows shop. Even though the command line shell itself is (imho) garbage, Powershell is actually quite nice *once you learn it*.)

