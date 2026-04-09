"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import confetti from "canvas-confetti"
import React from "react"
import Typography from "../Typography"
import Button from "../ui/button"

import { handleRedirect } from "../hero/hero-buttons"
import Link from "next/link"

export default function Treasure() {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (answer: string) => {
    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      } else {
        alert("Tam olarak doğru değil. Denemeye devam et, çok yaklaştın!")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Bir şeyler ters gitti. Lütfen tekrar dene.")
    }
  }

  useEffect(() => {
    const answer = prompt("Cevabını gir:")
    if (answer) {
      handleSubmit(answer)
    }
  }, [])

  if (!isSuccess) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Typography.H2 className="text-center font-wc-rough-trad text-2xl sm:text-3xl font-bold text-[#150BDE]">
            Cevabın doğrulanıyor...
          </Typography.H2>
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <Typography.H1 className="mb-6 sm:mb-8 lg:mb-10 font-wc-rough-trad text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#150BDE] max-w-[90vw] sm:max-w-[80vw] md:max-w-3xl">
            <span className="block sm:inline">Tebrikler</span>{" "}
            <span className="block sm:inline">Kaşif!</span>
          </Typography.H1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto w-full max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6"
          >
            <Typography.P className="text-base sm:text-lg md:text-xl text-gray-700 whitespace-pre-line">
              Yıldızlar yol gösterdi, ipuçları seni buraya getirdi. Şimdi perde
              arkasındaki gerçeği görmeye hazırsın.
            </Typography.P>

            <Typography.P className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg md:text-xl text-gray-700">
              Yolculuk şimdi başlıyor. Topluluğa katıl, daha fazlasını birlikte
              keşfet!
            </Typography.P>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <Button
                className={
                  "h-20 xlg:h-14 my-auto lg:flex flex-row items-center justify-center gap-2 hidden"
                }
                onClick={() => handleRedirect("discord")}
              >
                <Typography.P className="text-white text-lg font-semibold text-center mb-0 ">
                  Discord Topluluğuna Katıl
                </Typography.P>
              </Button>
              <Link href={"/"}>
                <Button
                  className={
                    "h-20 xlg:h-14 my-auto lg:flex flex-row items-center justify-center gap-2 hidden"
                  }
                >
                  <Typography.P className="text-white text-lg font-semibold text-center mb-0 ">
                    Ana Sayfaya Dön
                  </Typography.P>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
