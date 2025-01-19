'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react'
import Image from 'next/image'

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGiftRevealed, setIsRevealed] = useState(false)

  return (
    <div className="w-full max-w-2xl aspect-[8/15] relative m-2">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={false}
        animate={
          isOpen
            ? { rotateY: 180, transition: { duration: 0.5 } }
            : { rotateY: 0 }
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute inset-0 h-full flex items-center justify-center text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            Happy 40th Birthday, Scott!
          </h1>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-white border-4 border-black p-1 flex flex-col justify-between h-full"
        initial={false}
        animate={
          isOpen
            ? { rotateY: 0, transition: { duration: 0.5 } }
            : { rotateY: -180 }
        }
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold">Hey Scott,</h2>
          <p className="text-lg leading-relaxed">
            Thanks for all the awesome adventures and memories we've had. It's been an amazing few months already!
          </p>
          <p className="text-lg leading-relaxed">
            To celebrate your milestone, here's a gift for you! Tap the gift box below to check it out.
          </p>
          <GiftReveal
            isRevealed={isGiftRevealed}
            setIsRevealed={setIsRevealed}
          />
          <p className="text-lg font-bold">
            Cheers,
            <br />
            Jonathan
          </p>
        </div>
      </motion.div>
    </div>
  );
}

interface GiftRevealProps {
  isRevealed: boolean
  setIsRevealed: (value: boolean) => void
}

function GiftReveal({ isRevealed, setIsRevealed }: GiftRevealProps) {
  return (
    <div
      className="relative aspect-square cursor-pointer rounded-lg overflow-hidden"
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <motion.div
        className="absolute inset-0 bg-[#fdd888] flex items-center justify-center rounded-xl"
        initial={false}
        animate={
          isRevealed
            ? { rotateY: 180, transition: { duration: 0.5 } }
            : { rotateY: 0 }
        }
      >
        {/* Gift box design */}
        <div className="relative w-full h-full">
          {/* Vertical ribbon */}
          <div className="absolute left-1/2 top-0 bottom-0 w-10 -ml-5 bg-[#da2f47]" />
          {/* Horizontal ribbon */}
          <div className="absolute top-1/2 left-0 right-0 h-10 -mt-5 bg-[#da2f47]" />
          {/* Bow */}
          <div className="absolute left-1/2 top-1/2 -ml-10 -mt-10 w-20 h-20 bg-[#da2f47] rounded-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4">
            Tap to Reveal Your Gift!
          </span>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-white border-4 border-black overflow-hidden"
        initial={false}
        animate={
          isRevealed
            ? { rotateY: 0, transition: { duration: 0.5 } }
            : { rotateY: -180 }
        }
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="h-full flex flex-col">
          <div className="h-1/2 relative">
            <Image
              src="https://www.livenationentertainment.com/wp-content/uploads/2024/04/TR_NationalAsset_BrianRegan_SG_1200x630.jpg"
              alt="Brian Regan Comedy Show"
              className="object-cover"
              sizes="100vw"
              fill
              priority
            />
          </div>
          <div className="h-1/2 p-4 flex flex-col justify-between bg-gradient-to-b from-zinc-50 to-zinc-100">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Your Gift:</h3>
              <p className="text-lg font-semibold">
                2 Tickets to Brian Regan Live
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>February 1st, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Paramount Theater</span>
                </div>
                <div className="flex items-center gap-1">
                  <Ticket className="w-4 h-4" />
                  <span>2 Tickets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

