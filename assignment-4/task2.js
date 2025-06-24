function sendNotification(email) {
    if (typeof email !== "string" || email.indexOf("@") === -1 || email.split("@").length !== 2) {
        return "Invalid Email";
    }

    let parts = email.split("@");
    let username = parts[0];
    let domain = parts[1];
    return `${username} sent you an email from ${domain}`;
}
