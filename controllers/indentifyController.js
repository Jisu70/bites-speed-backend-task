
// Dependencies
const { Sequelize } = require('sequelize')
// Impoting model 
const Contact = require('../model/contactModel')

const identifyUser = async(req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    console.log(email)
    console.log(phoneNumber)

    // i used to check here if the given email or phone exist or not
    const existingContact = await Contact.findOne({
      where: {
        [Sequelize.Op.or]: [
          { email },
          { phoneNumber },
        ],
      },
    });

    if (existingContact) {

      // Here i checke if the existing contact is primary or not,  if it is primary we are creating the new contact linkPrecedence value to secundery
      const linkPrecedence = existingContact.linkPrecedence === 'primary' ? 'secondary' : 'primary';
      const linkedId = existingContact.linkPrecedence === 'primary' ? existingContact.id : existingContact.linkedId;

      const newContact = await Contact.create({
        phoneNumber,
        email,
        linkPrecedence, // ------> here i change the value of linkPrecedence
        linkedId //  ----------> Existing id
      });

      // Sending the response with consolidated information   
      return res.status(200).json({
        contact: {
          primaryContatctId: existingContact.linkPrecedence === 'primary' ? existingContact.id : existingContact.linkedId,
          emails: [existingContact.email, newContact.email], // ---------> Both primary and secondary email also send with response
          phoneNumbers: [existingContact.phoneNumber, newContact.phoneNumber], 
          secondaryContactIds: [newContact.id],
        },
      });
    } else {
      // if above condition was not followed then it was creating new contact with the information 
      const newContact = await Contact.create({
        phoneNumber,
        email,
      });

      // Sending  the response of newly created contact
      return res.status(200).json({
        contact: {
          primaryContatctId: newContact.id,
          emails: [newContact.email],
          phoneNumbers: [newContact.phoneNumber],
          secondaryContactIds: [],
        },
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = identifyUser ;