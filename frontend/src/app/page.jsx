import ProductList from '@/components/base/ProductList'
import Navbar from '../components/base/Navbar'
import Footer from '@/components/base/Footer'
import Carousel from '@/components/base/Caraousel'

const Home = () => {
  return (
    <>
    <Navbar />
    <Carousel />
    <div className="h-5"></div>
    <ProductList />
    <Footer />
    </>
  )
}

export default Home
