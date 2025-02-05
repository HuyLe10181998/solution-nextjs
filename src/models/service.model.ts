export type ServiceData = {
  title: string
  heading: string
  services: ServiceItem[]
}
export type ServiceItem = {
  id: number | string
  title: string
  description: string
  image: string
  link: string
}
