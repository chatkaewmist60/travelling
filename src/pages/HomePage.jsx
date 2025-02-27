import ChooseTour from '../components/chooseTour'
import Header from '../components/Header'
import PopularTour from '../components/PopularTour'
import TopTrending from '../components/TopTrending'
import Footer from '../components/Footer'



function Homepage() {
  return (
    <div>
      <Header />
      <ChooseTour />
      <PopularTour />
      <TopTrending />
      <Footer />

    </div>
  )
}

export default Homepage