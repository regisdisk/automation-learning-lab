function checkEmails() {

  var threads = GmailApp.search(
    'from:regisdisk@gmail.com OR from:@state.gov OR from:@usavisa-info.com is:unread'
  );

  if (threads.length === 0) {
    Logger.log("No matching unread emails.");
    return;
  }

  var url = "http://134...19:5678/webhook/email-router";

  threads.forEach(function(thread) {

    try {

      var message =
        thread.getMessages()[0];

      var payload = {
        from: message.getFrom(),
        subject: message.getSubject(),
        threadId: thread.getId(),
        receivedAt: new Date().toISOString()
      };

      var options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      };

      var response = UrlFetchApp.fetch(url, options);

      var status = response.getResponseCode();

      var body = response.getContentText();

      Logger.log(
        "POST Result → " +
        status +
        " | " +
        body
      );

      if (status === 200) {

        thread.markRead();

        Logger.log(
          "Email processed and marked as read: " +
          payload.subject
        );

      } else {

        Logger.log(
          "Email kept unread (HTTP " +
          status +
          ")"
        );

      }

    } catch (error) {

      Logger.log(
        "Processing failed: " +
        error.toString()
      );

    }

  });

}