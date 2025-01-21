import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import contactform from "./contactform"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,contactform],
}
