export type HeaderData = {
  logo: string
  menuLinks: {
    label: string
    link: string
    hideChildren: boolean | undefined
    children:
      | {
          label: string
          link: string
          hide: boolean
        }[]
      | undefined
  }[]
}

export type InfoData = {
  email: string
  address: string
  phoneNumberDisplay: string
  phoneNumber: string
  logo: string
  workingDays: string
  startTime: string
  endTime: string
  mapUrl: string
  facebookLink: string
  twitterLink: string
  printerestLink: string
}
export type HeroSlide = {
  background: string
  tag: string
  title: string
  description: string
  btnLink: string
  btnText: string
  id: string | number
}
export type HeroData = {
  slides: HeroSlide[]
}

export type AboutData = {
  imgLarge: string
  img: string
  avatarCeo: string
  title: string
  description: string
  circleBars: {
    title: string
    percent: number
  }[]
  aboutList: string[]
}

export type TestimonialData = {
  title: string
  heading: string
  users: UserComment[]
}
export type UserComment = {
  id: number | string
  name: string
  job: string
  text: string
  date: string | Date
  avatar: string
}
export type SheetData = {
  sheetId: string
  sheetName: string
  range: string
}
