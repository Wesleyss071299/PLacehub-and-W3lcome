import { Schema, model, Document  } from 'mongoose'

interface PersonInterface extends Document {
    name: string
    email: string
    pictureUrl: string
}

const PersonSchema = new Schema({
  name: String,
  email: String,
  pictureUrl: String,
}, {
  timestamps: true
})

export default model<PersonInterface>('Person', PersonSchema)
