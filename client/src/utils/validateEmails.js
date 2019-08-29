const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default emails => {
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length && invalidEmails[0]) {
    return `These emails are invalids: ${invalidEmails}`;
  }

  return;
};
