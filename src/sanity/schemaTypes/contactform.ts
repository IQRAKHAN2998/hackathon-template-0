// schemas/contact.js
import {Rule} from "@sanity/types"

export default {
    name: 'contactform', // Name of the schema
    title: 'Contact', // Title for the schema
    type: 'document', // Type of the schema is document
    fields: [
      {
        name: 'firstName', // Field name
        title: 'firstName', // Display title in the Sanity Studio
        type: 'string', // Data type for this field
        validation: (Rule: Rule) => Rule.required().min(1).max(50), // Validation: required and length constraints
      },
      {
        name: 'email', // Field name
        title: 'Email', // Display title
        type: 'string', // Data type
        validation: (Rule: Rule)=> Rule.required().email(), // Validation: required and valid email format
      },
      {
        name: 'subject', // Field name
        title: 'Subject', // Display title
        type: 'string', // Data type
        validation: (Rule: Rule)=> Rule.optional().min(5).max(100), // Validation: required and length constraints
      },
      {
        name: 'message', // Field name
        title: 'Message', // Display title
        type: 'text', // Type is text for longer messages
        validation: (Rule: Rule) => Rule.required().min(10).max(1000), // Validation: required and length constraints
      },
    ],
  };
  