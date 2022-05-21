import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from '../../../lib/users';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const users = await getUsers(); 
  
    return res.status(200).json({
      data: users
    }) 
  } else if (method === "POST") {
    const { name } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
      }
    })

    return res.status(201).json({
      data: user,
    })
  }

  return res.status(404).json({ message: 'Route not found' })  
}
