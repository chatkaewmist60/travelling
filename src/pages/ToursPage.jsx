import FeaturedTrips from '../components/FeaturedTrips'
import Header from '../components/Header'
import SpecialOffers from '../components/SpecialOffers'
import Untitled1 from '../assets/images/cartour.jpg'


function ToursPage() {
  return (

    <div>
      <Header image={Untitled1} />
      <FeaturedTrips />
      <SpecialOffers />
    </div>
  )
}

export default ToursPage 