import multer, { Options } from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename (request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex')

      const fileName = `${hash}-${file.originalname}`

      callback(null, fileName)
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  }
} as Options

export interface MulterFile {
  filename: string
}
