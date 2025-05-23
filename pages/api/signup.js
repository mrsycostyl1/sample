import { saveUser } from '../../lib/users';
export default async function handler(req, res) {
  const { username, password } = req.body;
  // Hash password & store user
}
