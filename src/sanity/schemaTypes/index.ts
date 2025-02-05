import { type SchemaTypeDefinition } from 'sanity'
import {product} from './product'
import {contactform} from "./contactform"
import order from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,contactform,order],
}
