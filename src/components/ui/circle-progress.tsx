'use client'
import React, { useEffect, useState } from 'react'

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  textColor?: string
  duration?: number // Animation duration in milliseconds
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 8,
  textColor = 'text-gray-800',
  duration = 1000, // Default 1 second animation
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0)

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (currentPercentage / 100) * circumference

  useEffect(() => {
    // Reset to 0 when percentage changes
    setCurrentPercentage(0)

    // Animate from 0 to target percentage
    const startTime = Date.now()
    const animateProgress = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCurrentPercentage(Math.round(progress * percentage))

      if (progress < 1) {
        requestAnimationFrame(animateProgress)
      }
    }

    requestAnimationFrame(animateProgress)
  }, [percentage, duration])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className="text-primary-default transition-all duration-300 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xl font-semibold ${textColor}`}>
          {currentPercentage}%
        </span>
      </div>
    </div>
  )
}

export default CircularProgress
