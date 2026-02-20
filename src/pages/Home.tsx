import { ChannelGrid } from '@/components/layout/CanaleGrid'
import { BottomBar } from '@/components/layout/BottomBar'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <div className="home__grid-wrapper">
        <ChannelGrid />
      </div>
      <BottomBar />
    </div>
  )
}
