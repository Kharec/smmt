/**
 * Lists tasks titles and send a list by email every sunday at 23pm.
 */

function sendMeMyTasks() {

    // Here's a little hack to get all your tasklist's ids.
    // Comment the rest of the code and uncomment this following lines, run it and open the App Script console. There it is : your tasklist's ids.
    // var taskLists = Tasks.Tasklists.list();
    // if (taskLists.items) {
    //   for (var i = 0; i < taskLists.items.length; i++) {
    //     var taskList = taskLists.items[i];
    //     Logger.log('Task list with title "%s" and ID "%s" was found.',
    //                taskList.title, taskList.id);
    //   }
    // } 

    // the task list id, change it and choose it carefully !
    var taskListId = "" ; 
    
    // get the tasks from the list we previously selected
    var myTasks = Tasks.Tasks.list(taskListId);
    
    // setup a string to contain our tasks
    var taskList = "";
    
    // build our string with all our tasks
    if (myTasks.items) {
      for (var i = 0; i < myTasks.items.length; i++) {
         taskList += myTasks.items[i].title + "\n";
      }
    }
  
    // setup mail and subject
    var recipient = "cazzaniga.sandro@gmail.com";
    var subject = "TODO";
    
    // send tasks list  
    GmailApp.sendEmail(recipient, subject, taskList);
  
}