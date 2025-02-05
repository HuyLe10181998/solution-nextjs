import React from 'react'

export default function Loading() {
  return (
    <div id="preloader" className="preloader bg-white">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
          <span data-text-preloader="K" className="letters-loading">
            K
          </span>
          <span data-text-preloader="Y" className="letters-loading">
            Y
          </span>
          <span data-text-preloader="S" className="letters-loading ml-4">
            S
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="L" className="letters-loading">
            L
          </span>
          <span data-text-preloader="U" className="letters-loading">
            U
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
    </div>
  )
}
