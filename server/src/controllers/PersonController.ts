import { Request, Response } from 'express'
import * as fs from 'fs'
import Person from '../schemas/Person'

interface MulterRequest extends Request {
  file?: any;
}

class PersonController {
  public async index (req: Request, res: Response): Promise<Response> {
    const page = parseInt(req.query.page as string); 
    const searchField = req.query.name as string; 
    const limit = 10
    const persons = await Person.find( searchField ? {name: {$regex: searchField, $options: '$i'}} : {}).limit(limit).skip((page -1 ) * limit)
    return res.json(persons)

  }

  public async store (req: MulterRequest , res: Response): Promise<Response> {
    const { name, email } = req.body
    const person = await Person.create({
        name,
        email,
        pictureUrl: req.file.filename,
    })

    return res.json(person)
  }

  public async update (req: MulterRequest, res: Response): Promise<Response> {

      const { id } = req.params
      const person = await Person.findById(id)
      const updateOps = {
        pictureUrl: person.pictureUrl
      };
      for (const key of Object.keys(req.body)) {
        updateOps[key] = req.body[key]
      }
      if (req.file) {
          updateOps.pictureUrl = req.file.filename
          try {
              fs.unlinkSync('./uploads/' + person.pictureUrl)
          } catch (error) {
              console.log(error)
          }
      }

      console.log(updateOps)

      await Person.findByIdAndUpdate(id, { $set: updateOps })
      return res.json({})
  }

  public async delete (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        await Person.findByIdAndRemove(id).exec().then((data) => {
            try {
                fs.unlinkSync('./uploads/' + data.pictureUrl)
            } catch (error) {
                return res.json(error)
            }
        }).catch((error) => {
            return res.json(error)
        })
        return res.json({message: 'Person deleted successfully!'})
  } 
}

export default new PersonController()
