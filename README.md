# smmt

This repository is the home of a simple [Google Apps script](https://developers.google.com/apps-script) that sends you your Google Task todo list by mail, periodically.

## Requirements

You need an account at our friends Google, a task list in Google Task, and a Gmail account, which comes obviously with your Google account.

## Setup

You'll have to start a new Apps Script project in [Google Script](https://script.google.com/) tool. Name it, then add a main file in it : Code.gs. Copy the code in it, and finally save it.

You'll have to get the task list id of which you want to be reminded. Change the value of the variable `taskListId`, and uncomment it.

Setup the variables `recipient` and `subject`, which are the... Well, the email address where you want to receive the reminder and the subject of the mail our script will send.

You can run it once manually to test it. You will have to allow the application to read your tasks and send email throught your gmail account.

Finally, set up a trigger in the project, with the "Trigger for the current project" menu.

![](https://i.imgur.com/h9Lu2sF.png)

Choose : 
* The function (which is `sendMeMyTasks` if you didn't change it)
* The deployment to use (which is `Head`)
* The source of the event (which is `Hourly trigger`)
* The frequency (weekly, daily, monthly ...), in my case it's `weekly`
* The day of the week
* Finally, the hour of the day you want to receive your email

Save this trigger.

You're all setup !

## Licence & Copyright
This software is copyright (c) 2020 by Sandro CAZZANIGA.

This is free software, you can use/redistribute it and/or modify it under the GNU GPLv3 terms.
