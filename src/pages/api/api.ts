import type { NextApiRequest, NextApiResponse } from 'next'
import cars from './cars.json'

interface dataProps {
  brand: string
  model: string
  pricePerDay: number
  pricePerKm: number
  availability: { maxDuration: number; maxDistance: number }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<dataProps[]>
) {
  let availableCars = cars.map((car, i) => {
    const id = i + 1
    return { id, picturePath: `/pictures/${id}.jpg`, ...car }
  })

  if (req.query.duration) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.duration as string, 10) <= availability.maxDuration
    )
  }

  if (req.query.distance) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.distance as string, 10) <= availability.maxDistance
    )
  }

  res.status(200).json(availableCars)
}
