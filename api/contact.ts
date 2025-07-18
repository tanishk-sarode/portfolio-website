import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // In a real application, you would send an email or save the data to a database.
    // For this example, we'll just log the data and send a success response.
    console.log('Received contact form submission:');
    console.log({ name, email, message });

    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};