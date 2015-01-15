---
layout: post
title: "A tough reality confronted when programming"
date: "2015-01-15"
---

Yesterday i spent almost the entire day debugging an issue in TopView where there was some inefficient looping. The issue was caused by my (and Dane's) misunderstanding of when `ListView`s fire their `ItemChecked` events. Hint: it's not when you'd think :wink:.

The rub is that i spent most of the day on learning some very arcane knowledge about Windows Forms. i assume that eventually Windows Forms support will end and we'll have to transition to WPF and my arcane knowledge will be mostly useless.

i know i've learned a lot of transferable knowledge while debugging this issue, but it's sad to have so much knowledge about something that will pass away and be forgotten (and it probably *should* be forgotten).

Programming is exciting and fun for me, but sometimes, this is what it's like.
