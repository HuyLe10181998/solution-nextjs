import { getAbout } from '@/actions/home.action'
import AboutForm from '@/components/AboutForm'

async function AboutConfig() {
  const data = await getAbout()

  if (!data) {
    return null
  }

  return (
    <div>
      <AboutForm aboutForm={data} />
    </div>
  )
}

export default AboutConfig
