import ChooseTour from '../components/chooseTour'
import Header from '../components/Header'
import PopularTour from '../components/PopularTour'
import TopTrending from '../components/TopTrending'
import Footer from '../components/Footer'
import imgHero from '../assets/headhero.jpg'



function Homepage() {
  return (
    <div>
      <Header image={imgHero} title="Explore the World with Us" />      
      <ChooseTour />
      <PopularTour />
      <TopTrending />
      <Footer />
      

    </div>
  )
}

export default Homepage