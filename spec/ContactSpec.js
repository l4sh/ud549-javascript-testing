describe('Contact creation', function() {

  it('should have a name', function() {
    var thisName = 'John';
    var contact = new Contact(thisName);

    expect(contact.name).toBe(thisName);
  });

  it('should throw error if created without a name', function() {
    expect(function() {
      new Contact();
    }).toThrow(
      new Error('A contact name must be specified'));
  });

});

describe('Contact', function() {

  var contact;

  beforeEach(function() {
    var name = 'John Smith';

    contact = new Contact(name);
  });

  it('should allow to add a phone number', function() {
    var thisNumber = '+11235555555';
    contact.addPhoneNumber(thisNumber);

    expect(contact.phoneNumbers[0]).toBe(thisNumber);
  });

  it('should return the contact\'s main phone number', function() {
    var thisNumber = '+11235555555';
    contact.addPhoneNumber(thisNumber);

    expect(contact.getPhoneNumber()).toBe(thisNumber);
  });

  it('should allow to add multiple phone numbers', function() {

    var thisNumbers = [
      '+11235555555',
      '+11235555556',
      '+11235555557'];

    // Add phone numbers
    for(var i=0 in thisNumbers) {
      contact.addPhoneNumber(thisNumbers[i]);
    }

    // Check phone numbers
    expect(
      JSON.stringify(
        thisNumbers.sort()
      ) === JSON.stringify(
        contact.phoneNumbers.sort())).toBe(true);


  });
});
