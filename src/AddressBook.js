/**
 * Address Book constructor
 */
function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}


/**
 * Get initial contacts faking asynchronicity
 */
AddressBook.prototype.getInitialContacts = function(callback) {
  var self = this;

  // Random time from 0 to 1000 ms
  var time = Math.round(Math.random() * 1000);

  setTimeout(function() {
    self.initialComplete = true;

    if (callback && (typeof(callback) === 'function')) {
      return callback();
    }
  }, 3);

};


/**
 * Add new contact to address book
 */
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};


/**
 * Get specified contact
 */
AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};


/**
 * Delete specified contact by index
 */
AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
};
