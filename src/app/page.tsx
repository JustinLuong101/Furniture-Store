/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QBTF5RQFICf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, CardTitle, CardDescription, CardFooter, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import React from 'react';
import Logo from './logo.svg'; // Import your .svg logo file







export default function Component() {
  return (
    <div className="divide-y">

      <div className="container grid max-w-5xl gap-6 pb-12 prose lg:gap-8 lg:pb-24">
      <div className="flex items-center">
            <img
              alt="Logo"
              className="mr-2"
              height="100"
              src="/logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">American Home Furnishings</h1>
    </div>
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-4xl lg:text-5xl">Home Collection</h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Bedroom Collection"
                className="object-cover"
                height="200"
                src="/bedroom.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Bedroom Collection</CardTitle>
                <CardDescription>Timeless designs for your bedroom</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Dining Collection"
                className="object-cover"
                height="200"
                src="/diner.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Dining Collection</CardTitle>
                <CardDescription>Elegant dining sets for your family</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Seating Stationary Collection"
                className="object-cover"
                height="200"
                src="/stationary-seating.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Seating Stationary Collection</CardTitle>
                <CardDescription>Comfortable seating for your living room</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Seating Motion Collection"
                className="object-cover"
                height="200"
                src="/seating-motion.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Seating Motion Collection</CardTitle>
                <CardDescription>Reclining options for ultimate relaxation</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Youth Collection"
                className="object-cover"
                height="200"
                src="/youth-collection.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Youth Collection</CardTitle>
                <CardDescription>Fun and functional furniture for kids</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Home Collection"
                className="object-cover"
                height="200"
                src="/homecollection.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Home Collection</CardTitle>
                <CardDescription>Stylish decor to enhance your home</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Occasional Collection"
                className="object-cover"
                height="200"
                src="/occasional-collection.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Occasional Collection</CardTitle>
                <CardDescription>Accent pieces to complement your space</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Mattress Collection"
                className="object-cover"
                height="200"
                src="/mattress-collection.png"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Mattress Collection</CardTitle>
                <CardDescription>Sleep essentials for a restful night</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-4xl lg:text-5xl">Style Collection</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Rustic"
                className="object-cover"
                height="200"
                src="/rustic.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Rustic</CardTitle>
                <CardDescription>Embrace the warmth of natural materials</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Modern & Contemporary"
                className="object-cover"
                height="200"
                src="/modern.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Modern & Contemporary</CardTitle>
                <CardDescription>Sleek designs for urban living</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Mid-Century Modern"
                className="object-cover"
                height="200"
                src="/midcentury.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Mid-Century Modern</CardTitle>
                <CardDescription>Iconic retro-inspired furniture</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Traditional"
                className="object-cover"
                height="200"
                src="/traditional.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Traditional</CardTitle>
                <CardDescription>Timeless and elegant classic pieces</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Transitional"
                className="object-cover"
                height="200"
                src="/transitional.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Transitional</CardTitle>
                <CardDescription>Blending contemporary and traditional styles</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Country & Farmhouse"
                className="object-cover"
                height="200"
                src="/country.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Country & Farmhouse</CardTitle>
                <CardDescription>Rustic and charming countryside decor</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10 rounded-lg overflow-hidden focus:outline-none" href="#" />
            <CardContent className="flex aspect-video items-center overflow-hidden rounded-t-lg">
              <img
                alt="Glam"
                className="object-cover"
                height="200"
                src="/glam.jpeg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle>Glam</CardTitle>
                <CardDescription>Luxurious and opulent style statement</CardDescription>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
