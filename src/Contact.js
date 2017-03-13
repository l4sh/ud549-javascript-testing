function Contact(name) {

  if (!name) {
    throw new Error('A contact name must be specified');
  }

  this.name = name;
  this.phoneNumbers = [];
}

Contact.prototype.addPhoneNumber = function(phoneNumber) {
  this.phoneNumbers.push(phoneNumber);
};

Contact.prototype.getPhoneNumber = function() {
  return this.phoneNumbers[0];
};
