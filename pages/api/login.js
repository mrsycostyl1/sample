import { findUser } from '../../lib/users';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {
  const { username, password } = req.body;
  // Check user credentials, return token
}
